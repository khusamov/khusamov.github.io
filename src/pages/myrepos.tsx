import React from 'react';
import useFetch from 'use-http'
import Layout from '@theme/Layout';

export default function() {
	const {loading, error, data = []} = useFetch('https://api.github.com/users/khusamov/repos?per_page=100', {}, [])
	return (
		<Layout>
			{error && 'Error!'}
			{loading && 'Loading...'}

			<table>
				<tr>
					<th>Репозиторий</th>
					<th>Описание</th>
				</tr>

				{data.map(item => (
					<tr>
						<td>
							<a href={`https://github.com/khusamov/${item.name}`} target='_blank'>
								{item.name}
							</a>
						</td>
						<td>{item.description}</td>
					</tr>
				))}
			</table>



		</Layout>
	)
}