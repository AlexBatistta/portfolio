import React from 'react';
import { SectionTitle } from './SectionTitle';

export const Skills = () => {
	return (
		<section
			id='skills'
			className='section bg-primary rounded-tr-4xl rounded-bl-4xl'
		>
			<SectionTitle section='skills' withBackground={true} />
		</section>
	);
};
