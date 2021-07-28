import React, { useReducer } from "react";

const initialSate = {
  firstCounter: 0,
  secondCounter: 10,
};
//the reducer func take the current state and action as params and return a newState
const reducer = (state, action) => {
  switch (action.type) {
    case "Increment":
      return { ...state, firstCounter: state.firstCounter + action.value };
    case "Decrement":
      return { ...state, firstCounter: state.firstCounter - action.value };
    case "Increment2":
      return { ...state, secondCounter: state.secondCounter + action.value };
    case "Decrement2":
      return { ...state, secondCounter: state.secondCounter - action.value };
    case "Reset":
      return initialSate;
    default:
      return state;
  }
};
function CounterTwo() {
  const [count, dispatch] = useReducer(reducer, initialSate);
  return (
    <div>
      <div> count - {count.firstCounter} </div>
      <div> count - {count.secondCounter} </div>
      <div>
      <button onClick={() => dispatch({ type: "Increment", value: 1 })}>
        Increment1
      </button>
      <button onClick={() => dispatch({ type: "Decrement", value: 1 })}>
        Decrement1
      </button>
      <button onClick={() => dispatch({ type: "Increment", value: 3 })}>
        Increment3
      </button>
      <button onClick={() => dispatch({ type: "Decrement", value: 3 })}>
        Decrement3
      </button>
      </div>
      <div>
        
      <button onClick={() => dispatch({ type: "Increment2", value: 1 })}>
        IncrementCounter2
      </button>
      <button onClick={() => dispatch({ type: "Decrement2", value: 1 })}>
        DecrementCounter2
      </button>
      </div>
      <button onClick={() => dispatch({ type: "Reset" })}>Reset</button>
    </div>
  );
}

export default CounterTwo;
