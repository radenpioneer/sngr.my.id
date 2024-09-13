import { defineCollection, z, reference } from 'astro:content'

export const menu = defineCollection({
  type: 'data',
  schema: ({ image }) =>
    z.object({
      title: z.string().max(64),
      description: z.string().max(160).optional(),
      items: z.array(
        z.discriminatedUnion('discriminant', [
          z.object({
            discriminant: z.literal('page'),
            value: reference('pages')
          }),
          z.object({
            discriminant: z.literal('link'),
            value: z.object({
              title: z.string(),
              url: z.string(),
              icon: image().optional()
            })
          })
        ])
      )
    })
})
