import { defineConfig } from 'astro/config';
import tailwind from '@astrojs/tailwind';
import starlight from '@astrojs/starlight';

import preact from '@astrojs/preact';

// https://astro.build/config
export default defineConfig({
	site: 'https://example.com',
	integrations: [
		tailwind({}),
		starlight({
			title: 'WebbsAI',
			customCss: ['./src/styles/custom.css', './src/styles/tailwind.css'],
		}),
		preact({ compat: true }),
	],
});
