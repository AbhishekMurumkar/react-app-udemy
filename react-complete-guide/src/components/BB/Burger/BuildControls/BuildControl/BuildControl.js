import React from 'react';
import styles from "./BuildControl.module.css";

const BuildControl = (props)=>{
	// console.log("[BuildControl.js  component]");
	// console.log(props);
	return(
		<div className={styles.BuildControl}>
			<div className={styles.Label}>{props.label}</div>
			<button className={styles.Less} onClick={props.remove} disabled={(props.status > 0)? false:true}> - </button>
			<button className={styles.More} onClick={props.add}> + </button>
		</div>
	);
}
export default BuildControl;