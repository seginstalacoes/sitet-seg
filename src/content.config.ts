import { defineCollection, z } from 'astro:content';
import { glob } from 'astro/loaders';

const servicos = defineCollection({
  loader: glob({ pattern: '**/*.md', base: './src/content/servicos' }),
  schema: z.object({
    title: z.string(),
    h1: z.string(),
    metaTitle: z.string(),
    metaDescription: z.string(),
    resumo: z.string(),
    icon: z.string(),
    destaque: z.boolean().default(false),
    order: z.number(),
    waMsg: z.string(),
    fotoLabel: z.string().default('FOTO: projeto real da SEG'),
    foto: z.string().optional()
  })
});

const segmentos = defineCollection({
  loader: glob({ pattern: '**/*.md', base: './src/content/segmentos' }),
  schema: z.object({
    title: z.string(),
    h1: z.string(),
    metaTitle: z.string(),
    metaDescription: z.string(),
    resumo: z.string(),
    icon: z.string(),
    order: z.number(),
    waMsg: z.string(),
    cta: z.string().default('Solicitar orçamento'),
    foto: z.string().optional()
  })
});

const projetos = defineCollection({
  loader: glob({ pattern: '**/*.md', base: './src/content/projetos' }),
  schema: z.object({
    title: z.string(),
    cliente: z.string(),
    local: z.string(),
    segmento: z.string(),
    resumo: z.string(),
    sistemas: z.array(z.string()),
    foto: z.string(),
    order: z.number()
  })
});

export const collections = { servicos, segmentos, projetos };
