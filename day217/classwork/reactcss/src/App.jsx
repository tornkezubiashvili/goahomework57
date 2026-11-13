import { useRef, useState } from "react"

function App() {
    const [coun, setcoun] = useState(0)
    let counter = useRef(0)

    function plus() {
        counter.current += 1
        setcoun(counter.current)
    }
    function minus() {
        counter.current -= 1
        setcoun(counter.current)
    }



    return (
        <>
            <button onClick={plus}>+</button>
            <p>{counter.current}</p>
            <button onClick={minus}>-</button>

        </>
    )

}

export default App
