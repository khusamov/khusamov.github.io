const {customStyleFilename} = require('./constants')

/**
 * @type {import('@docusaurus/types').PluginConfig[]}
 */
module.exports = [
	[
		'@docusaurus/theme-classic',
		{
			customCss: require.resolve(customStyleFilename)
		}
	]
]