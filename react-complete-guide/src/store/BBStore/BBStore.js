import {createStore,} from 'redux';
// import BBReducer from './BBReducer/BBReducer';
// import BBReducer from "./reducers/burgerbuilder";
// const BBStore = createStore(BBReducer);

// for middleware
import { applyMiddleware,compose } from "redux";
// for execution of async code
import thunk from 'redux-thunk';

import {combineReducers} from "redux";
import burgerBuilderReducer from "./reducers/burgerbuilder";
import orderReducer from "./reducers/orders";
import authReducer from "./reducers/auth";

const rootReducer  = combineReducers({
    burgerBuilder : burgerBuilderReducer,
    orders :orderReducer,
    authentication: authReducer
});
//adding dev tools.
// simple redux dev tool
// synchronous execution
// const BBStore = createStore(BBReducer,window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()) 

// for asynchronous execution
// inorder to let inject store in dev tools of browser we need to do following
const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
// for Asynchronous execution via adding middleware
const BBStore = createStore(rootReducer, composeEnhancers(
    applyMiddleware(thunk)
));
export default BBStore;
