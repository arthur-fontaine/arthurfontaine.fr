---
title: "Next.js: The framework that traps you more than it frees you, and how to break free"
description: Behind Next.js, the most popular React framework, lies an economic and technological model that can quickly become a trap for developers. In this article, we explore the dangers of dependency on Next.js and Vercel and suggest alternatives.
date: 2024-11-21
tags:
  - nextjs
  - discussion
  - web development
language: en
translationKeys:
  en: nextjs-is-bad
  fr: nextjs-est-nul
---

# Next.js: The framework that traps you more than it frees you, and how to break free

Next.js, developed by Vercel, is a popular React framework that has
revolutionized web application development by offering advanced features
such as Server-Side Rendering.

However, behind this appealing facade lies an economic and technological
model that can quickly become a trap for developers. In this article, we will
explore the dangers of dependency on Next.js and Vercel and propose
*in my opinion, better* alternatives.

## The dangers of dependency on Next.js and Vercel

### A constraining economic model

Using Next.js is akin to voluntarily chaining yourself to an economic model
that can become restrictive. Vercel, the platform behind Next.js, offers a
"simple" layer over AWS but at significantly higher prices, despite their
"free" tier, which primarily serves to lure developers.

You might think Vercel's free tier suffices for most small projects. But in
reality, if your site faces a DDoS attack (denial of service attack, where
an attacker spams your site to render it inaccessible), you'll quickly hit
the bandwidth limit, and Vercel will charge you exorbitant fees. Many
developers have shared their experiences facing such situations, like [this
post on Twitter](https://x.com/T_Zahil/status/1808764723103416620).

Vercel also strongly encourages (if not forces) developers to use its own
hosting service, making it difficult to opt for alternatives.

Community initiatives like [OpenNext](https://opennext.js.org/) aim to limit
this technological lock-in, but Next.js's strategy remains clear: to build
an ecosystem that's costly and challenging to leave.

This intent to lock developers in was confirmed with the recent acquisition
of [Turbo](https://turbo.build/) by Vercel. By acquiring Turbo and pushing
Turbopack as the default builder for Next.js, Vercel strengthens its grip
on all Next.js projects.

### Questionable performance

Next.js's performance raises significant concerns. Beyond relying on
server-side rendering, which can introduce a heavy workload for the server,
Next.js is often criticized for its slowness and excessive resource
consumption.

Here is a non-exhaustive list of benchmarks conducted by third parties:

- [Next.js is 170 times slower than React for a "Hello World"](https://x.com/thdxr/status/1777782835249553517)
- [Next.js response times are six times slower than Nuxt.js](https://x.com/icarusgkx/status/1664015769280163840)
- [Next.js bundles are ~7 times larger than SvelteKit's](https://x.com/khromov/status/1831123411789025365)

### Risky version upgrades

Next.js users know to tread cautiously with updates. Several developers have
reported experiences where a minor version update introduced unexpected
breaking changes. These changes can cause major disruptions, even rendering
an application entirely inoperable.

This lack of stability and predictability in updates can not only slow down
development but also compromise the reliability of production applications,
forcing teams to dedicate valuable time to fixing unforeseen issues. It also
reflects, in my opinion, a lack of respect for developers from Vercel's team.

### Systemic risks

The history of the web has repeatedly demonstrated the dangers of excessive
dependency on proprietary solutions. Consider [Parse](https://en.wikipedia.org/wiki/Parse,_Inc.), which was acquired
and shut down by Facebook in 2017. While its closure didn't directly
eliminate businesses, it left hundreds of startups scrambling to migrate to
other solutions, incurring unforeseen financial and time costs.

A similar situation could arise with Vercel. A sudden price hike or major
vulnerabilities could have significant repercussions on projects that depend
on it.

### Other subjective issues

I could also discuss Next.js project architecture or other drawbacks, but
these are subjective opinions I might address in another article.

## Two web paradigms, two technical challenges

The modern web landscape fundamentally divides into two categories: landing
pages and complex applications. Each requires a distinct technical approach
that Next.js doesn't always effectively address.

### Landing Pages: The power of static content

For landing pages, SSG (Static Site Generation) is an ideal solution. By
generating a site statically, you gain exceptional performance: instant load
times, low computational cost, enhanced security, and SEO optimization.

[Astro](https://astro.build/) is an excellent choice for building landing
pages. Its simplicity allows you to create a performant and elegant site in
minutes with just a few lines of code. Despite its accessibility, Astro
remains adaptable and powerful, enabling advanced customization for more
complex site requirements. If you still need SSR (Server-Side Rendering),
Astro supports it natively.

Its ecosystem of plugins is another major asset. For instance, plugins
dedicated to SEO automatically optimize site rankings, providing intuitive
configuration and effective results without unnecessary complexity.

Finally, combining SSG with a CDN like Cloudflare allows you to serve tens
of millions of pages at extremely low costs (just a few euros), whereas
services like Vercel can quickly become expensive.

### Web Applications: The simplicity of CSR

For complex applications, CSR (Client-Side Rendering) is often sufficient
since there are no specific SEO requirements. In this context, tools like
[Vite](https://vite.dev/) shine as both fast and performant build tools,
exemplifying what I consider the ideal open-source project.

However, building a complete application with Vite isn't as straightforward
as with Next.js. That's why I developed [Agrume](https://agrume.js.org/), a
library that "plugs into" Vite, making backend development as simple as with
Next, but without sacrificing flexibility.

Combining React, Vite, Agrume, [Tanstack Query](https://tanstack.com/query/),
and an ORM allows for modern, simple architecture independent of proprietary
platforms. I'll soon share a complete template to kickstart a project with
this stack.

## Conclusion

Next.js has facilitated important advances for web applications, but its
ecosystem relies on a model that can be restrictive in terms of costs and
technology. By exploring tools like Astro or Vite, developers can build
high-performing solutions while remaining confident about the evolution of
their projects and needs.
