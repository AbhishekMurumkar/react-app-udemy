import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import * as serviceWorker from "./serviceWorker"
import App from "./containers/ReduxApp/App"

ReactDOM.render(
    <React.StrictMode>
      {/* <App title="Blog App using react"/> */}
      {/* <App title='First React App - Person Management'/> */}
      {/* <App title="Welcome to Burger Builder Application with React" /> */}
      {/* <Assignment1 /> */}
      {/* <Assignment2 /> */}
      {/* <Assignment3 /> */}
      <App/>
    </React.StrictMode>,
    document.getElementById("root")
  );
  
  // If you want your app to work offline and load faster, you can change
  // unregister() to register() below. Note this comes with some pitfalls.
  // Learn more about service workers: https://bit.ly/CRA-PWA
  serviceWorker.unregister();
  