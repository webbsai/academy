import { useState, useEffect } from 'react';
import type { StarlightDocType } from '../../types';
import { RightArrow } from '../../components/icons/icons';

function PopularCourses({ courses }: { courses: StarlightDocType[] }) {
	const [numberToDisplay, setNumberToDisplay] = useState<number>(3);
	const [currentCourses, setCurrentCourses] =
		useState<StarlightDocType[]>(courses);

	useEffect(() => {
		setCurrentCourses(courses?.slice(0, numberToDisplay));
	}, [numberToDisplay, courses]);

	return (
		<>
			<div>
				<div>
					<h2 className='text-2xl font-bold text-center md:text-3xl lg:text-5xl'>
						Popular Courses
					</h2>
					<a
						href='/courses'
						className='flex items-center justify-center gap-4 mt-8 text-lg md:text-xl lg:text-2xl'
					>
						<span className='underline'>Explore all</span>
						<RightArrow className='invert dark:invert-0' />
					</a>
				</div>
				<div className='grid items-center grid-cols-1 mt-8 sm:grid-cols-2 md:grid-cols-3 gap-7'>
					{currentCourses?.map((course) => (
						<a href={course.slug}>
							<div className='bg-[#EEEEEE] dark:bg-[#131313] p-5 pb-8 flex flex-col gap-5 rounded-[20px]'>
								<img
									src={course.data.banner!.content as string}
									className='h-[200px] rounded-[20px]'
								/>
								<h3 className='text-base md:text-lg lg:text-xl'>
									{course.data.title}
								</h3>
								<p className='text-xs lg:text-sm text-black/70 dark:text-white/70 max-h-[80px] text-ellipsis overflow-hidden'>
									{course.data.description}
								</p>
							</div>
						</a>
					))}
				</div>
				{!currentCourses ||
					(!(currentCourses?.length >= 1) && (
						<h3 className='text-xl font-semibold text-center'>
							Stay Tuned for the Upcoming Content
						</h3>
					))}
				{numberToDisplay < courses?.length && courses.length > 0 && (
					<button
						onClick={() => setNumberToDisplay((prev) => prev + 3)}
						className='block mt-8 rounded-[20px] bg-secondary-light dark:bg-secondary-dark px-5 py-4 mx-auto'
					>
						Load More
					</button>
				)}
			</div>
		</>
	);
}

export default PopularCourses;
