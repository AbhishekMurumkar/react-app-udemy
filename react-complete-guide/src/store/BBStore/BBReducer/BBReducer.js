const INGREDIENT_PRICES = {
    salad: 1,
    cheese: 2,
    meat: 3,
    bacon: 4,
};

const initalState = {
    ingredients: null,
    totalPrice: 4,
};

const bbreducer = (state = initalState, action) => {
    let newState = { ...state };
    switch (action.type) {
        case "INITIALIZE_ING":
            console.log(action);
            newState.totalPrice = 4;
            newState.ingredients = action.initial;
            // calculating the total price once we get default data
            var cost = 0;
            for (var i in action.initial) {
                if (action.initial[i] > 0) {
                    cost += action.initial[i] * INGREDIENT_PRICES[i];
                }
            }
            newState.totalPrice = newState.totalPrice + cost;
            break;
        case "ADD_ING":
            newState.ingredients[action.IngredientType]++;
            newState.totalPrice =
                newState.totalPrice + INGREDIENT_PRICES[action.IngredientType];
            break;
        case "REMOVE_ING":
            newState.ingredients[action.IngredientType]--;
            newState.totalPrice =
                newState.totalPrice - INGREDIENT_PRICES[action.IngredientType];
            break;
        default:
            break;
    }
    console.log(newState);
    return newState;
};
export default bbreducer;
