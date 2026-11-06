import { defineConfig } from 'astro/config';
import tailwindcss from '@tailwindcss/vite';
import sitemap from '@astrojs/sitemap';
import { sitemapSerialize } from './src/config/sitemap.ts';
import { SLUG_REDIRECTS } from './src/config/slug-redirects.mjs';

export default defineConfig({
  site: 'https://cheatswarthunder.net',
  trailingSlash: 'always',
  server: {
    host: true,
    port: 4322,
  },
  redirects: {
    '/products/borderlands-cheats/': '/products/war-thunder/',
    '/products/borderlands-cheats/elite/': '/products/war-thunder/elite/',
    '/products/borderlands-cheats/utilities/': '/products/war-thunder/utilities/',
    '/products/borderlands-hacks/': '/products/war-thunder/',
    '/products/borderlands-hacks/elite/': '/products/war-thunder/elite/',
    '/products/borderlands-hacks/utilities/': '/products/war-thunder/utilities/',
    '/borderlands-cheats/': '/war-thunder-cheats/',
    '/borderlands-hacks/': '/war-thunder-cheats/',
    '/products/mw4-cheats/': '/products/war-thunder/',
    '/products/mw4-cheats/elite/': '/products/war-thunder/elite/',
    '/products/mw4-cheats/utilities/': '/products/war-thunder/utilities/',
    '/products/mw4-hacks/': '/products/war-thunder/',
    '/products/mw4-hacks/elite/': '/products/war-thunder/elite/',
    '/products/mw4-hacks/utilities/': '/products/war-thunder/utilities/',
    '/mw4-cheats/': '/war-thunder-cheats/',
    '/mw4-hacks/': '/war-thunder-cheats/',
    '/go/mw4/': '/go/war-thunder/',
    '/go/borderlands/': '/go/war-thunder/',
    '/go/bodycam/': '/go/war-thunder/',
    '/go/fortnite/': '/go/war-thunder/',
    '/cheats/': '/products/war-thunder/',
    '/cheats/lite/': '/products/war-thunder/lite/',
    '/cheats/pro/': '/products/war-thunder/pro/',
    '/cheats/elite/': '/products/war-thunder/elite/',
    '/cheats/compare/': '/blog/wt-lite-vs-pro/',
    '/hacks/': '/products/war-thunder/',
    '/hacks/lite/': '/products/war-thunder/lite/',
    '/hacks/pro/': '/products/war-thunder/pro/',
    '/hacks/elite/': '/products/war-thunder/elite/',
    '/hacks/compare/': '/blog/wt-lite-vs-pro/',
    '/products/dota-2-cheats/': '/products/war-thunder/',
    '/products/dota-2-cheats/elite/': '/products/war-thunder/elite/',
    '/products/dota-2-cheats/utilities/': '/products/war-thunder/utilities/',
    '/products/dota-2-hacks/': '/products/war-thunder/',
    '/products/dota-2-hacks/elite/': '/products/war-thunder/elite/',
    '/products/dota-2-hacks/utilities/': '/products/war-thunder/utilities/',
    '/products/fortnite-cheats/': '/products/war-thunder/',
    '/products/fortnite-cheats/elite/': '/products/war-thunder/elite/',
    '/products/fortnite-cheats/utilities/': '/products/war-thunder/utilities/',
    '/products/fortnite-hacks/': '/products/war-thunder/',
    '/products/fortnite-hacks/elite/': '/products/war-thunder/elite/',
    '/products/fortnite-hacks/utilities/': '/products/war-thunder/utilities/',
    '/contact/': '/support/',
    ...SLUG_REDIRECTS,
  },
  compressHTML: true,
  prefetch: {
    prefetchAll: false,
    defaultStrategy: 'hover',
  },
  devToolbar: {
    enabled: false,
  },
  integrations: [
    sitemap({
      filter: (page) => !page.includes('/404') && !page.includes('/go/'),
      serialize: sitemapSerialize,
    }),
  ],
  vite: {
    plugins: [tailwindcss()],
    build: {
      cssMinify: true,
      minify: 'esbuild',
      target: 'es2022',
      modulePreload: { polyfill: false },
    },
  },
  build: {
    inlineStylesheets: 'auto',
  },
});
