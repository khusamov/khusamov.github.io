// @ts-check
// Note: type annotations allow type checking and IDEs autocompletion

const themeConfig = require('./themeConfig')
const themes = require('./themes')
const plugins = require('./plugins')

/**
 * @type {import('@docusaurus/types').Config}
 */
const config = {
	title: 'Khusamov Sukhrob',
	tagline: 'Технические справочники',
	url: 'https://khusamov.github.io',
	baseUrl: '/',
	noIndex: true,
	titleDelimiter: '::',
	organizationName: 'khusamov', // Логин на GitHub.
	projectName: 'khusamov.github.io', // Имя репозитория.
	favicon: 'img/favicon.ico',
	trailingSlash: false,
	onBrokenLinks: 'throw',
	onBrokenMarkdownLinks: 'warn',
	deploymentBranch: 'gh-pages',
	themeConfig,
	themes,
	plugins,
};

module.exports = config;
