import { useMemo, useState } from 'react';
import { Search } from '../../components/icons/icons';
import AllCourses from './AllCourses';
import type { StarlightDocType } from '../../types';

function Courses({ courses }: { courses: StarlightDocType[] }) {
	const [courseFilter, setCourseFilter] = useState('');

	const filteredLessons = useMemo(() => {
		if (!courseFilter) return courses;
		return courses.filter((course) =>
			course.data.title.toLowerCase().includes(courseFilter.toLowerCase())
		);
	}, [courses, courseFilter]);

	return (
		<>
			<section className='px-4 mx-auto sm:px-12 xl:max-w-6xl xl:px-0'>
				<div className='text-center'>
					<h1 className='text-3xl font-bold md:text-4xl lg:text-6xl'>
						The WebbsAI Courses
					</h1>
					<p className='text-base md:text-lg lg:text-xl max-w-[800px] mx-auto mt-4'>
						Learn from my bite-sized WebbsAI tutorials where we show you how to
						create stunning effects and animations on your websites.
					</p>
				</div>
				<div className='mt-16'>
					<div className='flex bg-secondary-light dark:bg-secondary-dark rounded-[20px] h-[60px] items-center px-8 gap-x-4 max-w-[400px] mx-auto'>
						<Search className='invert dark:invert-0' />
						<input
							onFocus={(e) => {
								(e.target as HTMLInputElement)!.parentElement?.classList.add(
									'outline',
									'outline-1'
								);
							}}
							onBlur={(e) => {
								(e.target as HTMLInputElement)!.parentElement?.classList.remove(
									'outline',
									'outline-1'
								);
							}}
							onChange={(e) =>
								setCourseFilter((e.target as HTMLInputElement).value)
							}
							value={courseFilter}
							placeholder='Search courses'
							className='w-full bg-transparent outline-none'
						/>
					</div>
				</div>
			</section>

			{!courseFilter && (
				<section className='px-4 mx-auto mt-16 sm:px-12 xl:max-w-6xl xl:px-0'>
					<div className='text-center'>
						<h2 className='text-2xl font-bold md:text-3xl lg:text-5xl'>
							Latest Course
						</h2>
					</div>
					<a href={courses[0].slug}>
						<div
							style={{
								backgroundImage: `url(${courses[0].data.banner!.content})`,
							}}
							className='mt-8 bg-center bg-no-repeat bg-cover h-[500px] rounded-[20px] relative'
						>
							<div className='absolute top-0 left-0 flex flex-col justify-end w-full h-full gap-4 p-8 rounded-[20px] bg-black/50 text-white'>
								<h3 className='text-2xl font-semibold md:text-3xl'>
									{courses[0].data.title}
								</h3>
								<p className='text-base lg:text-lg max-w-[600px]'>
									{courses[0].data.description}
								</p>
							</div>
						</div>
					</a>
				</section>
			)}

			<section className='px-4 mx-auto mt-16 sm:px-12 xl:max-w-6xl xl:px-0'>
				<AllCourses courseFilter={courseFilter} courses={filteredLessons} />
			</section>
		</>
	);
}

export default Courses;
