import React from 'react';
import useFetch from 'use-http'
import Layout from '@theme/Layout';
import styles from './index.module.scss';

const repoListAddress = 'https://api.github.com/users/khusamov/repos?per_page=100'

export default function() {
	const {loading, error, data = []} = useFetch(repoListAddress, {}, [])
	return (
		<Layout>
			<div className={styles.layout}>
				<h1>Мои публичные репозитории</h1>
				{error && 'Ошибка доступа к серверу: ' + error.message}
				{loading && 'Загружается список репозиториев...'}
				{!loading && (
					<table>
						<tbody>
							<tr>
								<th>Репозиторий</th>
								<th>Описание</th>
							</tr>
							{
								data.map(
									(item: any) => (
										<tr>
											<td>
												<a href={`https://github.com/khusamov/${item.name}`} target='_blank'>
													{item.name}
												</a>
											</td>
											<td>{item.description}</td>
										</tr>
									)
								)
							}
						</tbody>
					</table>
				)}
			</div>
		</Layout>
	)
}