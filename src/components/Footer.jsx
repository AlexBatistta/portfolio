import React from 'react';
import { useTranslation } from 'react-i18next';
import { SocialButtons } from './Hero';

export const Footer = () => {
	const { t } = useTranslation();
	return (
		<footer>
			<div className='bg-secondary absolute h-1.5 w-full' />
			<address className='flex items-center justify-between px-5 sm:px-10 py-5 mt-1.5 not-italic'>
				<div className='text-primary text-xs sm:text-sm md:text-base dark:text-white dark:opacity-50'>
					<p>{t('footer.name')}</p>
					<p>{t('footer.mail')}</p>
				</div>
				<nav className='scale-90' aria-label="Social media">
					<SocialButtons />
				</nav>
			</address>
		</footer>
	);
};
