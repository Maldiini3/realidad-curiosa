import { defineCollection, z } from 'astro:content';
import { glob } from 'astro/loaders';

// Colección de artículos editoriales de Realidad Curiosa
const articulos = defineCollection({
  loader: glob({ pattern: '**/*.{md,mdx}', base: './src/content/articulos' }),
  schema: z.object({
    title: z.string({
      required_error: 'El título del artículo es obligatorio'
    }),
    description: z.string({
      required_error: 'La descripción del artículo es obligatoria'
    }),
    category: z.enum([
      'universo-y-ciencia',
      'naturaleza-y-vida',
      'historia-y-enigmas',
      'fenomenos-asombrosos',
      'curiosidades'
    ], {
      required_error: 'La categoría debe ser una de las cinco categorías oficiales'
    }),
    image: z.string().default('/assets/og-image.png'),
    imageAlt: z.string().default('Realidad Curiosa'),
    pubDate: z.coerce.date({
      required_error: 'La fecha de publicación es obligatoria'
    }),
    updatedDate: z.coerce.date().optional(),
    readingTime: z.string().optional(),
    tags: z.array(z.string()).default([]),
    draft: z.boolean().default(false),
    seoTitle: z.string().optional(),
    seoDescription: z.string().optional()
  })
});

export const collections = {
  articulos
};
