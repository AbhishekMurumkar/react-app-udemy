import React from 'react';
import logoImage from '../../../../assets/images/bblogo.png';
import styles from "./Logo.module.css";

const logo = (props)=>(
	<div className={styles.Logo}>
		<img src={logoImage} style={{height:props.height}} alt="BBLOGO"/>
	</div>
);
export default logo;