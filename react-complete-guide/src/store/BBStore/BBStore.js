import { createStore } from "redux";
// import BBReducer from './BBReducer/BBReducer';
// import BBReducer from "./reducers/burgerbuilder";
// const BBStore = createStore(BBReducer);
// for middleware
import { applyMiddleware, compose } from "redux";
// for execution of async code
// import thunk from "redux-thunk";
import { combineReducers } from "redux";
// now we are working with sagas
import createSagaMiddleWare from "redux-saga";

import burgerBuilderReducer from "./reducers/burgerbuilder";
import orderReducer from "./reducers/orders";
import authReducer from "./reducers/auth";
import * as sagaActions from "./sagas/index";

// for creating our saga with store
const sagaMiddleWare = createSagaMiddleWare();
// for creating our saga with store

const rootReducer = combineReducers({
	burgerBuilder: burgerBuilderReducer,
	orders: orderReducer,
	authentication: authReducer,
});

//adding dev tools.
// simple redux dev tool
// synchronous execution
// const BBStore = createStore(BBReducer,window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__())

// for asynchronous execution
// inorder to let inject store in dev tools of browser we need to do following
// const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

// now enabling the redux store in the development mode
// for this we need to get the node env variable to check the running env
const composeEnhancers =
	process.env.NODE_ENV === "development"
		? window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__
		: null || compose;

// for Asynchronous execution via adding middleware
// const BBStore = createStore(rootReducer, composeEnhancers(
//     applyMiddleware(thunk)
// ));


// for Asynchronous execution via adding middleware and registering saga with store
const BBStore = createStore(
	rootReducer,
	// composeEnhancers(applyMiddleware(thunk, sagaMiddleWare))
	composeEnhancers(applyMiddleware(sagaMiddleWare))
);
sagaMiddleWare.run(sagaActions.watchAuth);
sagaMiddleWare.run(sagaActions.watchBurgerBuilder);
sagaMiddleWare.run(sagaActions.watchOrders);
export default BBStore;
