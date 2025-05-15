import React from 'react';
import { useTranslation } from 'react-i18next';
import { capitalize } from '../utils';

export const SectionTitle = ({ section, withBackground = false }) => {
	const { t } = useTranslation();
	return (
		<div className='flex w-full items-center'>
			<h2 className={`titleSection whitespace-nowrap ${withBackground ? '!text-white' : ''}`}>
				{capitalize(t(`navbar.${section}`))}
			</h2>
			<div className=' w-full bg-secondary h-1.5 rounded-l-full ml-4 mt-1 -mr-10' />
		</div>
	);
};
