import React from "react";
import styles from "./Order.module.css";

const order = (props) => {
  console.log(props);
  const ingredients = [];
  for (let i in props.ingredients) {
    ingredients.push({
      name: i,
      amount: props.ingredients[i],
    });
  }
  let ingredientsOutput = ingredients.map((ig) => {
    return (
      <span
        style={{
          textTransform: "capitalize",
          display: "inline-block",
          margin: "0 10px",
          border: "1px solid #ccc",
          padding: "5px",
        }}
        key={ig.name}
      >
        {ig.name}({ig.amount})
      </span>
    );
  });
  return (
    <div className={styles.Order}>
      <h3>Ingredients Details</h3>
      <div style={{textAlign:"center"}}>{ingredientsOutput}</div>
      <h3>User Details</h3>
      <h3>Price Details : <strong style={{color:"#5765fd",fontSize:"32px"}}>{props.price}</strong> Rs /-</h3>
    </div>
  );
};
export default order;
