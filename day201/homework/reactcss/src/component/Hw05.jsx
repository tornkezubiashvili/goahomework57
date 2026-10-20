import React, { useState } from 'react'

function Hw05() {
    const [status, setStatus] = useState(
        {
            name: "",
            age: "",
            course: "",
            grade: "",
            text: false

        }
    )

    function func(e) {
        e.preventDefault()
        if (e.target.name.value !== "" && e.target.age.value !== "" && e.target.course.value !== "" && e.target.grade.value !== "") {
            setStatus(
                {
                    name: e.target.name.value,
                    age: e.target.age.value,
                    course: e.target.course.value,
                    grade: e.target.grade.value,
                    text: true
                }
            )
        } else {
            return
        }

    }
    console.log(status)

    return (
        <>
            <form onSubmit={func}>
                <input type="text" name='name' placeholder='Name' />
                <input type="number" name='age' placeholder='Age' />
                <input type="text" name='course' placeholder='Course' />
                <input type="number" name='grade' placeholder='Grade' />
                <button type='submit'>Submit</button>
            </form>

            <p>{status.age < 18 ? "Young" : "adult"}</p>
            <p>{status.text === true ? "accept" : "Disclaimer"}</p>
        </>
    )
}

export default Hw05