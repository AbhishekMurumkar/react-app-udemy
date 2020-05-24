import React from "react";
import Burger from "../../Burger/Burger";
import Button from "../../UI/Button/Button";
import styles from "./CheckoutSummary.module.css";
import {withRouter} from "react-router-dom";

const checkoutSummary=(props)=>{
    // console.log("[CheckoutSummary.js]");
    // console.log(props);

    return(
        <div className={styles.CheckoutSummary}>
            <h2>we hope it tastes well</h2>
            <div style={{width:"100%",margin:"auto"}}>
                {(props.ingredients)?(<Burger ingredients={props.ingredients}/>):(null)}
            </div>
            <Button btnType="Danger" clicked={props.checkoutCancelled}>Cancel</Button>
            <Button btnType="Success" clicked={props.checkoutContinued}>Continue</Button>
        </div>
    )
}
export default withRouter(checkoutSummary);