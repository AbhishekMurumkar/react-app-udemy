const redux = require("redux");
// here we need to setup with store, reducer, dispacther for actions and subscriptions

const initialState = {
    counter:0
}
// reducer is only one who updates the store and should be only one instance of it
//reducer

//here state takes value of initial state whenever rootReducer is called with state object as undefined
//hence it is initialised to initialState on the first run
const rootReducer = (state=initialState,action)=>{
    let newState={...state};
    //reacting to different set of actions
    switch(action.type){
        case "INC_COUNTER":
            newState.counter=newState.counter+1;
            // console.log(newState)
            return newState;
        
        case "ADD_COUNTER":
            newState.counter = newState.counter + action.payload.value;
            return newState;
    }
    return state;
};

//store
const createStore = redux.createStore;
store = createStore(rootReducer);
//an empty store is of no use.Thus setup a reducer for acting on it
console.log("Initial State")
console.log(store.getState());

//building subscriptions
// this block of code is ran-whenever there is change in the store or action is dispatched
store.subscribe(()=>{
    console.log("[Subscription]State Updated->",store.getState());
});

//dispatching actions
//never miss type key in dispatch method
store.dispatch({ type:'INC_COUNTER' });
console.log("After INC_COUNTER");
console.log(store.getState());

store.dispatch({ type:'ADD_COUNTER',payload:{ value:10 } });
console.log("After ADD_COUNTER");
console.log(store.getState());
