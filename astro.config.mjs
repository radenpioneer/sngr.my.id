import { defineConfig } from 'astro/config'
import react from '@astrojs/react'
import tailwindcss from '@astrojs/tailwind'
import sitemap from '@astrojs/sitemap'
import keystatic from '@keystatic/astro'
import cloudflare from '@astrojs/cloudflare'

// https://astro.build/config
export default defineConfig({
  site: 'https://sngr.my.id',
  integrations: [react(), tailwindcss(), sitemap(), keystatic()],
  prefetch: {
    defaultStrategy: 'tap',
    prefetchAll: true
  },
  output: 'hybrid',
  adapter: cloudflare({
    platformProxy: {
      enabled: true
    }
  }),
  vite: {
    define: {
      'process.env': process.env
    }
  },
  experimental: {
    directRenderScript: true,
    clientPrerender: true
  }
})
