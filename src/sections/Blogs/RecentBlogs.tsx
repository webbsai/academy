import { useEffect, useState } from "react"
import { monthNames } from "../../consts"
import type { BlogType } from "../../types"

function RecentBlogs({ blogs }: { blogs: BlogType[] }) {
	const [numberToDisplay, setNumberToDisplay] = useState(3)
	const [currentBlogs, setCurrentBlogs] = useState<BlogType[]>(blogs)

	useEffect(() => {
		setCurrentBlogs(blogs?.slice(0, numberToDisplay))
	}, [numberToDisplay, blogs])

	return (
		<>
			<div>
				<div>
					<h2 className="text-2xl text-center font-bold md:text-3xl lg:text-5xl">
						Recent Posts
					</h2>
				</div>
				<div className="grid items-center grid-cols-1 mt-8 sm:grid-cols-2 md:grid-cols-3 gap-7">
					{currentBlogs?.map(blog => (
						<a href={`blogs/${blog.slug}`}>
							<div class="bg-[#EEEEEE] lg:max-w-md h-96 border-[1px] border-solid border-gray-300 border-opacity-[0.45] dark:bg-[#131313] flex flex-col rounded-[20px]">
								<div class="overflow-hidden h-52">
									<div
										class="h-full w-full bg-cover bg-center bg-no-repeat rounded-tl-[20px] rounded-tr-[20px]"
										style={{
											backgroundImage: `url(${blog.data.image})`
										}}
									/>
								</div>

								<div class="my-5 ml-5 mr-5 flex flex-col gap-4">
									<h3 class="text-base font-normal truncate md:text-lg lg:text-xl">
										{blog.data.title}
									</h3>
									<p class="text-xs h-8 lg:text-xs text-black/70 dark:text-white/70 max-h-[80px] line-clamp-2">
										{blog.data.description}
									</p>
								</div>

								<div class=" flex flex-col  ml-5 mr-14">
									<div class="flex justify-between">
										<p class=" text-xs font-normal dark:text-white">
											Category
										</p>
										<p class=" text-xs font-normal dark:text-white">
											Read time
										</p>
									</div>
									<div class="mt-3 flex justify-between mb-5">
										<p class=" text-xs font-semibold dark:text-white">
											{blog.data.category}
										</p>
										<p class=" text-xs font-semibold dark:text-white">
											{blog.data.readTime}
										</p>
									</div>
								</div>
							</div>
						</a>
					))}
				</div>
				{!currentBlogs ||
					(!(currentBlogs?.length >= 1) && (
						<h3 className="text-xl font-semibold text-center">
							Stay Tuned for the Upcoming Content
						</h3>
					))}
				{numberToDisplay < blogs?.length && blogs.length > 0 && (
					<button
						onClick={() => setNumberToDisplay(prev => prev + 3)}
						className="block mt-8 rounded-[20px] bg-secondary-light dark:bg-secondary-dark px-5 py-4 mx-auto"
					>
						Load More
					</button>
				)}
			</div>
		</>
	)
}

export default RecentBlogs
