import { defineCollection, z } from 'astro:content';

const blogCollection = defineCollection({
  type: 'content',
  schema: z.object({
    title: z.string(),
    // Título y descripción para <title>/<meta> cuando los del post pasan de
    // los ~60 y ~160 caracteres que muestran los buscadores. Si faltan, se usan
    // `title` y `excerpt`.
    seoTitle: z.string().optional(),
    seoDescription: z.string().optional(),
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
    // Animación de portada (0-7, ver AudioVisualizer.astro)
    vizType: z.number().optional(),
    // Preguntas frecuentes: se emiten como JSON-LD FAQPage (GEO)
    faq: z.array(z.object({ q: z.string(), a: z.string() })).optional(),
  }),
});

export const collections = {
  blog: blogCollection,
};
