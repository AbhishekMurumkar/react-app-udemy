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
export const purchaseBurger = (order,authtoken) => {
  return (dispatch) => {
    // setting the purchase status as start
    dispatch(purchaseBurgerStart());
    // console.log("in purchase burger,now emiting start of purchase burger builder");
    // setting the purchase status as start
    try {
      // axios.post("/orders.json", order)
      axios.post("/orders.json?auth="+authtoken, order)
        .then((response) => {
          // console.log(response);
          dispatch(purchaseBurgerSuccess(response.data.name, order));
          //   this.setState({ loading: false });
          //   this.props.history.replace("/");
        })
        .catch((err) => {
          // console.log(err);
          dispatch(purchaseBurgerFail(err));
          //   this.setState({ loading: false });
        });
    } catch (err) {
      dispatch(purchaseBurgerFail(err));
    }
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
export const fetchOrders = (authtoken,userToken) => {
  return (dispatch) => {
    dispatch(fetchOrderStart());
    try {
      // console.log("[FetchOrders block]");
      // console.log(authtoken,userToken);
      // making the request without using the authentication
      // axios.get("/orders.json").then((resp) => {
      // making the request with the auth token for authentication  
      let queryParams = "?auth="+authtoken+"&orderBy=\"userId\"&equalTo=\""+userToken+"\"";
      // console.log("/orders.json"+queryParams);
      axios.get("/orders.json"+queryParams).then((resp) => {
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
    } catch (err) {
      dispatch(fetchOrdersFail(err));
    }
  }
}

