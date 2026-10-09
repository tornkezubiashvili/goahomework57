import { useState } from "react"
import Hw01 from "./component/Hw01"
import Hw02 from "./component/Hw02"
import Hw03 from "./component/Hw03"
import Hw04 from "./component/Hw04"
import Hw05 from "./component/Hw05"
import Hw06 from "./component/Hw06"
import Hw07 from "./component/Hw07"
import Hw08 from "./component/Hw08"
import User from "./component/User"
import Product from "./component/Product"
import Counter from "./component/Counter"



function App() {
    const [isOnline, setIsOnline] = useState(false)
    const [count, setCount] = useState(0)
    const [Counterr, setCounter] = useState(0)
    return (
        <>
            <Hw01 />
            <Hw02 />
            <Hw03 />
            <Hw04 />
            <Hw05 />
            <Hw06 />
            <Hw07 />
            <Hw08 />
            <User name="Goga" status={isOnline} state={setIsOnline} />
            <Product name="Laptop" price="1200" count={count} setCount={setCount} />
            <Counter count={Counterr} setCounter={setCounter} />
        </>
    )
}

export default App
