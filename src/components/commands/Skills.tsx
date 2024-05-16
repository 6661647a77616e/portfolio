import ProgressBar from "../ProgressBar";
import {
	SiReact,
	SiTailwindcss,
	SiFlutter,
	SiCplusplus,
	SiPython
} from "react-icons/si";

export default function Skills() {
	const listOfSkills = [

		{
			Icon: SiReact,
			barWidth: "w-85%",
			percentageValue: "85%",
			text: "React",
		},
		{
			Icon: SiTailwindcss,
			barWidth: "w-80%",
			percentageValue: "80%",
			text: "Tailwind",
		},
		{
			Icon: SiFlutter,
			barWidth: "w-80%",
			percentageValue: "80%",
			text: "Flutter",
		},
		{
			Icon: SiCplusplus,
			barWidth: "w-85%",
			percentageValue: "85%",
			text: "C++",
		},
		{
			Icon: SiPython,
			barWidth: "w-85%",
			percentageValue: "85%",
			text: "Python",
		},
	];

	return (
		<div>
			{listOfSkills.map(({ Icon, barWidth, percentageValue, text }, index) => {
				return (
					<ProgressBar
						Icon={Icon}
						barWidth={barWidth}
						percentageValue={percentageValue}
						key={index}
						text={text}
					/>
				);
			})}
		</div>
	);
}
