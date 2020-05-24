import React from 'react';
import styles from './NavigationItems.module.css';
import NavigationItem from "./NavigationItem/NavigationItem";

const navigationItems = (props)=>(
	<ul className={styles.NavigationItems}>
		<NavigationItem link="/" isExact={true}>
			Burger Builder
		</NavigationItem>
		<NavigationItem link="/checkout" isExact={false}>
			Checkout
		</NavigationItem>
		<NavigationItem link="/orders" isExact={true}>
			Orders
		</NavigationItem>
	</ul>
);
export default navigationItems;