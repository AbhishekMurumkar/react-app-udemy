import { put } from "redux-saga/effects";
import * as actionCreators from "../actions/index";
import axios from "../../../axios-orders.js";

export function* initializeIngredientsSaga(action) {
	try {
		const ingredients = yield axios.get("https://reactburgerbuilder-8b06e.firebaseio.com/ingredients.json");
		yield put(actionCreators.set_Ingredient(ingredients.data));
	} catch (err) {
		yield put(actionCreators.fetchIngredientFailed());
	}
}