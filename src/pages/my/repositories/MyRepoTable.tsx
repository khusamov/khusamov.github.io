import styles from '@site/src/pages/my/repositories/index.module.scss'
import {RepoTable} from '@site/src/pages/my/repositories/RepoTable'
import {repoListAddress, Gihub} from '@site/src/pages/my/repositories/gihub'
import React, {Fragment} from 'react'
import {useFetch} from 'use-http'

interface IMyRepoTableProps {
	publicReposCount: number
}

const uniquePredicate = (value: any, index: number, values: any[]) => values.indexOf(value) === index
const notNullPredicate = (value: any) => value !== null

export const MyRepoTable = ({ publicReposCount }: IMyRepoTableProps) => {
	const { loading, error, data = [] } = useFetch<Gihub[]>(repoListAddress(publicReposCount), {}, [])
	const topics = (
		data
			.map((item: Gihub) => (item.topics ?? []) as string[])
			.reduce((result: string[], topics: string[]) => result.concat(topics), [])
			.filter(uniquePredicate)
	)
	const languages = (
		data
			.map((item: Gihub) => item.language)
			.filter(notNullPredicate)
			.filter(uniquePredicate)
	)
	return (
		<Fragment>
			{error && 'Ошибка доступа к серверу: ' + error.message}
			{loading && 'Загружается список репозиториев...'}
			{
				!loading && (
					<Fragment>
						<div className={styles.topics}>
							{topics.join(', ')}
						</div>
						<div className={styles.languages}>
							{languages.join(', ')}
						</div>
						<RepoTable items={data}/>
					</Fragment>
				)
			}
		</Fragment>
	)
}