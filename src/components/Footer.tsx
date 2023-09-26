import TwitterIcon from './icons/twitter';
import SlackIcon from './icons/slack';
import GithubIcon from './icons/github';
import { footerLinks } from '../consts';
import DiscordIcon from './icons/discord';

function Footer() {
	return (
		<footer className='overflow-x-clip py-[5.6rem] pt-16 text-sm dark:border-gray-900 bg-black text-gray-400 lg:text-lg'>
			<div className='flex flex-col justify-between px-4 mx-auto sm:px-10 md:px-14 lg:px-12 xl:max-w-6xl xl:px-2'>
				<div className='flex flex-col items-center justify-center h-full'>
					<div className='flex text-lg font-semibold text-left lg:text-center'>
						<a
							className='flex items-center text-4xl font-bold text-white md:text-5xl'
							aria-label='WebbsAI Logo'
							href='/'
						>
							WebbsAI
						</a>
					</div>

					<div className='flex mt-6 space-x-4 text-gray-300'>
						<a
							className='hover:text-primary'
							href='https://twitter.com/webbsai'
							target='_blank'
							rel='noreferrer'
						>
							<TwitterIcon />
						</a>
						<a
							className='hover:text-primary'
							href='https://github.com/webbsai'
							target='_blank'
							rel='noreferrer'
						>
							<GithubIcon />
						</a>
						<a
							className='hover:text-primary'
							href='https://slack.webbsai.com'
							target='_blank'
							rel='noreferrer'
						>
							<SlackIcon />
						</a>
						<a
							className='hover:text-primary'
							href='https://discord.gg/3Wc5MS5w'
							target='_blank'
							rel='noreferrer'
						>
							<DiscordIcon />
						</a>
					</div>
				</div>
				<div>
					<ul className='flex flex-wrap justify-center gap-8 mx-auto mt-12 w-fit'>
						{footerLinks.map((column) =>
							column.links.map((link) => (
								<li key={link.title} className='text-lg md:text-xl'>
									<a
										className='mb-3 text-center text-gray-800 transition-colors dark:text-gray-500 hover:text-gray-900 hover:text-white'
										target={link.href.includes('http') ? '_blank' : '_self'}
										href={link.href}
									>
										{link.title}
									</a>
								</li>
							))
						)}
					</ul>
				</div>
				<hr className='my-8 border dark:border-white/30'></hr>
				<p className='text-center text-gray-800 dark:text-gray-500'>
					The website builder for everyone, from novices to pros.<br></br>
					With our generative AI technology.
				</p>
			</div>
		</footer>
	);
}

export default Footer;
