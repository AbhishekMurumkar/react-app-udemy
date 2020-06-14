import * as actionNames from "../Assignment5Actions";

const initialState={
    persons:[]
}

const assignmentReducer = (state=initialState,action)=>{

    let newState = {...state};
    switch(action.type){
        case actionNames.ADD:
            newState.persons = newState.persons.concat(action.payload.person);
            break;
        case actionNames.SUB:
            newState.persons = newState.persons.filter((person)=>{
                return person.id!==action.payload
            })
            break;
        default:
            return state;
    }
    return newState;
}

export default assignmentReducer;