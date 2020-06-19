import * as actionTypes from "../BBActions/BBActionTypes";
import {addIngredient,removeIngredient,initializeIngredients} from "../BBActions/BBActions";

const initialState={
    ingredients:null
}

const ingredientReducer = (state=initialState,action)=>{

    let newState={...state};
    
    switch (action.type) {
        case actionTypes.ADD_ING:
            return addIngredient(action.IngredientType);
            // break;
        case actionTypes.REMOVE_ING:
            return removeIngredient(action.IngredientType);
            // break;
        case actionTypes.INITIALIZE_ING:
            return initializeIngredients(action.initialState);
        default:
            break;
    }
    return newState;
}
export default ingredientReducer;