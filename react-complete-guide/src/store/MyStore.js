// reducers
// import MyReducer from "./MyReducer";
import MyCounterReducer from "./reducers/MyCounterReducer";
import MyResultsReducer from "./reducers/MyResultsReducer";
//for mertging the reducers

import {
  combineReducers
} from "redux";

import {
  createStore
} from 'redux';

import {
  applyMiddleware
} from 'redux';


//for injecting store in devtools of browser
import {
  compose
} from 'redux';

//composer allows us combine enhancers
//with single reducer
// let store = createStore(MyReducer);

//for async executions
import thunk from 'redux-thunk';

// now when we have multiple reducers we will merge them into one and then pass as arguement to store
let rootReducer = combineReducers({
  counterAtGlobalState: MyCounterReducer,
  resultsAtGlobalState: MyResultsReducer
});

//creating middleware
const logger = (statefunctions) => {
  // console.log(statefunctions)
  return (singledispatch) => {
    // console.log(singledispatch)
    return action => {
      // console.log(action)
      console.log("[Middleware] Dispatching ", action);
      const result = singledispatch(action);
      console.log("[Middleware] NextState", statefunctions.getState());
      return result;
    }
  }
}

// inorder to let inject store in dev tools of browser we need to do following
const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
// for synchronous execution
// const store = createStore(rootReducer, composeEnhancers(applyMiddleware(logger)))

// for Asynchronous execution
const store = createStore(rootReducer, composeEnhancers(applyMiddleware(logger,thunk)))

// let store = createStore(rootReducer,applyMiddleware(logger));
export default store;
