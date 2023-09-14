import { useMemo, useState } from 'react';
import { Search } from '../../components/icons/icons';
import AllLessons from './AllLessons';
import type { StarlightDocType } from '../../types';

function Lessons({ lessons }: { lessons: StarlightDocType[] }) {
	const [lessonFilter, setLessonFilter] = useState<string>('');

	const filteredLessons = useMemo(() => {
		if (!lessonFilter) return lessons;
		return lessons.filter((lesson) =>
			lesson.data.title.toLowerCase().includes(lessonFilter.toLowerCase())
		);
	}, [lessons, lessonFilter]);

	return (
		<>
			<section className='px-4 mx-auto sm:px-12 xl:max-w-6xl xl:px-0'>
				<div className='text-center'>
					<h1 className='text-3xl font-bold md:text-4xl lg:text-6xl'>
						The WebbsAI Lessons
					</h1>
					<p className='text-base md:text-lg lg:text-xl max-w-[800px] mx-auto mt-4'>
						Learn from my bite-sized WebbsAI tutorials where I show you how to
						create stunning effects and animations on your websites.
					</p>
				</div>
				<div className='mt-16'>
					<div className='flex bg-secondary-light dark:bg-secondary-dark rounded-[20px] h-[60px] items-center px-8 gap-x-4 max-w-[400px] mx-auto'>
						<Search className='invert dark:invert-0' />
						<input
							onChange={(e) => setLessonFilter(e.target.value)}
							value={lessonFilter}
							placeholder='Search lessons'
							className='w-full bg-transparent outline-none'
						/>
					</div>
				</div>
			</section>

			{!lessonFilter && (
				<section className='px-4 mx-auto mt-16 sm:px-12 xl:max-w-6xl xl:px-0'>
					<div className='text-center'>
						<h2 className='text-2xl font-bold md:text-3xl lg:text-5xl'>
							Latest Lesson
						</h2>
					</div>
					<a href={lessons[0].slug}>
						<div
							style={{
								backgroundImage: `url(${lessons[0].data.banner!.content})`,
							}}
							className='mt-8 bg-center bg-no-repeat bg-cover h-[500px] rounded-[20px] relative'
						>
							<div className='absolute top-0 left-0 flex flex-col justify-end w-full h-full gap-4 p-8 rounded-[20px] bg-black/50 text-white'>
								<h3 className='text-2xl font-semibold md:text-3xl'>
									{lessons[0].data.title}
								</h3>
								<p className='text-base lg:text-lg max-w-[600px]'>
									{lessons[0].data.description}
								</p>
							</div>
						</div>
					</a>
				</section>
			)}

			<section className='px-4 mx-auto mt-16 sm:px-12 xl:max-w-6xl xl:px-0'>
				<AllLessons lessonFilter={lessonFilter} lessons={filteredLessons} />
			</section>
		</>
	);
}

export default Lessons;
