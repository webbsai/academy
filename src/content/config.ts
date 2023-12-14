import { docsSchema } from "@astrojs/starlight/schema"
import { defineCollection, z } from "astro:content"
const blog = defineCollection({
	// Type-check frontmatter using a schema
	schema: z.object({
		title: z.string(),
		description: z.string(),
		tags: z.array(z.string()),
		pubDate: z.date(),
		lastUpdated: z.date().optional(),
		author: z.object({
			avatar: z.string(),
			name: z.string()
		}),
		image: z.string(),
		category: z.string(),
		readTime: z.string()
	})
})

const resources = defineCollection({
	schema: z.object({
		title: z.string(),
		description: z.string(),
		tags: z.array(z.string()),
		pubDate: z.date(),
		lastUpdated: z.date().optional(),
		image: z.string(),
		category: z.string(),
		readTime: z.string()
	})
})

export const collections = {
	blog,
	resources,
	docs: defineCollection({
		schema: docsSchema({
			extend: z.object({
				// Add a new field to the schema.
				category: z.string(),
				readTime: z.string()
			})
		})
	})
}
