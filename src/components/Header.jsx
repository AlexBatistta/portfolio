import { useState } from 'react';
import Logo from '../assets/images/logo.svg?react';
import { lightBlue } from '../utils';
import { NavBar } from './NavBar';
import { AiFillSun, AiFillMoon } from 'react-icons/ai';
import { FaRegSquare } from "react-icons/fa";
import { MdMenu } from 'react-icons/md';
import { ResponsiveMenu } from './ResponsiveMenu';

export const Header = () => {
  const [showMenu, setShowMenu] = useState(false);
  const [isDarkMode, setIsDarkMode] = useState(true);
  const [language, setLanguage] = useState('en');

  const toggleTheme = () => {
    setIsDarkMode(!isDarkMode);
    document.documentElement.classList.toggle('dark', !isDarkMode);
  };

  const toggleLanguage = () => {
    setLanguage((prevLanguage) => (prevLanguage === 'en' ? 'es' : 'en'));
  };

  return (
    <header className="flex justify-between items-center w-full bg-blue-900 px-5 py-2 fixed top-0 left-0">
      <button className='flex items-center cursor-pointer' onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}>
        <Logo className="w-15 h-15" style={{ fill: lightBlue }} />
      </button>

      <NavBar />

      {/* Mobile Menu */}
      <button
        className="sm:hidden flex justify-center items-center cursor-pointer"
        onClick={() => setShowMenu(!showMenu)}
      >
        <MdMenu className="text-2xl text-secondary" />
      </button>

      {/* Desktop Menu */}
      <div className='gap-2 items-center hidden sm:flex'>
        <button onClick={toggleTheme} className="text-secondary text-3xl cursor-pointer">
          {isDarkMode ? <AiFillSun /> : <AiFillMoon />}
        </button>
        <button
          onClick={toggleLanguage}
          className="relative text-xl text-secondary cursor-pointer font-roboto font-medium"
        >
          <FaRegSquare className='text-3xl' />
          <span className='absolute inset-0 flex items-center justify-center text-sm'>
            {language === 'en' ? 'ES' : 'EN'}
          </span>
        </button>
      </div>


      {/* Mobile Sidebar */}
      <ResponsiveMenu showMenu={showMenu} />
    </header>
  );
};
