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
    subtitulo: z.string().optional(),          // ex.: "Pedras de Una · Una-BA · Residência modular de alto padrão"
    cliente: z.string(),
    local: z.string(),
    segmento: z.string(),
    resumo: z.string(),
    sistemas: z.array(z.string()),
    foto: z.string(),                           // capa (ilustrativa) usada na home e na listagem
    fotos: z.array(z.object({                   // galeria de fotos reais do projeto (página interna)
      src: z.string(),
      alt: z.string()
    })).default([]),
    destaqueTitulo: z.string().optional(),      // card de destaque técnico (ex.: CFTV IP + IA)
    destaqueTexto: z.string().optional(),
    quote: z.string().optional(),               // frase do projeto (padrão do portfólio)
    order: z.number()
  })
});

export const collections = { servicos, segmentos, projetos };
