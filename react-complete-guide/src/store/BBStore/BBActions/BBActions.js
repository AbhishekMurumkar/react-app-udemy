import * as actionTypes from "./BBActionTypes";
import axios from "../../../axios-orders";
export const addIngredient = (name) => {
  return {
    type: actionTypes.ADD_ING,
    IngredientType: name,
  };
};
export const removeIngredient = (name) => {
  return {
    type: actionTypes.REMOVE_ING,
    IngredientType: name,
  };
};

export const setInitIngredients = () => {
  return (dispatch) => {
    setTimeout(() => {
      axios
        .get("https://reactburgerbuilder-8b06e.firebaseio.com/ingredients.json")
        .then((resp) => {
          console.log("got ingredients");
          dispatch(initializeIngredients(resp.data));
        })
        .catch((err) => {
          console.log(err);

        });
    }, 1500);
  };
};
export const initializeIngredients = (ingredients) => {
  return {
    type: actionTypes.INITIALIZE_ING,
    initial: ingredients,
  };
};
