import { defineConfig } from 'astro/config';
import tailwind from '@astrojs/tailwind';
import mdx from '@astrojs/mdx';
import sitemap from '@astrojs/sitemap';
import inlineLucide from './integrations/inline-lucide.mjs';

export default defineConfig({
  site: 'https://muusica.com',
  integrations: [tailwind(), mdx(), sitemap(), inlineLucide()],
  output: 'static',
});
