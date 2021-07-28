import React, { useReducer } from "react";

const initialSate = 0;
//the reducer func take the current state and action as params and return a newState
const reducer = (state, action) => {
  switch (action) {
    case "Increment":
      return state + 1;
    case "Decrement":
      return state - 1;
    case "Reset":
      return initialSate;
    default:
      return state;
  }
};
function CounterOne() {
  const[count,dispatch] = useReducer(reducer, initialSate);
  return (
    <div>
        <div> count - {count} </div>
      <button onClick={() => dispatch("Increment")}>Increment</button>
      <button onClick={() => dispatch("Decrement")}>Decrement</button>
      <button onClick={() => dispatch("Reset")}>Reset</button>
    </div>
  );
}

export default CounterOne;
