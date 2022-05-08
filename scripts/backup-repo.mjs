import {spawn} from 'child_process'
import fetch from 'node-fetch'
import {join} from 'path'

const BACKUP_PATH = '/Users/khusamov/Documents/repo/BACKUP2'
const REPOS_URL = 'https://api.github.com/users/khusamov/repos?per_page=100'

const users = [
	//'khusamov',
	'energo-alternativa',
	'cardinalkeeper',
	'setup-okna',
	'khusamov-dump'
]


const privates = [
	'setupokna-calc-offer',
	'vk-com-api-photo-manager',
	'zevs-lite',
	'game-test-cpp-win-sfml-platformer',
	'zevs-lite-modifications',
	'today',
	'changelog-editor',
]

const repoAddress = (name, user) => `git@github.com:${user}/${name}.git`
const repoUrl = user => `https://api.github.com/users/${user}/repos?per_page=100`

async function exec(path, name, params) {
	return new Promise((resolve, reject) => {
		const command = spawn(name, params, {cwd: join(BACKUP_PATH, path)})
		command.stdout.on('data', data => console.log(data.toString()))
		command.stderr.on('data', data => console.error(data.toString()))
		command.on('error', reject)
		command.on('close', resolve)
	})
}

async function backup(path, user, names) {
	for (const name of names) {
		await exec(path, 'rm', ['-r', name])
		await exec(path, 'git', ['clone', repoAddress(name, user)])
	}
}

async function getGithubNames(user) {
	const response = await fetch(repoUrl(user))
	const data = await response.json()
	return data.map(item => item.name)
}

(async () => {
	//await backup(getGithubNames())
	//await backup(privates)
	for (const user of users) {
		const names = await getGithubNames(user)
		await backup('misc', user, names)
	}
})()
