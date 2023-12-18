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
			title: "WebbsAI",
			customCss: ["./src/styles/custom.css", "./src/styles/tailwind.css"],
			logo: {
				src: "./public/logo-dark.svg"
			}
		}),
		preact({ compat: true })
	]
})
