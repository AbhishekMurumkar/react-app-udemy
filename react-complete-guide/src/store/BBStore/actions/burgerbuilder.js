// holds all the action creators of burgerbuilder container
import * as actionTypes from "./actionTypes";
import axios from "../../../axios-orders";

export const add_ingredient = (ingredientName) => {
  return {
    IngredientType: ingredientName,
    type          : actionTypes.ADD_ING,
  };
};

export const remove_ingredient = (ingredientName) => {
  return {
    IngredientType: ingredientName,
    type          : actionTypes.REMOVE_ING,
  };
};

export const set_Ingredient = (ingredient) => {
  return {
    type       : actionTypes.SET_ING,
    ingredients: ingredient,
  };
};

export const fetchIngredientFailed = ()=>{
    return {
        type: actionTypes.FETCH_ING_FAILED
    }
}

export const initIngredient = () => {
  //async code to get the initial ingredients from firebase
  return (dispatch) => {
    setTimeout(() => {
      axios
        .get("https://reactburgerbuilder-8b06e.firebaseio.com/ingredients.json")
        .then((resp) => {
          // console.log("got ingredients");
          dispatch(set_Ingredient(resp.data));
        //   this.props.initializeIngredients.call(this, resp.data);
        //   this.setState({
        //     purchasable: this.props.totalPrice > 4 ? true : false,
        //   });
        })
        .catch((err) => {
          // console.log(err);
          dispatch(fetchIngredientFailed());
        //   this.burgerBuilder = (
        //     <p style={{ textAlign: "center" }}>
        //       Ingredients cant be loaded.Server error
        //     </p>
        //   );
        });
    }, 1500);
  };
};
