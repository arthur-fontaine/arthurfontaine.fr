---
title: "Write your UI once, render it natively"
description: "JSXon, a server that keeps JSX as data and serves it as JSON, so a Kotlin, Swift or web client can draw it with native components."
pubDate: 2024-08-12
tags: ["typescript", "jsx", "experiment"]
---

[JSXon](https://github.com/arthur-fontaine/jsxon) is one of my experiments: a server that lets you write your UI in JSX and serves it as JSON. The client fetches that JSON and renders it with whatever it has locally. Native Kotlin views, SwiftUI, plain HTML, anything that can walk a tree.

## The idea

JSX is just a syntax for building trees. React turns those trees into DOM nodes, but nothing forces that. JSXon keeps the tree as data. Each component returns a plain object with a `type`, its `props`, and its `children`:

```jsx
export default <HStack>
  <Text text="Hello, JSXon!" />
</HStack>
```

becomes, once served:

```json
{
  "type": "jsxon:HStack",
  "props": {},
  "children": [
    { "type": "jsxon:Text", "props": { "text": "Hello, JSXon!" } }
  ],
  "_isJSXon": true
}
```

The server side is small. A Babel pass transforms the JSX with a custom pragma, `JSXon.createElement`, which calls the component instead of instantiating anything. A Fastify server takes a pages directory and registers one route per file, so the URL path is the file path. A page can also export a function, and the server calls it on each request, which opens the door to dynamic payloads.

The client owns the rendering. In the repo there is an Android example where a Jetpack Compose function switches on the node type and maps it to native composables:

```kotlin
@Composable
fun Jsxon(jsxonPayload: JsxonPayload) {
    when (jsxonPayload.type) {
        "jsxon:Text" -> JsxonText(jsxonPayload = jsxonPayload)
        "jsxon:HStack" -> JsxonHStack(jsxonPayload = jsxonPayload)
        "jsxon:VStack" -> JsxonVStack(jsxonPayload = jsxonPayload)
    }
}
```

That is the whole contract. The server never knows what a `Text` looks like; it only promises a well-formed tree.

## Why I built it

X (Twitter) built an internal framework called Jetfuel that, in their words, "makes it lightning fast to build new features across all clients" natively. I read [the post about it](https://x.com/AqueelMiq/status/1822364223466623117) and wanted to recreate it. JSXon is that attempt: the smallest version of server-driven UI I could write in TypeScript, with a real native client on the other end to prove the loop closes.

## What it could be used for

The pattern behind JSXon is server-driven UI, and the use cases follow from it. You define a screen once, in JSX, and every platform renders it with its own native components, so iOS, Android and web stay in sync without three implementations. Because the UI is fetched at runtime, you could change a screen by deploying the server, without shipping a new app build or waiting for a store review. And since pages can be functions, the server could shape the tree per request: feature flags, A/B variants, or user-specific layouts, all decided server-side.

JSXon itself is an experiment, not a product. It ships three components (`Text`, `HStack`, `VStack`) and one Android example. But the loop works end to end, and that was the point: write JSX, get JSON, render native.
