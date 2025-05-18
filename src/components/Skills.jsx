import { useState, useRef } from 'react';
import { SectionTitle } from './SectionTitle';
import {
	FaHtml5,
	FaReact,
	FaCss3Alt,
	FaJsSquare,
	FaGitAlt,
	FaGithub,
} from 'react-icons/fa';
import { RiTailwindCssFill } from 'react-icons/ri';
import { BiLogoTypescript } from 'react-icons/bi';
import { SiReactrouter, SiVercel, SiEslint } from "react-icons/si";
import ViteLogo from "../assets/images/vite-logo.svg?react";

const skillsData = [
	{ icon: <FaHtml5 className='text-html' />, label: 'HTML5', border: 'border-html', hover: 'hover:border-html' },
	{ icon: <FaCss3Alt className='text-css' />, label: 'CSS3', border: 'border-css', hover: 'hover:border-css' },
	{ icon: <FaReact className='text-react' />, label: 'React', border: 'border-react', hover: 'hover:border-react' },
	{
		icon: <RiTailwindCssFill className='text-tailwind' />,
		label: 'Tailwind',
		border: 'border-tailwind', hover: 'hover:border-tailwind'
	},
	{ icon: <FaJsSquare className='text-javascript' />, label: 'JavaScript', border: 'border-javascript', hover: 'hover:border-javascript' },
	{
		icon: <BiLogoTypescript className='text-typescript' />,
		label: 'TypeScript', border: 'border-typescript', hover: 'hover:border-typescript'
	},
	{ icon: <FaGitAlt className='text-git' />, label: 'Git', border: 'border-git', hover: 'hover:border-git' },
	{ icon: <FaGithub className='text-github' />, label: 'GitHub', border: 'border-github', hover: 'hover:border-github' },
	{ icon: <SiReactrouter className='text-router' />, label: 'R-Router', border: 'border-router', hover: 'hover:border-router' },
	{ icon: <ViteLogo />, label: 'Vite', border: 'border-vite', hover: 'hover:border-vite' },
	{ icon: <SiVercel className='text-vercel' />, label: 'Vercel', border: 'border-vercel', hover: 'hover:border-vercel' },
	{ icon: <SiEslint className='text-eslint' />, label: 'Eslint', border: 'border-eslint', hover: 'hover:border-eslint' },
];

export const Skills = () => {
	const [ activeIndex, setActiveIndex ] = useState(null);
	const timeoutRef = useRef(null);

	const handleTap = (index) => {
		setActiveIndex(index);

		if (timeoutRef.current) {
			clearTimeout(timeoutRef.current);
		}

		timeoutRef.current = setTimeout(() => {
			setActiveIndex(null);
			timeoutRef.current = null;
		}, 1000);
	};

	return (
		<section
			id='skills'
			className='section bg-primary rounded-tr-4xl rounded-bl-4xl'
		>
			<SectionTitle section='skills' withBackground={true} />
			<p className='paraph'>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Reprehenderit pariatur at quod odio nisi possimus voluptatibus voluptatum soluta!</p>
			<ul className='grid grid-cols-3 md:grid-cols-6 sm:grid-cols-4 gap-x-6 justify-items-center'>
				{skillsData.map((skill, index) => (
					<li key={index} className="flex flex-col items-center group" onClick={() => handleTap(index)}>
						<span className={`skillLabel ${skill.border} pointer-events-none ${activeIndex === index ? '!opacity-100' : ''}`}>{skill.label}</span>
						<div className={`skillIcon  ${skill.hover} ${activeIndex === index ? skill.border : 'border-secondary'}`}>
							{skill.icon}
						</div>
					</li>
				))}
			</ul>
		</section>
	);
};
