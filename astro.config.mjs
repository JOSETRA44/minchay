import { defineConfig } from 'astro/config';
import sitemap from '@astrojs/sitemap';
import { readFile, writeFile } from 'node:fs/promises';

// Sustituir por el dominio público confirmado o definir SITE_URL durante el build.
const defaultSite = 'https://minchay.example';
const site = process.env.SITE_URL || defaultSite;

export default defineConfig({
  site,
  // '/' en dominio propio; '/minchay-web' en la preview de GitHub Pages.
  base: process.env.BASE_PATH || '/',
  output: 'static',
  trailingSlash: 'always',
  integrations: [
    sitemap(),
    {
      name: 'minchay-robots',
      hooks: {
        'astro:build:done': async ({ dir }) => {
          const file = new URL('robots.txt', dir);
          const template = await readFile(file, 'utf8');
          const basePath = (process.env.BASE_PATH || '').replace(/\/$/, '');
          const sitemapUrl = new URL(`${basePath}/sitemap-index.xml`, site).href;
          await writeFile(file, template.replace(defaultSite + '/sitemap-index.xml', sitemapUrl));
        },
      },
    },
  ],
});
