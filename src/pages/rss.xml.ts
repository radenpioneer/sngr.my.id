import type { APIRoute } from 'astro'
import rss from '@astrojs/rss'
import { getCollection, getEntry } from 'astro:content'
import markdoc from '@markdoc/markdoc'

export const GET: APIRoute = async ({ site }) => {
  const siteData = await getEntry('site', 'site')
  const posts = await getCollection('post')
  return rss({
    site: site!,
    title: siteData.data.title,
    description: siteData.data.description,
    stylesheet: '/rss.xsl',
    items: posts.map((post) => ({
      title: post.data.title,
      pubDate: post.data.date,
      description: post.data.description,
      link: `/${post.data.date.getFullYear()}/${post.slug}/`,
      content: markdoc.renderers.html(
        markdoc.transform(markdoc.parse(post.body))
      )
    }))
  })
}
