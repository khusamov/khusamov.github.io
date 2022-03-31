import React from 'react';
import Layout from '@theme/Layout';
import LinkCollection from '../../components/links/LinkCollection';
import {links} from '../../components/links/links';
import styles from './index.module.scss';

export default function() {
	return (
		<Layout>
			<div className={styles.layout}>
				<LinkCollection links={links}/>
			</div>
		</Layout>
	)
}