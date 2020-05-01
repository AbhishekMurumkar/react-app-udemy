import React from "react";
import Aux from "../../../../higher-order-components/BBAux";
import Button from "../../UI/Button/Button";
import { Component } from "react";

// const OrderSummary = (props) => {
class OrderSummary extends Component {

	componentDidUpdate(){
		console.log("Ordersummary updated");
	}
	// componentWillUpdate(){
	// 	console.log("Ordersummary will update");
	// }

	render() {

	this.ingredientSummary = Object.keys(this.props.ingredients).map((e) => {
      return (
        <li key={e}>
          {" "}
          <span style={{ textTransform: "capitalize" }}>{e}</span> :{" "}
          <strong style={{ textTransform: "italic" }}>
            {" "}
            {this.props.ingredients[e]}
          </strong>{" "}
        </li>
      );
	});
	
    return (
      <Aux>
        <h2>
          <center>Your Order Summary</center>
        </h2>
        <p>A delicious burger with the following ingredients</p>
        <ul>{this.ingredientSummary}</ul>
        <h3>
          Total checkout price:{" "}
          <strong style={{ fontStyle: "italic" }}> {this.props.price} </strong>
        </h3>
        <p>Continue to checkout</p>
        <Button btnType="Success" clicked={this.props.purchaseContinued}>
          {" "}
          Continue{" "}
        </Button>
        <Button btnType="Danger" clicked={this.props.purchaseCancelled}>
          {" "}
          Cancel{" "}
        </Button>
      </Aux>
    );
  }
}
export default OrderSummary;
