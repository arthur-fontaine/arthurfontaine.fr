---
title: "A fresh git worktree should not reinstall node_modules"
description: "How I cut pnpm install from 44 to 13 seconds in new git worktrees by cloning node_modules from a sibling worktree, and the pnpm hook that does it today."
pubDate: 2026-08-21
tags: ["pnpm", "monorepo", "tooling"]
---

I work in git worktrees. One worktree per task, one per PR, one to try an idea. Every new worktree of the same repository starts with no `node_modules`, so pnpm installs the whole tree from scratch. On the monorepo at work, a large React Native workspace, that is 3,582 packages, 212,896 files, and 44 seconds of waiting. Meanwhile the worktree next door already holds exactly the same tree.

## Where the 44 seconds go

Before touching anything I measured a fresh install with the lockfile already up to date:

| step | time |
| --- | --- |
| reading the lockfile | 0.3s |
| store lookups | 4.5s |
| writing the tree | 35.6s |
| side-effects cache restore | 3.4s |

Resolution barely shows up, because there is nothing to resolve. A faster resolver would win back 0.3 seconds out of 44. The bill is the disk: writing 212,896 files and 41,000 directories. And it is not pnpm being slow at writing. Copying the finished tree with `cp -c -R` takes 77 seconds, so pnpm already beats the OS at materializing the same files. On APFS, creating 213k inodes is simply expensive, and it does not parallelize.

So the fix is not to write the files faster. It is to not write them at all.

## Clone the tree instead of writing it

Modern filesystems do copy-on-write. APFS on macOS exposes `clonefile(2)`, and when you call it on a directory, the whole hierarchy is cloned in one syscall. The two trees then share storage until one side writes, so neither worktree ever sees the other's later edits.

The idea: when an install finds no `node_modules`, look at the other worktrees of the same repository, pick one whose tree matches, and `clonefile` its `node_modules` into place. The clone brings `.modules.yaml` and the internal lockfile with it, so the install that follows reads it as its own previous state and reports "Already up to date".

On the same monorepo that takes the fresh install from 44 seconds to 13.4, of which 13.2 is the clone itself. I do not think the clone can go much lower: it is again the cost of creating 213k inodes. Per-file cloning is far slower, so the one-syscall directory clone is the whole trick.

## The donor gate

My first version could be slower than doing nothing. Cloning from a worktree that had drifted from its own lockfile cost 78 seconds instead of 44, because the install rebuilt everything behind the clone. Cloning and then rebuilding is the worst of both worlds.

So a worktree only qualifies as a donor if its `pnpm-lock.yaml`, `pnpm-workspace.yaml` and every project `package.json` are byte-identical to ours, and its tree already holds what its own lockfile asks for. Anything stale is skipped, and the feature cannot make an install slower.

One more wrinkle: the clone carries `node_modules/.pnpm-workspace-state-v1.json`, whose project entries are keyed by absolute paths under the donor. Those paths get repointed at the new worktree, and `lastValidatedTimestamp` is set to now, which is sound only because the gate already compared every input byte for byte.

## The recipe you can use today

