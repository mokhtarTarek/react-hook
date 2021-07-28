import React, { useState, useEffect } from 'react'

function IntervalHookCounter() {
    const [count, setCount] = useState(0)

    // const tick = ()=>{
    //     setCount(count + 1)
    // }
    //to avoid recalling useEffect : 
    const tick = ()=>{
        setCount(prevCount=>prevCount + 1)
    }

    useEffect(() => {
        
        console.log('calling useEffect()')
        const interval = setInterval(tick,1000)
        return ()=>{
            clearInterval(interval)
        }
    }, [])
    return (
        <div>
            {count}
        </div>
    )
}

export default IntervalHookCounter
