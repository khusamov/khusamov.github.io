import {MyRepoTable} from '@site/src/pages/my/repositories/MyRepoTable'
import {TUserInfo, userInfoAddress} from '@site/src/pages/my/repositories/gihub'
import Layout from '@theme/Layout'
import React from 'react'
import {useFetch} from 'use-http'
import styles from './index.module.scss'

export default function () {
	const { loading, error, data } = useFetch<TUserInfo>(userInfoAddress, {}, [])
	const publicReposCount = data ? data.public_repos : 0
	return (
		data && (
			<Layout>
				<div className={styles.layout}>
					<h1>
						Мои публичные репозитории
						({publicReposCount})
					</h1>
					{loading && 'Загружается информация о пользователе...'}
					{error && 'Ошибка доступа к серверу: ' + error.message}
					{!loading && <MyRepoTable publicReposCount={publicReposCount}/>}
				</div>
			</Layout>
		)
	)
}