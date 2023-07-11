// @ts-check

const siteTitle = 'Technical Document'
const tagline = 'Техническая документация'

const announcementEnabled = true
const showLastUpdateAuthor = true
const showLastUpdateTime = true

const organizationName = 'khusamov' // Логин на GitHub.
const projectName = 'khusamov.github.io' // Имя репозитория.
const deploymentBranch = 'gh-pages' // Имя ветки репозитория куда развертывать сайт.
const repoUrl = `https://github.com/${organizationName}/${projectName}`
const editUrl = `${repoUrl}/tree/main`

const customStyleFilename = './src/css/custom.scss'
const sidebarsFilename = './sidebars.js'

const siteLogoSrc = 'https://icon-library.com/images/document_icon_png_401486.png'

// - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - -

/**
 * @link https://docusaurus.io/docs/api/plugin-methods
 * @link https://docusaurus.io/docs/api/plugins
 * @type {import('@docusaurus/types').PluginConfig[]}
 */
const plugins = [
	[
		'docusaurus-plugin-sass', ({})
	],
	[
		'@docusaurus/plugin-content-pages',
		/**
		 * @link https://docusaurus.io/docs/api/plugins/@docusaurus/plugin-content-pages
		 * @type {import('@docusaurus/plugin-content-pages').Options}
		 */
		({

		})
	],
	[
		'@docusaurus/plugin-content-docs',
		/**
		 * @link https://docusaurus.io/docs/api/plugins/@docusaurus/plugin-content-docs
		 * @type {import('@docusaurus/plugin-content-docs').Options}
		 */
		({
			id: 'tutorial',
			path: 'docs/tutorial',
			routeBasePath: 'tutorial',
			sidebarPath: require.resolve(sidebarsFilename),
			showLastUpdateAuthor,
			showLastUpdateTime
		})
	],
	[
		'@docusaurus/plugin-content-docs',
		/**
		 * @link https://docusaurus.io/docs/api/plugins/@docusaurus/plugin-content-docs
		 * @type {import('@docusaurus/plugin-content-docs').Options}
		 */
		({
			id: 'solid',
			path: 'docs/solid',
			routeBasePath: 'solid',
			sidebarPath: require.resolve(sidebarsFilename),
			showLastUpdateAuthor,
			showLastUpdateTime
		})
	]
]

// - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - -

/**
 * @link https://docusaurus.io/docs/api/themes/configuration#navbar
 * @type {import('utility-types').DeepPartial<import('@docusaurus/theme-common').Navbar>}
 */
const navbar = ({
	title: siteTitle,
	hideOnScroll: true,
	logo: {
		alt: siteTitle,
		src: siteLogoSrc
	},
	items: [
		{
			label: 'Инструкции',
			type: 'docSidebar',
			position: 'left',
			sidebarId: 'tutorialSidebar',
			docsPluginId: 'tutorial'
		},
		{
			label: 'SOLID',
			type: 'docSidebar',
			position: 'left',
			sidebarId: 'solidSidebar',
			docsPluginId: 'solid'
		},
		{
			label: 'Ссылки',
			position: 'left',
			to: '/links'
		},
		{
			type: 'dropdown',
			label: 'Проекты',
			position: 'left',
			items: [
				{
					label: 'Мои публичные репозитории',
					to: '/my/repositories'
				},
				{
					label: 'Генератор двумерных прайс-листов',
					href: 'https://khusamov.github.io/price-list-2d-generator/'
				},
				{
					label: 'Игра по мотивам занятий на Futurio.ru',
					href: 'https://khusamov.github.io/solid-futurio-ru-game/'
				},
				{
					label: 'Тестирование API веб-браузеров',
					href: 'https://khusamov.github.io/web-browser-api-testing/'
				},
				{
					label: 'Тестирование Box2d',
					href: 'https://khusamov.github.io/box2d/'
				},
				{
					label: 'Мой первый калькулятор шкафов-купе',
					href: 'http://khusamov.github.io/wardrobe-calculator/'
				}
			]
		}
	]
})

// - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - -

/**
 * @link https://docusaurus.io/docs/api/themes/configuration#footer-1
 * @type {import('utility-types').DeepPartial<import('@docusaurus/theme-common').Footer>}
 */
const footer = {
	style: 'dark',
	copyright: `
		Copyright © 2021-${new Date().getFullYear()} ${siteTitle}.
		<br/>
		هرگز تسلیم نشو! سهراب!
	`,
	links: [
		{
			title: 'Связь с автором',
			items: [
				{
					label: 'Главсайт',
					href: 'http://khusamov.ru/'
				},
				{
					label: 'ВКонтакте',
					href: 'https://vk.com/crystalset'
				},
				{
					label: 'GitHub-профиль',
					href: 'https://github.com/khusamov'
				}
			]
		},
		{
			title: 'Дополнительно',
			items: [
				{
					label: 'GitHub',
					href: repoUrl
				},
				{
					label: 'Сайт собран на Docusaurus',
					href: 'https://docusaurus.io/'
				}
			]
		}
	]
}

// - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - -

/**
 * @link https://docusaurus.io/docs/api/themes/configuration#announcement-bar
 * @type {import('@docusaurus/preset-classic').ThemeConfig}
 */
const {announcementBar} = ({
	announcementBar: announcementEnabled && {
		id: 'support_us', // id: 'announcementBar-2', // Increment on change
		backgroundColor: '#ffffe3',
		textColor: '#091E42',
		isCloseable: true,
		content: `
			<div style="padding: 20px">
				Наш девиз:  
				<a target="_blank" href="https://bit.ly/3sL7g7y">Никогда не сдавайся!</a>
			</div>
		`
	}
})

// - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - -

async function createThemeConfig() {
	/**
	 * @link https://docusaurus.io/docs/api/themes/configuration#common
	 * @type {import('@docusaurus/preset-classic').ThemeConfig}
	 */
	return ({
		docs: {
			sidebar: {
				autoCollapseCategories: true,
				hideable: false
			}
		},
		announcementBar,
		navbar,
		footer,
		/**
		 * @link https://docusaurus.io/docs/api/themes/configuration#codeblock
		 */
		prism: {
			theme: require('prism-react-renderer/themes/github'),
			darkTheme: require('prism-react-renderer/themes/dracula'),
			// https://docusaurus.io/docs/markdown-features/code-blocks#supported-languages
			additionalLanguages: ['typescript', 'csharp', 'docker', 'bash'],
			defaultLanguage: 'typescript'
		}
	})
}

// - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - -

/**
 * @type {import('@docusaurus/types').PluginConfig[]}
 */
const themes = [
	[
		'@docusaurus/theme-classic',
		{
			customCss: require.resolve(customStyleFilename)
		}
	]
]

/**
 * @type {import('@docusaurus/types').I18nConfig}
 */
const i18n = {
	defaultLocale: 'ru',
	locales: ['en', 'ru'],
	localeConfigs: {},
	path: 'docs'
}

// - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - -

module.exports = async function createConfig() {
	/**
	 * @link https://docusaurus.io/docs/api/docusaurus-config
	 * @type {import('@docusaurus/types').Config}
	 */
	return {
		title: siteTitle,
		tagline,
		i18n,
		favicon: 'img/favicon.ico',
		url: 'https://khusamov.github.io',
		baseUrl: '/',
		noIndex: true,
		titleDelimiter: '::',
		organizationName,
		projectName,
		deploymentBranch,
		trailingSlash: false,
		onBrokenLinks: 'throw',
		onBrokenMarkdownLinks: 'warn',
		themeConfig: await createThemeConfig(),
		themes,
		plugins
	}
}