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
			<div>
				{!courseFilter && (
					<div className="text-center">
						<h2 className="text-3xl font-manrope font-bold md:text-4xl lg:text-6xl">
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
						<p className="text-sm font-medium dark:text-white/60 md:text-base lg:text-[1.125rem] max-w-[800px] mx-auto mt-8 font-manrope">
							Learn from my bite-sized WebbsAI tutorials where I
							show you how to create stunning effects and
							animations on your websites.
						</p>
					</div>
				)}
				<div className="grid grid-cols-1 mt-[3.75rem] sm:grid-cols-2 md:grid-cols-3 gap-6 w-full">
					{!selectedLevel &&
						currentCourses?.map(course => (
							<a href={course.slug}>
								<div class="bg-[#EEEEEE] lg:max-w-[26.3125rem] lg:max-h-[23.6875rem] dark:bg-[#131313] flex flex-col gap-2 rounded-[20px]">
									<div
										style={{
											height: "12.75rem",
											overflow: "hidden"
										}}
									>
										<div
											style={{
												backgroundImage: `url(${
													course.data.banner!
														.content as string
												})`,
												height: "100%",
												width: "100%",
												backgroundSize: "cover",
												backgroundPosition: "center",
												backgroundRepeat: "no-repeat"
											}}
										/>
									</div>

									<div class="my-[1.25rem] ml-[1.19rem] mr-[1.15rem] flex flex-col gap-[1.04rem]">
										<h3 class="text-base font-normal font-manrope truncate md:text-lg lg:text-xl">
											{course.data.title}
										</h3>
										<p class="text-xs font-manrope lg:text-xs text-black/70 dark:text-white/70 max-h-[80px] overflow-hidden">
											{course.data.description}
										</p>
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
