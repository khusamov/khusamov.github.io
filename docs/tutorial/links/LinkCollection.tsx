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
			{
				links.map(
					(link, index) => <LinkItem key={index} {...link}/>
				)
			}
		</ol>
	)
}

export function LinkItem({label, comment, tags, href, links}: TLink) {
	return (
		<li>
			<a href={href} target='_blank'>{label}</a>
			{tags && tags.length && (
				<span className={styles.tags}>
					{tags.map((tag, index) => <span key={index}>{tag}</span>)}
				</span>
			)}
			{comment && <span className={styles.comment}>{comment}</span>}
			{links && <LinkCollection links={links} className={styles.SubLinkCollection}/>}
		</li>
	)
}













