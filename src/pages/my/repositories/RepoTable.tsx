import {RepoTableBody} from '@site/src/pages/my/repositories/RepoTableBody'
import {RepoTableHead} from '@site/src/pages/my/repositories/RepoTableHead'
import {Gihub} from '@site/src/pages/my/repositories/gihub'
import React from 'react'

export const RepoTable = (
	({ items }: { items: Gihub[] }) => (
		<table>
			<RepoTableHead/>
			<RepoTableBody items={items}/>
		</table>
	)
)