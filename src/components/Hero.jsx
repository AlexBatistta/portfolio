import { useTranslation } from 'react-i18next';
import profile from '../assets/images/profile.png';
import hexagon from '../assets/images/hexagon.svg';

export const Hero = () => {
	const { t } = useTranslation();
	return (
		<section className='section !flex-row !justify-around'>
			<div className='flex flex-col gap-6'>
				<h2 className='subtitle'>{t('hero.subtitle')}</h2>
				<h1 className='title'>{t('hero.title')}</h1>
				<button className='button'>{t('hero.download')}</button>
			</div>
			<HexagonProfile />
		</section>
	);
};

const HexagonProfile = () => {
	return (
		<div className="relative w-[400px] h-auto flex justify-center items-end">
			<img className='dark:rotate-180 z-1' src={hexagon}></img>
			<img className='absolute bottom-[10px] z-1' src={profile} style={{
				clipPath: 'polygon(0 0, 100% 0, 100% 65%, 0 65%)',
			}}></img>
			<img className='absolute bottom-[10px]' src={profile} style={{
				clipPath: 'polygon(100% 50%, 100% 80%, 50% 100%, 0 80%, 0% 50%)',
			}}></img>
		</div>
	);
}

