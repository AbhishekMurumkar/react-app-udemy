import React from "react";
import classes from "./PizzaImage.css";
import myImg from "../../assets/pizza.jpg";
const pizzaImage = (props)=>(
    <div className={classes.PizzaImage}>
        <img src={myImg} className={classes.myImg} />
    </div>
);
export default pizzaImage;