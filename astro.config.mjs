import { defineConfig } from 'astro/config';
import { vanillaExtractPlugin } from '@vanilla-extract/vite-plugin';
import vercel from "@astrojs/vercel/static";

// https://astro.build/config
export default defineConfig({
  vite: {
    plugins: [vanillaExtractPlugin({})]
  },
  output: "static",
  adapter: vercel({
    analytics: true,
  })
});