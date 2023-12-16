import { useEffect, useMemo, useState } from "preact/hooks"
import { courseDifficultyLevels } from "../../consts"
import clsx from "clsx"
import type { StarlightDocType } from "../../types"

function AllCourses({
	courses,
	courseFilter
}: {
	courses: StarlightDocType[]
	courseFilter: string
}) {
	const [numberToDisplay, setNumberToDisplay] = useState<number>(3)
	const [currentCourses, setCurrentCourses] =
		useState<StarlightDocType[]>(courses)
	const [selectedLevel, setSelectedLevel] = useState<string>("")

	const filteredCourses = useMemo(() => {
		if (!selectedLevel || selectedLevel === "All") return courses
		return courses.filter(
			course => course.id.split("/")[1] === selectedLevel
		)
	}, [courses, selectedLevel])

	useEffect(() => {
		setCurrentCourses(courses?.slice(0, numberToDisplay))
	}, [numberToDisplay, courses])

	return (
		<>
			<div className="flex py-6 mx-auto overflow-x-auto sm:px-12 max-w-fit">
				{courseDifficultyLevels.map(level => (
					<button
						onClick={() => setSelectedLevel(level)}
						className={clsx(
							"py-3 px-6 relative border-b border-black/30 dark:border-white/30",
							selectedLevel === level &&
								"after:absolute after:content-[''] after:left-0 after:right-0 after:h-[4px] after:bottom-0 after:bg-primary after:w-full after:mx-auto"
						)}
					>
						{level}
					</button>
				))}
			</div>
			<div>
				{!courseFilter && (
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
								Courses
							</span>
						</h2>
						<p className="text-sm font-medium dark:text-white/60 md:text-base lg:text-lg max-w-[800px] mx-auto mt-8">
							Learn from my bite-sized WebbsAI tutorials where I
							show you how to create stunning effects and
							animations on your websites.
						</p>
					</div>
				)}
				<div className="grid grid-cols-1 mt-14 sm:grid-cols-2 md:grid-cols-3 gap-6 w-full">
					{!selectedLevel &&
						currentCourses?.map(course => (
							<a href={course.slug}>
								<div class="bg-[#EEEEEE] lg:max-w-[26.3125rem] h-[23.6875rem] border-[1px] border-solid border-gray-300 border-opacity-[0.45] dark:bg-[#131313] flex flex-col rounded-[20px]">
									<div class="overflow-hidden h-[12.75rem]">
										<div
											class="h-full w-full bg-cover bg-center bg-no-repeat rounded-tl-[20px] rounded-tr-[20px]"
											style={{
												backgroundImage: `url(${
													course.data.banner!
														.content as string
												})`
											}}
										/>
									</div>

									<div class="my-[1.25rem] ml-[1.19rem] mr-[1.15rem] flex flex-col gap-[1.04rem]">
										<h3 class="text-base font-normal truncate md:text-lg lg:text-xl">
											{course.data.title}
										</h3>
										<p class="text-xs h-8 lg:text-xs text-black/70 dark:text-white/70 max-h-[80px] line-clamp-2">
											{course.data.description}
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
											<p class="text-[0.75rem] font-semibold dark:text-white">
												{course.data.category}
											</p>
											<p class=" text-[0.75rem] font-semibold dark:text-white">
												{course.data.readTime}
											</p>
										</div>
									</div>
								</div>
							</a>
						))}
					{selectedLevel &&
						filteredCourses?.map(course => (
							<a href={course.slug}>
								<div class="bg-[#EEEEEE] lg:max-w-[26.3125rem] h-[23.6875rem] border-[1px] border-solid border-gray-300 border-opacity-[0.45] dark:bg-[#131313] flex flex-col rounded-[20px]">
									<div class="overflow-hidden h-[12.75rem]">
										<div
											class="h-full w-full bg-cover bg-center bg-no-repeat rounded-tl-[20px] rounded-tr-[20px]"
											style={{
												backgroundImage: `url(${
													course.data.banner!
														.content as string
												})`
											}}
										/>
									</div>

									<div class="my-[1.25rem] ml-[1.19rem] mr-[1.15rem] flex flex-col gap-[1.04rem]">
										<h3 class="text-base font-normal truncate md:text-lg lg:text-xl">
											{course.data.title}
										</h3>
										<p class="text-xs h-8 lg:text-xs text-black/70 dark:text-white/70 max-h-[80px] line-clamp-2">
											{course.data.description}
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
											<p class="text-[0.75rem] font-semibold dark:text-white">
												{course.data.category}
											</p>
											<p class=" text-[0.75rem] font-semibold dark:text-white">
												{course.data.readTime}
											</p>
										</div>
									</div>
								</div>
							</a>
						))}
				</div>
				{(!currentCourses || currentCourses?.length === 0) &&
					(!filteredCourses || filteredCourses?.length === 0) && (
						<h3 className="text-xl font-semibold text-center">
							Stay Tuned for the Upcoming Content
						</h3>
					)}
				{!(numberToDisplay >= courses?.length) &&
					courses?.length > 0 &&
					!courseFilter &&
					!selectedLevel && (
						<button
							onClick={() => setNumberToDisplay(prev => prev + 3)}
							className="block mt-8 rounded-[20px] bg-secondary-light dark:bg-secondary-dark px-5 py-4 mx-auto"
						>
							Load more courses
						</button>
					)}
			</div>
		</>
	)
}

export default AllCourses
