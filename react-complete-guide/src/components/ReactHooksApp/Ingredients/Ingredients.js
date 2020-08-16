import React, { useState, useEffect, useReducer } from "react";

import IngredientForm from "./IngredientForm";
import IngredientList from "./IngredientList";
import Search from "./Search";
import ErrorModal from "../UI/ErrorModal";

// reducers should be written outside of component so that they cannot be generated for every render cycle
const httpreducer = (httpstate, action) => {
  switch (action.type) {
    case "SEND":
      return { loading: true, error: null };
    case "RESP":
      return { ...httpstate, loading: false };
    case "ERROR":
      return { loading: false, error: action.error };
    default:
      throw new Error("Error State in http reducer" + action.type);
      break;
  }
};
const ingredientReducer = (currentIng, action) => {
  switch (action.type) {
    case "SET":
      return action.ingredients;
    case "ADD":
      return [...currentIng, action.ingredient];
    case "REM":
      return currentIng.filter((ing) => ing.id !== action.id);
    default:
      throw new Error("Invalid State");
  }
};
// function Ingredients() {
const Ingredients = () => {
  const [initialIngredients, dispatch] = useReducer(ingredientReducer, []); //empty arr denotes currentIng
  const [httpState, dispatchHttp] = useReducer(httpreducer, {
    loading: false,
    error: null,
  });
  const [backupIng, setBackupIng] = useState([]);
  // const [initialIngredients, setIngredients] = useState([]);
  // const [isloading, setLoading] = useState(false);
  // const [errorStatus, setError] = useState();

  useEffect(() => {
    // setLoading(true);
    dispatchHttp({ type: "SEND" });
    // console.log("in useEffect");
    fetch("https://react-hooks-data-fe20a.firebaseio.com/ingredients.json", {
      method: "GET",
    })
      .then((resp) => {
        return resp.json();
      })
      .then((respBody) => {
        // console.log(respBody);
        let myIngredients = Object.keys(respBody).map((k) => ({
          id: k,
          amount: respBody[k].amount,
          title: respBody[k].title,
        }));
        setBackupIng(myIngredients);
        // console.log(myIngredients);
        // newingredients.id= respBody.name;
        // setIngredients(myIngredients);
        dispatch({
          type: "SET",
          ingredients: myIngredients,
        });
        dispatchHttp({ type: "RESP" });
        // setLoading(false);
      })
      .catch((err) => {
        // setError(err.message);
        // setLoading(false);
        dispatchHttp({ type: "ERROR", error: err });
      });
  }, []);

  // useEffect(() => {
  //   console.log("this runs for every render");
  // });
  // useEffect(() => {
  //   console.log("this runs for first time");
  // }, []);
  // useEffect(() => {
  //   console.log(
  //     "this runs for change in content of variable",
  //     initialIngredients
  //   );
  // }, [initialIngredients]);

  // function to add an ingredient to state
  const addIngredientHandler = (newingredients) => {
    // setLoading(true);
    dispatchHttp({ type: "SEND" });
    fetch("https://react-hooks-data-fe20a.firebaseio.com/ingredients.json", {
      method: "POST",
      body: JSON.stringify(newingredients),
      headers: {
        "Content-Type": "application/json",
      },
    })
      .then((resp) => {
        return resp.json();
      })
      .then((respBody) => {
        // setLoading(false);
        dispatchHttp({ type: "RESP" });
        newingredients.id = respBody.name;
        setBackupIng((prevState) => [...prevState, newingredients]);
        // setIngredients((prevState) => [...prevState, newingredients]);
        dispatch({
          type: "ADD",
          ingredient: newingredients,
        });
      });
  };

  const removIngredientHandler = (id) => {
    // setLoading(true);
    dispatchHttp({ type: "SEND" });
    fetch(
      `https://react-hooks-data-fe20a.firebaseio.com/ingredients/${id}.json`,
      {
        method: "GET",
      }
    ).then((resp) => {
      // setLoading(false);
      dispatchHttp({ type: "RESP" });
      // setIngredients((prevState) => prevState.filter((ing) => ing.id !== id));
      dispatch({
        type: "REM",
        id: id,
      });
    });
  };

  // console.log(initialIngredients);
  const filterIngredientsHandler = (searchText) => {
    // setIngredients(backupIng);
    dispatch({
      type: "SET",
      ingredients: backupIng,
    });
    console.log(initialIngredients);
    if (searchText != "") {
      // setIngredients(() => {
      //   let t = [...backupIng];
      //   let temp = t.filter((ing) =>
      //     ing.title.toLowerCase().includes(searchText.toLowerCase())
      //   );
      //   return temp;
      // });
      let t = [...backupIng];
      let temp = t.filter((ing) =>
        ing.title.toLowerCase().includes(searchText.toLowerCase())
      );
      dispatch({
        type: "SET",
        ingredients: temp,
      });
    }
  };

  const closeError = () => {
    // setError(null);
    // setLoading(false);
    dispatchHttp({ type: "RESP" });
  };
  // console.log(initialIngredients)
  // console.log(backupIng);
  return (
    <div className="App">
      {/* when you got a error */}
      {/* {errorStatus && (
        <ErrorModal onClose={closeError}>{errorStatus}</ErrorModal>
      )} */}
      {httpState.error && <ErrorModal>{httpState.error}</ErrorModal>}
      <IngredientForm
        onAddIngredient={addIngredientHandler}
        // loading={isloading}
        loading={httpState.loading}
      />

      <section>
        <Search
          ingredients={initialIngredients}
          filter={(searchText) => filterIngredientsHandler(searchText)}
        />
        <IngredientList
          ingredients={initialIngredients}
          onRemoveItem={(id) => {
            removIngredientHandler(id);
          }}
        />
      </section>
    </div>
  );
};

export default Ingredients;
