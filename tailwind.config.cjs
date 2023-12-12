/** @type {import('tailwindcss').Config} */

module.exports = {
	content: ["./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}"],
	theme: {
		extend: {
			fontFamily: {
				sans: ["Manrope", "Inter"]
			},
			colors: {
				primary: "#1566C0",
				background: {
					dark: "#000000",
					light: "#ffffff"
				},
				secondary: {
					dark: "#131313",
					light: "#EEEEEE"
				},
				gray: {
					1: "#454545",
					2: "#0F1219"
				},
				blue: {
					1: "#2563EB",
					2: "#1566C0"
				}
			}
		},
		corePlugins: {
			preflight: false
		}
	},
	darkMode: "class"
}
