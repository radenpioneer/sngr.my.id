import { defineConfig } from 'astro/config'
import tailwind from '@astrojs/tailwind'
import react from '@astrojs/react'
import markdoc from '@astrojs/markdoc'
import keystatic from '@keystatic/astro'
import sentry from '@sentry/astro'
import spotlightjs from '@spotlightjs/astro'
import vercel from '@astrojs/vercel/serverless'

// https://astro.build/config
export default defineConfig({
  integrations: [
    tailwind(),
    react(),
    markdoc(),
    keystatic(),
    sentry(),
    spotlightjs(),
  ],
  output: 'hybrid',
  adapter: vercel({
    speedInsights: true,
  }),
})
