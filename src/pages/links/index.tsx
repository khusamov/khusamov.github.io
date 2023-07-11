import LinkPage from '@site/src/components/links/LinkPage'
import React from 'react';
import Layout from '@theme/Layout';
import {links} from '../../components/links';
import styles from './index.module.scss';

export default function() {
	return (
		<Layout>
			<div className={styles.layout}>
				<h1>Мои личные ссылки</h1>
				<LinkPage links={links}/>
			</div>
		</Layout>
	)
}