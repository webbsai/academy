import clsx from 'clsx';
import { paths } from '../consts';
import { useEffect, useState } from 'react';

function Header() {
	const onDropDownHandler = () => {
		let layer = document.getElementById('layer');
		let navlinks = document.getElementById('navlinks');
		layer!.classList.toggle('scale-y-0');
		navlinks!.classList.toggle('hidden');
		navlinks!.classList.toggle('opacity-0');
	};

	const [theme, setTheme] = useState('dark');

	const handleClick = () => {
		setTheme(theme === 'light' ? 'dark' : 'light');
	};
	useEffect(() => {
		setTheme(window.localStorage.getItem('starlight-theme') ?? 'light');
	}, []);

	useEffect(() => {
		if (theme === 'dark') {
			document.documentElement.classList.add('dark');
		} else {
			document.documentElement.classList.remove('dark');
		}
		window.localStorage.setItem('starlight-theme', theme);
	}, [theme]);

	return (
		<header className='overflow-x-clip not-content'>
			<nav
				id='navbar'
				className='absolute inset-x-0 z-30 w-screen bg-[#EEEEEE] font-urbanist dark:bg-[#111111] lg:w-full lg:bg-transparent lg:dark:bg-transparent'
			>
				<div className='px-4 mx-auto sm:px-12'>
					<div className='relative flex flex-wrap items-center justify-between gap-6 lg:gap-0 lg:py-4'>
						<div className='relative z-20 flex w-full gap-x-6 text-[#31456a] md:px-0 lg:w-max'>
							<a
								className='flex items-center order-2 text-2xl font-semibold text-black dark:text-white lg:order-1'
								aria-label='WebbsAI Logo'
								href='/'
							>
								WebbsAI
							</a>

							<button
								aria-label='humburger'
								id='hamburger'
								className='relative order-1 px-3 py-2 -mr-6 lg:order-2 lg:hidden'
								onClick={() => onDropDownHandler()}
							>
								<div className='rounded-[8px] bg-white px-3 py-4 dark:bg-black'>
									<div
										aria-hidden='true'
										className='m-auto h-0.5 w-5 rounded bg-sky-900 transition duration-300 dark:bg-gray-300'
									></div>
									<div
										aria-hidden='true'
										className='m-auto mt-2 h-0.5 w-5 rounded bg-sky-900 transition duration-300 dark:bg-gray-300'
									></div>
								</div>
							</button>
						</div>

						<div
							id='layer'
							aria-hidden='true'
							className='fixed inset-0 w-screen h-screen transition duration-500 origin-bottom scale-y-0 z-12 bg-white/70 backdrop-blur-2xl dark:bg-gray-900/70 lg:hidden'
						></div>

						<div
							id='navlinks'
							className='scale-1-0 absolute left-0 top-full z-30 hidden w-[100%] origin-top-right translate-y-1 flex-col flex-wrap justify-end gap-6 rounded-3xl border border-gray-100 bg-white p-8 opacity-0 shadow-2xl shadow-gray-600/10 transition-all duration-300 dark:border-gray-700 dark:bg-gray-800 dark:shadow-none lg:visible lg:relative lg:flex lg:w-auto lg:translate-y-0 lg:scale-100 lg:flex-row lg:items-center lg:gap-0 lg:border-none lg:bg-transparent lg:p-0 lg:opacity-100 lg:shadow-none lg:peer-checked:translate-y-0 dark:lg:bg-transparent'
						>
							<div
								className={clsx(
									'rounded-[20px] px-2 py-1 text-black dark:text-white lg:text-black lg:bg-black/10 lg:dark:bg-white/10'
								)}
							>
								<ul className='gap-1 space-y-6 text-base font-medium tracking-wide lg:flex lg:space-y-0 lg:text-sm'>
									{paths.map((path, index) => (
										<li
											key={index}
											className={clsx(
												'rounded-[15px] p-[14px] hover:bg-primary/80 dark:hover:bg-[#131426]/80 hover:text-white',
												'/' + path.name.toLowerCase() ===
													window?.location.pathname.toLowerCase() &&
													'bg-primary dark:bg-[#131426] text-white'
											)}
										>
											<a href={path.path} className='block transition md:px-4'>
												<span>{path.name}</span>
											</a>
										</li>
									))}
									<li className='flex items-center rounded-[15px] px-[14px]'>
										<button
											onClick={handleClick}
											aria-label='switch theme'
											className='relative rounded-full switcher group h-9 w-9 before:absolute before:inset-0 before:rounded-full before:border before:border-gray-200 before:bg-gray-50 before:bg-gradient-to-b before:transition-transform before:duration-300 hover:before:scale-105 active:duration-75 active:before:scale-95 dark:before:border-gray-700 dark:before:bg-gray-800 lg:flex'
										>
											<svg
												xmlns='http://www.w3.org/2000/svg'
												className='relative hidden w-5 h-5 m-auto duration-300 transistion fill-gray-500 group-hover:rotate-180 group-hover:fill-yellow-400 dark:block dark:fill-gray-300'
												viewBox='0 0 20 20'
												fill='currentColor'
											>
												<path
													fillRule='evenodd'
													d='M10 2a1 1 0 011 1v1a1 1 0 11-2 0V3a1 1 0 011-1zm4 8a4 4 0 11-8 0 4 4 0 018 0zm-.464 4.95l.707.707a1 1 0 001.414-1.414l-.707-.707a1 1 0 00-1.414 1.414zm2.12-10.607a1 1 0 010 1.414l-.706.707a1 1 0 11-1.414-1.414l.707-.707a1 1 0 011.414 0zM17 11a1 1 0 100-2h-1a1 1 0 100 2h1zm-7 4a1 1 0 011 1v1a1 1 0 11-2 0v-1a1 1 0 011-1zM5.05 6.464A1 1 0 106.465 5.05l-.708-.707a1 1 0 00-1.414 1.414l.707.707zm1.414 8.486l-.707.707a1 1 0 01-1.414-1.414l.707-.707a1 1 0 011.414 1.414zM4 11a1 1 0 100-2H3a1 1 0 000 2h1z'
													clipRule='evenodd'
												></path>
											</svg>
											<svg
												xmlns='http://www.w3.org/2000/svg'
												className='relative w-5 h-5 m-auto duration-300 transistion fill-gray-500 group-hover:-rotate-90 group-hover:fill-blue-900 dark:hidden'
												viewBox='0 0 20 20'
												fill='currentColor'
											>
												<path d='M17.293 13.293A8 8 0 016.707 2.707a8.001 8.001 0 1010.586 10.586z'></path>
											</svg>
										</button>
									</li>
								</ul>
							</div>
						</div>

						<div className='hidden opacity-0 lg:block'>
							<a
								className='flex items-center order-2 text-2xl font-semibold text-black dark:text-white lg:order-1'
								aria-label='WebbsAI Logo'
								href='/'
							>
								WebbsAI
							</a>
						</div>
					</div>
				</div>
			</nav>
		</header>
	);
}

export default Header;
