import React, { useCallback, useState } from "react";
import Button from "./Button";
import Count from "./Count";
import Title from "./Title";
/*at first when we change the state of a single
component every others comps are rerendered
the solution React.memo() to strict the componet rerender only when 
props or state changes in child components
*/

function ParentComponent() {
  const [age, setAge] = useState(25);
  const [salary, setSalary] = useState(50000);
/*
const incrementAge= useCallback(()=>{
    setAge(age+1)
},[age])
*/
  const incrementAge = useCallback(() => {
    setAge(prevAge=>prevAge+1)
  },[])
  const incrementSalary = useCallback(() => {
    setSalary(prevSalary=>prevSalary+1000);
  },[]);
  return (
    <div>
      <Title />
      <Count text="Age" count={age} />
      <Button handleClick={incrementAge} >Increment Age</Button>
      <Count text="Salary" count={salary} />
      <Button handleClick={incrementSalary} >Increment Salary</Button>
    </div>
  );
}

export default ParentComponent;
