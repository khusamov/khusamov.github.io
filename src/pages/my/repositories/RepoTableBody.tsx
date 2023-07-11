import {RepoTableRow} from '@site/src/pages/my/repositories/RepoTableRow'
import {Gihub} from '@site/src/pages/my/repositories/gihub'
import React from 'react'

export const RepoTableBody = (
	({ items }: { items: Gihub[] }) => (
		<tbody>
			{
				items.map(
					(item: any, index) => <RepoTableRow key={index} item={item} index={index}/>
				)
			}
		</tbody>
	)
)