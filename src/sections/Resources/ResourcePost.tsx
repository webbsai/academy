import type { CollectionEntry } from "astro:content"
import FormattedDate from "../../components/FormattedDate"
import type { ResourceType } from "../../types"

type Props = CollectionEntry<"blog">["data"] & {
	children: React.ReactNode
}

export default function BlogPost(props: Props) {
	const { title, pubDate, lastUpdated, image, children } = props
	return (
		<div className="px-4 mx-auto sm:px-12 xl:max-w-6xl xl:px-0">
			<article className="!dark:text-white">
				<div className="flex flex-col justify-center items-center mb-14 max-w-2xl mx-auto">
					<div class="rounded-xl px-3 py-2 bg-gray-300 dark:bg-gray-1 w-fit text-xs font-medium">
						animations
					</div>
					<h1 className="text-6xl font-bold mt-1">{title}</h1>
					<p className="mt-8 text-lg font-medium text-center">
						Learn from my bite-sized WebbsAI tutorials where I show
						you how to create stunning effects and animations on
						your websites.
					</p>

					<div className="mt-8 flex items-center gap-5">
						<img
							src="https://i.pravatar.cc/150?img=3"
							height="44"
							width="44"
							alt="Author Profile Picture"
							className="rounded-full"
						/>
						<div className="flex flex-col">
							<p className="text-xl font-medium">Rizwan Nasir</p>
							<p className="text-sm font-normal">
								UI/UX Designer
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
						Lorem ipsum dolor sit amet, consectetur adipiscing elit,
						sed do eiusmod tempor incididunt ut labore et dolore
						magna aliqua. Quis ipsum accumsan lacus sed do
						consectetur adipiscing elit, sed do eiusmod tempor
						incididunt ut labore et dolore magna aliqua. Quis ipsum
						accumsan lacus sed do Quis ut labore et dolore magna
						aliqua. Quis ipsum accumsan lacus sed do consectetur
						adipiscing elit, sed do eiusmod tempor incididunt ut
						labore et dolore magna aliqua. Quis ipsum accumsan lacus
						sed do Quisut labore et dolore magna aliqua. Quis ipsum
						accumsan lacus sed do consectetur adipiscing elit, sed
						do eiusmod tempor incididunt ut labore et dolore magna
						aliqua. Quis ipsum accumsan lacus sed do Quis. Lorem
						ipsum dolor sit amet, consectetur adipiscing elit, sed
						do eiusmod tempor incididunt ut labore et dolore magna
						aliqua. Quis ipsum accumsan lacus sed do consectetur
						adipiscing elit, sed do eiusmod tempor incididunt ut
						labore et dolore magna aliqua. Quis ipsum accumsan lacus
						sed do Quis
					</p>
				</div>

				<div className="mt-40 min-h-[16rem] max-w-4xl mx-auto relative">
					<div className="absolute top-20 left-44">
						<svg
							xmlns="http://www.w3.org/2000/svg"
							width="24"
							height="24"
							viewBox="0 0 24 24"
							fill="none"
							className="absolute -top-2 left-0"
						>
							<circle cx="12" cy="12" r="12" fill="#9747FF" />
						</svg>

						<svg
							xmlns="http://www.w3.org/2000/svg"
							width="201"
							height="70"
							viewBox="0 0 201 70"
							fill="none"
						>
							<path
								d="M1 2.49992C42.5 -3.16674 140.5 2.19992 200.5 68.9999"
								stroke="white"
							/>
						</svg>

						<svg
							xmlns="http://www.w3.org/2000/svg"
							width="24"
							height="24"
							viewBox="0 0 24 24"
							fill="none"
							className="-right-1 -bottom-1 absolute"
						>
							<circle cx="12" cy="12" r="12" fill="#1566C0" />
						</svg>
					</div>

					<div className="absolute right-40 top-20">
						<svg
							xmlns="http://www.w3.org/2000/svg"
							width="24"
							height="24"
							viewBox="0 0 24 24"
							fill="none"
							className="absolute bottom-0 -left-2"
						>
							<circle cx="12" cy="12" r="12" fill="#9747FF" />
						</svg>

						<svg
							xmlns="http://www.w3.org/2000/svg"
							width="24"
							height="24"
							viewBox="0 0 24 24"
							fill="none"
							className="absolute -top-3 right-0"
						>
							<circle cx="12" cy="12" r="12" fill="#1566C0" />
						</svg>

						<svg
							xmlns="http://www.w3.org/2000/svg"
							width="146"
							height="77"
							viewBox="0 0 146 77"
							fill="none"
						>
							<path
								d="M1 76.5C16.6667 48 67.4 -6.89999 145 1.50001"
								stroke="white"
							/>
						</svg>
					</div>

					<div className="flex flex-col absolute top-0 left-6">
						<h1 className="text-8xl font-semibold">01</h1>
						<p className="text-2xl font-medium">Step 1 detail</p>
					</div>

					<div className="flex flex-col absolute bottom-7 right-80">
						<h1 className="text-8xl font-semibold">02</h1>
						<p className="text-2xl font-medium">Step 2 detail</p>
					</div>

					<div className="flex flex-col absolute right-0 top-11">
						<h1 className="text-8xl font-semibold">03</h1>
						<p className="text-2xl font-medium">Step 3 detail</p>
					</div>
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

						<button className="mt-8 rounded-lg border border-blue-1 py-4 px-5">
							View All
						</button>
					</div>
					{/* <div className="grid grid-cols-1 mt-16 sm:grid-cols-2 md:grid-cols-3 gap-7">
						{resources?.map((resource: ResourceType) => (
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
					</div> */}
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
