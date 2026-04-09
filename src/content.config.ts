import { defineCollection, z } from 'astro:content';
import { glob } from 'astro/loaders';

const writing = defineCollection({
  loader: glob({ pattern: '**/*.md', base: './src/content/writing' }),
  schema: z.object({
    title: z.string(),
    subtitle: z.string().optional(),
    date: z.coerce.date().optional(),
    type: z.string().optional(),
    topics: z.array(z.string()).optional(),
    tags: z.array(z.string()).optional(),
    excerpt: z.string().optional(),
    slug: z.string().optional(),
    publisher: z.string().optional(),
    source: z.string().optional(),
    original_url: z.string().optional(),
    status: z.string().optional(),
  }),
});

export const collections = {
  writing,
};