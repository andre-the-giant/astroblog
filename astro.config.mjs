// @ts-check
import { defineConfig } from 'astro/config';
import sitemap from '@astrojs/sitemap';

// https://astro.build/config
export default defineConfig({
  outDir: 'build',
  site:"https://andre-collin.3615toronto.ca",
  integrations: [sitemap()]
});