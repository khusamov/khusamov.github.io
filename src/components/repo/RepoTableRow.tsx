import {Gihub} from '@site/src/components/repo/gihub'
import React from 'react'

const pagesAddress = (name: string) => {
	const base = 'khusamov.github.io'
	return name === base ? `https://github.khusamov.ru/` : `https://${base}/${name}/`
}

interface IRepoTableRowProps {
	item: Gihub
	index: number
}

export const RepoTableRow = (
	({ item: { name, description, topics, language, html_url, size, has_pages }, index }: IRepoTableRowProps) => (
		<tr>
			<td>{index + 1}</td>
			<td><a target='_blank' href={html_url}>{name}</a></td>
			<td>{(topics ?? []).join(', ')}</td>
			<td>{language}</td>
			<td>{size}</td>
			<td>{description}</td>
			<td>{has_pages && <a target='_blank' href={pagesAddress(name)}>Pages</a>}</td>
		</tr>
	)
)