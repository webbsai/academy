import type { CollectionEntry } from 'astro:content';
import FormattedDate from '../../components/FormattedDate';

type Props = CollectionEntry<'blog'>['data'] & {
	children: React.ReactNode;
};

export default function BlogPost(props: Props) {
	const { title, pubDate, lastUpdated, image, children } = props;
	return (
		<div className='px-4 mx-auto sm:px-12 xl:max-w-6xl xl:px-0'>
			<article className='!dark:text-white'>
				<div className='hero-image'>
					{image && <img width={1020} height={510} src={image} alt='' />}
				</div>
				<div className='prose text-black/80 dark:text-white/80'>
					<div className='title'>
						<div className='flex flex-col gap-4 date text-black/50 dark:text-white/50'>
							<FormattedDate date={pubDate} />
							{lastUpdated && (
								<div className='last-updated-on'>
									Last updated on <FormattedDate date={lastUpdated} />
								</div>
							)}
						</div>
						<h1 className='text-3xl font-bold text-black md:text-4xl lg:text-5xl dark:text-white'>
							{title}
						</h1>
						<hr />
					</div>
					<div className='flex flex-col gap-8'>{children}</div>
				</div>
			</article>
		</div>
	);
}
{
	/* <html lang='en'>
	<head>
		<BaseHead title={title} description={description} />
	</head>

	<body className='bg-white dark:bg-black'>
		<Header />
		
		<Footer />
	</body>
</html> */
}
