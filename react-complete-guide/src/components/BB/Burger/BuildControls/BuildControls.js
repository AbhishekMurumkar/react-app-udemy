import React from 'react';
import BuildControl from "./BuildControl/BuildControl";
import styles from "./BuildControls.module.css";

const controls = [
	{ label: 'Salad', type: 'salad' },
	{ label: 'Cheese', type: 'cheese' },
	{ label: 'Meat', type: 'meat' },
	{ label: 'Bacon', type: 'bacon' },
];

const BuildControls = (props) => {
	// console.log(props)
	return (
		<div className={styles.BuildControls}>
			<h2>Total cost : <strong>{props.cost.toFixed(2)}</strong> </h2>
			{controls.map((e) => {
				return <BuildControl
					label={e.label}
					key={e.label}
					add={() => { props.ingredientAdded(e.type) }}
					remove={() => { props.ingredientRemoved(e.type) }}
					status={props.buttonsStatus[e.type]} />
			})}
			<button className={styles.OrderButton} disabled={props.checkoutStatus} onClick={props.ordered}>Checkout</button>
		</div>
	);
}
export default BuildControls;