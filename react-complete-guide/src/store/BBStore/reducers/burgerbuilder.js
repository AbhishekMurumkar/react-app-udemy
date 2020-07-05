import * as actionTypes from "../actions/actionTypes";

const INGREDIENT_PRICES = {
  salad: 1,
  cheese: 2,
  meat: 3,
  bacon: 4,
};

const initalState = {
  ingredients: null,
  totalPrice: 4,
  error: false,
  buidling:false
};

const bbreducer = (state = initalState, action) => {
  let newState = { ...state };
  switch (action.type) {
    case actionTypes.SET_ING:
      newState = {...initalState};
      newState.ingredients = action.ingredients;
      // calculating the total price once we get default data
      var cost = 0;
      for (var i in action.ingredients) {
        if (action.ingredients[i] > 0) {
          cost += action.ingredients[i] * INGREDIENT_PRICES[i];
        }
      }
      // changing the order of placing of content of burgers
      newState.ingredients = {
          salad:action.ingredients.salad,
          bacon:action.ingredients.bacon,
          meat:action.ingredients.meat,
          cheese:action.ingredients.cheese  
      }
      newState.error = false;
      newState.buidling = false;
      newState.totalPrice = newState.totalPrice + cost;
      break;

    case actionTypes.ADD_ING:
      newState.buidling=true;
      newState.ingredients[action.IngredientType]++;
      newState.totalPrice = newState.totalPrice + INGREDIENT_PRICES[action.IngredientType];
      break;

    case actionTypes.REMOVE_ING:
      newState.buidling=true;
      newState.ingredients[action.IngredientType]--;
      newState.totalPrice = newState.totalPrice - INGREDIENT_PRICES[action.IngredientType];
      break;
    case actionTypes.FETCH_ING_FAILED:
      return {
        ...newState,
        error: true,
      };
    default:
      break;
  }
  // console.log(newState);
  return newState;
};
export default bbreducer;
