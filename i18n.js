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
				about: {
					paragraph1:
						'Frontend developer focused on building modern, accessible, and well-structured web interfaces using technologies like React, Tailwind, JavaScript and TypeScript.',
					paragraph2:
						'My professional journey began in game development, where I gained over five years of experience working on complex team projects. That stage gave me a strong foundation in programming logic, abstract thinking, and best practices. Today, I apply that knowledge to web development, with a special focus on code quality and user experience.',
					paragraph3:
						'Currently, I combine both disciplines (interactive development and interface design) with the goal of creating smooth, functional, and enjoyable user experiences, paying close attention to visual details as well as the technical structure behind them.',
				},
				projects: {
					description:
						'Here are some of my most recent personal projects, where I applied various technologies from the frontend ecosystem. Each one reflects hands-on learning, problem-solving, and a focus on user-centered design.',
				},
				project1: {
					title: 'Project 1',
					description:
						'Ingles Lorem ipsum, dolor sit amet consectetur adipisicing elit. Aperiam labore voluptatem quas dolore quisquam libero fuga sunt reprehenderit, vitae ea. ',
					tags: ['React', 'JavaScript', 'Tailwind'],
				},
				project2: {
					title: 'Project 2',
					description:
						'Ingles Lorem ipsum, dolor sit amet consectetur adipisicing elit. Aperiam labore voluptatem quas dolore',
					tags: ['React', 'TypeScript', 'Tailwind'],
				},
				project3: {
					title: 'Project 3',
					description:
						'Ingles Lorem ipsum, dolor sit amet consectetur adipisicing elit. Aperiam labore voluptatem quas dolore quisquam libero fuga sunt reprehenderit, vitae ea. sdfsdf.',
					tags: ['HTML5', 'JavaScript', 'CSS'],
				},
				skills: {
					paragraph1:
						'I work with a stack focused on building accessible, maintainable, and well-structured web interfaces. I combine attention to visual detail with programming best practices, using tools that support scalable projects and a consistent development workflow.',
					paragraph2:
						'Here are some of the technologies I use most frequently:',
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
				about: {
					paragraph1:
						'Desarrollador frontend enfocado en construir interfaces web modernas, accesibles y bien estructuradas utilizando tecnologías como React, Tailwind, JavaScript y TypeScript.',
					paragraph2:
						'Mi recorrido profesional comenzó en el desarrollo de videojuegos, donde acumulé más de cinco años de experiencia trabajando en proyectos complejos en equipo. Esa etapa me aportó una base sólida en lógica de programación, pensamiento abstracto y buenas prácticas. Hoy aplico esos conocimientos al desarrollo web, con especial atención a la calidad del código y la experiencia del usuario.',
					paragraph3:
						'Actualmente combino ambas disciplinas (desarrollo interactivo y diseño de interfaces web) con el objetivo de crear experiencias fluidas, funcionales y agradables de usar, cuidando tanto los detalles visuales como la estructura técnica detrás.',
				},
				projects: {
					description:
						'Estos son algunos de mis proyectos personales más recientes, donde apliqué distintas tecnologías del ecosistema frontend. Cada uno representa un ejercicio práctico de aprendizaje, resolución de problemas y diseño centrado en la experiencia del usuario.',
				},
				project1: {
					title: 'Proyecto 1',
					description:
						'Ingles Lorem ipsum, dolor sit amet consectetur adipisicing elit. Aperiam labore voluptatem quas dolore quisquam libero fuga sunt reprehenderit, vitae ea. ',
					tags: ['React', 'JavaScript', 'CSS'],
				},
				project2: {
					title: 'Proyecto 2',
					description:
						'Ingles Lorem ipsum, dolor sit amet consectetur adipisicing elit. Aperiam labore voluptatem quas dolore quisquam libero fuga ',
					tags: ['React', 'JavaScript', 'CSS'],
				},
				project3: {
					title: 'Proyecto 3',
					description:
						'Ingles Lorem ipsum, dolor sit amet consectetur adipisicing elit. Aperiam labore voluptatem quas dolore quisquam libero fuga sunt reprehenderit, vitae ea. sdfsdf.',
					tags: ['React', 'JavaScript', 'CSS'],
				},
				skills: {
					paragraph1:
						'Trabajo con un stack enfocado en el desarrollo de interfaces web accesibles, mantenibles y bien estructuradas. Combino la atención al detalle visual con buenas prácticas de programación, utilizando herramientas que permiten escalar proyectos de forma eficiente y mantener un flujo de desarrollo consistente.',
					paragraph2:
						'Estas son algunas de las tecnologías que utilizo con mayor frecuencia:',
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
