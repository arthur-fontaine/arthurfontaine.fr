---
title: "What if components were generators?"
description: "Yieldable JSX, a runtime where a component yields its elements instead of returning a tree, so rendering becomes iteration."
pubDate: 2024-05-02
tags: ["typescript", "jsx", "experiment"]
---

Every JSX framework I know treats a component as a function that returns a tree. You build the whole structure, hand it back, and the runtime walks it. [Yieldable JSX](https://github.com/arthur-fontaine/yieldable-jsx) is an experiment that asks a different question: what if a component were a generator, and rendering were just iteration?

In this model, a component does not return anything. It yields elements one by one, top to bottom, and the renderer consumes the stream:

```tsx
const Comp = defineComponent(function* ({}, _) {
  const closeP = yield* _.openTag('p', {})

  yield* <span>hello{' '}</span>

  const { word, setword } = yield* _.state('word', 'foo')

  setTimeout(() => setword('world'), 2000)

  yield* <Word word={word} />

  yield* closeP()

  yield* <span>goodbye{' '}</span>
})
```

This is trimmed from the repo's demo, and it shows the two ideas that make the experiment interesting.

## State through yield delegation

The `_.state('word', 'foo')` call does not use hooks or proxies. It yields a `State` object to the renderer and, when the generator resumes, the `yield*` expression evaluates to `{ word, setword }`. The communication channel that hooks fake with call order and hidden module state, generators give you for free: yield sends a value out, resumption sends a value back in. The runtime caches state objects between renders by key, so the value survives re-renders while everything else is rebuilt.

Calling `setword` marks the component's cache as expired. The render loop notices, runs the generator again, and yields fresh elements. When nothing changed, it replays the cached ones instead.

## Tags that open and close like statements

The stranger idea is `_.openTag`. In JSX, an element is atomic: it opens and closes in one expression, so children must be nested inside it syntactically. With `openTag`, opening a `<p>` and closing it are two separate yields, and everything you yield in between becomes a child. Structure stops being lexical and becomes temporal. You can open a tag, run arbitrary logic, initialize state, yield a few children, then close it, all as flat sequential statements.

## Why I built it

Curiosity, mostly. Generators are a control-flow primitive that JavaScript has had for years, and UI rendering is fundamentally a control-flow problem: produce these nodes, pause here, resume when state changes. I wanted to see how far the pairing goes when you commit to it, including making `yield* <span>...</span>` typecheck, which took some TypeScript convincing in `jsx.d.ts` since a JSX element there has to be iterable.

## What it could be useful for

The yield-based shape suggests a few directions. Because elements arrive as a stream rather than a finished tree, a renderer could paint them as they come, which maps naturally to streaming or progressive rendering. The open and close tag mechanism means markup structure can be driven by runtime logic instead of nesting, which is awkward to express in ordinary JSX. And the state channel shows you can get a hooks-like API without hook rules, since the generator itself carries the position.

To be clear about where it stands: the current renderer is deliberately naive. It clears the container and re-renders on a timer loop, with a yield cache and prop diffing on top. It is a proof of concept for the programming model, not the rendering strategy. But the model itself holds up better than I expected.
