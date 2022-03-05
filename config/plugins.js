const {editUrl, sidebarsFilename} = require('./constants')

/**
 * @type {import('@docusaurus/types').PluginConfig[]}
 */
module.exports = [
	[
		'@docusaurus/plugin-content-pages',
		/**
		 * @type {import('@docusaurus/plugin-content-pages').Options}
		 */
		({

		})
	],
	[
		'@docusaurus/plugin-content-blog',
		/**
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
		 * @type {import('@docusaurus/plugin-content-docs').Options}
		 */
		({
			id: 'tutorial',
			path: 'docs/tutorial',
			routeBasePath: 'tutorial',
			sidebarPath: require.resolve(sidebarsFilename),
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
			sidebarPath: require.resolve(sidebarsFilename),
			// showLastUpdateAuthor: true,
			// showLastUpdateTime: true
		})
	]
]