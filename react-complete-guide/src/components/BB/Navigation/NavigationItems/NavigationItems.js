import React from "react";
import styles from "./NavigationItems.module.css";
import NavigationItem from "./NavigationItem/NavigationItem";
import Aux from "../../../../higher-order-components/BBAux";

const navigationItems = (props) => (
	<ul className={styles.NavigationItems}>
		<NavigationItem link="/" isExact={true} key="0">
			Burger Builder
    </NavigationItem>
		{/* <NavigationItem link="/checkout" isExact={false} key="1">
			Checkout
		</NavigationItem> */}
		{props.isAuthenticated ? (
			<Aux>
				<NavigationItem link="/orders" isExact={true} key="2">Orders</NavigationItem>
				<NavigationItem link="/logout" isExact={true} key="3">Logout</NavigationItem>
			</Aux>
		) : (
				<NavigationItem link="/auth" isExact={true} key="3">
					Authenticate
				</NavigationItem>
		)}
	</ul>
);
export default navigationItems;
