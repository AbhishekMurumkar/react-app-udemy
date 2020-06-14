import * as actionNames from "./MyActions";

const initialState = {
    counter: 0,
    results: []
}


const myReducer = (state = initialState, action) => {
    let newState = { ...state };
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
        case actionNames.STORE_RESULT:
            newState.results = newState.results.concat({
                id: new Date().getTime(),
                value: newState.counter
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
export default myReducer;