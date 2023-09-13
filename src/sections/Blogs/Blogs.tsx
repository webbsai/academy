import { useMemo, useState } from 'react';
import { blogTags } from '../../consts';
import RecentBlogs, { type Blog } from './RecentBlogs';
import clsx from 'clsx';

function Blogs({ blogs }: { blogs: any }) {
	const [selectedTag, setSelectedTag] = useState('');

	const filteredBlogs = useMemo(() => {
		if (!selectedTag) return blogs;

		return blogs.filter((blog: Blog) => blog.data.tags.includes(selectedTag));
	}, [selectedTag]);

	return (
		<>
			<div className='flex py-6 mx-auto overflow-x-auto sm:px-12 max-w-fit'>
				{blogTags.map((tag) => (
					<button
						onClick={() => setSelectedTag(tag)}
						className={clsx(
							'py-3 px-6 relative border-b border-black/30 dark:border-white/30',
							selectedTag === tag &&
								"after:absolute after:content-[''] after:left-0 after:right-0 after:h-[4px] after:bottom-0 after:bg-primary after:w-full after:mx-auto"
						)}
					>
						{tag}
					</button>
				))}
			</div>

			<section className='px-4 mx-auto mt-12 sm:px-12 xl:max-w-6xl xl:px-0'>
				<div className="mt-8 bg-[url('https://picsum.photos/615/300/?blur=6')] bg-center bg-no-repeat bg-cover h-[500px] rounded-[20px] p-8 flex flex-col gap-4 justify-end text-white">
					<small className='block text-xs lg:text-sm'>Featured</small>
					<h3 className='text-2xl font-semibold md:text-3xl'>
						A Prompt to generate website in minutes using AI.
					</h3>
					<p className='text-base lg:text-lg max-w-[600px]'>
						Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed
						eleifend risus nec quam condem, quis scelerisque arcu ultrices.
					</p>
				</div>
			</section>

			<section className='px-4 mx-auto mt-24 sm:px-12 xl:max-w-6xl xl:px-0'>
				<RecentBlogs blogs={filteredBlogs} />
			</section>
		</>
	);
}

export default Blogs;
