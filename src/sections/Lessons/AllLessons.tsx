import { useEffect, useState } from 'react';
import type { StarlightDocType } from '../../types';

function AllLessons({
	lessons,
	lessonFilter,
}: {
	lessons: StarlightDocType[];
	lessonFilter: string;
}) {
	const [numberToDisplay, setNumberToDisplay] = useState(3);
	const [currentLessons, setCurrentLessons] =
		useState<StarlightDocType[]>(lessons);

	useEffect(() => {
		setCurrentLessons(lessons?.slice(0, numberToDisplay));
	}, [numberToDisplay, lessons]);

	return (
		<>
			<div>
				{!lessonFilter && (
					<div className='text-center'>
						<h2 className='text-2xl font-bold md:text-3xl lg:text-5xl'>
							All Lessons
						</h2>
						<p className='text-base md:text-lg lg:text-xl max-w-[800px] mx-auto mt-4'>
							Learn from my bite-sized WebbsAI tutorials where I show you how to
							create stunning effects.
						</p>
					</div>
				)}
				<div className='grid grid-cols-1 mt-16 sm:grid-cols-2 md:grid-cols-3 gap-7'>
					{currentLessons?.map((lesson) => (
						<a key={lesson.slug} href={lesson.slug}>
							<div className='bg-[#EEEEEE] dark:bg-[#131313] p-5 pb-8 flex flex-col gap-5 rounded-[20px]'>
								<img
									src={lesson.data.banner!.content as string}
									className='h-[150px] rounded-[20px]'
								/>
								<h3 className='text-lg md:text-xl lg:text-2xl'>
									{lesson.data.title}
								</h3>
								<p className='text-xs lg:text-sm text-black/70 dark:text-white/70 max-h-[100px] text-ellipsis overflow-hidden'>
									{lesson.data.description}
								</p>
							</div>
						</a>
					))}
				</div>
				{!currentLessons ||
					(!(currentLessons?.length >= 0) && (
						<h3 className='text-xl font-semibold text-center'>
							Stay Tuned for the Upcoming Content
						</h3>
					))}
				{!(numberToDisplay >= lessons?.length) &&
					lessons?.length > 0 &&
					!lessonFilter && (
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

export default AllLessons;
