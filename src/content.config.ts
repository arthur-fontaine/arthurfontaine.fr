import { glob } from "astro/loaders";
import { defineCollection } from "astro:content";
import { z } from "astro/zod";

const articles = defineCollection({
	loader: glob({ base: "./src/content/articles", pattern: "**/[^_]*.md" }),
	schema: z.object({
		title: z.string(),
		description: z.string(),
		pubDate: z.coerce.date(),
		tags: z.array(z.string()).default([]),
	}),
});

export const collections = { articles };
