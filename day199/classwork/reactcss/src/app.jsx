import { useState } from "react"

function App() {


    const [name, setName] = useState("")
    const [surname, setsurname] = useState("")
    const [email, setemail] = useState("")
    const [password, setpassword] = useState("")

    function func(e) {
        e.preventDefault()
        setName(e.target.name.value)
        setsurname(e.target.surname.value)
        setemail(e.target.email.value)
        setpassword(e.target.password.value)

    }
    return (
        <>

            <form onSubmit={func}>
                <input type="text" name="name" placeholder="name" />
                <input type="text" name="surname" placeholder="surname" />
                <input type="email" name="email" placeholder="email" />
                <input type="password" name="password" placeholder="passwork" />
                <button type="submit">Submit</button>
            </form>
            <p>{name}/{surname}/{email}/{password}</p>
        </>
    )
}


export default App
