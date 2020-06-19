import * as actionTypes from "./BBActionTypes";

export const addIngredient = (name)=>{
    return {
        type: actionTypes.ADD_ING,
        IngredientType:name
    }
}
export const removeIngredient = (name)=>{
    return {
        type: actionTypes.REMOVE_ING,
        IngredientType:name
    }
}
export const initializeIngredients = (ingredients)=>{
    return {
        type: actionTypes.INITIALIZE_ING,
        initial:ingredients
    }
}