import { defineCollection, z } from 'astro:content'

export const pages = defineCollection({
  type: 'content',
  schema: ({ image }) =>
    z.object({
      title: z.string().max(160),
      description: z.string().max(160).optional(),
      image: image().optional()
    })
})
