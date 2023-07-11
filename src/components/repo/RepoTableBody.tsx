import {RepoTableRow} from '@site/src/components/repo/RepoTableRow'
import {Gihub} from '@site/src/components/repo/gihub'
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