import React from 'react';
import { useTranslation } from 'react-i18next';
import { capitalize } from '../utils';

export const SectionTitle = ({ section }) => {
	const { t } = useTranslation();
	return (
		<div className='flex w-full items-center'>
			<div className='w-[2%] bg-secondary h-[2px] mr-4 mt-1' />
			<h2 className='subtitle whitespace-nowrap'>
				{capitalize(t(`navbar.${section}`))}
			</h2>
			<div className='w-full bg-secondary h-[2px] ml-4 mt-1' />
		</div>
	);
};
