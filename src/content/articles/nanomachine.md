---
title: "Nanomachine"
description: "An experiment in building a type-safe state machine on top of Nanostores, inspired by XState."
pubDate: 2026-08-21
tags: ["typescript", "state-machines", "nanostores", "experiment"]
---

Nanomachine is one of my experiments: a type-safe state machine builder based on Nanostores and inspired by XState. The whole thing fits in a single TypeScript file, published as [a gist](https://gist.github.com/arthur-fontaine/608a6e04d4e600779be2a3b8f89bd11c). It is not a library you can install. It is a sketch of an API I wanted to exist.

## The idea

XState models logic as states, events, and a context object. I like that model, but XState machines are defined as one big configuration object, and the types for context and events usually have to be declared up front and threaded through generics.

Nanomachine takes the opposite route: a builder chain where each step narrows the types for the next one.

```typescript
const machine = createStateMachine()
  .context<{ retries: number }>()
  .events<{ fetch: [string]; cancel: [] }>()
  .states<"idle" | "loading" | "failed">()
  .initial("idle")
  .implement({
    idle: (state) =>
      state.onReceive({
        fetch: (context, set, url) => "loading",
      }),
    loading: (state) =>
      state
        .onEntry(async (context, set, emit) => {
          // do the work, then emit or set context
        })
        .onReceive({ cancel: () => "idle" })
        .after(5000, "failed"),
    failed: (state) => state,
  });

machine.start({ retries: 0 });
machine.emit("fetch", "https://example.com");
```

By the time you reach `implement`, TypeScript knows every state name, every event and its payload, and the shape of the context. Events are declared as tuples: `[]` means no payload, `[string]` means the handler and `emit` both require one. There is no schema to keep in sync with the implementation, because the implementation is derived from the chain.

Under the hood there is no interpreter. The context is a Nanostores atom, and the current state is another atom. Transitions are just `atom.set` calls, so anything that already knows how to subscribe to a Nanostores store can observe the machine.

## Why I built it

I wanted to see how far type inference could carry a state machine API without a code generator or a separate typegen step. XState is the reference point, but I was curious whether the builder pattern could give the same guarantees with less ceremony, using stores I already had.

Basing it on Nanostores was the other half of the experiment. The machine exposes its atom directly, plus `get`, `set`, and `subscribe`, so it behaves like any other store in an app that uses them.

A few pieces of the design I find worth keeping. Guards take a fallback state instead of silently blocking, and `guardContext` uses a type predicate to narrow the context type for everything chained after it. `after` gives declarative timeouts that only fire if the state has not changed in the meantime. And a handler can return `"$_END"` to finish the machine, which resolves a promise exposed as `$promise`, so you can `await` the whole run.

## Where it could be useful

The shape suggests a few uses. Fetch lifecycles, where idle, loading, and failed states are explicit and a timeout moves you to failed. Multi-step flows like forms or wizards, where each step is a state and guards keep invalid transitions out. And one-shot async workflows, where the machine runs to `"$_END"` and the caller just awaits `$promise`.

Since it is all Nanostores underneath, binding the context to a UI is a `subscribe` call away, in any framework Nanostores supports.

It stays a gist for now. The interesting part was never shipping it. It was finding out that the builder chain works, and that the types hold.
