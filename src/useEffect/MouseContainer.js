import React, { useState } from 'react'
import HookMouse from './HookMouse'
//cleanUp code : memic ComponentWillUnmout() in useEffect :
// look HookMouse.js
function MouseContainer() {
    const [display, setDisplay] = useState(true)
    return (
        <div>
            <button
            onClick={()=>setDisplay(!display)}
            >Toggel dispaly </button>
            {display && <HookMouse/>}
        </div>
    )
}

export default MouseContainer
