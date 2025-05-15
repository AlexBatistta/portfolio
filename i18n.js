import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';

i18n.use(initReactI18next).init({
	resources: {
		en: {
			translation: {
				navbar: {
					about: 'ABOUT',
					skills: 'SKILLS',
					projects: 'PROJECTS',
					contact: 'CONTACT',
				},
				hero: {
					hello: "Hi! I'm",
					name: 'Alex Batistta',
					developer: 'Front-End Developer',
					download: 'Download CV',
				},
				projects: {
					description:
						'Ingles Lorem ipsum, dolor sit amet consectetur adipisicing elit. Aperiam labore voluptatem quas dolore quisquam libero fuga sunt	reprehenderit, vitae ea. Officiis in aliquid est porro autem aspernatur fuga minus natus.',
				},
				contact: {
					name: 'Name',
					email: 'Email',
					message: 'Message',
					send: 'Send',
				},
				footer: {
					name: '© 2025 Alex Batistta — Front-End Developer',
					mail: 'batistta.alex@gmail.com',
				},
			},
		},
		es: {
			translation: {
				navbar: {
					about: 'SOBRE MÍ',
					skills: 'HABILIDADES',
					projects: 'PROYECTOS',
					contact: 'CONTACTO',
				},
				hero: {
					hello: 'Hola! Soy',
					name: 'Alex Batistta',
					developer: 'Desarrollador Front-End',
					download: 'Descargar CV',
				},
				projects: {
					description:
						'Español Lorem ipsum, dolor sit amet consectetur adipisicing elit. Aperiam labore voluptatem quas dolore quisquam libero fuga sunt	reprehenderit, vitae ea. Officiis in aliquid est porro autem aspernatur fuga minus natus.',
				},
				contact: {
					name: 'Nombre',
					email: 'Correo electrónico',
					message: 'Mensaje',
					send: 'Enviar',
				},
				footer: {
					name: '© 2025 Alex Batistta — Desarrollador Front-End',
					mail: 'batistta.alex@gmail.com',
				},
			},
		},
	},
	lng: 'en',
	fallbackLng: 'en',
	interpolation: {
		escapeValue: false,
	},
});

export default i18n;
