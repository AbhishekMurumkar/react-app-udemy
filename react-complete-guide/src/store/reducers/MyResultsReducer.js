import * as actionNames from "../actions/MyActions";

const initialState = {
    results: []
}


const myResultsReducer = (state = initialState, action) => {
    let newState = { ...state };
    // let newState = Object.assign({},state);
    //implementing actions
    switch (action.type) {
        case actionNames.STORE_RESULT:
            newState.results = newState.results.concat({
                id: new Date().getTime(),
                value: action.storeNumber
            });
            break;
        case actionNames.DELETE_RESULT:
            console.log(action);
            let updatedArr = newState.results.filter((res) => {
                return res.id !== action.elementId
            });
            newState.results = updatedArr;
            break;
        default:
            return state;
    }
    return newState;
}
export default myResultsReducer;
