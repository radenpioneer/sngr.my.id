import type { APIRoute } from 'astro'
import { getEntry } from 'astro:content'

const { data: site } = await getEntry('site', 'site')

export const GET: APIRoute = async () => {
  const response = await fetch(`https://github.com/${site.github}.png`)
  return new Response(await response.arrayBuffer())
}
