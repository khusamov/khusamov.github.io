import React from 'react';
import Layout from '@theme/Layout';
import LinkCollection from './LinkCollection';
import {links} from './links';
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