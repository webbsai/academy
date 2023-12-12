export type StarlightDocType = {
	id: string
	slug: string
	body: string
	collection: string
	data: {
		title: string
		description?: string | undefined
		editUrl?: string | boolean
		head?: any
		template?: string
		lastUpdated?: boolean | string | Date
		sidebar?: any
		banner?: {
			content: string | HTMLElement
		}
		pagefind?: boolean
		category: string
		readTime: string
	}
	render: any
}

export type BlogType = {
	slug: string
	data: {
		title: string
		description: string
		author: {
			name: string
			avatar: string
		}
		image: string
		pubDate: string
		tags: string[]
	}
}

export type ResourceType = {
	slug: string
	data: {
		title: string
		description: string
		image: string
		pubDate: string
		tags: string[]
	}
}
