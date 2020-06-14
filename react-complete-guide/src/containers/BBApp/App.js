import React from "react";
import { Component } from "react";
import styles from "./App.module.css";
import Layout from "./Layout/Layout";
import Burgerbuilder from "./Burgerbuilder/Burgerbuilder";
import Checkout from "./Checkout/Checkout";
import { BrowserRouter, Switch, Route } from "react-router-dom";
import Orders from "./Orders/Orders";

//implementing store
import BBStore from "../../store/BBStore/BBStore";
import { Provider } from "react-redux";

class App extends Component {
  // state={
  //   show:true
  // }
  // componentDidMount(){
  //   setTimeout(()=>{
  //     this.setState({show:!(this.state.show)})
  //   },5000)
  // }
  render() {
    return (
      <Provider store={BBStore}>
        <BrowserRouter>
          <div className={styles.App}>
            <h1>{this.props.title}</h1>
            <Layout>
              {/* <Burgerbuilder /> */}
              {/* {this.state.show ? <Burgerbuilder /> : null} */}
              {/* <Checkout/> */}
              <Switch>
                <Route path="/checkout" component={Checkout}></Route>
                <Route path="/orders" component={Orders}></Route>
                <Route path="/" component={Burgerbuilder}></Route>
              </Switch>
            </Layout>
          </div>
        </BrowserRouter>
      </Provider>
    );
  }
}
export default App;
