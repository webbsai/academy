// Place any global data in this file.
// You can import this data from anywhere in your site by using the `import` keyword.

export const SITE_TITLE = 'WebbsAI Academy';
export const SITE_DESCRIPTION = 'Welcome to WebbsAI Academy!';

export const paths = [
    {
        name: 'Lessons',
        path: '/lessons',
    },
    {
        name: 'Resources',
        path: '/resources',
    },
    {
        name: 'Blogs',
        path: '/blogs',
    },
];

export const footerLinks = [
    {
        title: 'Home',
        links: [{title: "Home", href:"/"}]
    },
	{
		title: "Product",
		links: [{ title: "Pricing", href: "/pricing" }]
	},
	{
		title: "Company",
		links: [
			{
				title: "About us",
				href: "https://www.linkedin.com/company/webbsai/about/"
			},
			{
				title: "Careers",
				href: "https://www.linkedin.com/company/webbsai/jobs/"
			}
		]
	},
	{
		title: "Resources",
		links: [
			{ title: "Contact", href: "/contact" },
			{ title: "Terms", href: "/tos" },
			{ title: "Privacy", href: "/privacy" }
		]
	}
]

export const DEFAULT_SCREEN_SIZE = 1360

export const monthNames = ["Jan", "Feb", "Mar", "Apr", "May", "Jun",
  "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"
];

export const blogTags = [
"Product Update",
"Web designs",
"FAQ's",
"Technical",
"Interviews",
"Trends"
]
