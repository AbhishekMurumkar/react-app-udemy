import * as actionTypes from "./actionTypes";
import axios from "axios";
export const authStart = ()=>{
    return {
        type:actionTypes.AUTH_START,  
    }
}
export const authSuccess = (data,token,userId)=>{
    return {
        type:actionTypes.AUTH_SUCCESS,
        authData:data,
        idToken:token,
        userId:userId
    }
}
export const authFailed = (err)=>{
    return {
        type:actionTypes.AUTH_FAILED,
        error:err   
    }
}
export const logout = () => {
    return {
        type:actionTypes.AUTH_LOGOUT
    }
}
export const checkAuthTimeout = (expirationTime)=>{
    return dispatch=>{
        setTimeout(()=>{
            dispatch(logout());
        },expirationTime * 1000);
    }
}
export const auth=(email,pass,method)=>{
    return dispatch=>{
        dispatch(authStart());
        let authData = {
            email: email,
            password: pass,
            returnSecureToken: true
        };
        let url;
        if(method){
            //signing up a user
            url = "https://identitytoolkit.googleapis.com/v1/accounts:signUp?key=AIzaSyB7iHlrpcJT1St3_crR7pjv8VJ4zzZrzXo";
        }else{
            //logging in a user
            url="https://identitytoolkit.googleapis.com/v1/accounts:signInWithPassword?key=AIzaSyB7iHlrpcJT1St3_crR7pjv8VJ4zzZrzXo";
        }
        axios.post(url,authData)
        .then(resp =>{
            console.log(resp);
            dispatch(authSuccess(resp.data, resp.data.idToken, resp.data.localId));
            dispatch(checkAuthTimeout(resp.data.expiresIn));
        })
        .catch(err=>{
            console.log("Unable to authenticate user");console.log(err);
            dispatch(authFailed(err));
        })
    }
}

export const setAuthPath = (path)=>{
    return {
        type:actionTypes.SET_AUTH_REDIRECT_PATH,
        path:path
    }
}