import React, { useState } from 'react'

function Hw03() {
    const [product, setProduct] = useState(
        {
            productname: "",
            price: "",
            category: "",
            quantity: ""
        }
    )

    function func(e) {
        e.preventDefault()
        if (e.target.productname.value !== "" && e.target.price.value !== "" && e.target.category.value !== "" && e.target.quantity.value !== "") {
            setProduct(
                {
                    productname: e.target.productname.value,
                    price: e.target.price.value,
                    category: e.target.category.value,
                    quantity: e.target.quantity.value
                }
            )
        } else {
            return
        }
        e.target.productname.value = ""
        e.target.price.value = ""
        e.target.category.value = ""
        e.target.quantity.value = ""


    }
    console.log(product)
    return (
        <>
            <form onSubmit={func}>
                <input type="text" name='productname' placeholder='Product Name' />
                <input type="number" name='price' placeholder='Price' />
                <input type="category" name='category' placeholder='Category' />
                <input type="number" name='quantity' placeholder='Quantity' />
                <button type='submit'>Submit</button>
            </form>
            <h1>4------------------------------------------------------------------------</h1>
        </>

    )
}

export default Hw03