import React, { Component } from "react";
import styles from "./Modal.module.css";
import Aux from "../../../../higher-order-components/BBAux";
import Backdrop from "../Backdrop/Backdrop";

// const modal=(props)=>{
class Modal extends Component {

	// now optimizing the performance of ordersummary
	// (since that Component is wrapped in modal)
	// by checking the state changes via life cycle
	shouldComponentUpdate(nextProps,nextState){
		// the optimization is done by rendering the component
		// only when the value of 'show'  variable changes
		// console.log("will component update = "+(nextProps.show !== this.props.show));
		return nextProps.show !== this.props.show;
	}

  render() {
    return (
      <Aux>
        <Backdrop
          show={this.props.show}
          backdropClicked={this.props.modalClosed}
        />
        <div
          className={styles.Modal}
          style={{
            transform: this.props.show ? "translateY(0)" : "translateY(-100%)",
            opacity: this.props.show ? "1" : "0",
          }}
        >
          {this.props.children}
        </div>
      </Aux>
    );
  }
}
export default Modal;
