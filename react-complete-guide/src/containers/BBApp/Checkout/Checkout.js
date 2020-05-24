import React, { Component } from "react";
import CheckoutSummary from "../../../components/BB/Order/CheckoutSummary/CheckoutSummary";
import {Route} from "react-router-dom";
import ContactData from "./ContactData/ContactData";

class Checkout extends Component {
    state={
        ingredients:null,
        totalPrice:0
    }
    checkoutCancelledHandler = ()=>{
        this.props.history.goBack();
    }
    checkoutContinuedHandler = ()=>{
        this.props.history.replace("/checkout/contact-data");
    }
    componentDidMount(){
        console.log("Checkout.js , component did mount")
        let ingredient = {};
        const queries = new URLSearchParams(this.props.location.search);
        for(let i of queries.entries()){
            // console.log(i[0],i[1])
            if(i[0]=="price"){this.setState({totalPrice:i[1]});continue;}
            ingredient[i[0]]= +i[1]
        }
        this.setState({ingredients:ingredient})
        console.log(this.state)
    }
  render() {
    //   console.log("[Checkout.js] render");
    //   console.log(this.props)
    return (
        <div>
            <CheckoutSummary 
                ingredients={this.state.ingredients}
                checkoutCancelled={this.checkoutCancelledHandler}
                checkoutContinued={this.checkoutContinuedHandler}></CheckoutSummary>
            {/* loading component normally */}
            {/* <Route path={this.props.match.url+"/contact-data"} component={ContactData}></Route> */}

            {/* loading current props into another component then loading it */}
            <Route 
                path={this.props.match.url+"/contact-data"}
                render={(props)=>(<ContactData ingredients={this.state.ingredients} totalPrice={this.state.totalPrice} {...props}/>)}/>
        </div>
    );
  }
}
export default Checkout;
