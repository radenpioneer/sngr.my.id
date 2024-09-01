import { defineMiddleware } from 'astro:middleware'

// `context` and `next` are automatically typed
export const onRequest = defineMiddleware(async (context, next) => {
  if (new URL(context.request.url).pathname === '/__lighthouse') {
    const response = await next()
    const html = await response.text()

    return new Response(html, {
      headers: {
        ...response.headers,
        'Content-Security-Policy': 'default-src *;'
      }
    })
  }

  return next()
})
