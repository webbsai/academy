import preact from "@astrojs/preact"
import starlight from "@astrojs/starlight"
import tailwind from "@astrojs/tailwind"
import { defineConfig } from "astro/config"

// https://astro.build/config
export default defineConfig({
	site: "https://academy.webbsai.com",
	integrations: [
		tailwind({}),
		starlight({
			title: "",
			customCss: ["./src/styles/custom.css", "./src/styles/tailwind.css"],
			logo: {
				light: "./public/logo-light.svg",
				dark: "./public/logo-dark.svg"
			},
			favicon: "./public/favicon.ico"
		}),
		preact({ compat: true })
	]
})
