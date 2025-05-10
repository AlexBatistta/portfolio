import React from 'react'
import { useTranslation } from 'react-i18next';

export const Footer = () => {
	const { t } = useTranslation();
	return (
		<footer>
			<div className='absolute w-full h-1.5 bg-secondary' />
			<div className='flex items-center justify-between p-10'>
				<div className='text-white opacity-50 text-base'>
					<p>{t("footer.name")}</p>
					<p>{t("footer.mail")}</p>
				</div>
				<div className='flex gap-2'>
					<button className='cursor-pointer border-2 border-secondary w-10 h-10 rounded-xl'></button>
					<button className='cursor-pointer border-2 border-secondary w-10 h-10 rounded-xl'></button>
				</div>
			</div>


		</footer>
	)
}
