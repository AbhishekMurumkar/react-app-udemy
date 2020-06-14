const initialState={
    ingredients:null
}

const ingredientReducer = (state=initialState,action)=>{

    let newState={...state};
    
    switch (action.type) {
        case "ADD_INGREDIENT":
            break;
        case "REMOVE_INGREDIENT":
            
            break;
    
        default:
            break;
    }
    return newState;
}
export default ingredientReducer;