import React, { useReducer } from "react";

import"../../App";
import ComponentA from "./ComponentA";
import ComponentB from "./ComponentB";
import ComponentC from "./ComponentC";

//useReducer with useContext: Manage global state
/*
1- Implementing reducer function
2- Create context
3 -Provide context with a value = {{the count itself and the dispatch methode}} as obj
3 -consume the CountContext in the target component using useContext(CountContext) methode
*/
export const CountContext = React.createContext();

//the reducer func take the current state and action as params and return a newState
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

function AppContext() {
  const [count, dispatch] = useReducer(reducer, initialSate);
  return (
    <CountContext.Provider value ={{countState: count,countDispatch: dispatch}} >
      <div className="App">
          <h3>Manage globale Count - {count} </h3>
        <ComponentA />
        <ComponentB />
        <ComponentC />
      </div>
    </CountContext.Provider>
  );
}

export default AppContext;
