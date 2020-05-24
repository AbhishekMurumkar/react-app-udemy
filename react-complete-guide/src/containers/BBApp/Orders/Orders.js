import React,{Component} from "react";
import Order from "../../../components/BB/Order/Order";
import axios from "../../../axios-orders";
import Spinner from "../../../components/BB/UI/Spinner/Spinner";
import withErrorHandler from "../../../higher-order-components/WithErroHandler/WithErrorHandler";

class Orders extends Component{
    state={
        orders:[],
        loading:true
    }
    componentDidMount(){
        axios.get("/orders.json").then((resp)=>{
            // console.log(resp.data)
            var neworders=[];
            Object.keys(resp.data).forEach((k)=>{
                // console.log(k,resp.data[k])
                neworders.push({id:k,...resp.data[k]});
            })
            this.setState({orders:neworders,loading:false});
        }).catch((err)=>{
            console.log("Orders.js , componentDidMount");
            console.log(err)
            this.setState({loading:false})
        })
    }
    render(){
        let ui=null;
        if(this.state.loading){
            ui=<Spinner />
        }else{
            // console.log(this.state.orders)
            ui=this.state.orders.map((e)=>{
                // console.log(index)
                return (<Order key={e.id} {...e}/>) 
            })
        }
        return(
        <div>
            {ui}
        </div>
        );
    }
}
export default withErrorHandler(Orders,axios);