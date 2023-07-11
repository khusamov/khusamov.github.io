import LinkCollection from '@site/src/components/links/LinkCollection'
import React, {useState} from 'react'
import {TLink} from '@site/src/types/TLink'
import styles from './LinkPage.module.scss'
import cn from 'classnames'

const nullLink: TLink = {label: ''}

interface IMenuItemProps {
	link: TLink
	activeLink: TLink
	onClick(link: TLink): void
}

const MenuItem = ({link, activeLink, onClick}: IMenuItemProps) => {
	if (link.href) {
		return (
			<div className={styles.item}>
				<a href={link.href} target='_blank'>{link.label}</a>
			</div>
		)
	}
	const menuItemClassName = cn({
		[styles.item]: true,
		[styles.link]: true,
		[styles.active]: link === activeLink,
	})
	return (
		<div className={menuItemClassName} onClick={() => onClick(link)}>
			{link.label}
		</div>
	)
}

interface ILinkPageProps {
	links: TLink[]
}

export default function LinkPage({links}: ILinkPageProps) {
	const [activeLink, setActiveLink] = useState<TLink>(nullLink)
	return (
		<div className={styles.Page}>
			<div className={styles.Menu}>
				{
					links.map(
						link => (
							<MenuItem
								link={link}
								activeLink={activeLink}
								onClick={setActiveLink}
							/>
						)
					)
				}
			</div>
			<div className={styles.LinkBlock}>
				{
					activeLink.links && (
						<div>
							<h2>{activeLink.label}</h2>
							<LinkCollection links={activeLink.links}/>
						</div>
					)
				}
			</div>
		</div>
	)
}