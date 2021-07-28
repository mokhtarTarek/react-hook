import React, { useState } from "react";

function HookCounter() {
  /*use state is a func that accept the init value of 
  of the state property and returns the current value of the state
  and a method that capable to updtate the state
*/
  const  [count, setCount]  = useState(0);
  const incrementCount = () => {
      setCount(count+1)
  };
  return (
    <div>
      <button onClick={incrementCount}>Count {count} </button>
    </div>
  );
}

export default HookCounter;
