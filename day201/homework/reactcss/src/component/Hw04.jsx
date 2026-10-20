import React, { useState } from 'react'

function Hw04() {
    const [state, setState] = useState(
        {
            name: "",
            age: "",
            gender: "",
            description: "",

        }
    )

    function handleChange(e) {
        e.preventDefault()
        setState(
            {
                name: e.target.name.value,
                age: e.target.age.value,
                gender: e.target.gender.value,
                description: e.target.description.value,
            }
        )
        e.target.name.value = ""
        e.target.age.value = ""
        e.target.gender.value = ""
        e.target.description.value = ""

    }
    console.log(state)

    return (
        <>
            <form onSubmit={handleChange} >
                <input type="text" name='name' placeholder='Name' />
                <input type="number" name='age' placeholder='Age' />
                <input type="text" name="gender" placeholder='Gender' />
                <input type="checkbox" placeholder='Is Student' />
                <input type="text" name='description' placeholder='Description' />
                <button type='submit'>Submit</button>

            </form>
            <h1>5------------------------------------------------------------------------</h1>
        </>
    )
}

export default Hw04