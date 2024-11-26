---
title: "Next.js: The Framework That Traps You More Than It Frees You, and How to Break Free"
description: Behind Next.js, the most popular React framework, lies an economic and technological model that can quickly become a trap for developers. In this article, we explore the dangers of relying on Next.js and Vercel, and propose alternatives.
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

# Next.js: The Framework That Traps You More Than It Frees You, and How to Break Free

[Next.js](https://nextjs.org/), developed by [Vercel](https://vercel.com/), is
a popular React framework that has revolutionized web application development
with advanced features like Server-Side Rendering.

However, behind this attractive facade lies an economic and technological
model that can quickly become a trap for developers. In this article, we
explore the dangers of relying on Next.js and Vercel, and propose alternatives
that are, *in my opinion, better*.

## The Dangers of Relying on Next.js and Vercel

### Exclusive Optimizations

Vercel has designed its hosting infrastructure to integrate perfectly with
Next.js, like two perfectly interlocking gears. Hosting a Next.js site on
Vercel provides exclusive optimizations that are hard to replicate elsewhere.
This is a deliberate strategy of technological lock-in.

The performance of Next.js on Vercel is so seamless and optimized that it
becomes almost impossible to achieve similar results on other platforms. In
response, [OpenNext](https://opennext.js.org/) emerged: a community initiative
aiming to break this monopoly by enabling developers to enjoy the same
optimizations on alternative hosting solutions.

I find Vercel’s approach deeply unethical. This tactic of developing
open-source software while favoring its proprietary hosting service—at the
expense of competitors and even users who wish to self-host—goes against the
open-source values that I hold dear.

What’s worse is that Vercel seems intent on pushing this strategy even
further. The [acquisition of Turbo by Vercel](https://vercel.com/blog/vercel-acquires-turborepo)
illustrates this. By planning to make [Turbopack the default builder for Next.js](https://turbo.build/pack/docs/roadmap#:~:text=Next%2C%20we%20want%20to%20use%20Turbopack%20to%20power%20production%20builds%20with%20Next.js.),
Vercel is doubling down on its exclusive optimization logic. Turbopack
optimizations will gradually be designed to [leverage Vercel’s server-specific features](https://turbo.build/pack/docs/roadmap#remote-caching-and-replication),
making it even more challenging to avoid reliance on Vercel. This extends
beyond hosting to areas like compilation and builds, creating deeper and
harder-to-break technical dependencies.

### Exorbitant Prices

Once locked into the Vercel ecosystem, you are at the mercy of its pricing.
Vercel offers a "free" tier designed to lure developers not already swayed by
its exclusive optimizations. But as your project grows, you may find yourself
facing exorbitant bills.

I recall several developer testimonials comparing hosting costs between Vercel
and other solutions, and the results are simply staggering.

[@karolyidav shared their calculations on Twitter](https://x.com/karolyidav/status/1833138429716050227).
Hosting the same site on Vercel would cost $35,818 per month compared to just
$120 on Hetzner. That’s right: hosting on Vercel could be
**300 times more expensive** than on Hetzner.

Other similar testimonials abound, such as [@zackerydev comparing Vercel’s quote to their current AWS bill](https://x.com/zackerydev/status/1717556827569660378).
The result? For simple static files, Vercel would have cost approximately
$3,000 per month compared to just $12 on AWS—a **277x price difference**.

These costs are difficult to justify technically. They may be explained by
Vercel’s ease of use, but that ease is a direct result of Vercel’s lock-in
strategy. In essence, Vercel charges you for a problem it created.

Adding to this, Vercel’s billing practices raise ethical concerns. [Thomas Sanlis shared his experience on Twitter](https://x.com/T_Zahil/status/1808764723103416620).
After suffering a DDoS attack that Vercel failed to mitigate (despite
[promising DDoS protection](https://vercel.com/docs/security/ddos-mitigation)),
he received a $523 invoice from Vercel, which he was [forced to pay](https://x.com/T_Zahil/status/1819779707442761980).

### Questionable Performance

Next.js performance also raises significant concerns. Beyond its reliance on
server-side rendering — which can impose a significant workload on servers —
Next.js is often criticized for its slowness and resource consumption.

Here are some non-exhaustive benchmarks:

- [Next.js is 170x slower than React for a "Hello World"](https://x.com/thdxr/status/1777782835249553517)
- [Next.js response times are 6x slower than Nuxt.js](https://x.com/icarusgkx/status/1664015769280163840)
- [Next.js bundles are ~7x larger than SvelteKit’s](https://x.com/khromov/status/1831123411789025365)

Beyond mere metrics, these results have concrete economic and environmental
implications. Poor performance translates directly into higher server
requirements: more powerful CPUs, more RAM, and increased electricity
consumption.

In a world where digital sustainability is becoming a crucial issue, these
bloated performance requirements aren’t just a technical inconvenience—they
represent a direct environmental cost. An energy-hungry server running a
Next.js application means wasted resources and unnecessary CO2 emissions.

### Systemic Risks

Web history has repeatedly shown the dangers of over-reliance on proprietary
solutions. Take the example of [Parse](https://en.wikipedia.org/wiki/Parse,_Inc.),
acquired and later shut down by Facebook in 2017. Although its closure didn’t
directly kill businesses, it left hundreds of startups scrambling to migrate
to alternative solutions, incurring unplanned financial and time costs.

A similar situation could occur with Vercel. A sudden price hike or major
vulnerabilities could have significant repercussions for dependent projects.

This risk is compounded by the fact that Vercel is a startup—one that [has yet to achieve profitability](https://research.contrary.com/company/vercel#:~:text=However%2C%20a%20former%20Vercel%20employee%20reported%20neither%20Vercel%20nor%20Netlify%20had%20achieved%20profitability%20as%20of%202023).

### Other Subjective Issues

I could also mention the file architecture of Next.js projects or other
negative aspects, but these are subjective opinions I might explore in another
article.

## Two Web Paradigms, Two Technical Challenges

The modern web landscape fundamentally divides into two categories: landing
pages and complex applications. Each requires a distinct technical approach
that Next.js doesn’t always serve effectively.

### Landing Pages: The Power of Static

For landing pages, SSG (Static Site Generation) is an ideal solution.
Generating a static site provides exceptional performance: instant loading,
low computational cost, enhanced security, and optimized SEO.

[Astro](https://astro.build/) is an excellent choice for building landing
pages. Its simplicity allows you to create high-performing, elegant sites in
minutes with just a few lines of code. Despite its accessibility, Astro is
highly adaptable and powerful, accommodating the needs of more complex sites.
And if you still need SSR (Server-Side Rendering), Astro supports it natively.
Unlike Next.js, Astro is deployable on virtually any hosting platform ([as evidenced by its 26 official adapters](https://docs.astro.build/en/guides/deploy/)).

Combining SSG with a CDN like Cloudflare allows you to serve tens of millions
of pages at extremely low costs (just a few euros), whereas services like
Vercel quickly become expensive.

### Web Applications: The Simplicity of CSR

For complex applications, CSR (Client-Side Rendering) is often sufficient, as
SEO isn’t usually a concern. Here, [Vite](https://vite.dev/) shines as a fast
and efficient build tool that, for me, embodies the open-source ethos.

However, building a full application with Vite isn’t as straightforward as
with Next.js. That’s why I developed [Agrume](https://agrume.js.org/), a
library that “plugs into” Vite, making backend development as easy as Next.js
but without compromising flexibility.

By combining React, Vite, Agrume, [Tanstack Query](https://tanstack.com/query/),
and an ORM, you can build modern architectures that are simple and free from
proprietary platform constraints. I’ll soon share a complete template for
starting a project with this stack.

## Conclusion

Next.js has driven significant advancements for web applications, but its
ecosystem relies on a model that’s often restrictive in terms of cost and
technology. By exploring tools like Astro or Vite, developers can build
high-performance solutions while remaining free to evolve their projects and
meet their needs.
