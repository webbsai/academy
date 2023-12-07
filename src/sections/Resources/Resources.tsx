import { useMemo, useState } from "react"
import type { ResourceType } from "../../types"
import { resourceTypes } from "../../consts"
import clsx from "clsx"
import { Search } from "../../components/icons/icons"
import AllResources from "./AllResources"

function Resources({ resources }: { resources: ResourceType[] }) {
	const [selectedTag, setSelectedTag] = useState("")
	const [resourceFilter, setResourceFilter] = useState<string>("")

	const filteredResources = useMemo(() => {
		if (!selectedTag || selectedTag === "All") return resources

		return resources.filter((resource: ResourceType) =>
			resource.data.tags.includes(selectedTag.toLowerCase())
		)
	}, [selectedTag])

	const searchedResources = useMemo(() => {
		if (!resourceFilter) return resources

		return resources.filter((resource: ResourceType) =>
			resource.data.title
				.toLowerCase()
				.includes(resourceFilter.toLowerCase())
		)
	}, [resourceFilter])

	return (
		<>
			<section className="px-4 mx-auto sm:px-12 xl:max-w-6xl xl:px-0">
				<div className="text-center">
					<h1 className="text-3xl font-bold font-manrope md:text-4xl lg:text-6xl">
						The WebbsAI Resources
					</h1>
					<p className="text-base md:text-lg lg:text-xl max-w-[800px] mx-auto mt-8">
						Learn from my bite-sized WebbsAI tutorials where we show
						you how to create stunning effects and animations on
						your websites.
					</p>
				</div>
				<div className="mt-8">
					<div className="flex bg-secondary-light dark:bg-secondary-dark rounded-[20px] h-[60px] items-center px-8 gap-x-4 max-w-[400px] mx-auto">
						<Search className="invert dark:invert-0" />
						<input
							onFocus={e => {
								;(e.target as HTMLInputElement)!.parentElement?.classList.add(
									"outline",
									"outline-1"
								)
							}}
							onBlur={e => {
								;(e.target as HTMLInputElement)!.parentElement?.classList.remove(
									"outline",
									"outline-1"
								)
							}}
							onChange={e =>
								setResourceFilter(
									(e.target as HTMLInputElement).value
								)
							}
							value={resourceFilter}
							placeholder="Search resources"
							className="w-full bg-transparent outline-none"
						/>
					</div>
				</div>
			</section>

			{!resourceFilter && (
				<section className="px-4 mx-auto mt-40 sm:px-12 xl:max-w-6xl xl:px-0">
					<h2 className="text-3xl text-center font-manrope font-bold md:text-4xl lg:text-6xl">
						WebbsAI Latest{" "}
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
					<div
						style={{
							backgroundImage: `url(${resources[0].data.image})`
						}}
						className="mt-8 bg-center bg-no-repeat bg-cover h-[500px] rounded-[20px] p-8 flex flex-col gap-4 justify-end text-white"
					>
						<h3 className="text-2xl font-semibold md:text-3xl">
							{resources[0].data.title}
						</h3>
						<p className="text-base lg:text-lg max-w-[600px]">
							{resources[0].data.description}
						</p>
					</div>
				</section>
			)}

			<section className="px-4 mx-auto mt-40 sm:px-12 xl:max-w-[82rem] xl:px-0">
				<AllResources
					resourceFilter={resourceFilter}
					resources={
						resourceFilter ? searchedResources : filteredResources
					}
				/>
				{/* <RecentBlogs blogs={filteredBlogs} /> */}
			</section>
		</>
	)
}

export default Resources
