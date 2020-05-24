import React from 'react';
import styles from './Toolbar.module.css';
import Logo from "../../UI/Logo/Logo";
import NavigationItems from "../../Navigation/NavigationItems/NavigationItems";
import DrawerToggle from "../SideDrawer/DrawerToggle/DrawerToggle";


const Toolbar=(props)=>(
	<header className={styles.Toolbar}>
		{/*<div onClick={props.openSidebar}>Menu</div>*/}
		<DrawerToggle openSidebar={props.openSidebar}/>
		{/*<div>Logo</div>*/}
		<div className={styles.Logo}>
			<Logo />
		</div>
		<nav>
			<NavigationItems />
		</nav>
	</header>
);
export default Toolbar;