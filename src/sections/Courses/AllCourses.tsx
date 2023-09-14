import { useEffect, useMemo, useState } from 'react';
import { courseDifficultyLevels } from '../../consts';
import clsx from 'clsx';
import type { StarlightDocType } from '../../types';

function AllCourses({
	courses,
	courseFilter,
}: {
	courses: StarlightDocType[];
	courseFilter: string;
}) {
	const [numberToDisplay, setNumberToDisplay] = useState<number>(3);
	const [currentCourses, setCurrentCourses] =
		useState<StarlightDocType[]>(courses);
	const [selectedLevel, setSelectedLevel] = useState<string>('');

	const filteredCourses = useMemo(() => {
		if (!selectedLevel || selectedLevel === 'All') return courses;
		return courses.filter(
			(course) => course.id.split('/')[1] === selectedLevel
		);
	}, [courses, selectedLevel]);

	useEffect(() => {
		setCurrentCourses(courses?.slice(0, numberToDisplay));
	}, [numberToDisplay, courses]);

	return (
		<>
			<div className='flex py-6 mx-auto overflow-x-auto sm:px-12 max-w-fit'>
				{courseDifficultyLevels.map((level) => (
					<button
						onClick={() => setSelectedLevel(level)}
						className={clsx(
							'py-3 px-6 relative border-b border-black/30 dark:border-white/30',
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
					<div className='text-center'>
						<h2 className='text-2xl font-bold md:text-3xl lg:text-5xl'>
							All Courses
						</h2>
						<p className='text-base md:text-lg lg:text-xl max-w-[800px] mx-auto mt-4'>
							Learn from my bite-sized WebbsAI tutorials where I show you how to
							create stunning effects.
						</p>
					</div>
				)}
				<div className='grid grid-cols-1 mt-16 sm:grid-cols-2 md:grid-cols-3 gap-7'>
					{!selectedLevel &&
						currentCourses?.map((course) => (
							<a href={course.slug}>
								<div className='bg-[#EEEEEE] dark:bg-[#131313] p-5 pb-8 flex flex-col gap-5 rounded-[20px]'>
									<img
										src={course.data.banner!.content as string}
										className='h-[150px] rounded-[20px]'
									/>
									<h3 className='text-lg md:text-xl lg:text-2xl'>
										{course.data.title}
									</h3>
									<p className='text-xs lg:text-sm text-black/70 dark:text-white/70 max-h-[100px] text-ellipsis overflow-hidden'>
										{course.data.description}
									</p>
								</div>
							</a>
						))}
					{selectedLevel &&
						filteredCourses?.map((course) => (
							<a href={course.slug}>
								<div className='bg-[#EEEEEE] dark:bg-[#131313] p-5 pb-8 flex flex-col gap-5 rounded-[20px]'>
									<img
										src={course.data.banner!.content as string}
										className='h-[150px] rounded-[20px]'
									/>
									<h3 className='text-lg md:text-xl lg:text-2xl'>
										{course.data.title}
									</h3>
									<p className='text-xs lg:text-sm text-black/70 dark:text-white/70 max-h-[100px] text-ellipsis overflow-hidden'>
										{course.data.description}
									</p>
								</div>
							</a>
						))}
				</div>
				{(!currentCourses || currentCourses?.length === 0) &&
					(!filteredCourses || filteredCourses?.length === 0) && (
						<h3 className='text-xl font-semibold text-center'>
							Stay Tuned for the Upcoming Content
						</h3>
					)}
				{!(numberToDisplay >= courses?.length) &&
					courses?.length > 0 &&
					!courseFilter &&
					!selectedLevel && (
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

export default AllCourses;
