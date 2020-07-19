import React from "react";
import { Component } from "react";
import { BrowserRouter, Switch, Route, Redirect } from "react-router-dom";
// import { Provider } from "react-redux";
import { connect } from "react-redux";

import styles from "./App.module.css";
import Layout from "./Layout/Layout";
import Burgerbuilder from "./Burgerbuilder/Burgerbuilder";
// import Checkout from "./Checkout/Checkout";
// import Orders from "./Orders/Orders";
// import Auth from "./Auth/Auth";
// import Logout from "./Auth/Logout/Logout";
import * as actionTypes from "../../store/BBStore/actions/index";
import asyncComp from "../../higher-order-components/AsyncComponent/AsyncComponent";
//implementing store
// import BBStore from "../../store/BBStore/BBStore";

//loading the checkout component asynchronously
const asyncCheckout = asyncComp(()=>{
  return import("./Checkout/Checkout");
});
//loading the orders component asynchronously
const asyncOrders = asyncComp(()=>{
  return import("./Orders/Orders");
});
//loading the Auth component asynchronously
const asyncAuth = asyncComp(()=>{
  return import("./Auth/Auth");
});
//loading the Logout component asynchronously
const asyncLogout = asyncComp(()=>{
  return import("./Auth/Logout/Logout");
});


class App extends Component {
  // state={
  //   show:true
  // }
  // componentDidMount(){
  //   setTimeout(()=>{
  //     this.setState({show:!(this.state.show)})
  //   },5000)
  // }
  componentDidMount() {
    this.props.onAutoSignIn();
  }
  render() {
    let routes = (
      <Switch>
        <Route path="/auth" component={asyncAuth}></Route>
        <Route path="/" component={Burgerbuilder}></Route>
        <Redirect to="/" />
      </Switch>
    );

    if (this.props.isAuthenticated) {
      routes = (
        <Switch>
          <Route path="/checkout" component={asyncCheckout}></Route>
          <Route path="/orders" component={asyncOrders}></Route>
          <Route path="/logout" component={asyncLogout}></Route>
          <Route path="/auth" component={asyncAuth}></Route>
          <Route path="/" component={Burgerbuilder}></Route>
          <Redirect to="/" />
        </Switch>
      );
    }
    // console.log(this.props.isAuthenticated);
    return (
      // <Provider store={BBStore}>
      <BrowserRouter>
        <div className={styles.App}>
          <h1>{this.props.title}</h1>
          <Layout>
            {routes}
            {/* <Burgerbuilder /> */}
            {/* {this.state.show ? <Burgerbuilder /> : null} */}
            {/* <Checkout/> */}
          </Layout>
        </div>
      </BrowserRouter>
      // </Provider>
    );
  }
}
const mapStateToProps = (state) => {
  return {
    isAuthenticated: state.authentication.token != null
  }
}
const mapDispatchToProps = (dispatch) => {
  return {
    onAutoSignIn: () => dispatch(actionTypes.authCheckState()),
  }
}
export default connect(mapStateToProps, mapDispatchToProps)(App);
