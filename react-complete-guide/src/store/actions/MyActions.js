export const INCREMENT = "INCREMENT";
export const DECREMENT = "DECREMENT";
export const ADD = "ADD";
export const SUB = "SUB";
export const STORE_RESULT = "STORE_RESULT";
export const DELETE_RESULT = "DELETE_RESULT";


//creating action creators
export const incrementCounter = () => {
  console.log("incrementCounter")
  return (dispatch)=>{
    setTimeout(()=>{
      dispatch({
        type:INCREMENT
      })
    },3000)
  }
};

// action creators, synchronous
export const decrementCounter = () => {
  return {
    type: DECREMENT
  }
}

export const addToCounter = (payload) => {
  // now sending data Asynchronously
  return {
    type: ADD,
    payload: {
      value: payload
    }
  }
};

export const subFromCounter = (payload) => {
  return {
    type: SUB,
    payload: {
      value: payload
    }
  }
};

export const storeResult = (counter) => {
  return {
    type: STORE_RESULT,
    storeNumber: counter
  }
}

export const deleteStoredNumber = (id) => {
  return {
    type: DELETE_RESULT,
    elementId: id
  }
}
