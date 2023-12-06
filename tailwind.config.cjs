/** @type {import('tailwindcss').Config} */

module.exports = {
	content: ['./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}'],
	theme: {
		extend: {
			fontFamily: {
				sans: ['Poppins', 'Inter'],
				manrope: ['Manrope', 'Poppins', 'Inter'],
			},
			colors: {
				primary: '#1566C0',
				background: {
					dark: '#000000',
					light: '#ffffff',
				},
				secondary: {
					dark: '#131313',
					light: '#EEEEEE',
				},
			},
		},
		corePlugins: {
			preflight: false,
		},
	},
	darkMode: 'class',
};
