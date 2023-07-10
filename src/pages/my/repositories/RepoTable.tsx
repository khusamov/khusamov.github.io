import {IRepoInfo} from '@site/src/pages/my/repositories/IRepoInfo'
import {RepoTableBody} from '@site/src/pages/my/repositories/RepoTableBody'
import {RepoTableHead} from '@site/src/pages/my/repositories/RepoTableHead'
import React from 'react'

export const RepoTable = (
	({items}: {items: IRepoInfo[]}) => (
		<table>
			<RepoTableHead/>
			<RepoTableBody items={items}/>
		</table>
	)
)