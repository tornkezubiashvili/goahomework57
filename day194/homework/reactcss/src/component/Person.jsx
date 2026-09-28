import React from 'react'

function Person({ name, age }) {

    let filterage
    if (age < 18) {
        filterage = "Minor"
    } else {
        filterage = "Adult"
    }
    return (
        <div>
            <p>Name: {name}</p>
            <p>Age : {age}</p>
            <p>{filterage}</p>
        </div>
    )
}

export default Person