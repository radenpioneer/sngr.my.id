import { defineCollection, z } from 'astro:content'

export const posts = defineCollection({
  type: 'content',
  schema: ({ image }) =>
    z.object({
      title: z.string().max(160),
      date: z.date(),
      subtitle: z.string().max(160).optional(),
      description: z.string().max(160).optional(),
      tags: z
        .array(
          z.object({
            name: z.string().max(64),
            slug: z.string()
          })
        )
        .optional(),
      lang: z.enum(['en', 'id']),
      draft: z.boolean().optional(),
      image: image().optional()
    })
})
