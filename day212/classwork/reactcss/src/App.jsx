import { useState } from "react"
import Componen from "./Componen"
import { createContext } from "react"
import Component2 from "./Component2"
import Component3 from "./Component3"


export let Create = createContext()

function App() {
    let [plus, setPlus] = useState(0)


    function plusfunc() {
        setPlus(plus + 1)
    }
    function minusfunc() {
        setPlus(plus - 1)
    }





    return (
        <>

            <Create.Provider value={plus}>
                <button onClick={plusfunc} className="text-[20px]">+</button>
                <Componen />
                <button onClick={minusfunc} className="text-[20px]">-</button>
                <Component2 />
                <Component3 />
            </Create.Provider>
        </>
    )

}

export default App
