import React, { useMemo, useState } from "react";

function Counter() {
  const [counterOne, setCounterOne] = useState(0);
  const [counterTwo, setCounterTwo] = useState(0);

  const incrementCounterOne = () => {
    setCounterOne(counterOne + 1);
  };
  const incrementCounterTwo = () => {
    setCounterTwo(counterTwo + 1);
  };

  //this function make the rerendering slow form any button :
  //in this case we use useMemo()
  //   const isEven = () => {
  //     let i = 0;
  //     while (i < 400000000) i++;
  //     return counterOne % 2 !== 0;
  //   };

  //now this function only depend of counterOne changes
  /**
   useCallBack():cache the function itself
   useMemo(): cache the result of the function
   */
  const isEven = useMemo(() => {
    let i = 0;
    while (i < 400000000) i++;
    return counterOne % 2 !== 0;
  }, [counterOne]);

  return (
    <div>
      <div>
        <button onClick={incrementCounterOne}>count-One {counterOne} </button>
        <span>{isEven ? "Even" : "Odd"}</span>
      </div>
      <button onClick={incrementCounterTwo}>count-Two {counterTwo} </button>
    </div>
  );
}

export default Counter;
