import React from 'react';
import { SectionTitle } from './SectionTitle';

export const About = () => {
	return (
		<section id='about' className='section bg-primary rounded-bl-4xl rounded-tr-4xl'>
			<SectionTitle section='about' />
			<p className='paraph'>
				Lorem ipsum, dolor sit amet consectetur adipisicing elit. Aperiam
				labore voluptatem quas dolore quisquam libero fuga sunt
				reprehenderit, vitae ea. Officiis in aliquid est porro autem
				aspernatur fuga minus natus.
			</p>
		</section>
	);
};
