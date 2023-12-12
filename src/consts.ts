// Place any global data in this file.
// You can import this data from anywhere in your site by using the `import` keyword.

export const SITE_TITLE =
	"WebbsAI Academy | Generate a custom website using Generative AI"
export const SITE_DESCRIPTION =
	"Welcome to WebbsAI Academy! Learn to generate amazing websites in 30 secs using WebbAI's magical AI website builder."

export const paths = [
	{
		name: "Lessons",
		path: "/lessons"
	},
	{
		name: "Courses",
		path: "/courses"
	},
	{
		name: "Resources",
		path: "/resources"
	},
	{
		name: "Blogs",
		path: "/blogs"
	}
]

export const footerLinks = [
	{
		title: "Product",
		links: [
			{
				title: "Home",
				href: `${import.meta.env.WEBBSAI_LANDING_URL}/pricing`
			},
			{
				title: "Features",
				href: `${import.meta.env.WEBBSAI_LANDING_URL}/pricing`
			},
			{
				title: "Academy",
				href: `${import.meta.env.WEBBSAI_LANDING_URL}/pricing`
			}
		]
	},
	{
		title: "Company",
		links: [
			{
				title: "Our Team",
				href: "https://www.linkedin.com/company/webbsai/about/"
			},
			{
				title: "Our Value",
				href: "https://www.linkedin.com/company/webbsai/jobs/"
			},
			{
				title: "Blogs",
				href: "https://www.linkedin.com/company/webbsai/jobs/"
			}
		]
	},
	{
		title: "Resources",
		links: [
			{
				title: "Documentation",
				href: `${import.meta.env.WEBBSAI_LANDING_URL}/contact`
			},
			{
				title: "Contact",
				href: `${import.meta.env.WEBBSAI_LANDING_URL}/tos`
			},
			{
				title: "Help Center",
				href: `${import.meta.env.WEBBSAI_LANDING_URL}/privacy`
			}
		]
	}
]

export const DEFAULT_SCREEN_SIZE = 1360

export const monthNames = [
	"Jan",
	"Feb",
	"Mar",
	"Apr",
	"May",
	"Jun",
	"Jul",
	"Aug",
	"Sep",
	"Oct",
	"Nov",
	"Dec"
]

export const blogTags = [
	"All",
	"Product Update",
	"Web designs",
	"FAQ's",
	"Technical",
	"Interviews",
	"Trends"
]

export const courseDifficultyLevels = ["All", "HTML", "CSS", "JavaScript"]

export const resourceTypes = [
	"All",
	"Buttons",
	"Animations",
	"Nav bars",
	"Tables"
]
