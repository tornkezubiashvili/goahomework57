import { useRef, useState } from "react"

function App() {


    let count = useRef()
    console.log(count)

    return (
        <>

            <button onClick={() => {
                count.current.textContent = Number(count.current.textContent) + 1
                console.log(count)
            }}>+</button>

            <p ref={count}>0</p>

            <button onClick={() => {
                count.current.textContent = Number(count.current.textContent) - 1
                console.log(count)
            }}>-</button>

        </>
    )

}

export default App
