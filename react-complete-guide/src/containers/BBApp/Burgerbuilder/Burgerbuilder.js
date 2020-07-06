// import React, { Component } from "react";
// import Aux from "../../../higher-order-components/BBAux";
// import Burger from "../../../components/BB/Burger/Burger";
// import BuildControls from "../../../components/BB/Burger/BuildControls/BuildControls";
// import Modal from "../../../components/BB/UI/Modal/Modal";
// import OrderSummary from "../../../components/BB/Burger/OrderSummary/OrderSummary";
// import axios from "../../../axios-orders";
// import Spinner from "../../../components/BB/UI/Spinner/Spinner";
// import WithErrorHandler from "../../../higher-order-components/WithErroHandler/WithErrorHandler";
// const INGREDIENT_PRICES = {
//   salad: 1,
//   cheese: 2,
//   meat: 3,
//   bacon: 4,
// };
// class Burgerbuilder extends Component {
//   burgerBuilder;
//   constructor(props) {
//     super(props);
//     this.state = {
//       ingredients: null,
//       totalPrice: 4,
//       purchasable: 0,
//       purchasing: false,
//       loading: false,
//     };
//   }z
//   componentDidMount() {
//     console.log("[BurgerBuilder.js] componentDidMount");
//     console.log(this.props);
//     this.burgerBuilder=<Spinner/>
//     setTimeout(() => {
//       axios
//         .get("https://reactburgerbuilder-8b06e.firebaseio.com/ingredients.json")
//         .then((resp) => {
//           console.log("got ingredients");
//           // console.log(resp);
//           // calculating the total price once we get default data
//           var cost=0;
//           for(var i in resp.data){
//             if(resp.data[i]>0){
//               cost += resp.data[i] * INGREDIENT_PRICES[i];
//             }
//           }
//           this.setState({
//             ingredients: resp.data,
//             totalPrice:(this.state.totalPrice+cost),
//             purchasable:((this.state.totalPrice+cost)>4)?true:false
//           });
//           // console.log(this.state.ingredients)

//         })
//         .catch((err) => {
//           console.log(err);
//           this.burgerBuilder = <p style={{textAlign:"center"}}>Ingredients cant be loaded.Server error</p>
//         });
//     }, 1500);
//   }
//   addIngredientHandler = (type) => {
//     let count =
//       this.state.ingredients[type] === undefined
//         ? 0
//         : this.state.ingredients[type];
//     let updatedCount = count + 1;
//     const newState = {
//       ...this.state,
//     };
//     newState.ingredients[type] = updatedCount;
//     newState.purchasable = newState.purchasable + 1;
//     newState.totalPrice = newState.totalPrice + INGREDIENT_PRICES[type];
//     // let updatedPrice = newState + INGREDIENT_PRICES[type];
//     // console.log(newState);
//     this.setState(newState);
//   };
//   removeIngredientHandler = (type) => {
//     // let count = (this.state.ingredients[type] ===undefined)?0:this.state.ingredients[type];
//     // if(count>0){
//     if (this.state.purchasable > 0) {
//       // let updatedCount = count -1;
//       let newState = {
//         ...this.state,
//       };
//       newState.ingredients[type] = newState.ingredients[type] - 1;
//       // updatedIngredients[type]=updatedCount;
//       newState.totalPrice = newState.totalPrice - INGREDIENT_PRICES[type];
//       newState.purchasable = newState.purchasable - 1;
//       // let updatedPrice = this.state.totalPrice - INGREDIENT_PRICES[type];
//       this.setState(newState);
//     }
//   };
//   purchasingHandler = () => {
//     this.setState({ purchasing: true });
//   };
//   purchaseCancelHandler = () => {
//     this.setState({ purchasing: false });
//   };
//   purchaseContinueHandler = () => {
//     // this.props.location.state = this.state.ingredients;
//     const queryParams=[];
//     for(let i in this.state.ingredients){
//       // console.log(encodeURIComponent(i))
//       queryParams.push(encodeURIComponent(i)+"="+encodeURIComponent(this.state.ingredients[i]))
//     }
//     queryParams.push('price='+this.state.totalPrice.toFixed(2))
//     const query = queryParams.join('&')
//     this.props.history.push({
//       pathname:"/checkout",
//       search:"?"+query
//     });
//   };
//   render() {

