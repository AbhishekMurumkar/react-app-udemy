import React, { Component } from "react";
import Transition from "react-transition-group/Transition";

import "./App.css";
import Modal from "../../components/AnimationApp/Modal/Modal";
import Backdrop from "../../components/AnimationApp/Backdrop/Backdrop";
import List from "../../components/AnimationApp/List/List";

class App extends Component {
  state = {
    modalIsOpen: false,
    showBlock: false,
  };
  toggleModal = () => {
    this.setState({ modalIsOpen: !this.state.modalIsOpen });
  };
  render() {
    return (
      <div className="App">
        <h1>React Animations</h1>
        {/* first transtion example */}
        <button
          onClick={() => {
            this.setState({ showBlock: !this.state.showBlock });
          }}
        >
          Toggle
        </button>
        <br />
        <Transition
          in={this.state.showBlock}
          timeout={5000}
          mountOnEnter
          unmountOnExit
          onEnter={() => {
            console.log("on Enter");
          }}
          onEntering={() => {
            console.log("on Entering");
          }}
          onEntered={() => {
            console.log("on Entered");
          }}
          onExit={() => {
            console.log("on Exit");
          }}
          onExiting={() => {
            console.log("on Exiting");
          }}
          onExited={() => {
            console.log("on Exited");
          }}
        >
          {(state) => (
            <div>
              <p>{state}</p>
              <div
                style={{
                  backgroundColor: "red",
                  width: 100,
                  height: 100,
                  margin: "auto",
                  opacity: state === "exiting" ? 0 : 1,
                  transition: "opacity 5s ease-out",
                }}
              >
                Transition toggle
              </div>
            </div>
          )}
        </Transition>
        <br />
        {/* {this.state.showBlock ? (
          <div
            style={{
              backgroundColor: "red",
              width: 100,
              height: 100,
              alignContent: "center",
            }}
          >
            hello toggle
          </div>
        ) : null} */}
        {/* second transition example */}
        {/* <Transition
          in={this.state.modalIsOpen}
          timeout={2000}
          mountOnEnter
          unmountOnExit
        >
          {(state) => (
            <div>
              <Modal show={state} closed={this.toggleModal} />
              <Backdrop show={this.state.modalIsOpen} />
            </div>
          )}
        </Transition>
        <br /> */}
        {/* {this.state.modalIsOpen ? (
          <div>
            <Modal show={this.state.modalIsOpen} closed={this.toggleModal} />
            </div>
        ) : null} */}
        <Modal show={this.state.modalIsOpen} closed={this.toggleModal} />
        <Backdrop show={this.state.modalIsOpen} />
        <button className="Button" onClick={this.toggleModal}>
          Open Modal
        </button>
        <h3>Animating Lists</h3>
        <List />
      </div>
    );
  }
}

export default App;
