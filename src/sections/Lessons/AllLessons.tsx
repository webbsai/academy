import { useEffect, useState } from "react"
import type { StarlightDocType } from "../../types"

function AllLessons({
	lessons,
	lessonFilter
}: {
	lessons: StarlightDocType[]
	lessonFilter: string
}) {
	const [numberToDisplay, setNumberToDisplay] = useState(3)
	const [currentLessons, setCurrentLessons] =
		useState<StarlightDocType[]>(lessons)

	useEffect(() => {
		setCurrentLessons(lessons?.slice(0, numberToDisplay))
	}, [numberToDisplay, lessons])

	return (
		<>
			<div>
				{!lessonFilter && (
					<div className="text-center">
						<h2 className="text-3xl font-bold md:text-4xl lg:text-6xl">
							All{" "}
							<span
								style={{
									background:
										"linear-gradient(91deg, #1566C0 47.22%, #7C3AED 73.36%)",
									color: "transparent",
									WebkitBackgroundClip: "text",
									backgroundClip: "text"
								}}
							>
								Lessons
							</span>
						</h2>
						<p className="text-sm font-medium dark:text-white/60 md:text-base lg:text-[1.125rem] max-w-[800px] mx-auto mt-8 ">
							Learn from my bite-sized WebbsAI tutorials where I
							show you how to create stunning effects and
							animations on your websites.
						</p>
					</div>
				)}
				<div className="grid grid-cols-1 mt-[3.75rem] sm:grid-cols-2 md:grid-cols-3 gap-6 w-full">
					{currentLessons?.map(lesson => (
						<a href={lesson.slug}>
							<div class="bg-[#EEEEEE] lg:max-w-[26.3125rem] h-[23.6875rem] border-[1px] border-solid border-gray-300 border-opacity-[0.45] dark:bg-[#131313] flex flex-col rounded-[20px]">
								<div class="overflow-hidden h-52">
									<div
										class="h-full w-full bg-cover bg-center bg-no-repeat rounded-tl-[20px] rounded-tr-[20px]"
										style={{
											backgroundImage: `url(${
												lesson.data.banner!
													.content as string
											})`
										}}
									/>
								</div>

								<div class="my-[1.25rem] ml-[1.19rem] mr-[1.15rem] flex flex-col gap-[1.04rem]">
									<h3 class="text-base font-normal truncate md:text-lg lg:text-xl">
										{lesson.data.title}
									</h3>
									<p class="text-xs h-8 lg:text-xs text-black/70 dark:text-white/70 max-h-[80px] line-clamp-2">
										{lesson.data.description}
									</p>
								</div>

								<div class=" flex flex-col  ml-[1.19rem] mr-[3.38rem]">
									<div class="flex justify-between">
										<p class="text-[0.75rem] font-normal dark:text-white">
											Category
										</p>
										<p class=" text-[0.75rem] font-normal dark:text-white">
											Read time
										</p>
									</div>
									<div class="mt-[0.64rem] flex justify-between mb-[1.23rem]">
										<p class=" text-[0.75rem] font-semibold dark:text-white">
											{lesson.data.category}
										</p>
										<p class="text-[0.75rem] font-semibold dark:text-white">
											{lesson.data.readTime}
										</p>
									</div>
								</div>
							</div>
						</a>
					))}
				</div>
				{!currentLessons ||
					(!(currentLessons?.length >= 0) && (
						<h3 className="text-xl font-semibold text-center">
							Stay Tuned for the Upcoming Content
						</h3>
					))}
				{!(numberToDisplay >= lessons?.length) &&
					lessons?.length > 0 &&
					!lessonFilter && (
						<button
							onClick={() => setNumberToDisplay(prev => prev + 3)}
							className="block mt-8 rounded-[20px] bg-secondary-light dark:bg-secondary-dark px-5 py-4 mx-auto"
						>
							Load more lessons
						</button>
					)}
			</div>
		</>
	)
}

export default AllLessons
