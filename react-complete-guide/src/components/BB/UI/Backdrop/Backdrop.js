import React from 'react';
import styles from './Backdrop.module.css';

const backdrop = (props)=>{
	const divele = (props.show) ? <div className={styles.Backdrop} onClick={props.backdropClicked}></div>:null;
	return(divele);
}
export default backdrop;