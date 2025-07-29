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
					file: 'Alex Batistta - Front-End Developer',
				},
				about: {
					paragraph1:
						'Frontend developer focused on building modern, accessible, and well-structured web interfaces using technologies like React, Tailwind, JavaScript and TypeScript.',
					paragraph2:
						'My professional journey began in video game development, where I gained over five years of experience working on complex, team-based projects. That stage provided me with a strong foundation in programming logic, abstract thinking, and best practices, which I later applied to web development with a strong focus on code quality and user experience.',
					paragraph3:
						'Currently, I combine both disciplines (interactive development and interface design) with the goal of creating smooth, functional, and enjoyable user experiences, paying close attention to visual details as well as the technical structure behind them.',
				},
				projects: {
					description:
						'These are some of my most recent personal projects, where I applied various technologies from the frontend ecosystem. Each one showcases key skills in problem-solving, user-centered design, and practical implementation of modern technologies.',
				},
				project1: {
					title: 'Todo App',
					description:
						'Interactive task manager with advanced features: drag & drop reordering, priority system, smart filtering, and local storage persistence. Fully responsive design for a seamless user experience across all devices.',
					tags: ['React', 'TypeScript', 'Tailwind'],
					url: 'https://github.com/AlexBatistta/todo-list',
				},
				project2: {
					title: 'HacknPlan Data Parser',
					description:
						'Web application that transforms raw HacknPlan export data into clean, readable reports. Features bulk CSV processing, intelligent filtering by status and importance, ID-to-name conversion, and flexible export options in CSV or JSON format.',
					tags: ['React', 'TypeScript', 'Tailwind'],
					url: 'https://github.com/AlexBatistta/csv_previewer',
				},
				project3: {
					title: 'Rock Paper Scissors',
					description:
						'Classic game implementation based on a Frontend Mentor challenge. Features interactive gameplay against computer AI, score tracking, and clean responsive design built with vanilla JavaScript and modern CSS.',
					tags: ['HTML5', 'CSS', 'JavaScript'],
					url: 'https://github.com/AlexBatistta/rock-paper-scissors-master',
				},
				skills: {
					paragraph1:
						'I work with a stack focused on building accessible, maintainable, and well-structured web interfaces. I combine attention to visual detail with programming best practices, using tools that support scalable projects and a consistent development workflow.',
					paragraph2:
						'Here are some of the technologies I use most frequently:',
				},
				contact: {
					text: 'Inquiries, proposals, or ideas related to development and projects are welcome. Each message will be read carefully and answered as soon as possible.',
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
					file: 'Alex Batistta - Desarrollador Front-End',
				},
				about: {
					paragraph1:
						'Desarrollador frontend enfocado en construir interfaces web modernas, accesibles y bien estructuradas utilizando tecnologías como React, Tailwind, JavaScript y TypeScript.',
					paragraph2:
						'Mi recorrido profesional comenzó en el desarrollo de videojuegos, donde acumulé más de cinco años de experiencia trabajando en proyectos complejos en equipo. Esa etapa me aportó una base sólida en lógica de programación, pensamiento abstracto y buenas prácticas, que luego trasladé al desarrollo web, con especial atención a la calidad del código y la experiencia del usuario.',
					paragraph3:
						'Actualmente combino ambas disciplinas (desarrollo interactivo y diseño de interfaces web) con el objetivo de crear experiencias fluidas, funcionales y agradables de usar, cuidando tanto los detalles visuales como la estructura técnica detrás.',
				},
				projects: {
					description:
						'Estos son algunos de mis proyectos personales más recientes, donde apliqué distintas tecnologías del ecosistema frontend. Cada uno demuestra habilidades clave en resolución de problemas, diseño centrado en el usuario y aplicación práctica de tecnologías modernas.',
				},
				project1: {
					title: 'Todo App',
					description:
						'Aplicación interactiva para gestión de tareas con características avanzadas: reorganización drag & drop, sistema de prioridades, filtrado inteligente y almacenamiento local. Diseño responsivo para una experiencia fluida en todos los dispositivos.',
					tags: ['React', 'TypeScript', 'Tailwind'],
					url: 'https://github.com/AlexBatistta/todo-list',
				},
				project2: {
					title: 'HacknPlan Data Parser',
					description:
						'Aplicación web que transforma datos de exportación de HacknPlan en reportes limpios y legibles. Incluye procesamiento masivo de CSV, filtrado inteligente por estado e importancia, conversión de IDs a nombres, y opciones flexibles de exportación en CSV o JSON.',
					tags: ['React', 'TypeScript', 'Tailwind'],
					url: 'https://github.com/AlexBatistta/csv_previewer',
				},
				project3: {
					title: 'Rock Paper Scissors',
					description:
						'Implementación del juego clásico basada en un desafío de Frontend Mentor. Incluye jugabilidad interactiva contra IA, seguimiento de puntuación y diseño responsivo limpio construido con JavaScript vanilla y CSS moderno.',
					tags: ['HTML5', 'CSS', 'JavaScript'],
					url: 'https://github.com/AlexBatistta/rock-paper-scissors-master',
				},
				skills: {
					paragraph1:
						'Trabajo con un stack enfocado en el desarrollo de interfaces web accesibles, mantenibles y bien estructuradas. Combino la atención al detalle visual con buenas prácticas de programación, utilizando herramientas que permiten escalar proyectos de forma eficiente y mantener un flujo de desarrollo consistente.',
					paragraph2:
						'Estas son algunas de las tecnologías que utilizo con mayor frecuencia:',
				},
				contact: {
					text: 'Consultas, propuestas o ideas relacionadas con desarrollo y proyectos son bienvenidas. Cada mensaje será leído con atención y respondido lo antes posible.',
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
