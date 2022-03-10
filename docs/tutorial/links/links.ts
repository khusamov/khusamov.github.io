import {TLink} from './TLink';

export const links: TLink[] = [{
	label: 'Unit-тестирование',
	links: [{
		label: 'Jest',
		href: 'https://jestjs.io/docs/getting-started'
	}, {
		label: 'TypeScript Jest',
		href: 'https://kulshekhar.github.io/ts-jest/docs/'
	}, {
		label: 'Mocha',
		href: 'https://mochajs.org/'
	}]
}, {
	label: 'Библиотеки утверждений',
	links: [{
		label: 'Node.js Assert',
		href: 'https://nodejs.org/api/assert.html'
	}, {
		label: 'Chai',
		href: 'https://www.chaijs.com/'
	}]
}, {
	label: 'REST-сервер',
	links: [{
		label: 'Программа Strapi для визуального создания REST-сервера',
		href: 'https://strapi.io/'
	}, {
		label: 'Создаем собственный блог с помощью Next.js и Strapi',
		href: 'https://bit.ly/3hKXhss'
	}]
}, {
	label: 'Создание статических сайтов',
	links: [{
		label: 'Docusaurus',
		href: 'https://docusaurus.io/'
	}, {
		label: 'Nextra на основе Next.js',
		href: 'https://nextra.vercel.app/'
	}, {
		label: 'Статический сайт на Next.js',
		href: 'https://nextjs.org/docs/advanced-features/static-html-export'
	}]
}, {
	label: 'Песочницы',
	links: [{
		label: 'Stack Blitz',
		href: 'https://stackblitz.com/'
	}, {
		label: 'Code Sandbox',
		href: 'https://codesandbox.io/'
	}]
}, {
	label: 'Трехмерная графика',
	links: [{
		label: 'Three.js',
		href: 'https://github.com/mrdoob/three.js/'
	}]
}, {
	label: 'WYSIWYG-редакторы',
	links: [{
		label: 'TinyMCE',
		tags: ['Мощный редактор'],
		links: [{
			label: 'Основной сайт TinyMCE',
			href: 'https://www.tiny.cloud/'
		}, {
			label: 'React integration',
			href: 'https://www.tiny.cloud/docs/integrations/react/'
		}]
	}, {
		label: 'CKEditor',
		tags: ['Мощный редактор'],
		links: [{
			label: 'Основной сайт CKEditor',
			href: 'https://ckeditor.com/ckeditor-5/demo/#classic'
		}, {
			label: 'React integration',
			href: 'https://ckeditor.com/docs/ckeditor5/latest/builds/guides/integration/frameworks/react.html#quick-start'
		}]
	}, {
		label: 'React Email Editor',
		tags: ['Мощный редактор'],
		comment: 'Скорее для клиентуры подойдет',
		links: [{
			label: 'React Email Editor',
			href: 'https://openbase.com/js/react-email-editor'
		}, {
			label: 'Демонстрация',
			href: 'https://react-email-editor-demo.netlify.app/'
		}, {
			label: 'Исходный код',
			href: 'https://github.com/unlayer/react-email-editor'
		}]
	}, {
		label: 'Editor.js',
		links: [{
			label: 'Editor.js',
			comment: 'Блочный редактор, есть React-декоратор',
			href: 'https://editorjs.io/',
		}, {
			label: 'React Editor.js',
			comment: 'React-декоратор для editorjs.io',
			href: 'https://github.com/Jungwoo-An/react-editor-js'
		}]
	}, {
		label: 'Редакторы на React.js',
		comment: 'Можно взять за основу для своего редактора',
		links: [{
			label: 'ReactQuill',
			comment: 'Редактор на React+TypeScript',
			href: 'https://github.com/Jungwoo-An/react-editor-js'
		}, {
			label: 'Slate',
			comment: 'Редактор на React',
			href: 'https://github.com/ianstormtaylor/slate'
		}, {
			label: 'React Draft Wysiwyg',
			comment: 'Редактор на React',
			href: 'https://github.com/jpuri/react-draft-wysiwyg'
		}]
	}]
}, {
	label: 'Бесплатный хостинг для JavaScript-проектов',
	links: [{
		label: 'Vercel + Next.js',
		href: 'https://vercel.com/pricing'
	}, {
		label: 'Бесплатные хостинги для веб-разработчиков',
		href: 'https://vk.com/@we_use_js-besplatnye-hostingi-dlya-veb-razrabotchikov'
	}, {
		label: 'Бесплатные хостинги для веб-разработчиков (на хабре)',
		href: 'https://habr.com/ru/post/535168/'
	}]
}, {
	label: 'Любопытные библиотеки',
	links: [{
		label: 'Стрелки',
		comment: 'Пригодится для визуализации связей между сущностями',
		href: 'https://github.com/steveruizok/perfect-arrows'
	}]
}]