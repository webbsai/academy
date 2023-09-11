/** @type {import('tailwindcss').Config} */
const starlightPlugin = require('@astrojs/starlight-tailwind');

const accent = {
	200: '#86B9F2',
	600: '#1566C0',
	900: '#0A305B',
	950: '#041528',
};
const gray = {
	100: '#ffffff',
	200: '#808080',
	300: '#6C6C6C',
	400: '#575757',
	500: '#434343',
	700: '#2E2E2E',
	800: '#1A1A1A',
	900: '#000000',
};

module.exports = {
	content: ['./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}'],
	theme: {
		extend: {
			fontFamily: {
				sans: ['Poppins', 'Inter'],
			},
			colors: { accent, gray },
		},
	},
	darkMode: 'class',
	// plugins: [starlightPlugin()],
};
