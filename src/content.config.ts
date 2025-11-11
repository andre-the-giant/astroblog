// src/content/config.ts
import { defineCollection, z } from 'astro:content';
import { glob } from 'astro/loaders';

// BLOG COLLECTION
const blogCollection = defineCollection({
  loader: glob({ pattern: '**/*.{md,mdx}', base: './src/pages/posts' }),
  schema: z.object({
    title: z.string(),
    description: z.string(),
    pubDate: z.coerce.date(),
    image: z
      .object({
        url: z.string().url().or(z.string()).optional(),
        alt: z.string().optional(),
      })
      .optional(),
    tags: z.array(z.string()).optional(),
  }),
});

// TESTIMONIES COLLECTION
const testimoniesCollection = defineCollection({
  loader: glob({ pattern: '**/*.md', base: './src/content/testimonies' }),
  schema: z.object({
    name: z.string(),
    year: z.number().int().optional(), // for sorting by year
    picture: z.string().optional(), // path to an image
    excerpt: z.string().optional(),
    company: z.string().optional(),
    linkedin: z.string().url().optional(),
    relationship: z.string().optional(),
  }),
});

export const collections = {
  blog: blogCollection,
  testimonies: testimoniesCollection,
};
