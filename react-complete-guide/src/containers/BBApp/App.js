import React from "react";
import { Component } from "react";
import styles from "./App.module.css";
import Layout from "./Layout/Layout";
import Burgerbuilder from "./Burgerbuilder/Burgerbuilder";

class App extends Component {
  render() {
    return (
      <div className={styles.App}>
        <h1>{this.props.title}</h1>
        <Layout>
          <Burgerbuilder />
        </Layout>
      </div>
    );
  }
}
export default App;
