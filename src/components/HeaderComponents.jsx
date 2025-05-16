import Logo from '../assets/images/logo.svg?react';
import { lightBlue } from '../utils';
import { AiFillSun, AiFillMoon } from 'react-icons/ai';
import { FaRegSquare } from 'react-icons/fa';
import { MdMenu } from 'react-icons/md';
import { useState } from 'react';
import { NavBarData } from '../mockData/NavBarData';
import { useTranslation } from 'react-i18next';
// eslint-disable-next-line no-unused-vars
import { motion, AnimatePresence } from 'framer-motion';

const handleScroll = (id) => {
	const element = document.getElementById(id);
	const header = document.getElementById('header');
	const headerHeight = header.offsetHeight;
	window.scrollTo({
		top: element.offsetTop - headerHeight,
		behavior: 'smooth',
	});
};

export const LogoBtn = () => {
	return (
		<button
			className='flex cursor-pointer items-center'
			onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
		>
			<Logo className='h-15 w-15' style={{ fill: lightBlue }} />
		</button>
	);
};

export const DesktopMenu = () => {
	const data = NavBarData();
	return (
		<nav className='hidden sm:block'>
			<ul className='flex items-center justify-center gap-6'>
				{data.map((item) => {
					return (
						<li key={item.id}>
							<button
								onClick={() => handleScroll(item.url)}
								className='nav-link nav-button'
							>
								{item.title}
							</button>
						</li>
					);
				})}
			</ul>
		</nav>
	);
};

export const ResponsiveContainer = ({ setShowMenu, showMenu }) => {
	return (
		<div>
			<button
				className='flex cursor-pointer items-center justify-center sm:hidden'
				onClick={() => setShowMenu(!showMenu)}
			>
				<MdMenu className='text-secondary text-2xl' />
			</button>
			<ButtonsContainer className={'hidden sm:flex'} />
		</div>
	);
};

const ButtonsContainer = ({ className }) => {
	const [isDarkMode, setIsDarkMode] = useState(true);
	const { i18n } = useTranslation();

	const toggleTheme = () => {
		setIsDarkMode(!isDarkMode);
		document.documentElement.classList.toggle('dark', !isDarkMode);
	};

	const toggleLanguage = () => {
		const newLanguage = i18n.language === 'en' ? 'es' : 'en';
		i18n.changeLanguage(newLanguage);
		document.documentElement.setAttribute('lang', newLanguage);
	};
	return (
		<div className={`items-center gap-4 ${className}`}>
			<button
				onClick={toggleTheme}
				className='text-secondary cursor-pointer text-3xl'
			>
				{isDarkMode ? <AiFillSun /> : <AiFillMoon />}
			</button>
			<button
				onClick={toggleLanguage}
				className='text-secondary font-roboto relative cursor-pointer text-xl font-medium'
			>
				<FaRegSquare className='text-3xl' />
				<span className='absolute inset-0 flex items-center justify-center text-sm'>
					{i18n.language === 'en' ? 'ES' : 'EN'}
				</span>
			</button>
		</div>
	);
};

export const MobileSidebar = ({ setShowMenu, showMenu }) => {
	const data = NavBarData();
	return (
		<AnimatePresence mode='wait'>
			{showMenu && (
				<motion.div
					initial={{ opacity: '100%', y: -100 }}
					animate={{ opacity: '100%', y: 0 }}
					exit={{ opacity: '0%', y: -100 }}
					transition={{ duration: 0.3 }}
					className='absolute top-20 left-0 z-20 h-[calc(100vh-5rem)] w-full'
				>
					<nav className='mx-6 flex-col items-center justify-center rounded-2xl bg-black p-6 text-white'>
						<ul className='flex flex-col items-center justify-center gap-6'>
							{data.map((item) => {
								return (
									<li key={item.id}>
										<button
											onClick={() => {
												handleScroll(item.url);
												setShowMenu(!showMenu);
											}}
											className='nav-link nav-button'
										>
											{item.title}
										</button>
									</li>
								);
							})}
						</ul>
						<ButtonsContainer className={'mt-15 flex justify-center'} />
					</nav>
				</motion.div>
			)}
		</AnimatePresence>
	);
};
