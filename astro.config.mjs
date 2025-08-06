// @ts-check
import { defineConfig } from 'astro/config';

import tailwindcss from '@tailwindcss/vite';

// https://astro.build/config
export default defineConfig({
  site: 'https://noefm13.github.io',
  base: 'mi-proyecto',
  vite: {
    plugins: [tailwindcss()]
  }
});