pnpm can run all of this from a [pnpmfile](https://pnpm.io/pnpmfile). The important detail is which hook: `updateConfig` runs while pnpm is still loading its config, which is before the install decides whether `node_modules` is up to date. A tree seeded any later is ignored by that decision.

`.pnpmfile.cjs` at the workspace root:

```js
const { execFileSync } = require("node:child_process");
const path = require("node:path");

module.exports = {
  hooks: {
    updateConfig(config) {
      // No-op unless node_modules is missing, another worktree of this
      // repo has one, and its lockfile, workspace manifest and project
      // manifests all match ours. Needs APFS, git, jq and python3.
      try {
        execFileSync(
          "bash",
          [path.join(__dirname, "scripts/seed-node-modules.sh")],
          { stdio: "inherit" },
        );
      } catch {}
      return config;
    },
  },
};
```

`scripts/seed-node-modules.sh`:

```bash
#!/usr/bin/env bash
# Seed an empty node_modules by cloning one from another git worktree of
# this repository. Runs from the `updateConfig` pnpmfile hook, which is
# the last point before the install decides whether the tree is current.
set -uo pipefail

root=$(git rev-parse --show-toplevel 2>/dev/null) || exit 0
cd "$root" || exit 0
[ -e node_modules ] && exit 0
[ -f pnpm-lock.yaml ] || exit 0

log() { printf 'seed: %s\n' "$1" >&2; }
# Which candidate lost and why is debugging detail: every install would
# otherwise print one line per worktree of the repository.
reject() { [ -n "${SEED_DEBUG:-}" ] && printf 'seed: %s rejected, %s\n' "$1" "$2" >&2; return 0; }

# Snapshot keys of a lockfile's dependency graph, so a donor whose tree
# lags its own lockfile can be told apart from one that materialized it.
# A lockfile can hold several `snapshots:` blocks (pnpm's own engine
# packages get one, and those are never materialized into a project), and
# the dependency graph is always the last of them.
snapshot_keys() {
  awk '
    /^snapshots:/ { inblock = 1; count = 0; next }
    inblock && /^[^[:space:]]/ { inblock = 0 }
    inblock && /^  [^[:space:]].*:[[:space:]]*$/ {
      sub(/^  /, ""); sub(/:[[:space:]]*$/, ""); keys[++count] = $0
    }
    END { for (i = 1; i <= count; i++) print keys[i] }
  ' "$1" 2>/dev/null | sort
}

best="" best_at=0
while read -r candidate; do
  [ "$candidate" = "$root" ] && continue
  state="$candidate/node_modules/.pnpm-workspace-state-v1.json"
  [ -f "$candidate/node_modules/.modules.yaml" ] || { reject "$candidate" "no node_modules/.modules.yaml"; continue; }
  cmp -s "$candidate/pnpm-lock.yaml" pnpm-lock.yaml || { reject "$candidate" "its pnpm-lock.yaml differs"; continue; }
  cmp -s "$candidate/pnpm-workspace.yaml" pnpm-workspace.yaml || { reject "$candidate" "its pnpm-workspace.yaml differs"; continue; }
  [ -f "$state" ] || { reject "$candidate" "no workspace state"; continue; }
  [ "$(snapshot_keys "$candidate/pnpm-lock.yaml")" = "$(snapshot_keys "$candidate/node_modules/.pnpm/lock.yaml")" ] \
    || { reject "$candidate" "its tree does not hold what its lockfile asks for"; continue; }
  manifests_match=1
  while read -r project; do
    rel=${project#"$candidate"}
    rel=${rel#/}
    src="$candidate/${rel:+$rel/}package.json"
    dst="${rel:+$rel/}package.json"
    cmp -s "$src" "$dst" || { manifests_match=0; break; }
  done < <(jq -r '.projects | keys[]' "$state" 2>/dev/null)
  [ "$manifests_match" = 1 ] || { reject "$candidate" "a project manifest differs"; continue; }
  at=$(stat -f %m "$candidate/node_modules/.modules.yaml")
  if [ "$at" -gt "$best_at" ]; then best=$candidate; best_at=$at; fi
done < <(git worktree list --porcelain | awk '/^worktree /{print substr($0,10)}')

[ -n "$best" ] || { [ -n "${SEED_DEBUG:-}" ] && log "no worktree can seed this node_modules"; exit 0; }

start=$(date +%s)
# One clonefile(2) on the directory: the whole hierarchy is cloned in a
# single syscall, and copy-on-write keeps the two trees independent.
# Per-file copiers are far slower here (fcp 24s, cp -c 50s, against 9s).
python3 - "$best/node_modules" node_modules <<'CLONE' || { log "clone failed, removing the partial tree"; rm -rf node_modules; exit 0; }
import ctypes, os, sys

libc = ctypes.CDLL(None, use_errno=True)
libc.clonefile.argtypes = [ctypes.c_char_p, ctypes.c_char_p, ctypes.c_int]
if libc.clonefile(os.fsencode(sys.argv[1]), os.fsencode(sys.argv[2]), 0) != 0:
    sys.exit(f"clonefile failed: {os.strerror(ctypes.get_errno())}")
CLONE

# The cloned state describes the donor: repoint its project paths at this
# worktree and carry its validation forward, since every input was just
# compared byte for byte.
state=node_modules/.pnpm-workspace-state-v1.json
if [ -f "$state" ]; then
  now=$(( $(date +%s) * 1000 ))
  # `walk` reaches values only, and the project entries are keyed by
  # absolute path, so the keys need their own pass.
  jq --arg from "$best" --arg to "$root" --argjson now "$now" '
    def repath: if type == "string" and startswith($from) then $to + ltrimstr($from) else . end;
    walk(repath)
    | .projects |= with_entries(.key |= repath)
    | .lastValidatedTimestamp = $now
  ' "$state" > "$state.tmp" 2>/dev/null && mv "$state.tmp" "$state" || rm -f "$state" "$state.tmp"
fi
log "cloned node_modules from $best in $(( $(date +%s) - start ))s"
```

That is the whole setup. Create a new worktree, run `pnpm install`, and if a sibling qualifies, the tree is cloned and the install has nothing left to do. It needs pnpm 10.8.0 or later (the version that added the `updateConfig` hook), macOS on APFS (for `clonefile` and `stat -f`), git, jq and python3. When no donor qualifies, the script exits and the install proceeds exactly as before, so there is no failure mode to think about.

On the same monorepo, benchmarked on a machine under normal load, a plain fresh-worktree install took 43 to 45 seconds and the hook took 20 to 26. I also benchmarked this shell version against my native prototype below, and they are indistinguishable, within a second of each other. The 44-to-13 numbers come from a quiet machine; roughly halving a fresh worktree install holds in both conditions.

## Upstream status

I also implemented the same seeding natively, in pnpm's new Rust engine, and [proposed it as a discussion on the pnpm repository](https://github.com/orgs/pnpm/discussions/14041). A maintainer pointed at pnpm's existing answer for worktrees, the [global virtual store](https://pnpm.io/git-worktrees). That one is real but only helps the isolated linker; with the hoisted linker it has no effect, and in my experience hoisted is what React Native and Expo projects tend to run. On a synthetic repro with 60 workspace projects and about 2k packages:

| linker | plain | enableGlobalVirtualStore | worktree seeding |
| --- | --- | --- | --- |
| hoisted | 27s | 27s | **9s** |
| isolated | 28s | **3s** | 13s |

So if you use the isolated linker, turn on the global virtual store and you are done. If you use the hoisted linker, nothing built into pnpm covers this today: native seeding is only a proposal under discussion, with open questions about how much divergence between worktrees to accept. Until that settles, the pnpmfile hook above is what I run.
