import { defineCollection, z } from 'astro:content';

const blogCollection = defineCollection({
  type: 'content',
  schema: z.object({
    title: z.string(),
    excerpt: z.string(),
    category: z.string(),
    categoryColor: z.string(),
    readTime: z.string(),
    date: z.date(),
    dateFormatted: z.string(),
    author: z.object({
      name: z.string(),
      role: z.string(),
    }),
    gradient: z.string(),
    featured: z.boolean().default(false),
  }),
});

export const collections = {
  blog: blogCollection,
};
