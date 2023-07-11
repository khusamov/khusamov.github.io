import {RepoTableBody} from '@site/src/components/repo/RepoTableBody'
import {RepoTableHead} from '@site/src/components/repo/RepoTableHead'
import {Gihub} from '@site/src/components/repo/gihub'
import React from 'react'

export const RepoTable = (
	({ items }: { items: Gihub[] }) => (
		<table>
			<RepoTableHead/>
			<RepoTableBody items={items}/>
		</table>
	)
)