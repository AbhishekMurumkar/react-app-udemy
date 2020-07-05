import * as actionTypes from "../actions/actionTypes";

const initialState = {
    token: null,
    userId: null,
    error: null,
    loading: false,
    authRedirectPath:null
};

const reducer = (state = initialState, action) => {
    let newState = { ...state };
    switch (action.type) {
        case actionTypes.AUTH_START:
            newState.loading = true;
            newState.error = null;
            break;

        case actionTypes.AUTH_SUCCESS:
            newState.token = action.idToken;
            newState.userId = action.userId;
            newState.error = null;
            newState.loading = false;
            
            break;
        
       case actionTypes.AUTH_FAILED:
           newState.error=action.error;
           newState.loading = false;
           break;

        case actionTypes.AUTH_LOGOUT:
            newState.token = null;
            newState.userId = null;
            newState.error = null;
            break;

        case actionTypes.SET_AUTH_REDIRECT_PATH:
            newState.authRedirectPath =action.path;
            break;

        default:
            break;
    }
    return newState;
};
export default reducer;