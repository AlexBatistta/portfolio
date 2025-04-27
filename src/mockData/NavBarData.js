import { useTranslation } from 'react-i18next';

export const NavBarData = () => {
	const { t } = useTranslation();

	return [
		{
			id: 1,
			title: t('navbar.about'),
			url: '#',
		},
		{
			id: 2,
			title: t('navbar.skills'),
			url: '#',
		},
		{
			id: 3,
			title: t('navbar.projects'),
			url: '#',
		},
		{
			id: 4,
			title: t('navbar.contact'),
			url: '#',
		},
	];
};
