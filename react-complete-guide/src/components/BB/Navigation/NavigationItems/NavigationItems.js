import React from 'react';
import styles from './NavigationItems.module.css';
import NavigationItem from "./NavigationItem/NavigationItem";

const navigationItems = (props)=>(
	<ul className={styles.NavigationItems}>
		<NavigationItem link="/" isExact={true} key="0">
			Burger Builder
		</NavigationItem>
		<NavigationItem link="/checkout" isExact={false} key="1">
			Checkout
		</NavigationItem>
		<NavigationItem link="/orders" isExact={true} key="2">
			Orders
		</NavigationItem>
		<NavigationItem link="/auth" isExact={true} key="3">
			Authenticate
		</NavigationItem>
	</ul>
);
export default navigationItems;