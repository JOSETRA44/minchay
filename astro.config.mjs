import { defineConfig } from 'astro/config';
import sitemap from '@astrojs/sitemap';
import { readFile, writeFile } from 'node:fs/promises';

// Sustituir por el dominio público confirmado o definir SITE_URL durante el build.
const defaultSite = 'https://minchay.example';
const site = process.env.SITE_URL || defaultSite;

export default defineConfig({
  site,
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
          const sitemapUrl = new URL('/sitemap-index.xml', site).href;
          await writeFile(file, template.replace(defaultSite + '/sitemap-index.xml', sitemapUrl));
        },
      },
    },
  ],
});
