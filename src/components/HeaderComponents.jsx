import Logo from '../assets/images/logo.svg?react';
import { lightBlue } from '../utils';
import { AiFillSun, AiFillMoon } from 'react-icons/ai';
import { FaRegSquare } from "react-icons/fa";
import { MdMenu } from 'react-icons/md';
import { useState } from 'react';
import { NavBarData } from '../mockData/NavBarData';
import { useTranslation } from 'react-i18next';
// eslint-disable-next-line no-unused-vars
import { motion, AnimatePresence } from 'framer-motion';

export const LogoBtn = () => {
    return (
        <button className='flex items-center cursor-pointer' onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}>
            <Logo className="w-15 h-15" style={{ fill: lightBlue }} />
        </button>
    )
}

export const NavBar = () => {
    const data = NavBarData();
    const handleScroll = (id) => {
        const element = document.getElementById(id);
        const header = document.getElementById('header');
        const headerHeight = header.offsetHeight;
        window.scrollTo({ top: element.offsetTop - headerHeight, behavior: 'smooth' });
    };
    return (
        <nav className="hidden sm:block">
            <ul className="flex justify-center items-center gap-6">
                {data.map((item) => {
                    return (
                        <li key={item.id}>
                            <button onClick={() => handleScroll(item.url)} className="paraph nav-link cursor-pointer">
                                {item.title}
                            </button>
                        </li>
                    );
                })}
            </ul>
        </nav>
    );
};

export const MobileMenu = ({ setShowMenu, showMenu }) => {
    return (
        <button
            className="sm:hidden flex justify-center items-center cursor-pointer"
            onClick={() => setShowMenu(!showMenu)}
        >
            <MdMenu className="text-2xl text-secondary" />
        </button>
    )
}

export const DesktopMenu = () => {
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
        <div className='gap-4 items-center hidden sm:flex'>
            <button onClick={toggleTheme} className="text-secondary text-3xl cursor-pointer">
                {isDarkMode ? <AiFillSun /> : <AiFillMoon />}
            </button>
            <button
                onClick={toggleLanguage}
                className="relative text-xl text-secondary cursor-pointer font-roboto font-medium"
            >
                <FaRegSquare className='text-3xl' />
                <span className='absolute inset-0 flex items-center justify-center text-sm'>
                    {i18n.language === 'en' ? 'ES' : 'EN'}
                </span>
            </button>
        </div>
    )
}

export const MobileSidebar = ({ showMenu }) => {
    return (
        <AnimatePresence mode="wait">
            {showMenu && (
                <motion.div
                    initial={{ opacity: '100%', y: -100 }}
                    animate={{ opacity: '100%', y: 0 }}
                    exit={{ opacity: '0%', y: -100 }}
                    transition={{ duration: 0.3 }}
                    className="absolute top-20 left-0 h-[calc(100vh-5rem)] z-20 w-full"
                >
                    <div className="bg-black text-white rounded-2xl mx-6 p-6">
                        <ul className="flex flex-col justify-center items-center gap-6">
                            <li className="cursor-pointer px-5 py-2">Home</li>
                            <li className="cursor-pointer px-5 py-2">About</li>
                            <li className="cursor-pointer px-5 py-2">Skills</li>
                            <li className="cursor-pointer px-5 py-2">Projects</li>
                            <li className="cursor-pointer px-5 py-2">Contact</li>
                        </ul>
                    </div>
                </motion.div>
            )}
        </AnimatePresence>
    );
};
