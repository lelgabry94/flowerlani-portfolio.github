import { defineConfig } from 'astro/config';
import tailwind from '@astrojs/tailwind';

export default defineConfig({
  // Deploy to GitHub Pages from /docs
  base: '/flowerlani-portfolio/',
  outDir: 'docs',
  integrations: [tailwind()],
});