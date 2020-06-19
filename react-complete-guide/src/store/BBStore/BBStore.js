import {createStore} from 'redux';
import BBReducer from './BBReducer/BBReducer';
// const BBStore = createStore(BBReducer);

//adding dev tools.
// simple redux dev tool
const BBStore = createStore(BBReducer,window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()) 
export default BBStore;
