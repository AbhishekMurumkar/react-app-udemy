import {createStore} from "redux";
// reducer
import AssignmentReducer from "./Reducers/Assignment5Reducer";

let assignmentStore = createStore(AssignmentReducer);

export default assignmentStore;
