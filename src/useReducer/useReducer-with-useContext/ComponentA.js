import React, { useContext } from 'react'
import { CountContext } from './AppContext'
import './App.css'
function ComponentA() {
    const countContext = useContext(CountContext)
    return (
        <div className='Compo'>
            <h6>From Component A {countContext.countState}</h6>
      <button onClick={() => countContext.countDispatch("Increment")}>Increment</button>
      <button onClick={() => countContext.countDispatch("Decrement")}>Decrement</button>
      <button onClick={() => countContext.countDispatch("Reset")}>Reset</button>
        </div>
    )
}

export default ComponentA
