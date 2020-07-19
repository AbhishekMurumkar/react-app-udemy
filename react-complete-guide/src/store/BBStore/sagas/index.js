import {takeEvery,all} from "redux-saga/effects";
import * as actionTypes from "../actions/actionTypes";
import * as authSagas from "./auth";
import * as burgerSagas from "./burgerBuilder";
import * as ordersSaga from "./order";

// this function acts as watcher which watches for execution of our actionTypes
// when we get the action then we use takeEvery to execute the generator present in sagas
export function* watchAuth(){
	yield all([
		takeEvery(actionTypes.AUTH_INITIATE_LOGOUT, authSagas.logoutSaga),
		takeEvery(actionTypes.AUTH_CHECK_LOGOUT,authSagas.checkAuthTimeoutSaga),
		takeEvery(actionTypes.AUTH_USER, authSagas.authenticationSaga),
		takeEvery(actionTypes.AUTH_CHECK_INTITIAL_LOGIN_STATE, authSagas.authCheckStateSaga)
	]);
	// // console.log(logoutSaga);
	// yield takeEvery(actionTypes.AUTH_INITIATE_LOGOUT, authSagas.logoutSaga);
	// // console.log("completed logout");
	// yield takeEvery(actionTypes.AUTH_CHECK_LOGOUT,authSagas.checkAuthTimeoutSaga);
	// yield takeEvery(actionTypes.AUTH_USER, authSagas.authenticationSaga);
	// yield takeEvery(actionTypes.AUTH_CHECK_INTITIAL_LOGIN_STATE, authSagas.authCheckStateSaga);
}
export function* watchBurgerBuilder(){
	yield takeEvery(actionTypes.INITIALIZE_INGREDIENT,burgerSagas.initializeIngredientsSaga);
}
export function* watchOrders(){
	yield takeEvery(actionTypes.PURCHASE_INIT,ordersSaga.purchaseBurgerSaga);
	yield takeEvery(actionTypes.FETCH_INIT,ordersSaga.fetchOrdersSaga);
}