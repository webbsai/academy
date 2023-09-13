import { useEffect, useMemo, useState } from 'react';
import { courseDifficultyLevels, resourceTypes } from '../../consts';
import clsx from 'clsx';
import type { Lesson } from '../Lessons/AllLessons';

function AllResources() {
	const [selectedResourceType, setSelectedResourceType] = useState('');

	return (
		<>
			<div className='flex py-6 mx-auto overflow-x-auto sm:px-12 max-w-fit'>
				{resourceTypes.map((resource) => (
					<button
						onClick={() => setSelectedResourceType(resource)}
						className={clsx(
							'py-3 px-6 relative border-b border-black/30 dark:border-white/30',
							selectedResourceType === resource &&
								"after:absolute after:content-[''] after:left-0 after:right-0 after:h-[4px] after:bottom-0 after:bg-primary after:w-full after:mx-auto"
						)}
					>
						{resource}
					</button>
				))}
			</div>
			<div>
				<div className='text-center'>
					<h2 className='text-2xl font-bold md:text-3xl lg:text-5xl'>
						All Resources
					</h2>
					<p className='text-base md:text-lg lg:text-xl max-w-[800px] mx-auto mt-4'>
						Learn from my bite-sized WebbsAI tutorials where I show you how to
						create stunning effects.
					</p>
				</div>

				<div className='grid grid-cols-1 mt-16 sm:grid-cols-2 md:grid-cols-3 gap-7'>
					{Array.from(Array(8)).map(() => (
						<a href=''>
							<div className='bg-[#EEEEEE] dark:bg-[#131313] p-5 pb-8 flex flex-col gap-5 rounded-[20px]'>
								<div className='h-[150px] rounded-[20px] bg-secondary-light dark:bg-black' />
								<h3 className='text-lg md:text-xl lg:text-2xl'>Resource</h3>
								<p className='text-xs lg:text-sm text-black/70 dark:text-white/70 max-h-[100px] text-ellipsis overflow-hidden'>
									Lorem ipsum dolor sit amet consectetur adipisicing elit.
									Provident quod harum ipsam consequatur impedit quas,
									consectetur inventore deleniti dolorem minus repellat
									necessitatibus quia explicabo, mollitia minima nihil eaque
									aspernatur magnam!
								</p>
							</div>
						</a>
					))}
				</div>

				<button className='block mt-8 rounded-[20px] bg-secondary-light dark:bg-secondary-dark px-5 py-4 mx-auto'>
					Load More
				</button>
			</div>
		</>
	);
}

export default AllResources;
