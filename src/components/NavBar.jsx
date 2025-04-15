import React from 'react'
import { RiCodeView } from "react-icons/ri";
import { GoDeviceDesktop } from "react-icons/go";
import { NavBarData as data } from '../mockData/NavBarData';
import { MdMenu } from 'react-icons/md';
import { ResponsiveMenu } from './ResponsiveMenu';

export const NavBar = () => {
    const [showMenu, setShowMenu] = React.useState(false);
    // const [showTheme, setShowTheme] = React.useState(false);
  return (
    <>
        <nav>
            <div className='container'>
                {/* Logo */}
                <div className='flex justify-center items-center gap-1 cursor-pointer'>
                    <GoDeviceDesktop />
                </div>
                {/* Menu */}
                <div className='hidden sm:block'>
                    <ul className='flex justify-center items-center gap-6'>
                        {
                            data.map((item) => {
                                return (
                                    <li key={item.id}>
                                        <a href={item.url}>{item.title}</a>
                                    </li>
                                )
                            })
                        }
                    </ul>
                </div>
                {/* Theme Switcher */}
                {/* Mobile hamburger */}
                <div className='sm:hidden flex justify-center items-center cursor-pointer' onClick={() => setShowMenu(!showMenu)}>
                    <MdMenu className='text-2xl'/>
                </div>
            </div>
        </nav>
        {/* Mobile Sidebar */}
        <ResponsiveMenu showMenu={showMenu}/>
    </>
  )
}
