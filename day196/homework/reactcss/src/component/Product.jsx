import React from 'react'

function Product({ name, price, count, setCount }) {
    function Add() {
        setCount(count + 1)
    }
    return (
        <>
            <h1>name: {name}</h1>
            <h1>price: {price}</h1>
            <h1>Quantity:{count}</h1>
            <button onClick={Add}>Add</button>
            <h1>-------------------------------</h1 >
        </>
    )
}

export default Product