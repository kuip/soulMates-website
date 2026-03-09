// @ts-check
import { defineConfig } from 'astro/config';

export default defineConfig({
  site: 'https://soulmates.provable.dev',
  output: 'static',
  build: { format: 'directory' },
  markdown: {
    shikiConfig: { theme: 'github-light' },
  },
});
