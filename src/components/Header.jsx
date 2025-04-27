import { useState } from 'react';
import { LogoBtn, NavBar, MobileMenu, DesktopMenu, MobileSidebar } from './HeaderComponents';


export const Header = () => {
  const [showMenu, setShowMenu] = useState(false);
  return (
    <header id="header" className="flex justify-between items-center w-full bg-blue-900 px-10 py-2 fixed top-0 left-0">
      <LogoBtn />

      <NavBar />

      <MobileMenu setShowMenu={setShowMenu} showMenu={showMenu} />

      <DesktopMenu />

      <MobileSidebar showMenu={showMenu} />
    </header>
  );
};


