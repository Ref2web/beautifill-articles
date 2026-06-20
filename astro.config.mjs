import { defineConfig } from 'astro/config';
import sitemap from '@astrojs/sitemap';

export default defineConfig({
  site: 'https://articles.beautifill.site',
  integrations: [sitemap()],
  output: 'static'
});
