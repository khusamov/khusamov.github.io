// @ts-check

const siteTitle = 'Technical Document'
const tagline = 'Техническая документация'

const announcementEnabled = true
const showLastUpdateAuthor = true
const showLastUpdateTime = true

const organizationName = 'khusamov' // Логин на GitHub.
const projectName = 'khusamov.github.io' // Имя репозитория.
const repoUrl = `https://github.com/${organizationName}/${projectName}`
const editUrl = `${repoUrl}/tree/main`

const customStyleFilename = './src/css/custom.css'
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
		'@docusaurus/plugin-content-pages',
		/**
		 * @link https://docusaurus.io/docs/api/plugins/@docusaurus/plugin-content-pages
		 * @type {import('@docusaurus/plugin-content-pages').Options}
		 */
		({

		})
	],
	[
		'@docusaurus/plugin-content-blog',
		/**
		 * @link https://docusaurus.io/docs/api/plugins/@docusaurus/plugin-content-blog
		 * @type {import('@docusaurus/plugin-content-blog').Options}
		 */
		({
			blogTitle: 'Docusaurus blog!',
			blogDescription: 'A Docusaurus powered blog!',
			postsPerPage: 'ALL',
			blogSidebarTitle: 'Статьи журнала',
			showReadingTime: true,
			editUrl
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
		alt: 'My Site Logo',
		src: siteLogoSrc
	},
	items: [
		{
			label: 'Руководство',
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
			label: 'Журнал',
			position: 'left',
			to: '/blog'
		},
		{
			type: 'dropdown',
			label: 'Проекты',
			position: 'left',
			items: [
				{
					label: 'Удаление файлов Facebook',
					href: 'https://www.facebook.com',
				},
				{
					label: 'Яндекс своими руками',
					href: 'https://www.yandex.com',
				},
				{
					label: 'Генератор двумерных прайс-листов',
					href: 'https://khusamov.github.io/price-list-2d-generator/'
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
			Сайт собран на Docusaurus.
		`,
	links: [
		{
			title: 'Документация',
			items: [
				{
					label: 'Tutorial',
					to: '/tutorial/intro'
				}
			]
		},
		{
			title: 'Контакты',
			items: [
				{
					label: 'Головной сайт',
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
					label: 'Журнал',
					to: '/blog'
				},
				{
					label: 'GitHub',
					href: repoUrl
				}
			]
		}
	]
}

// - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - -

/**
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
		hideableSidebar: false,
		autoCollapseSidebarCategories: true,
		announcementBar,
		navbar,
		footer,
		/**
		 * @link https://docusaurus.io/docs/api/themes/configuration#codeblock
		 */
		prism: {
			theme: require('prism-react-renderer/themes/github'),
			darkTheme: require('prism-react-renderer/themes/dracula'),
			additionalLanguages: ['typescript'],
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

// - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - -

module.exports = async function createConfig() {
	/**
	 * @link https://docusaurus.io/docs/api/docusaurus-config
	 * @type {import('@docusaurus/types').Config}
	 */
	return {
		title: siteTitle,
		tagline,
		favicon: 'img/favicon.ico',
		url: 'https://khusamov.github.io',
		baseUrl: '/',
		noIndex: true,
		titleDelimiter: '::',
		organizationName,
		projectName,
		deploymentBranch: 'gh-pages',
		trailingSlash: false,
		onBrokenLinks: 'throw',
		onBrokenMarkdownLinks: 'warn',
		themeConfig: await createThemeConfig(),
		themes,
		plugins
	}
}