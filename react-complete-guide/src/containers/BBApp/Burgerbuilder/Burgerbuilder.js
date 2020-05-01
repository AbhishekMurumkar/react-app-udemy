import React, { Component } from "react";
import Aux from "../../../higher-order-components/BBAux";
import Burger from "../../../components/BB/Burger/Burger";
import BuildControls from "../../../components/BB/Burger/BuildControls/BuildControls";
import Modal from "../../../components/BB/UI/Modal/Modal";
import OrderSummary from "../../../components/BB/Burger/OrderSummary/OrderSummary";

const INGREDIENT_PRICES = {
  salad: 0.5,
  cheese: 0.4,
  meat: 1.5,
  bacon: 0.7,
};

class Burgerbuilder extends Component {
  constructor(props) {
    super(props);
    this.state = {
      ingredients: {},
      totalPrice: 4,
      purchasable: 0,
      purchasing: false,
    };
  }

  addIngredientHandler = (type) => {
    let count =
      this.state.ingredients[type] === undefined
        ? 0
        : this.state.ingredients[type];
    let updatedCount = count + 1;
    const newState = {
      ...this.state,
    };
    newState.ingredients[type] = updatedCount;
    newState.purchasable = newState.purchasable + 1;
    newState.totalPrice = newState.totalPrice + INGREDIENT_PRICES[type];
    // let updatedPrice = newState + INGREDIENT_PRICES[type];
    // console.log(newState);
    this.setState(newState);
  };

  removeIngredientHandler = (type) => {
    // let count = (this.state.ingredients[type] ===undefined)?0:this.state.ingredients[type];
    // if(count>0){
    if (this.state.purchasable > 0) {
      // let updatedCount = count -1;
      let newState = {
        ...this.state,
      };
      newState.ingredients[type] = newState.ingredients[type] - 1;
      // updatedIngredients[type]=updatedCount;
      newState.totalPrice = newState.totalPrice - INGREDIENT_PRICES[type];
      newState.purchasable = newState.purchasable - 1;
      // let updatedPrice = this.state.totalPrice - INGREDIENT_PRICES[type];
      this.setState(newState);
    }
  };

  purchasingHandler = () => {
    this.setState({ purchasing: true });
  };
  purchaseCancelHandler = () => {
    this.setState({ purchasing: false });
  };
  purchaseContinueHandler = () => {
    alert("Continuing your delicious order");
  };
  render() {
    const buttonInfo = {
      ...this.state.ingredients,
    };
    for (let key in INGREDIENT_PRICES) {
      buttonInfo[key] =
        this.state.ingredients[key] === undefined ||
        this.state.ingredients[key] === 0
          ? true
          : false;
    }
    return (
      <Aux>
        <Modal
          show={this.state.purchasing}
          modalClosed={this.purchaseCancelHandler}
        >
          <OrderSummary
            ingredients={this.state.ingredients}
            purchaseContinued={this.purchaseContinueHandler}
            purchaseCancelled={this.purchaseCancelHandler}
            price={this.state.totalPrice.toFixed(2)}
          />
        </Modal>

        <Burger ingredients={this.state.ingredients} />
        <BuildControls
          ingredientAdded={this.addIngredientHandler}
          ingredientRemoved={this.removeIngredientHandler}
          buttonsStatus={buttonInfo}
          cost={this.state.totalPrice}
          checkoutStatus={this.state.purchasable === 0}
          ordered={this.purchasingHandler}
        />
      </Aux>
    );
  }
}
export default Burgerbuilder;
