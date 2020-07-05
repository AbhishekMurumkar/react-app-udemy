import React, { Component } from "react";
import Order from "../../../components/BB/Order/Order";
import axios from "../../../axios-orders";
import Spinner from "../../../components/BB/UI/Spinner/Spinner";
import withErrorHandler from "../../../higher-order-components/WithErroHandler/WithErrorHandler";
import * as actions from "../../../store/BBStore/actions/index";
import { connect } from "react-redux";

class Orders extends Component {
    // state={
    //     orders:[],
    //     loading:true
    // }
    componentDidMount() {
        // axios.get("/orders.json").then((resp)=>{
        //     // console.log(resp.data)
        //     var neworders=[];
        //     Object.keys(resp.data).forEach((k)=>{
        //         // console.log(k,resp.data[k])
        //         neworders.push({id:k,...resp.data[k]});
        //     });
        //     this.setState({orders:neworders,loading:false});
        // }).catch((err)=>{
        //     console.log("Orders.js , componentDidMount");
        //     console.log(err)
        //     this.setState({loading:false})
        // })
        this.props.onFetchOrders(this.props.authToken);
    }
    render() {
        // console.log('[Orders.js - rendering]');console.log(this.props);
        let ui = null;
        // if(this.state.loading){
        if (this.props.loading) {
            ui = <Spinner />
        } else if(this.props.error){
            ui=<p>Unable to fetch ordes from server</p>;
        }else {
            // console.log(this.state.orders)
            // ui=this.state.orders.map((e)=>{
            ui = this.props.orders.map((e) => {
                // console.log(index)
                return (<Order key={e.id} {...e} />)
            })
        }
        return (
            <div>
                {ui}
            </div>
        );
    }
}

const mapStateToProps = (state) => {
    return {
        error: state.orders.error,
        loading: state.orders.loading,
        orders: state.orders.orders,
        authToken: state.authentication.token
    }
}
const mapDispatchToProps = (dispatch) => {
    return {
        onFetchOrders: (token) => dispatch(actions.fetchOrders(token))
    }
}
export default connect(mapStateToProps, mapDispatchToProps)(withErrorHandler(Orders, axios));