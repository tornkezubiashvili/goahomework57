import React from 'react'
import { useState } from 'react'
import Npp from '../Npp'

function StudentForm({ addstudent}) {
    const [name, setName] = useState("")
    const [surname, setSurname] = useState("")
    const [age, setAge] = useState("")


    function student(e) {
        e.preventDefault()

        if (name == "" || surname == "" || age == "") {
            return

        } 
        let student = {
            name : name,
            surname : surname,
            age:age
        }
        addstudent(student)

    }


    return (
        <>
            <form onSubmit={student}>
                <input type="text" onChange={(e) => setName(e.target.value)} value={name} placeholder='name' />
                <input type="text" onChange={(e) => setSurname(e.target.value)} value={surname} placeholder='surname' />
                <input type="text" onChange={(e) => setAge(e.target.value)} value={age} placeholder='age' />
                <button type='submit'>Submit</button>
            </form>
        </>
    )
}

export default StudentForm