import { put, delay } from "redux-saga/effects";
// import * as actionTypes from "../actions/actionTypes";
import * as actionCreators from "../actions/index";
import axios from "axios";

export function* logoutSaga(action) {
	// yield console.log("from auth:start");
	yield localStorage.removeItem("userSession");
	yield localStorage.removeItem("expirationDate");
	yield put(actionCreators.logoutSucceed());
}

export function* checkAuthTimeoutSaga(action) {
	//waiting for time to execute the expiry date then loggingout the user.
	yield delay(action.expirationTime * 1000);
	//we are literally executing the code present in that action creator thats y we are using ()
	yield put(actionCreators.logout());
}

export function* authenticationSaga(action) {
	yield put(actionCreators.authStart());
	let authData = {
		email: action.email,
		password: action.pass,
		returnSecureToken: true,
	};
	let url;
	if (action.method) {
		//signing up a user
		url = "https://identitytoolkit.googleapis.com/v1/accounts:signUp?key=AIzaSyB7iHlrpcJT1St3_crR7pjv8VJ4zzZrzXo";
	} else {
		//logging in a user
		url = "https://identitytoolkit.googleapis.com/v1/accounts:signInWithPassword?key=AIzaSyB7iHlrpcJT1St3_crR7pjv8VJ4zzZrzXo";
	}
	try {
		// here the axios does not tend to return a promise instead it is waited until it fetches the data from the server this is happening due to presence of yield.
		const resp = yield axios.post(url, authData);
		// if success
		let temp = yield new Date().getTime() + (resp.data.expiresIn);
		yield localStorage.setItem("userSession", JSON.stringify(resp.data));
		yield localStorage.setItem("expirationDate", temp);
		yield put(actionCreators.authSuccess(resp.data, resp.data.idToken, resp.data.localId));
		yield put(actionCreators.checkAuthTimeout(resp.data.expiresIn));
	} catch (error) {
		yield put(actionCreators.authFailed(error));
	}
};

export function* authCheckStateSaga(action) {
	let data = yield localStorage.getItem("userSession");
	if (!data) {
		yield put(actionCreators.logout());
	}
	else {
		// when we got a token
		let temp = yield JSON.parse(data);
		let tempTime = yield parseFloat(localStorage.getItem("expirationDate"));
		if (new Date(tempTime) < new Date()) {
			yield put(actionCreators.logout());
		}
		else {
			// calculating new amount of seconds needed to signout
			let remainTime = yield (tempTime - new Date().getTime());
			yield put(actionCreators.authSuccess(temp, temp.idToken, temp.localId));
			yield put(actionCreators.checkAuthTimeout(remainTime/1000));
		}
	}
}