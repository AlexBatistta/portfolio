import React from 'react';
import { SectionTitle } from './SectionTitle';
import { ProjectCard } from './ProjectCard';
import { useTranslation } from 'react-i18next';
import project1 from '../assets/images/project1.png';
import project2 from '../assets/images/project2.png';
import project3 from '../assets/images/project3.png';

export const Projects = () => {
	const { t } = useTranslation();
	return (
		<section id='projects' className='section'>
			<SectionTitle section='projects' />
			<p className='paraph'>{t('projects.description')}</p>
			<div className='grid gap-10 md:w-[80dvw] grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 lg:grid-rows-1 mt-10'>
				<ProjectCard title={t('project1.title')} description={t('project1.description')} image={project1} tags={t('project1.tags', { returnObjects: true })} />

				<ProjectCard title={t('project2.title')} description={t('project2.description')} image={project2} tags={t('project2.tags', { returnObjects: true })} />

				<ProjectCard className="flex sm:hidden lg:flex" title={t('project3.title')} description={t('project3.description')} image={project3} tags={t('project3.tags', { returnObjects: true })} />

				<ProjectCard isHorizontal={true} className="hidden sm:flex lg:hidden sm:col-span-2" title={t('project3.title')} description={t('project3.description')} image={project3} tags={t('project3.tags', { returnObjects: true })} />
			</div>

		</section>
	);
};
