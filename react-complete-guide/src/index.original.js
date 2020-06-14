import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import * as serviceWorker from "./serviceWorker";
// import Assignment3 from "./components/Assignment3/Assignment3";
// import Assignment3 from "./containers/Assignment3-Solution/Assignment3";
// import App from "./containers/BlogApp/App";
// import axios from 'axios';


// axios.defaults.baseURL="https://jsonplaceholder.typicode.com/";
// axios.defaults.headers.common['Authorization']='abhi';
// axios.defaults.headers.post['Accept']='application/json';
// axios.defaults.headers.post['Content-type']='application/json';

// axios.interceptors.request.use((request)=>{
//   console.log(request);
//   return request;
// },(err)=>{
//   console.log(err);
//   return Promise.reject(err);
// });

// axios.interceptors.response.use((response)=>{
//   console.log(response);
//   return response;
// },(err)=>{
//   console.log(err);
//   return Promise.reject(err);
// })
// import App from './containers/App/App';
import App from "./containers/BBApp/App";
// import Assignment1 from './components/Assignment1/Assignment1';
// import Assignment2 from './components/Assignment2/Assignment2';
// import Assignment5 from './containers/Assignment5/Assignment5';

// NOte
// NOte
// in order to use redux application from lecture:section 14 use index.redux.js
// NOte
// NOte



ReactDOM.render(
  <React.StrictMode>
    {/* <App title="Blog App using react"/> */}
    {/* <App title='First React App - Person Management'/> */}
    <App title="Welcome to Burger Builder Application with React" />
    {/* <Assignment1 /> */}
    {/* <Assignment2 /> */}
    {/* <Assignment3 /> */}
    {/* <App/> */}
    {/* <Assignment5></Assignment5> */}
  </React.StrictMode>,
  document.getElementById("root")
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
