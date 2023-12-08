import TwitterIcon from "./icons/twitter"
import SlackIcon from "./icons/slack"
import GithubIcon from "./icons/github"
import { footerLinks } from "../consts"
import { CardSpotlightEffect } from "./CardSpotlightEffect"

function Footer() {
	return (
		<footer className="overflow-x-clip py-[5.6rem] pt-16 text-sm dark:border-gray-900 dark:bg-black text-gray-400 lg:text-lg">
			<div className="flex flex-col justify-between px-4 mx-auto sm:px-10 md:px-14 lg:px-12 xl:max-w-[82rem] xl:px-2">
				<div className="flex gap-[8rem] items-center">
					<div className="flex flex-col h-full">
						<div className="flex flex-col gap-[1.62rem] text-lg font-semibold text-left lg:text-center">
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
							<p className="text-left text-black font-manrope font-normal text-lg dark:text-white">
								The website builder for everyone, from novices
								to pros.
								<br></br>
								With our generative AI technology.
							</p>
						</div>

						<div className="flex mt-[3.38rem] space-x-4 text-gray-800 dark:text-gray-300">
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

					<div className="flex gap-[14.12rem]">
						{footerLinks.map(column => (
							<div key={column.title} className="">
								<h1 className="text-white text-[1.375rem] font-medium">
									{column.title}
								</h1>
								<ul className="mt-[1.56rem] flex flex-col items-start gap-[1.02rem] justify-start">
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
					className="w-full mt-[4.56rem] rounded-[1.25rem] flex justify-between py-[2.19rem] flex-col lg:flex-row"
					style={{
						border: "4px solid transparent",
						background:
							"linear-gradient(black 0 0) padding-box, linear-gradient(to right, #1566C0, #7C3AED) border-box"
						// background:
						// 	"linear-gradient(183deg, rgba(21, 102, 192, 0.22) 2.18%, rgba(124, 58, 237, 0.00) 34.24%) padding-box, linear-gradient(to right, #1566C0, #7C3AED) border-box",
					}}
				>
					<div className="flex items-center gap-[2.62rem] ml-[3.94rem]">
						<a
							className="w-[3.1875rem] h-[3.1875rem] rounded-[0.625rem] bg-[#1566C0] flex items-center justify-center text-4xl font-bold text-gray-800 dark:text-white md:text-5xl"
							aria-label="WebbsAI Logo"
							href="/"
						>
							<img
								class="h-[2.04rem]"
								src="new-logo.svg"
								alt="WebbsAI Academy Logo"
							/>
						</a>

						<div className="flex flex-col gap-[0.62rem]">
							<p className="dark:text-white font-manrope font-medium text-2xl">
								Join our awesome community
							</p>
							<p className="dark:text-white font-manrope font-normal text-[1.125rem]">
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
						className="px-[1.25rem] pt-[0.88rem] pb-[0.94rem] rounded-[0.625rem] mr-[1.88rem]"
					>
						<span
							style={{
								background:
									"linear-gradient(91deg, #FFF 0.31%, #7C3AED 102.8%)",
								backgroundClip: "text",
								WebkitBackgroundClip: "text",
								WebkitTextFillColor: "transparent"
							}}
							className="text-center font-manrope	text-[1.125rem] font-semibold"
						>
							Join our Discord
						</span>
					</button>
				</div>

				<div className="flex flex-col gap-8 lg:flex-row justify-between items-center mt-[2.06rem]">
					<p className="dark:text-white font-manrope text-[1.125rem] font-normal">
						Privacy Policy <span className="font-bold">.</span>{" "}
						Terms & Conditions
					</p>
					<p className="dark:text-white font-manrope text-[1.125rem] font-normal">
						WebbsAI, LLC. All rights reserved.
					</p>
				</div>
			</div>
		</footer>
	)
}

export default Footer
