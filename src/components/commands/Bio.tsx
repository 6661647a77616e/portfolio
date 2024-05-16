import { GoVerified } from "react-icons/go";
import { SiGithub,  SiX  } from "react-icons/si";

export default function Bio() {
	const links = [
		{
			title: "Github",
			Icon: SiGithub,
			href: "https://github.com/fadzwanashriq",
			text: "@fadzwanashriq",
		},
		{
			title: "Twitter",
			Icon: SiX,
			href: "https://twitter.com/IDEEIwXJ56jSQ66",
			text: "@IDEEIwXJ56jSQ66",
		},
	
	];
	return (
		<div className="mt-2 mb-2 w-11/12 mx-auto">
			<div className="flex items-center gap-3 mb-3 ">
				<img
					src="https://avatars.githubusercontent.com/u/111303147?v=4"
					alt="fadzwanashriq"
					className="w-40 h-40 rounded-full border-2 border-yellow-200"
				/>
				<div>
					<div className="flex items-center gap-1">
						<h1 className="text-2xl">Fadzwan Ashriq</h1>
						<GoVerified className="text-blue-500 text-2xl" />
					</div>
					<p className="text-lg text-gray-400">Join the world 22 years ago.</p>
				</div>
			</div>
			<p>
				Hi there my name is Fadzwan. I am self-taught web developer. I love to do Machine Learning and Pentesting. .I use arch btw.
			</p>
			<div className="grid grid-cols-2">
				{links.map(({ Icon, text, href, title }, index) => {
					return (
						<div className="flex items-center gap-1 mt-3" key={index}>
							<div className="text-lg flex items-center gap-1 text-yellow-200">
								<Icon />
								<h1>{title}</h1>
							</div>
							<a
								href={href}
								target="_blank"
								rel="noreferrer"
								className="flex-1 underline text-blue-300 "
							>
								{text}
							</a>
						</div>
					);
				})}
			</div>
		</div>
	);
}
