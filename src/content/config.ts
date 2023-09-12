import { defineCollection, z } from 'astro:content';
import { docsSchema } from '@astrojs/starlight/schema';

const blog = defineCollection({
	// Type-check frontmatter using a schema
	schema: z.object({
		title: z.string(),
		description: z.string(),
		tags: z.array(z.string()),
		pubDate: z
			.date(),
		lastUpdated: z.date().optional(),
		author: z.object({
			avatar: z.string(),
			name: z.string()
		}),
		image: z.string()
	}),
});

export const collections = { blog,
	lessons: defineCollection({ schema: docsSchema() }), 
	videos: defineCollection({ schema: docsSchema() }), 
	docs: defineCollection({ schema: docsSchema() }),
};
