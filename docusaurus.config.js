// @ts-check
// Note: type annotations allow type checking and IDEs autocompletion

const lightCodeTheme = require('prism-react-renderer/themes/github');
const darkCodeTheme = require('prism-react-renderer/themes/dracula');

const repoUrl = 'https://github.com/khusamov/khusamov.github.io'
const editUrl = `${repoUrl}/tree/main`

/**
 * @type {import('@docusaurus/types').Config}
 */
const config = {
	title: 'Khusamov Sukhrob',
	tagline: 'Технические справочники',
	url: 'https://khusamov.github.io',
	baseUrl: '/',
	organizationName: 'khusamov', // Usually your GitHub org/user name.
	projectName: 'khusamov.github.io', // Usually your repo name.
	favicon: 'img/favicon.ico',
	trailingSlash: false,
	onBrokenLinks: 'throw',
	onBrokenMarkdownLinks: 'warn',
	deploymentBranch: 'gh-pages',

	plugins: [
		'@docusaurus/plugin-content-pages',
		[
			'@docusaurus/theme-classic',
			{
				customCss: require.resolve('./src/css/custom.css')
			}
		],
		[
			'@docusaurus/plugin-content-blog',
			{
				blogTitle: 'Docusaurus blog!',
				blogDescription: 'A Docusaurus powered blog!',
				postsPerPage: 'ALL',
				blogSidebarTitle: 'Статьи журнала',
				showReadingTime: true,
				editUrl
			}
		],
		[
			'@docusaurus/plugin-content-docs',
			/**
			 * @type {import('@docusaurus/plugin-content-docs').Options}
			 */
			({
				id: 'tutorial',
				path: 'docs/tutorial',
				routeBasePath: 'tutorial',
				sidebarPath: require.resolve('./sidebars.js'),
				// showLastUpdateAuthor: true,
				// showLastUpdateTime: true
			})
		],
		[
			'@docusaurus/plugin-content-docs',
			/**
			 * @type {import('@docusaurus/plugin-content-docs').Options}
			 */
			({
				id: 'solid',
				path: 'docs/solid',
				routeBasePath: 'solid',
				sidebarPath: require.resolve('./sidebars.js'),
				// showLastUpdateAuthor: true,
				// showLastUpdateTime: true
			})
		]
	],

	themeConfig:
	/** @type {import('@docusaurus/preset-classic').ThemeConfig} */
		({
			hideableSidebar: true,
			autoCollapseSidebarCategories: true,
			prism: {
				theme: lightCodeTheme,
				darkTheme: darkCodeTheme
			},
			navbar: {
				title: 'Khusamov Sukhrob',
				hideOnScroll: true,
				logo: {
					alt: 'My Site Logo',
					src: 'https://avatars.githubusercontent.com/u/4146998?s=400&u=7dc65930b58dae10e9771ffc3611ec3c326a9a3c&v=4'
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
						label: 'GitHub',
						position: 'right',
						href: repoUrl
					}
				]
			},
			footer: {
				style: 'dark',
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
				],
				copyright: `Copyright © 2021-${new Date().getFullYear()} Khusamov Sukhrob. Собрано при помощи Docusaurus.`
			}
		})
};

module.exports = config;
