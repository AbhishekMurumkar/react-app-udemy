import * as actionNames from "../actions/MyActions";
import {updateObject} from "../MyUtilities";

const initialState = {
    results: []
}

const deleteResult = (newState,action)=>{
    console.log(newState,action);
    let updatedArr = newState.results.filter((res) => {
        return res.id !== action.elementId
    });
    console.log(updatedArr);
    return updateObject(newState,{results:updatedArr});
}

const myResultsReducer = (state = initialState, action) => {
    let newState = { ...state };
    // let newState = Object.assign({},state);
    //implementing actions
    switch (action.type) {
        case actionNames.STORE_RESULT:
            return updateObject(state,{results:state.results.concat({ id:new Date().getTime(), value:action.storeNumber })});
        //     newState.results = newState.results.concat({
        //         id: new Date().getTime(),
        //         value: action.storeNumber
        //     });
        //     break;
        case actionNames.DELETE_RESULT:
            return deleteResult(newState,action);
            // console.log(action);
            // return updateObject(state,{results:updatedArr});
            // newState.results = updatedArr;
            // break;
        default:
            return state;
    }
    return newState;
}
export default myResultsReducer;
