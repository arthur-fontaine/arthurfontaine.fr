// @ts-check
import { defineConfig } from "astro/config";

import vercel from "@astrojs/vercel";
import tailwindcss from "@tailwindcss/vite";
import { rehypeCodeBlocks } from "./src/plugins/rehype-code-blocks.mjs";

// https://astro.build/config
export default defineConfig({
	prefetch: true,
	markdown: {
		shikiConfig: {
			themes: { light: "vitesse-light", dark: "vitesse-dark" },
		},
		rehypePlugins: [rehypeCodeBlocks],
	},
	vite: {
		plugins: [tailwindcss()],
	},
	output: 'static',
	adapter: vercel({
		webAnalytics: { enabled: true },
	}),
});
