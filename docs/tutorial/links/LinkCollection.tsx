import React from 'react'
import {TLink} from './TLink';
import styles from './LinkCollection.module.scss';

type TLinkCollectionProps = {
	links: TLink[]
	className?: string | undefined
}

export default function LinkCollection({links, className = styles.LinkCollection}: TLinkCollectionProps) {
	return (
		<ol className={className}>
			{links.map(link => <LinkItem {...link}/>)}
		</ol>
	)
}

export function LinkItem({label, href, links}: TLink) {
	return (
		<li>
			<a href={href} target='_blank'>{label}</a>
			{links && <LinkCollection links={links} className={styles.SubLinkCollection}/>}
		</li>
	)
}













