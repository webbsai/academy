import { useEffect, useMemo, useState } from "react"
import { Search } from "../../components/icons/icons"
import type { StarlightDocType } from "../../types"
import AllLessons from "./AllLessons"

function Lessons({ lessons }: { lessons: StarlightDocType[] }) {
	const [lessonFilter, setLessonFilter] = useState<string>("")
	const [debouncedLessonFilter, setDebouncedLessonFilter] =
		useState<string>("")

	useEffect(() => {
		const timerId = setTimeout(() => {
			setDebouncedLessonFilter(lessonFilter)
		}, 500)
		return () => {
			clearTimeout(timerId)
		}
	}, [lessonFilter])

	const filteredLessons = useMemo(() => {
		if (!debouncedLessonFilter) return lessons
		return lessons.filter(lesson =>
			lesson.data.title
				.toLowerCase()
				.includes(debouncedLessonFilter.toLowerCase())
		)
	}, [lessons, debouncedLessonFilter])

	return (
		<>
			<section className="px-4 mx-auto sm:px-12 xl:max-w-6xl xl:px-0">
				<div className="text-center flex flex-col items-center justify-center">
					<h1 className="text-3xl font-bold md:text-4xl lg:text-6xl">
						The WebbsAI Lessons
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
								setLessonFilter(
									(e.target as HTMLInputElement).value
								)
							}
							value={lessonFilter}
							placeholder="Search lessons"
							className="w-full bg-transparent outline-none"
						/>
					</div>
				</div>
			</section>

			{!lessonFilter && (
				<section className="px-4 mx-auto mt-40 sm:px-12 xl:max-w-6xl xl:px-0">
					<div className="text-center">
						<h2 className="text-3xl font-bold md:text-4xl lg:text-6xl">
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
								Lesson
							</span>
						</h2>
					</div>
					<a href={lessons[0].slug}>
						<div
							style={{
								backgroundImage: `url(${
									lessons[0].data.banner!.content
								})`
							}}
							className="mt-16 bg-center bg-no-repeat bg-cover h-[500px] rounded-[20px] relative"
						>
							<div className="absolute top-0 left-0 flex flex-col justify-end w-full h-full gap-4 p-8 rounded-[20px] bg-black/50 text-white">
								<h3 className="text-2xl font-semibold md:text-3xl">
									{lessons[0].data.title}
								</h3>
								<p className="text-base lg:text-lg max-w-[600px]">
									{lessons[0].data.description}
								</p>
							</div>
						</div>
					</a>
				</section>
			)}

			<section className="px-4 mx-auto mt-40 sm:px-12 xl:max-w-[82rem] xl:px-0">
				<AllLessons
					lessonFilter={lessonFilter}
					lessons={filteredLessons}
				/>
			</section>
		</>
	)
}

export default Lessons
