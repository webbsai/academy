import { defineConfig } from 'astro/config';
import react from '@astrojs/react';
import tailwind from '@astrojs/tailwind';

import starlight from '@astrojs/starlight';

// https://astro.build/config
export default defineConfig({
	site: 'https://example.com',
	integrations: [
		react(),
		tailwind(),
		starlight({
			title: 'WebbsAI',
			customCss: ['./src/tailwind.css'],
		}),
	],
});
