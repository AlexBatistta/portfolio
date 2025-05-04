import { useState } from 'react';
import {
	LogoBtn,
	ResponsiveContainer,
	DesktopMenu,
	MobileSidebar,
} from './HeaderComponents';

export const Header = () => {
	const [showMenu, setShowMenu] = useState(false);
	return (
		<header
			id='header'
			className='section z-50 bg-blue-900 fixed top-0 left-0'
		>
			<LogoBtn />

			<DesktopMenu />

			<ResponsiveContainer setShowMenu={setShowMenu} showMenu={showMenu} />

			<MobileSidebar setShowMenu={setShowMenu} showMenu={showMenu} />
		</header>
	);
};
