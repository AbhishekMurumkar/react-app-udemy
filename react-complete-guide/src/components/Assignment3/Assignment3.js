import React from "react";
import { Component } from "react";
import { BrowserRouter, Redirect } from "react-router-dom";
import { Route } from "react-router-dom";
import { Switch } from "react-router-dom";
import Courses from "./Courses/Courses";
import Users from "./Users/Users";
import Error404 from "./404/Error404";
import Nav from "./Nav/Nav";

class Assignment3 extends Component {
  render() {
    return (
      <BrowserRouter>
        <div>
          <h2 style={{ textAlign: "center" }}>In Assignment 3</h2>
          <header>
              <Nav></Nav>
          </header>
          <div>
            <Switch>
            <Route path="/courses" component={Courses}></Route>
            <Route path="/users" component={Users}></Route>
            <Redirect from="/" exact to="/users"></Redirect>
            <Redirect from="/all-courses" exact to="/courses"></Redirect>
            <Route component={Error404}></Route>
            </Switch>
          </div>
        </div>
      </BrowserRouter>
    );
  }
}
export default Assignment3;
