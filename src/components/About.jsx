import React from 'react';
import { SectionTitle } from './SectionTitle';
import { useTranslation } from 'react-i18next';

export const About = () => {
	const { t } = useTranslation();
	return (
		<section
			id='about'
			className='section bg-primary rounded-tr-4xl rounded-bl-4xl'
		>
			<SectionTitle section='about' withBackground={true} />
			<p className='paraph !text-white'>
				{t('about.paragraph1')}
			</p>
			<p className='paraph !text-white'>
				{t('about.paragraph2')}
			</p>
			<p className='paraph !text-white'>
				{t('about.paragraph3')}
			</p>
		</section >
	);
};
