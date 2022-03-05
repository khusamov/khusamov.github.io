const lightCodeTheme = require('prism-react-renderer/themes/github');
const darkCodeTheme = require('prism-react-renderer/themes/dracula');
const {repoUrl, siteLogoSrc} = require('./constants')

/**
 * @type {import('@docusaurus/preset-classic').ThemeConfig}
 */
module.exports = ({
	hideableSidebar: true,
	autoCollapseSidebarCategories: true,
	announcementBar: {
		id: 'support_us',
		backgroundColor: '#ffffe3',
		textColor: '#091E42',
		isCloseable: true,
		content: `
			<div style="padding: 20px">
				We are looking to revamp our docs, please fill 
				<a target="_blank" rel="noopener noreferrer" href="#">this survey</a>
			</div>
		`
	},
	prism: {
		theme: lightCodeTheme,
		darkTheme: darkCodeTheme
	},
	navbar: {
		title: 'Khusamov Sukhrob',
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
				label: 'GitHub',
				position: 'right',
				href: repoUrl
			},
			{
				type: 'dropdown',
				label: 'Community',
				position: 'left',
				items: [
					{
						label: 'Facebook',
						href: 'https://www.facebook.com',
					},
					{
						label: 'Yandex',
						href: 'https://www.yandex.com',
					}
				]
			}
		]
	},
	footer: {
		style: 'dark',
		copyright: `Copyright © 2021-${new Date().getFullYear()} Khusamov Sukhrob. Собрано при помощи Docusaurus.`,
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
})