import {createStore} from 'redux';
import BBReducer from './BBReducer/BBReducer';


const BBStore = createStore(BBReducer);
export default BBStore;
