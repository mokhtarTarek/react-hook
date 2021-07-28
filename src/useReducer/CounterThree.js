import React, { useReducer } from "react";

//use multiple reducers if the states has the same transitions
const initialSate = 0;
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
function CounterThree() {
  const [count, dispatch] = useReducer(reducer, initialSate);
  const [countTwo, dispatchTow] = useReducer(reducer, initialSate);

  return (
    <div>
      <div> counterOne - {count} </div>
      <button onClick={() => dispatch("Increment")}>Increment</button>
      <button onClick={() => dispatch("Decrement")}>Decrement</button>
      <button onClick={() => dispatch("Reset")}>Reset</button>
      <div>
      <div> counterTow - {countTwo} </div>
      <button onClick={() => dispatchTow("Increment")}>IncrementCounter2</button>
      <button onClick={() => dispatchTow("Decrement")}>DecrementCounter2</button>
      <button onClick={() => dispatchTow("Reset")}>Reset</button>
      </div>
    </div>
  );
}

export default CounterThree;
