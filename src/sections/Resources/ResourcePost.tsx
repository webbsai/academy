import type { CollectionEntry } from "astro:content"

type Props = CollectionEntry<"resources">["data"] & {
	resource: CollectionEntry<"resources">
	resources: CollectionEntry<"resources">[]
	children: React.ReactNode
}

export default function BlogPost(props: Props) {
	const {
		title,
		pubDate,
		lastUpdated,
		image,
		children,
		author,
		description,
		tags,
		resources
	} = props

	return (
		<div className="px-4 mx-auto sm:px-12 xl:max-w-6xl xl:px-0">
			<article className="!dark:text-white">
				<div className="flex flex-col justify-center items-center mb-14 max-w-2xl mx-auto">
					<div class="rounded-xl px-3 py-2 bg-gray-300 dark:bg-gray-1 w-fit text-xs font-medium">
						{tags[0]}
						{resources}
					</div>
					<h1 className="text-3xl md:text-4xl lg:text-5xl xl:text-6xl font-bold mt-1">
						{title}
					</h1>
					<p className="mt-8 text-sm lg:text-base xl:text-lg font-medium text-center">
						{description}
					</p>

					<div className="mt-8 flex items-center gap-5">
						<img
							src={author.avatar}
							height="44"
							width="44"
							alt="Author Profile Picture"
							className="rounded-full"
						/>
						<div className="flex flex-col">
							<p className="text-base lg:text-lg xl:text-xl font-medium">
								{author.name}
							</p>
							<p className="text-sm font-normal">
								{author.designation}
							</p>
						</div>
					</div>
				</div>

				<div className="hero-image mt-14">
					{image && (
						<img width={1020} height={510} src={image} alt="" />
					)}
				</div>

				<div className="mt-40 flex flex-col justify-center items-start gap-8 max-w-4xl mx-auto">
					<h1 className="text-3xl font-medium ">
						About this feature
					</h1>
					<p className="dark:text-white/75 text-base font-normal">
						{children}
					</p>
				</div>

				<div className="px-4 mx-auto mt-40 sm:px-12 xl:max-w-7xl xl:px-0">
					<div className="text-center">
						<h2 className="text-3xl font-bold md:text-4xl lg:text-6xl">
							More{" "}
							<span
								style={{
									background:
										"linear-gradient(91deg, #1566C0 47.22%, #7C3AED 73.36%)",
									color: "transparent",
									WebkitBackgroundClip: "text",
									backgroundClip: "text"
								}}
							>
								Resources
							</span>
						</h2>

						<p className="text-base md:text-lg lg:text-xl max-w-[800px] mx-auto mt-8">
							Learn from my bite-sized WebbsAI tutorials where we
							show you how to create stunning effects and
							animations on your websites.
						</p>
					</div>
					<div className="grid grid-cols-1 mt-16 sm:grid-cols-2 md:grid-cols-3 gap-7">
						{resources?.map(resource => (
							<>
								<a href={`/resources/${resource.slug}`}>
									<div class="bg-secondary-light lg:max-w-md h-80 border-[1px] border-solid border-gray-300 border-opacity-40 dark:bg-secondary-dark flex flex-col rounded-2xl">
										<div class="overflow-hidden h-44">
											<div
												class="h-full w-full bg-cover bg-center bg-no-repeat rounded-tl-2xl rounded-tr-2xl"
												style={{
													backgroundImage: `url(${resource.data.image})`
												}}
											/>
										</div>

										<div class="my-5 ml-5 mr-5 flex flex-col gap-4">
											<div class="rounded-lg px-2 py-1 bg-gray-300 dark:bg-gray-1 w-fit text-xs font-medium">
												{resource.data.tags[0]}
											</div>
											<h3 class="text-base font-normal truncate md:text-lg lg:text-xl">
												{resource.data.title}
											</h3>
											<p class="text-xs h-8 lg:text-xs text-black/70 dark:text-white/70 max-h-20 line-clamp-2">
												{resource.data.description}
											</p>
										</div>
									</div>
								</a>
							</>
						))}
					</div>
				</div>
			</article>
		</div>
	)
}
{
	/* <html lang='en'>
	<head>
		<BaseHead title={title} description={description} />
	</head>

	<body className='bg-white dark:bg-black'>
		<Header />
		
		<Footer />
	</body>
</html> */
}
