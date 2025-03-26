import { defineCollection, z } from 'astro:content';
import { glob } from 'astro/loaders';
const blogCollection = defineCollection({
  loader: glob({ pattern: "**/*.md", base: "./src/pages/posts" }),
  schema: z.object({
    title: z.string(),
    description: z.string(),
    pubDate: z.coerce.date(),
    image: z.object({
      url: z.string().url().or(z.string()).optional(),
      alt: z.string().optional(),
    }).optional(),
    tags: z.array(z.string()).optional(),
  }),
});

export const collections = { blog:blogCollection };