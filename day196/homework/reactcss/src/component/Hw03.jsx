import React from 'react'
import { useState } from 'react'

function Hw03() {

    const [Count, useCount] = useState(0)

    function Plus() {
        useCount(Count + 1)
    }

    function Minus() {
        useCount(Count - 1)
    }

    function Reset() {
        useCount(0)
    }
    return (
        <>
            <button onClick={Plus}>+</button>
            <button onClick={Minus}>-</button>
            <button onClick={Reset}>Reset</button>
            <h1>Count: {Count}</h1>
            <h1>-------------------------------</h1>
        </>
    )
}

export default Hw03