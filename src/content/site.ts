import { defineCollection, z } from 'astro:content'

export const site = defineCollection({
  type: 'content',
  schema: ({ image }) =>
    z.object({
      title: z.string().max(64),
      slogan: z.string().max(160),
      description: z.string().max(160),
      lang: z.enum(['en', 'id']),
      image: image(),
      favicon: z.any().optional()
    })
})
