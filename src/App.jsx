import { About } from './components/About';
import { Contact } from './components/Contact';
import { Hero } from './components/Hero';
import { Header } from './components/Header';
import { Projects } from './components/Projects';
import { Skills } from './components/Skills';
import { useEffect, useState } from 'react';
import '../i18n';
import { Footer } from './components/Footer';

function App() {
	const [ headerHeight, setHeaderHeight ] = useState(0);

	useEffect(() => {
		const header = document.getElementById('header');
		if (header) {
			setHeaderHeight(header.offsetHeight);
		}
	}, []);
	return (
		<main
			className='flex flex-col w-full h-full dark:bg-dark-background bg-light-background'
			style={{ paddingTop: `${headerHeight}px` }}
		>
			<Header />
			<Hero />
			<About />
			<Projects />
			<Skills />
			<Contact />
			<Footer />
		</main>
	);
}

export default App;
