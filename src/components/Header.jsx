import { useState } from 'react';
import {
	LogoBtn,
	ResponsiveContainer,
	DesktopMenu,
	MobileSidebar,
} from './HeaderComponents';

export const Header = () => {
	const [ showMenu, setShowMenu ] = useState(false);
	return (
		<header id='header' className='header'>
			<LogoBtn />

			<DesktopMenu />

			<ResponsiveContainer setShowMenu={setShowMenu} showMenu={showMenu} />

			{
				showMenu && <div className='absolute top-0 left-0 w-[100vw] h-[100vh] bg-slate-950/50' onClick={() => setShowMenu(false)}></div>
			}

			<MobileSidebar setShowMenu={setShowMenu} showMenu={showMenu} />
		</header>
	);
};
