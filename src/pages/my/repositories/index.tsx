import {RepoTable} from '@site/src/pages/my/repositories/RepoTable'
import Layout from '@theme/Layout'
import React from 'react'
import useFetch from 'use-http'
import styles from './index.module.scss'

const repoListAddress = 'https://api.github.com/users/khusamov/repos?per_page=100'

export default function () {
	const { loading, error, data = [] } = useFetch(repoListAddress, {}, [])
	return (
		<Layout>
			<div className={styles.layout}>
				<h1>Мои публичные репозитории</h1>
				{error && 'Ошибка доступа к серверу: ' + error.message}
				{loading && 'Загружается список репозиториев...'}
				{!loading && <RepoTable items={data}/>}
			</div>
		</Layout>
	)
}