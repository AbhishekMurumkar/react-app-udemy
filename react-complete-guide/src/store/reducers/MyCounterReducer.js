import * as actionNames from "../actions/MyActions";

const initialState = {
    counter: 0
}


const myCounterReducer = (state = initialState, action) => {
    let newState = { ...state };
    console.log("[MyCounterReducer.js state,action=]");console.log(state,action);
    // let newState = Object.assign({},state);
    //implementing actions
    switch (action.type) {
        case actionNames.INCREMENT:
            newState.counter = newState.counter + 1; break;
        case actionNames.DECREMENT:
            newState.counter = newState.counter - 1; break;
        case actionNames.ADD:
            newState.counter = newState.counter + action.payload.value; break;
        case actionNames.SUB:
            newState.counter = newState.counter - action.payload.value; break;
        default:
            return state;
    }
    return newState;
}
export default myCounterReducer;
