import { useEffect, useState } from "preact/hooks"
import type { ResourceType } from "../../types"

function AllResources({
	resources,
	resourceFilter
}: {
	resources: ResourceType[]
	resourceFilter: string
}) {
	const [numberToDisplay, setNumberToDisplay] = useState<number>(3)
	const [currentResources, setCurrentResources] =
		useState<ResourceType[]>(resources)

	useEffect(() => {
		setCurrentResources(resources?.slice(0, numberToDisplay))
	}, [numberToDisplay, resources])

	return (
		<>
			<div>
				<div className="text-center">
					<h2 className="text-2xl font-bold md:text-3xl lg:text-5xl">
						All Resources
					</h2>
					<p className="text-base md:text-lg lg:text-xl max-w-[800px] mx-auto mt-4">
						Learn from my bite-sized WebbsAI tutorials where we show
						you how to create stunning effects.
					</p>
				</div>
				{/* {resources?.map((resource: ResourceType) => ( */}
				{/* <a href={`/resources/${resource.slug}`}></a> */}

				<div className="grid grid-cols-1 mt-16 sm:grid-cols-2 md:grid-cols-3 gap-7">
					{resources?.map((resource: ResourceType) => (
						<>
							<a href={`/resources/${resource.slug}`}>
								<div className="bg-[#EEEEEE] dark:bg-[#131313] p-5 pb-8 flex flex-col gap-5 rounded-[20px]">
									<img
										src={resource.data.image}
										className="h-[200px] rounded-[20px] bg-secondary-light dark:bg-black"
									/>
									<h3 className="text-base md:text-lg lg:text-xl">
										{resource.data.title}
									</h3>
									<p className="text-xs lg:text-sm text-black/70 dark:text-white/70 max-h-[80px] text-ellipsis overflow-hidden">
										{resource.data.description}
									</p>
								</div>
							</a>

							<a href={`/resources/${resource.slug}`}>
								<div class="bg-[#EEEEEE] lg:max-w-[26.3125rem] lg:max-h-[23.6875rem] dark:bg-[#131313] flex flex-col gap-2 rounded-[20px]">
									<div
										style={{
											height: "12.75rem",
											overflow: "hidden"
										}}
									>
										{/* <div
											style={{
												backgroundImage: `url(${
													resource.data.banner!
														.content as string
												})`,
												height: "100%",
												width: "100%",
												backgroundSize: "cover",
												backgroundPosition: "center",
												backgroundRepeat: "no-repeat"
											}}
										/> */}
									</div>

									<div class="my-[1.25rem] ml-[1.19rem] mr-[1.15rem] flex flex-col gap-[1.04rem]">
										<h3 class="text-base font-normal font-manrope truncate md:text-lg lg:text-xl">
											{resource.data.title}
										</h3>
										<p class="text-xs font-manrope lg:text-xs text-black/70 dark:text-white/70 max-h-[80px] overflow-hidden">
											{resource.data.description}
										</p>
									</div>
								</div>
							</a>
						</>
					))}
				</div>
				{!currentResources ||
					(!(currentResources?.length > 0) && (
						<h3 className="text-xl font-semibold text-center">
							Stay Tuned for the Upcoming Content
						</h3>
					))}

				{!(numberToDisplay >= resources?.length) &&
					resources?.length > 0 &&
					!resourceFilter && (
						<button
							onClick={() =>
								setNumberToDisplay((prev: number) => prev + 3)
							}
							className="block mt-8 rounded-[20px] bg-secondary-light dark:bg-secondary-dark px-5 py-4 mx-auto"
						>
							Load More
						</button>
					)}
			</div>
		</>
	)
}

export default AllResources
