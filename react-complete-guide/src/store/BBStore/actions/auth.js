import * as actionTypes from "./actionTypes";
import axios from "axios";
export const authStart = () => {
  return {
    type: actionTypes.AUTH_START,
  };
};
export const authSuccess = (data, token, userId) => {
  return {
    type: actionTypes.AUTH_SUCCESS,
    authData: data,
    idToken: token,
    userId: userId,
  };
};
export const authFailed = (err) => {
  return {
    type: actionTypes.AUTH_FAILED,
    error: err,
  };
};
export const logout = () => {
  localStorage.removeItem("userSession");
  localStorage.removeItem("expirationDate");
  return {
    type: actionTypes.AUTH_LOGOUT,
  };
};
export const checkAuthTimeout = (expirationTime) => {
  return (dispatch) => {
    setTimeout(() => {
      dispatch(logout());
    }, expirationTime);
  };
};
export const auth = (email, pass, method) => {
  return (dispatch) => {
    dispatch(authStart());
    let authData = {
      email: email,
      password: pass,
      returnSecureToken: true,
    };
    let url;
    if (method) {
      //signing up a user
      url = "https://identitytoolkit.googleapis.com/v1/accounts:signUp?key=AIzaSyB7iHlrpcJT1St3_crR7pjv8VJ4zzZrzXo";
    } else {
      //logging in a user
      url = "https://identitytoolkit.googleapis.com/v1/accounts:signInWithPassword?key=AIzaSyB7iHlrpcJT1St3_crR7pjv8VJ4zzZrzXo";
    }
    axios
      .post(url, authData)
      .then((resp) => {
        // console.log(resp);
        let temp = new Date().getTime() + (resp.data.expiresIn * 1000);
        localStorage.setItem("userSession", JSON.stringify(resp.data));
        localStorage.setItem("expirationDate", temp);

        dispatch(authSuccess(resp.data, resp.data.idToken, resp.data.localId));
        dispatch(checkAuthTimeout(resp.data.expiresIn * 1000));
      })
      .catch((err) => {
        // console.log("Unable to authenticate user");
        // console.log(err);
        dispatch(authFailed(err));
      });
  };
};

export const setAuthRedirectPath = (path) => {
  return {
    type: actionTypes.SET_AUTH_REDIRECT_PATH,
    path: path,
  };
};

export const authCheckState = () => {
  return (dispatch) => {
    let data = localStorage.getItem("userSession");
    if (!data) {
      dispatch(logout());
    } else {
      // when we got a token
      let temp = JSON.parse(data);
      let tempTime = parseFloat(localStorage.getItem("expirationDate"));
      if (new Date(tempTime) < new Date()) {
        dispatch(logout());
      } else {
        // calculating new amount of seconds needed to signout
        let remainTime = tempTime - new Date().getTime();
        dispatch(authSuccess(temp, temp.idToken, temp.localId));
        dispatch(checkAuthTimeout(remainTime));
      }
    }
  };
};
