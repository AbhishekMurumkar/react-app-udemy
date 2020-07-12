import React,{Component} from "react";
import {Link,Route} from "react-router-dom";
import Users from "./containers/Users";
// import Pizza from "./containers/Pizza";
import asyncComponent from "./hoc/asyncComponent";

const asyncPizza = asyncComponent(()=>{
    return import('./containers/Pizza');   
})
class App extends Component{
    render(){
        return(
            <div>
                <div>
                    <Link to="/" >Users</Link> | <Link to="/pizza">Pizzas</Link>
                </div>
                <div>
                    <Route path="/" exact component={Users}></Route>
                    <Route path="/pizza" component={asyncPizza}></Route>
                </div>
            </div>
        );
    }
}
export default App;