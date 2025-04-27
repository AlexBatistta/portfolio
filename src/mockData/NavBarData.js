import { useTranslation } from 'react-i18next';

export const NavBarData = () => {
	const { t } = useTranslation();

	return [
		{
			id: 1,
			title: t('navbar.about'),
			url: 'about',
		},
		{
			id: 2,
			title: t('navbar.skills'),
			url: 'skills',
		},
		{
			id: 3,
			title: t('navbar.projects'),
			url: 'projects',
		},
		{
			id: 4,
			title: t('navbar.contact'),
			url: 'contact',
		},
	];
};
