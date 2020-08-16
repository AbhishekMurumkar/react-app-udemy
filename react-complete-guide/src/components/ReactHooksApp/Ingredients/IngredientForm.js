import React, { useState } from "react";

import Card from "../UI/Card";
import "./IngredientForm.css";
import LoadingIndicator from "../UI/LoadingIndicator";
const IngredientForm = React.memo((props) => {
  // initial state with out array destructure
  // let myState = useState({
  //   title: "",
  //   amount: "",
  // });
  //with array destructuring
  // const [myState,setMyState]=useState({title:'',amount:''});

  // for every update of state we need to take of other initial variable in second
  // param of useState, hence it is advisable to have individual state for variable
  // in state and handle them individually

  const [myInitialTitle, setTitle] = useState("");
  const [myInitialAmount, setAmount] = useState("");

  const submitHandler = (event) => {
    event.preventDefault();
    props.onAddIngredient({
      // id: Math.random().toString(),
      title: myInitialTitle,
      amount: myInitialAmount,
    });
    // ...
  };

  return (
    <section className="ingredient-form">
      <Card>
        <form onSubmit={submitHandler}>
          <div className="form-control">
            <label htmlFor="title">Name</label>
            <input
              type="text"
              id="title"
              // value={myState[0].title} without array destructure
              // value={myState.title} //with array destructure
              value={myInitialTitle} //with array destructure
              onChange={(event) => {
                let newVal = event.target.value;
                //changing the value of amount from lastest previous built state of application via a anonymous function receving a paramter, prevState which refers to prev latest state of application/react state
                // handling without individual states
                //  setMyState((prevState) => ({ //with array destructure
                // //  setMyState((prevState) => ({ //with array destructure
                // //  myState[1]((prevState) => ({ without array destructure
                //    title: newVal,
                //    amount: prevState.amount,
                //   }));

                // handling with indivudual states
                setTitle(newVal);
              }}
            />
          </div>
          <div className="form-control">
            <label htmlFor="amount">Amount</label>
            <input
              type="number"
              id="amount"
              // value={myState[0].amount}
              // value={myState.amount}
              value={myInitialAmount}
              onChange={(event) => {
                let newVal = event.target.value;
                // setMyState((prevState) => ({
                // // myState[1]((prevState) => ({
                //   title: prevState.title,
                //   amount: newVal,
                // }));
                setAmount(newVal);
              }}
            />
          </div>
          <div className="ingredient-form__actions">
            <button type="submit">Add Ingredient</button>
            {props.loading && <LoadingIndicator />}
          </div>
        </form>
      </Card>
    </section>
  );
});

export default IngredientForm;
