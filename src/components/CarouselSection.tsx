import { Splide, SplideSlide, SplideTrack } from "@splidejs/react-splide"
import "@splidejs/react-splide/css"
import { useMemo } from "preact/hooks"

function CarouselSection({ lessons }: { lessons: any[] }) {
	const memoizedLessons = useMemo(() => lessons, [lessons])

	return memoizedLessons?.length > 0 ? (
		<Splide
			hasTrack={false}
			options={{
				height: "100%",
				perPage: 1,
				gap: "2rem",
				type: "loop",
				pauseOnHover: false,
				perMove: 1,
				pagination: false,
				autoplay: true,
				mediaQuery: "min",
				breakpoints: {
					767: {
						padding: "12rem"
					}
				}
			}}
		>
			<SplideTrack>
				{memoizedLessons?.map((lesson, index) => (
					<SplideSlide key={index}>
						<a href={lesson.slug}>
							<img
								src={lesson.data.banner!.content as string}
								className="h-[450px] rounded-[13px] w-full"
							/>
						</a>
					</SplideSlide>
				))}
			</SplideTrack>
		</Splide>
	) : null
}

export default CarouselSection
