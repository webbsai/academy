import { useEffect, useState } from 'react';
import { monthNames } from '../../consts';

export type Blog = {
	slug: string;
	data: {
		title: string;
		description: string;
		author: {
			name: string;
			avatar: string;
		};
		image: string;
		pubDate: string;
		tags: string[];
	};
};

function RecentBlogs({ blogs }: { blogs: Blog[] }) {
	const [numberToDisplay, setNumberToDisplay] = useState(3);
	const [currentBlogs, setCurrentBlogs] = useState<Blog[]>(blogs);

	useEffect(() => {
		setCurrentBlogs(blogs?.slice(0, numberToDisplay));
	}, [numberToDisplay, blogs]);

	return (
		<>
			<div>
				<div>
					<h2 className='text-2xl font-bold md:text-3xl lg:text-5xl'>
						Recent Posts
					</h2>
				</div>
				<div className='grid items-center grid-cols-1 mt-8 sm:grid-cols-2 md:grid-cols-3 gap-7'>
					{currentBlogs?.map((blog) => (
						<a href={`blogs/${blog.slug}`}>
							<div className='p-5 pb-8 flex flex-col gap-5 rounded-[20px]'>
								<img
									src={blog.data.image}
									className='h-[150px] rounded-[20px]'
								/>
								<h3 className='text-base font-medium md:text-lg lg:text-xl'>
									{blog.data.title}
								</h3>
								<p className='text-xs lg:text-sm text-black/70 dark:text-white/70 max-h-[100px] text-ellipsis overflow-hidden'>
									{blog.data.description}
								</p>
								<div className='flex items-center text-xs gap-x-2 lg:text-sm text-black/70 dark:text-white/70'>
									<img
										className='w-10 h-10 rounded-full'
										src={blog?.data.author?.avatar}
									/>
									<p className='truncate'>{blog?.data.author?.name}</p> |
									<p className='truncate'>
										{monthNames[new Date(blog?.data.pubDate).getMonth()]}{' '}
										{new Date(blog?.data.pubDate).getDate()},{' '}
										{new Date(blog?.data.pubDate).getFullYear()}
									</p>
								</div>
							</div>
						</a>
					))}
				</div>
				{!currentBlogs ||
					(!(currentBlogs?.length >= 0) && (
						<h3 className='text-xl font-semibold text-center'>
							Stay Tuned for the Upcoming Content
						</h3>
					))}
				{numberToDisplay !== blogs?.length && blogs.length > 0 && (
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

export default RecentBlogs;
