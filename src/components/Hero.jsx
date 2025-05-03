import React from 'react';
import picture from '../assets/react.svg';
import { useTranslation } from 'react-i18next';

export const Hero = () => {
	const { t } = useTranslation();
	return (
		<section className="section">
			<div className="flex flex-col gap-6">
				<h2 className="subtitle">{t("hero.subtitle")}</h2>
				<h1 className="title">{t("hero.title")}</h1>
				<button className="button">{t("hero.download")}</button>
			</div>
			<img src={picture}></img>
		</section>
	);
};
