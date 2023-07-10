import {IRepoInfo} from '@site/src/pages/my/repositories/IRepoInfo'
import React from 'react'

export const RepoTableRow = (
	({item: {name, description}}: {item: IRepoInfo}) => (
		<tr>
			<td>
				<a href={`https://github.com/khusamov/${name}`} target='_blank'>
					{name}
				</a>
			</td>
			<td>{description}</td>
		</tr>
	)
)