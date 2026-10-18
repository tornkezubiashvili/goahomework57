import React, { useState } from 'react'

function Hw05() {
    const [productName, setproductName] = useState("")
    const [price, setPrice] = useState("")
    const [description, setDescription] = useState("")
    function prouctFunc(e) {
        e.preventDefault()
        setproductName(e.target.name.value)
        setPrice(e.target.price.value)
        setDescription(e.target.description.value)
    }
    return (
        <>
            <form onSubmit={prouctFunc}>
                <input type="text" name='name' placeholder='product name' />
                <input type="number" name='price' placeholder='product price' />
                <input type="text" name='description' placeholder='description' />
                <button type='submit'>Submit</button>
            </form>
            <p>{productName}</p>
            <p>ფასი: {price}</p>
            <p>აღწერა: {description}</p>
            <h1>6-----------------------------</h1>
        </>
    )
}

export default Hw05