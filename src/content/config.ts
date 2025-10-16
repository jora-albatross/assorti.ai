import { z, defineCollection } from 'astro:content';

const recipes = defineCollection({
  type: 'content',
  schema: z.object({
    title: z.string(),
    summary: z.string().max(200),
    category: z.enum(['image','video','text','audio','business']),
    eta: z.number().int(),
    preview: z.string().optional(),
    ogImage: z.string().optional(),
    outcome: z.array(z.string()).optional(),
    tools: z.array(z.object({
      name: z.string(),
      url: z.string(),
      affiliate_url: z.string().optional()
    })).optional(),
    steps: z.array(z.object({
      title: z.string(),
      description: z.string(),
      tip: z.string().optional()
    })).optional(),
    prompts: z.array(z.object({
      label: z.string(),
      content: z.string()
    })).optional(),
    youtube_id: z.string().optional(),
    cost_note: z.string().optional()
  })
});

export const collections = { recipes };
