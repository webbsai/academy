import TwitterIcon from "./icons/twitter"
import SlackIcon from "./icons/slack"
import GithubIcon from "./icons/github"
import { footerLinks } from "../consts"

function Footer() {
	return (
		<footer className="overflow-x-clip py-24 pt-16 text-sm dark:border-gray-900 dark:bg-black text-gray-400 lg:text-lg">
			<div className="flex flex-col justify-between px-4 mx-auto sm:px-10 md:px-14 lg:px-12 xl:max-w-7xl xl:px-2">
				<div className="flex gap-32 items-center">
					<div className="flex flex-col h-full">
						<div className="flex flex-col gap-7 text-lg font-semibold text-left lg:text-center">
							<a
								className="flex items-center text-4xl font-bold text-gray-800 dark:text-white md:text-5xl"
								aria-label="WebbsAI Logo"
								href="/"
							>
								<img
									class="dark:hidden h-[80px]"
									src="logo.svg"
									alt="WebbsAI Academy Logo"
								/>
								<img
									class="hidden dark:block h-[80px]"
									src="logo-dark.svg"
									alt="WebbsAI Academy Logo"
								/>
							</a>
							<p className="text-left text-black font-normal text-lg dark:text-white">
								The website builder for everyone, from novices
								to pros.
								<br></br>
								With our generative AI technology.
							</p>
						</div>

						<div className="flex mt-14 space-x-4 text-gray-800 dark:text-gray-300">
							<a
								className="hover:text-primary"
								href="https://twitter.com/webbsai"
								target="_blank"
								rel="noreferrer"
							>
								<TwitterIcon />
							</a>
							<a
								className="hover:text-primary"
								href="https://github.com/webbsai"
								target="_blank"
								rel="noreferrer"
							>
								<GithubIcon />
							</a>
							<a
								className="hover:text-primary"
								href="https://slack.webbsai.com"
								target="_blank"
								rel="noreferrer"
							>
								<SlackIcon />
							</a>
						</div>
					</div>

					<div className="flex gap-56">
						{footerLinks.map(column => (
							<div key={column.title} className="">
								<h1 className="text-white text-xl font-medium">
									{column.title}
								</h1>
								<ul className="mt-6 flex flex-col items-start gap-4 justify-start">
									{column.links.map(link => (
										<li
											key={link.title}
											className="text-lg md:text-xl"
										>
											<a
												className="mb-3 text-gray-800 transition-colors dark:text-gray-500 hover:text-gray-900 dark:hover:text-white"
												target={
													link.href.includes("http")
														? "_blank"
														: "_self"
												}
												href={link.href}
											>
												{link.title}
											</a>
										</li>
									))}
								</ul>
							</div>
						))}
					</div>
				</div>

				<div
					className="w-full mt-20 rounded-3xl gap-8 flex justify-center items-center py-9 flex-col lg:flex-row lg:justify-between"
					style={{
						border: "4px solid transparent",
						background:
							"linear-gradient(black 0 0) padding-box, linear-gradient(to right, #1566C0, #7C3AED) border-box"
					}}
				>
					<div className="flex items-center gap-11 ml-16">
						<img
							class="bg-blue-2 p-3 rounded-xl "
							src="new-logo.svg"
							alt="WebbsAI Academy Logo"
						/>

						<div className="flex flex-col gap-3">
							<p className="dark:text-white font-medium text-2xl">
								Join our awesome community
							</p>
							<p className="dark:text-white font-normal text-lg">
								Share work, Seek suppirt, vote on components,
								stay updated and network with others.
							</p>
						</div>
					</div>

					<button
						style={{
							background:
								"linear-gradient(95deg, rgba(21, 102, 192, 0.37) 0.51%, rgba(21, 102, 192, 0.37) 99.97%)"
						}}
						className="px-5 pt-3 pb-4 mx-20 rounded-xl mr-8 w-3/4 lg:w-fit"
					>
						<span
							style={{
								background:
									"linear-gradient(91deg, #FFF 0.31%, #7C3AED 102.8%)",
								backgroundClip: "text",
								WebkitBackgroundClip: "text",
								WebkitTextFillColor: "transparent"
							}}
							className="text-center text-lg font-semibold"
						>
							Join our Discord
						</span>
					</button>
				</div>

				<div className="flex flex-col gap-8 lg:flex-row justify-between items-center mt-8">
					<p className="dark:text-white text-sm md:text-base lg:text-lg font-normal">
						Privacy Policy <span className="font-bold">.</span>{" "}
						Terms & Conditions
					</p>
					<a className="dark:text-white text-sm md:text-base lg:text-lg font-normal cursor-pointer hover:underline">
						WebbsAI, LLC. All rights reserved.
					</a>
				</div>
			</div>
		</footer>
	)
}

export default Footer
