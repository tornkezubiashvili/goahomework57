import { useState } from "react"
import Hw04 from "./component/Hw04"
import Hw05 from "./component/Hw05"
import Ww06 from "./component/Ww06"
import Hw07 from "./component/Hw07"
import Hw08 from "./component/Hw08"
import Hw09 from "./component/Hw09"

function App() {
    const [name, setName] = useState("")
    const [firstName, setfirstName] = useState("")
    const [lastName, setlastName] = useState("")
    const [text, setText] = useState("")
    const [title, setTitle] = useState("")

    function changeName(e) {
        e.preventDefault()
        setName(e.target.value)
    }

    function firstNamefunc(e) {
        setfirstName(e.target.value)

    }
    function lastNamefunc(e) {
        setlastName(e.target.value)

    }

    function textFunc(e) {
        setText(e.target.value)
    }
    function titleFunc(e) {
        setTitle(e.target.value)
    }


    return (
        <>
            <h1>1-----------------------------</h1>
            <input type="text" value={name} onChange={changeName} />
            <p>{name}</p>
            <h1>2-----------------------------</h1>
            <input type="text" value={firstName} onChange={firstNamefunc} />
            <input type="text" value={lastName} onChange={lastNamefunc} />
            <p>{firstName}/{lastName}</p>
            <h1>3-----------------------------</h1>
            <input type="text" value={text} onChange={textFunc} />
            <input type="text" value={title} onChange={titleFunc} />
            <p>{text.length} {text}</p>
            <p>{title.length} {title}</p>
            <h1>4-----------------------------</h1>
            <Hw04 />
            <Hw05 />
            <Ww06 />
            <Hw07 />
            <Hw08 />
            <Hw09 />




        </>
    )
}

export default App
