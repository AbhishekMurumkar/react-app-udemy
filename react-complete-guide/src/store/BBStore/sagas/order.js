import { put } from "redux-saga/effects";
import * as actions from "../actions/index";
import axios from "../../../axios-orders";

export function* purchaseBurgerSaga(action) {
	yield put(actions.purchaseBurgerStart());
	try {
		let orderStatus = yield axios.post("./orders.json?auth=" + action.authtoken, action.order);
		yield put(actions.purchaseBurgerSuccess(orderStatus.data.name, action.orderData));
	} catch (err) {
		yield put(actions.purchaseBurgerFail(err));
	}
}
export function* fetchOrdersSaga(action) {
	yield put(actions.fetchOrderStart());
	try{
		let queryParams = yield ("?auth="+action.authtoken+"&orderBy=\"userId\"&equalTo=\""+action.userToken+"\"");
		let resp = yield axios.get("/orders.json"+queryParams);
		var neworders = [];
        Object.keys(resp.data).forEach((k) => {
          neworders.push({ id: k, ...resp.data[k] });
        });
		yield put(actions.fetchOrdersSuccess(neworders));
	}catch(err){
		yield put(actions.fetchOrdersFail(err));
	}
}