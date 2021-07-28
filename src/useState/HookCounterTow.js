import React, { useState } from "react";

function HookCounterTow() {
  const initialCount = 1;
  const [count, setCount] = useState(initialCount);

  const incrementFive = () => {
    for (let i = 0; i < 5; i++) {
      //prevCount scoop method 
      setCount((prevCount) => {
        console.log(prevCount)
        return prevCount + 1
      });
      //console.log(prevCount)//undefined
    }
  };
  return (
    <div>
      <label> {count} </label>
      <br />
      <button onClick={() => setCount(0)}>reset</button>
      <button onClick={() => setCount((prevCount) => prevCount + 1)}>increment</button>
      <button onClick={() => setCount((prevCount) => prevCount - 1)}>decrement</button>
      <button onClick={incrementFive}>Increment5</button>
    </div>
  );
}

export default HookCounterTow;
//() => setCount(count + 1) : is a function call()
