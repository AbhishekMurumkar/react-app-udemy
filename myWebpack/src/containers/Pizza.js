import React,{Component} from "react";
import PizzaImage from "../components/PizzaImage/PizzaImage";

class Pizza extends Component{
    render(){
        return(
            <div>
                <h2>My Pizza</h2>
                <PizzaImage />
            </div>
        )
    }
}
export default Pizza;