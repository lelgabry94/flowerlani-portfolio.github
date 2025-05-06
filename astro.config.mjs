import { defineConfig } from 'astro/config';
import tailwind from '@astrojs/tailwind';

export default defineConfig({
  // Use GitHub Pages subpath and output to docs directory
  base: '/flowerlani-portfolio/',
  outDir: 'docs',
  integrations: [tailwind()],
});