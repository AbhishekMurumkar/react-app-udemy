import * as actionTypes from "../actions/actionTypes";

const initialState = {
  orders: [],
  loading: false,
  purchased:false,
};

const orderReducer = (state = initialState, action) => {
  let newState = { ...state };
  switch (action.type) {
    
    case actionTypes.PURCHASE_BURGER_SUCCESS:
      const newOrder = {
        ...action.orderData,
        id: action.orderId,
      };
      newState.purchased = true;
      newState.loading = false;
      newState.orders = newState.orders.concat(newOrder);
      break;
    
    case actionTypes.FETCH_ORDERS_SUCCESS:
      newState.orders = action.orders;
      newState.loading = false;
      newState.error = false;
      break;

    case actionTypes.PURCHASE_INIT:
        newState.purchased = false;
        break;
    
    case actionTypes.PURCHASE_BURGER_START:
    case actionTypes.FETCH_ORDERS_START:
      newState.loading = true;
      break;
    
    case actionTypes.PURCHASE_BURGER_FAILED:
    case actionTypes.FETCH_ORDERS_FAILED:
      newState.loading = false;
      newState.error=action.error.message;
      break;

    default:
      break;
  }
  return newState;
};

export default orderReducer;
