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
					title: 'Frontend Developer',
					subtitle: "Hi! I'm Alex Batistta",
					download: 'Download CV',
				},
				contact: {
					name: 'Name',
					email: 'Email',
					message: 'Message',
					send: 'Send',
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
					title: 'Desarrollador Frontend',
					subtitle: '¡Hola! Soy Alex Batistta',
					download: 'Descargar CV',
				},
				contact: {
					name: 'Nombre',
					email: 'Correo electrónico',
					message: 'Mensaje',
					send: 'Enviar',
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
