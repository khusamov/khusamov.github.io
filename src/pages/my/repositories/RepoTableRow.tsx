import {Gihub} from '@site/src/pages/my/repositories/gihub'
import React from 'react'

interface IRepoTableRowProps {
	item: Gihub
	index: number
}

export const RepoTableRow = (
	({ item: { name, description, topics, language, html_url, size }, index }: IRepoTableRowProps) => (
		<tr>
			<td>{index + 1}</td>
			<td>
				<a href={html_url} target="_blank">
					{name}
				</a>
			</td>
			<td>{(topics ?? []).join(', ')}</td>
			<td>{language}</td>
			<td>{size}</td>
			<td>{description}</td>
		</tr>
	)
)