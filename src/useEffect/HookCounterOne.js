import React, { useState, useEffect } from 'react'
/**
 the useEffect Func param is executed 
 every render of the component
 */
function HookCounterOne() {
    const [count, setCount] = useState(0)
    const [name, setName] = useState('')
    //to conditionaly run useEffect we need to pass in
    //a second parameter [count] : now the useEffect() is 
    //executed only when the count is changed 
    useEffect(() => {
    console.log('update title')
    document.title = `You clicked ${count} times`
    },[count])

    return (
        <div>
            <input
            type='text'
            value={name}
            onChange={e=>setName(e.target.value)}
            />
            <button
            onClick= {()=>setCount(count + 1)}>
            Click {count} times    
            </button>
        </div>
    )
}

export default HookCounterOne