//     let orderSummary = null;
//     if (this.state.ingredients != null) {
//       const buttonInfo = {
//         ...this.state.ingredients,
//       };
//       for (let key in INGREDIENT_PRICES) {
//         buttonInfo[key] =
//           this.state.ingredients[key] === undefined ||
//           this.state.ingredients[key] === 0
//             ? true
//             : false;
//       }
//       this.burgerBuilder = (
//         <Aux>
//           <Burger ingredients={this.state.ingredients} />
//           <BuildControls
//             ingredientAdded={this.addIngredientHandler}
//             ingredientRemoved={this.removeIngredientHandler}
//             buttonsStatus={buttonInfo}
//             cost={this.state.totalPrice}
//             checkoutStatus={this.state.purchasable === 0}
//             ordered={this.purchasingHandler}
//           />
//         </Aux>
//       );
//       orderSummary = (
//         <OrderSummary
//           ingredients={this.state.ingredients}
//           purchaseContinued={this.purchaseContinueHandler}
//           purchaseCancelled={this.purchaseCancelHandler}
//           price={this.state.totalPrice.toFixed(2)}
//         />
//       );
//     }
//     if (this.state.loading) {
//       orderSummary = <Spinner />;
//     }
//     //-----------------------------------------------------
//     return (
//       <Aux>
//         <Modal
//           show={this.state.purchasing}
//           modalClosed={this.purchaseCancelHandler}
//         >
//           {orderSummary}
//         </Modal>
//         {this.burgerBuilder}

//       </Aux>
//     );
//   }
// }
// export default WithErrorHandler(Burgerbuilder, axios);

// =======================PART 2======================================

import React, { Component } from "react";
import Aux from "../../../higher-order-components/BBAux";
import Burger from "../../../components/BB/Burger/Burger";
import BuildControls from "../../../components/BB/Burger/BuildControls/BuildControls";
import Modal from "../../../components/BB/UI/Modal/Modal";
import OrderSummary from "../../../components/BB/Burger/OrderSummary/OrderSummary";
import axios from "../../../axios-orders";
import Spinner from "../../../components/BB/UI/Spinner/Spinner";
import WithErrorHandler from "../../../higher-order-components/WithErroHandler/WithErrorHandler";
import { connect } from "react-redux";

//now importing the actions types
import * as burgerBuilderActions from "../../../store/BBStore/actions/index";
class Burgerbuilder extends Component {
  burgerBuilder;
  // constructor(props) {
  //   super(props);
  //   this.state = {
  //     purchasing: false,
  //     // loading: false,
  //   };
  // }
  state = {
    purchasing: false,
  };
  componentDidMount() {
    // console.log("[BurgerBuilder.js] componentDidMount");
    // console.log(this.props);
    this.burgerBuilder = <Spinner />;
    this.props.initIngredients();
    // setTimeout(() => {
    //   axios
    //     .get("https://reactburgerbuilder-8b06e.firebaseio.com/ingredients.json")
    //     .then((resp) => {
    //       console.log("got ingredients");
    //       this.props.initializeIngredients.call(this, resp.data);
    //       this.setState({ purchasable: (this.props.totalPrice > 4) ? true : false })
    //     })
    //     .catch((err) => {
    //       console.log(err);
    //       this.burgerBuilder = <p style={{ textAlign: "center" }}>Ingredients cant be loaded.Server error</p>
    //     });
    // }, 1500);
  }
  // addIngredientHandler = (type) => {
  //   let count =
  //     this.state.ingredients[type] === undefined
  //       ? 0
  //       : this.state.ingredients[type];
  //   let updatedCount = count + 1;
  //   const newState = {
  //     ...this.state,
  //   };
  //   newState.ingredients[type] = updatedCount;
  //   newState.purchasable = newState.purchasable + 1;
  //   newState.totalPrice = newState.totalPrice + INGREDIENT_PRICES[type];
  //   // let updatedPrice = newState + INGREDIENT_PRICES[type];
  //   // console.log(newState);
  //   this.setState(newState);
  // };
  // removeIngredientHandler = (type) => {
  //   // let count = (this.state.ingredients[type] ===undefined)?0:this.state.ingredients[type];
  //   // if(count>0){
  //   if (this.state.purchasable > 0) {
  //     // let updatedCount = count -1;
  //     let newState = {
  //       ...this.state,
  //     };
  //     newState.ingredients[type] = newState.ingredients[type] - 1;
  //     // updatedIngredients[type]=updatedCount;
  //     newState.totalPrice = newState.totalPrice - INGREDIENT_PRICES[type];
  //     newState.purchasable = newState.purchasable - 1;
  //     // let updatedPrice = this.state.totalPrice - INGREDIENT_PRICES[type];
  //     this.setState(newState);
  //   }
  // };
  purchasingHandler = () => {
    //now check if a user is authenticated or not
    //based on authentication status we need to redirect the user
    if (this.props.isAuthenticated) {
      this.setState({ purchasing: true });
    } else {
      // console.log("changed the auth redirect path");
      this.props.onSetAuthRedirectPath("/checkout");
      // console.log(this.props.authRedirectPath);
      this.props.history.push("/auth");
    }
  };
  purchaseCancelHandler = () => {
    this.setState({ purchasing: false });
  };
  purchaseContinueHandler = () => {
    // this.props.location.state = this.state.ingredients;
    const queryParams = [];
    for (let i in this.state.ingredients) {
      // console.log(encodeURIComponent(i))
      queryParams.push(
        encodeURIComponent(i) +
          "=" +
          encodeURIComponent(this.state.ingredients[i])
      );
    }
    queryParams.push("price=" + this.props.totalPrice.toFixed(2));
    const query = queryParams.join("&");
    this.props.history.push({
      pathname: "/checkout",
      search: "?" + query,
    });
  };

