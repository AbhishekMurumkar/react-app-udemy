import React,{Component} from "react";
import {connect} from "react-redux";
import {Redirect} from "react-router-dom";
import * as actionTypes from "../../../../store/BBStore/actions/index";

class Logout extends Component{
    componentDidMount(){
        //called automatically when the component is loaded
        this.props.onLogout();
    }
    render() {
        // after logging out user we are redirecting current page to /
        return <Redirect to="/" />;
    }
}
const mapDispatchToProps = (dispatch)=>{
    return{
        onLogout: ()=>dispatch(actionTypes.logout()),
    }
}
export default connect(null,mapDispatchToProps)(Logout);