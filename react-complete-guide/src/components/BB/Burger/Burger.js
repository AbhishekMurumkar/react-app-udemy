import React from "react";
import BurgerIngredient from "./BurgerIngredient/BurgerIngredient";
import burgerStyles from "./Burger.module.css";

const burger = (props) => {
  let transformedIngredients = Object.keys(props.ingredients)
    .map((ingredientName) => {
      //here for each type we are simply returning empty array with values present in value of ingredientName of ingredients prop
      // Ex. let ingredient={cheese:2} , then we return Array(2)
      let temp_arr = [...Array(props.ingredients[ingredientName])];
      return temp_arr.map((element, index) => {
        return (
          <BurgerIngredient
            type={ingredientName}
            key={ingredientName + index}
          />
        );
      });
    })
    // there may be chance where we can get empty array value like let ingredient={cheese:0}
    //thus here there is a need to filter such values and if there are no items left then display a proper error message
    //now for each empty array we will it with correct BurgerIngredient compoent that we receiver from the props
    .reduce((originalArr, currentElement) => {
      // now instead of passing object of array lets just flattent it with
      return originalArr.concat(currentElement);
    }, []);
//   console.log(transformedIngredients);
  if (transformedIngredients.length === 0) {
    transformedIngredients = <p>Add some ingredients</p>;
  }
  return (
    <div className={burgerStyles.Burger}>
      <BurgerIngredient type="bread-top" />
      {/*<BurgerIngredient type="cheese"/>*/}
      {/*<BurgerIngredient type="meat"/>*/}
      {transformedIngredients}
      <BurgerIngredient type="bread-bottom" />
    </div>
  );
};
export default burger;
