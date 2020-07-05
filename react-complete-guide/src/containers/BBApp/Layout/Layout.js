import React from "react";
import { Component } from "react";
import Aux from "../../../higher-order-components/BBAux";
import styles from "./Layout.module.css";
import Toolbar from "../../../components/BB/Navigation/Toolbar/Toolbar";
import SideDrawer from "../../../components/BB/Navigation/SideDrawer/SideDrawer";
import { connect } from "react-redux";

// const layout = (props)=>{
// 	return(
// 		<Aux>
// 			<Toolbar />
// 			<SideDrawer />
// 			{<div>Toolbar,sidebar,backdrop</div>}
// 			<main className={styles.Content}>{props.children}</main>
// 		</Aux>
// 	);
// }

class Layout extends Component {
  state = {
    showSideDrawer: false,
  };
  sideDrawerClosedHandler = () => {
    this.setState({ showSideDrawer: false });
  };
  opensideDrawerHandler = () => {
    this.setState({ showSideDrawer: true });
  };
  render() {
    return (
      <Aux>
        <Toolbar isAuth={this.props.isAuthenticated} openSidebar={this.opensideDrawerHandler} />
        <SideDrawer
          isAuth={this.props.isAuthenticated}
          status={this.state.showSideDrawer}
          closed={this.sideDrawerClosedHandler}
        />
        {/*<div>Toolbar,sidebar,backdrop</div>*/}
        <main className={styles.Content}>{this.props.children}</main>
      </Aux>
    );
  }
}
const mapStateToProps = (state)=>{
  return {
    isAuthenticated: (state.authentication.token == null)?false:true,
  }
}
const mapDispatchToProps = (dispatch)=>{
  return{

  }
}
export default connect(mapStateToProps,mapDispatchToProps)(Layout);
