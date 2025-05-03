import React from 'react'
import { useTranslation } from 'react-i18next';
import { capitalize } from '../utils';

export const SectionTitle = ({ section }) => {
	const { t } = useTranslation();
	return (
		<h2 className="subtitle">{capitalize(t(`navbar.${section}`))}</h2>
	)
}
