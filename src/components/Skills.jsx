import React from 'react';
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
import { BiLogoTypescript, BiLogoVisualStudio } from 'react-icons/bi';

const skillsData = [
	{ icon: <FaHtml5 className='text-html' />, label: 'HTML5', border: 'border-html' },
	{ icon: <FaCss3Alt className='text-css' />, label: 'CSS3', border: 'border-css' },
	{ icon: <FaReact className='text-react' />, label: 'React', border: 'border-react' },
	{
		icon: <RiTailwindCssFill className='text-tailwind' />,
		label: 'Tailwind',
		border: 'border-tailwind'
	},
	{ icon: <FaJsSquare className='text-javascript' />, label: 'JavaScript', border: 'border-javascript' },
	{
		icon: <BiLogoTypescript className='text-typescript' />,
		label: 'TypeScript', border: 'border-typescript'
	},
	{ icon: <FaGitAlt className='text-git' />, label: 'Git', border: 'border-git' },
	{ icon: <FaGithub className='text-github' />, label: 'GitHub', border: 'border-github' },
	{
		icon: <BiLogoVisualStudio className='text-vscode' />,
		label: 'VS Code', border: 'border-vscode'
	},
];

export const Skills = () => {
	return (
		<section
			id='skills'
			className='section bg-primary rounded-tr-4xl rounded-bl-4xl'
		>
			<SectionTitle section='skills' withBackground={true} />
			<p className='paraph'>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Reprehenderit pariatur at quod odio nisi possimus voluptatibus voluptatum soluta!</p>
			<ul className='grid grid-cols-3 gap-6 justify-items-center'>
				{skillsData.map((skill, index) => (
					<li key={index} className="flex flex-col items-center group">
						<span className={`skillLabel ${skill.border}`}>{skill.label}</span>
						<div className={`skillIcon border-secondary hover:${skill.border}`}>
							{skill.icon}
						</div>
					</li>
				))}
			</ul>
		</section>
	);
};
