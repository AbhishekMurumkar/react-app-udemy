import React from "react";
import { Component } from "react";
import styles from "./App.module.css";
import Layout from "./Layout/Layout";
import Burgerbuilder from "./Burgerbuilder/Burgerbuilder";

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
      <div className={styles.App}>
        <h1>{this.props.title}</h1>
        <Layout>
          <Burgerbuilder />
          {/* {this.state.show ? <Burgerbuilder /> : null} */}
        </Layout>
      </div>
    );
  }
}
export default App;
