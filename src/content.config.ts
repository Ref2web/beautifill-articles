import { defineCollection, z } from 'astro:content';
import { glob } from 'astro/loaders';

const articleSchema = z.object({
  title: z.string(),
  shopifyHandle: z.string(),
  description: z.string(),
  metaTitle: z.string(),
  metaDescription: z.string(),
  category: z.enum(['nails', 'lip-tattoo', 'eyebrow-tattoo']),
  topic: z.string(),
  funnelStage: z.enum(['TOFU', 'MOFU', 'BOFU']),
  contentType: z.enum(['education', 'problem', 'comparison', 'price', 'process', 'safety', 'trend']),
  jupPovStatus: z.enum(['needs-input', 'provided']),
  sourceRequired: z.boolean(),
  sources: z.array(
    z.object({
      title: z.string(),
      url: z.string().url()
    })
  ),
  publishedAt: z.string(),
  updatedAt: z.string(),
  heroImage: z.string(),
  imageAlt: z.string(),
  shortFormRepurpose: z.array(
    z.object({
      hook: z.string(),
      format: z.string()
    })
  ),
  migration: z.object({
    targetShopifyBlog: z.string(),
    targetShopifyPath: z.string(),
    redirectNeeded: z.boolean()
  })
});

const articles = defineCollection({
  loader: glob({ pattern: '**/*.md', base: './src/content/articles' }),
  schema: articleSchema
});

export const collections = { articles };
