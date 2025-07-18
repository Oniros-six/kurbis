// @ts-check
import { defineConfig } from 'astro/config';
import react from '@astrojs/react';
import tailwindcss from "@tailwindcss/vite";
import tunnel from 'astro-tunnel';
import sitemap from "@astrojs/sitemap";

export default defineConfig({
  vite: {
    plugins: [tailwindcss()],
  },
  integrations: [react(), tunnel(), sitemap()],
  site: "https://kurbis.uy",
});