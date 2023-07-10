import {IRepoInfo} from '@site/src/pages/my/repositories/IRepoInfo'
import {RepoTableRow} from '@site/src/pages/my/repositories/RepoTableRow'
import React from 'react'

export const RepoTableBody = (
	({items}: {items: IRepoInfo[]}) => (
		<tbody>
			{
				items.map(
					(item: any) => <RepoTableRow item={item}/>
				)
			}
		</tbody>
	)
)