  render() {
    let orderSummary = null;
    if (this.props.ingredients != null) {
      const buttonInfo = {
        ...this.props.ingredients,
      };

      this.burgerBuilder = (
        <Aux>
          <Burger ingredients={this.props.ingredients} />
          <BuildControls
            ingredientAdded={this.props.addIngredient}
            ingredientRemoved={this.props.removeIngredient}
            // ingredientAdded={this.addIngredientHandler}
            // ingredientRemoved={this.removeIngredientHandler}
            buttonsStatus={buttonInfo}
            cost={this.props.totalPrice}
            checkoutStatus={this.props.totalPrice > 4 ? false : true}
            ordered={this.purchasingHandler}
            isAuthenticated={this.props.isAuthenticated}
          />
        </Aux>
      );
      orderSummary = (
        <OrderSummary
          ingredients={this.props.ingredients}
          purchaseContinued={this.purchaseContinueHandler}
          purchaseCancelled={this.purchaseCancelHandler}
          price={this.props.totalPrice.toFixed(2)}
        />
      );
    }
    if (this.props.error) {
      this.burgerBuilder = (
        <p>Unable to fetch the ingredients from the server</p>
      );
    }
    // if (this.state.loading) {
    if (this.props.loading) {
      orderSummary = <Spinner />;
    }

    return (
      <Aux>
        <Modal
          show={this.state.purchasing}
          modalClosed={this.purchaseCancelHandler}
        >
          {orderSummary}
        </Modal>
        {this.burgerBuilder}
      </Aux>
    );
  }
}
const mapStateToProps = (state) => {
  return {
    ingredients: state.burgerBuilder.ingredients,
    totalPrice: state.burgerBuilder.totalPrice,
    error: state.burgerBuilder.error,
    building:state.burgerBuilder.building,
    loading: state.orders.loading,
    isAuthenticated: state.authentication.token != null,
    authRedirectPath: state.authentication.authRedirectPath,
  };
};
const mapDispatchToProps = (dispatch) => {
  return {
    initIngredients: () => dispatch(burgerBuilderActions.initIngredient()),
    // initializeIngredients: (initialData) => dispatch(burgerBuilderActions.initializeIngredients(initialData)),
    addIngredient: (type) =>
      dispatch(burgerBuilderActions.add_ingredient(type)),
    removeIngredient: (type) =>
      dispatch(burgerBuilderActions.remove_ingredient(type)),
    onSetAuthRedirectPath: (path) => {
      // console.log("in changing authredirectpath to " + path);
      dispatch(burgerBuilderActions.setAuthRedirectPath(path));
    },
  };
};
export default connect(
  mapStateToProps,
  mapDispatchToProps
)(WithErrorHandler(Burgerbuilder, axios));
