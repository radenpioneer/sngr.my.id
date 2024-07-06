import type { APIRoute } from 'astro'

export const GET: APIRoute = ({ site }) => new Response(site?.hostname)
