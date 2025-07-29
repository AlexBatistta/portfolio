import { useTranslation } from 'react-i18next';
import profile from '../assets/images/profile.png';
import hexagon from '../assets/images/hexagon.svg';
import { FaGithub, FaLinkedinIn } from "react-icons/fa";

export const Hero = () => {
	const { t } = useTranslation();
	return (
		<section className='section !justify-around md:!flex-row'>
			<div className='flex flex-col gap-4 mb-10 md:mb-0'>
				<div className='flex items-center gap-4'>
					<div className='bg-secondary -ml-[30vw] md:-ml-[15vw] h-1.5 flex-grow rounded-r-full' />
					<h3 className='subtitle w-[90%] whitespace-nowrap'>
						{t('hero.hello')}
					</h3>
				</div>

				<h2 className='title'>{t('hero.name')}</h2>
				<h1 className='subtitle'>{t('hero.developer')}</h1>
				<div className='flex items-center justify-start gap-6'>
					<a className='button' href={`/${t('hero.file')}.pdf`} download>{t('hero.download')}</a>
					<SocialButtons />
				</div>
			</div>
			<HexagonProfile />
		</section>
	);
};

const HexagonProfile = () => {
	return (
		<div className='relative flex h-auto w-[300px] lg:w-[400px] md:w-[350px] items-end justify-center '>
			<img className='z-1 dark:rotate-180' src={hexagon}></img>
			<img
				className='absolute bottom-[10px] z-1'
				src={profile}
				style={{
					clipPath: 'polygon(0 0, 100% 0, 100% 65%, 0 65%)',
				}}
			></img>
			<img
				className='absolute bottom-[10px]'
				src={profile}
				style={{
					clipPath: 'polygon(100% 50%, 100% 80%, 50% 100%, 0 80%, 0% 50%)',
				}}
			></img>
		</div>
	);
};

export const SocialButtons = () => {
	return (
		<div className='flex gap-3'>
			<a className='buttonSecondary group relative flex items-center justify-center' href='https://github.com/AlexBatistta' aria-label='GitHub'>
				<FaGithub className='text-secondary group-hover:text-primary h-6 w-6 transition duration-300 active:scale-110' />
			</a>

			<a className='buttonSecondary group relative flex items-center justify-center' href="https://www.linkedin.com/in/alex-batistta" aria-label='LinkedIn'>
				<FaLinkedinIn className='text-secondary group-hover:text-primary h-6 w-6 transition duration-300 active:scale-110' />
			</a>
		</div>
	);
};
