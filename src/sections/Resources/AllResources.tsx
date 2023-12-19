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
				<div className="grid grid-cols-1 mt-16 sm:grid-cols-2 md:grid-cols-3 gap-7">
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
