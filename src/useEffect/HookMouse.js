import React, { useState, useEffect } from 'react'
//RUN useEffect() only once : just pass in an empty array !!!
/*
useEffect watch for changes in states using the array of dependencies
if the array is empty then the use effect wil be executed only once
if one state is added to the dependencies list[] then useEffect()will be
executed every time this state changes
*/
function HookMouse() {
    const [x, setX] = useState(0)
    const [y, setY] = useState(0)

    const logMousePosition =  e => {
        console.log('Mouse event')
        setX(e.clientX)
        setY(e.clientY)
    }
    //use effect is called only once
    useEffect(()=>{
        console.log('useEffect called')
        window.addEventListener('mousemove',logMousePosition)

        //component cleanUp code  : return function that remove any side effects
        return()=>{
            console.log('component unmounting code')
            window.removeEventListener('mousemove',logMousePosition)
        }

    },[])

    return (
        <div>
            Hook X- {x} Y-{y}
        </div>
    )
}

export default HookMouse
