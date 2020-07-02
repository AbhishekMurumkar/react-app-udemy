//holds action creators of orders module
import * as actionTypes from "./actionTypes";
import axios from "../../../axios-orders";

export const purchaseBurgerSuccess = (id, orderData) => {
  return {
    type: actionTypes.PURCHASE_BURGER_SUCCESS,
    orderId: id,
    orderData: orderData,
  };
};

export const purchaseBurgerFail = (err) => {
  return {
    type: actionTypes.PURCHASE_BURGER_FAILED,
    error: err,
  };
};

export const purchaseBurgerStart = () => {
  return {
    type: actionTypes.PURCHASE_BURGER_START,
  };
};

export const purchaseInit = () => {
  return {
    type: actionTypes.PURCHASE_INIT
  }
}
//async one
export const purchaseBurger = (order) => {
  return (dispatch) => {
    // setting the purchase status as start
    dispatch(purchaseBurgerStart());
    console.log("in purchase burger,now emiting start of purchase burger builder");
    // setting the purchase status as start
    axios
      .post("/orders.json", order)
      .then((response) => {
        console.log(response);
        dispatch(purchaseBurgerSuccess(response.data.name, order));
        //   this.setState({ loading: false });
        //   this.props.history.replace("/");
      })
      .catch((err) => {
        console.log(err);
        dispatch(purchaseBurgerFail(err));
        //   this.setState({ loading: false });
      });
  };
};

// FETCHING PART OF ORDERS.
export const fetchOrdersSuccess = (orders) => {
  return {
    type: actionTypes.FETCH_ORDERS_SUCCESS,
    orders: orders
  }
}

export const fetchOrdersFail = (err) => {
  return {
    type: actionTypes.FETCH_ORDERS_FAILED,
    error: err
  }
}

export const fetchOrderStart = () => {
  return {
    type: actionTypes.FETCH_ORDERS_START,
  }
}
// now this is the async code to handle the fetching of orders from firebase
export const fetchOrders = () => {
  return (dispatch) => {
    dispatch(fetchOrderStart());
    axios.get("/orders.json").then((resp) => {
      // console.log(resp.data)
      var neworders = [];
      Object.keys(resp.data).forEach((k) => {
        // console.log(k,resp.data[k])
        neworders.push({ id: k, ...resp.data[k] });
      });
      // console.log(neworders);
      dispatch(fetchOrdersSuccess(neworders));
      // this.setState({ orders: neworders, loading: false });
    }).catch((err) => {
      // console.log("Orders.js , componentDidMount");
      // console.log(err)
      // this.setState({ loading: false })
      dispatch(fetchOrdersFail(err));
    })
  }
}

