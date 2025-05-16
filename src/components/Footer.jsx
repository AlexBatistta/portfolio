import React from 'react';
import { useTranslation } from 'react-i18next';
import { SocialButtons } from './Hero';

export const Footer = () => {
	const { t } = useTranslation();
	return (
		<footer>
			<div className='bg-secondary absolute h-1.5 w-full' />
			<div className='flex items-center justify-between p-10'>
				<div className='text-primary text-base dark:text-white dark:opacity-50'>
					<p>{t('footer.name')}</p>
					<p>{t('footer.mail')}</p>
				</div>
				<SocialButtons />
			</div>
		</footer>
	);
};
