// @ts-check
// Note: type annotations allow type checking and IDEs autocompletion

const lightCodeTheme = require('prism-react-renderer/themes/github');
const darkCodeTheme = require('prism-react-renderer/themes/dracula');

/**
 * @type {import('@docusaurus/types').Config}
 */
const config = {
	title: 'My Site',
	tagline: 'tagline Dinosaurs are cool',
	url: 'https://khusamov.github.io',
	baseUrl: '/',
	organizationName: 'khusamov', // Usually your GitHub org/user name.
	projectName: 'khusamov.github.io', // Usually your repo name.
	favicon: 'img/favicon.ico',
	trailingSlash: false,
	onBrokenLinks: 'throw',
	onBrokenMarkdownLinks: 'warn',
	deploymentBranch: 'gh-pages',

	presets: [
		[
			'classic',
			/**
			 * @type {import('@docusaurus/preset-classic').Options}
			 */
			({
				docs: {
					sidebarPath: require.resolve('./sidebars.js'),
					// Please change this to your repo.
					editUrl: 'https://github.com/facebook/docusaurus/tree/main/packages/create-docusaurus/templates/shared/'
				},
				blog: {
					showReadingTime: true,
					// Please change this to your repo.
					editUrl:
						'https://github.com/facebook/docusaurus/tree/main/packages/create-docusaurus/templates/shared/'
				},
				theme: {
					customCss: require.resolve('./src/css/custom.css')
				}
			})
		]
	],

	themeConfig:
	/** @type {import('@docusaurus/preset-classic').ThemeConfig} */
		({
			navbar: {
				title: 'Khusamov Site',
				logo: {
					alt: 'My Site Logo',
					src: 'https://sun1-56.userapi.com/s/v1/if1/OEgKH73e8ed6YjFMt7xl8LVWEku8udWgj8UL7JDxcWDQ-NyBeB2QFCOguv0LRI41LtqV4wBr.jpg?size=50x50&quality=96&crop=246,238,613,613&ava=1'
				},
				items: [
					{
						label: 'Руководство',
						position: 'left',
						type: 'doc',
						docId: 'intro'
					},
					{
						label: 'Блог',
						position: 'left',
						to: '/blog'
					},
					{
						label: 'GitHub',
						position: 'right',
						href: 'https://github.com/facebook/docusaurus'
					}
				]
			},
			footer: {
				style: 'dark',
				links: [
					{
						title: 'Docs',
						items: [
							{
								label: 'Tutorial',
								to: '/docs/intro'
							}
						]
					},
					{
						title: 'Community',
						items: [
							{
								label: 'Stack Overflow',
								href: 'https://stackoverflow.com/questions/tagged/docusaurus'
							},
							{
								label: 'Discord',
								href: 'https://discordapp.com/invite/docusaurus'
							},
							{
								label: 'Twitter',
								href: 'https://twitter.com/docusaurus'
							}
						]
					},
					{
						title: 'More',
						items: [
							{
								label: 'Blog',
								to: '/blog'
							},
							{
								label: 'GitHub',
								href: 'https://github.com/facebook/docusaurus'
							}
						]
					}
				],
				copyright: `Copyright © ${new Date().getFullYear()} My Project, Inc. Built with Docusaurus.`
			},
			prism: {
				theme: lightCodeTheme,
				darkTheme: darkCodeTheme
			}
		})
};

module.exports = config;
