import { defineConfig } from 'astro/config';
import react from '@astrojs/react';
import preact from '@astrojs/preact';
import vue from '@astrojs/vue';
import solidJs from '@astrojs/solid-js';
import svelte from '@astrojs/svelte';


// https://astro.build/config
export default defineConfig({
  integrations: [react(), preact(), vue(), solidJs(), svelte()]
});