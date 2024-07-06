import { defineConfig } from 'astro/config'
import markdoc from '@astrojs/markdoc'

import sitemap from '@astrojs/sitemap'

// https://astro.build/config
export default defineConfig({
  site: 'https://www.sngr.my.id',
  integrations: [markdoc(), sitemap()],
  prefetch: {
    defaultStrategy: 'tap'
  }
})
