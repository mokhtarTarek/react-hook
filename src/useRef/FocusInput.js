import React, { useEffect, useRef } from 'react'
//useRef to acces dom node
function FocusInput() {
    const inputRef = useRef(null) 
    //acces the input element in the dom : inputRef.current!waww
    useEffect(() => {
        inputRef.current.focus()
        
    }, [])
    return (
        <div>
            <input ref={inputRef} type='text'/>
            <input  type='text'/>
        </div>
    )
}

export default FocusInput
