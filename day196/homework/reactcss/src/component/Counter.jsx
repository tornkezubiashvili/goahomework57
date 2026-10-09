import React from 'react'

function Counter({ count, setCounter }) {

    function plus() {
        setCounter(count + 1)
    }
    return (
        <>
            <h1>Count: {count}</h1>
            <button onClick={plus}>+</button>
            <h1>-------------------------------</h1 >
        </>


    )
}

export default Counter