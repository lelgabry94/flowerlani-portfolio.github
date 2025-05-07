import { defineConfig } from 'astro/config';
import tailwind from '@astrojs/tailwind';

export default defineConfig({
  // Serve from root for GitHub user page
  base: '/',
  outDir: 'docs',
  integrations: [tailwind()],
});