import React from "react";
// import Transition from "react-transition-group/Transition";
import CSSTransition from "react-transition-group/CSSTransition";

import "./Modal.css";

const modal = (props) => {
  return (
    <div>
      <CSSTransition
        in={props.show}
        timeout={500}
        mountOnEnter
        unmountOnExit
        // classNames="fade-slide"
        classNames={{
            // enter:
            enterActive:'ModalOpen',
            // exit:
            exitActive:'ModalClose'
            // appear:
            // appearActive:
        }}
      >
        <div className="Modal ModalOpen">
          <h1>A Modal</h1>
          <button className="Button" onClick={props.closed}>
            Dismiss
          </button>
        </div>
      </CSSTransition>
      {/* 
        <Transition 
            in={props.show} 
            timeout={500} 
            mountOnEnter 
            unmountOnExit
        >{
      (state) => {
        //   console.log(state);
        // let myclass = [
        //   "Modal",
        //   state === "entering"
        //     ? "ModalOpen"
        //     : state === "exiting"
        //     ? "ModalClose"
        //     : null,
        // ];
        // myclass = myclass.join(" ");
        // console.log(myclass);

        // return (
        <div className="Modal ModalOpen">
          <h1>A Modal</h1>
          <button className="Button" onClick={props.closed}>
            Dismiss
          </button>
        </div>;
        // );
      }} */}
    </div>
  );
};

export default modal;
