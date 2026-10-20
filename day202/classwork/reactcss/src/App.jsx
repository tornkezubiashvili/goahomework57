import { useState } from "react"
import Prouct from "./component/Prouct"

function App() {

    let [arry, setArry] = useState([])
    let [showshop, setShowshop] = useState(false)
    let [shoparry, setShoparry] = useState([])
    let [quantity, setQuantity] = useState([{}])
    let [count, setCount] = useState([])




    function shop(e) {
        let index = e.target.id
        setShoparry([...shoparry, arry[index]])
        setShowshop(true)
        setQuantity([...quantity, { num: 1 }])
    }
    console.log(quantity)

    function minus(e) {
        let index = e.target.id
        // setQuantity([quantity[index] + 1])


    }
    function plus(e) {
        let index = e.target.id


    }

    console.log(quantity.num + 1)

    return (
        <>
            <Prouct setArry={setArry} />
            <div className={`bg-gray-300 w-120 hiden p-3 gap-4 flex flex-col -ml-122.5   ${showshop ? "block" : "hidden"}`} >
                {
                    shoparry.map((items, index) =>
                        <div className="flex items-center justify-between">
                            <img src={items.imgSrc} alt="" className="w-37.5 h-37.5 object-cover" />
                            <div className="flex flex-col gap-3">
                                <p>{items.title}</p>
                                <div className="flex gap-4 items-center justify-center">
                                    <div className="flex w-25 p-1 h-8 items-center justify-between border border-green-300">
                                        <button id={index} className="text-green-600 cursor-pointer text-[30px]" onClick={minus}>-</button>
                                        {/* <p>{quantity[index]}</p> */}
                                        <button id={index} className="text-green-600 cursor-pointer text-[30px]" onClick={plus}>+</button>
                                    </div>
                                    <p>x {items.price}₾</p>
                                </div>
                            </div>
                            <div className="flex flex-col gap-3 items-center justify-center">
                                <button className="cursor-pointer">❌️</button>
                                <p>34534</p>
                            </div>
                        </div>
                    )
                }

            </div >
            <div className="grid grid-cols-3 flex-wrap justify-items-center gap-8 max-w-200 ">
                {
                    arry.map((items, index) =>
                        <div className="flex flex-col border  -between border-gray-400 w-60 h-auto">
                            <img src={items.imgSrc} alt="" className="w-60 h-70 object-cover" />
                            <p>{items.title} {items.desc}</p>

                            <div className="flex justify-between">
                                <p className="text-green-600 text-[20px]">{items.price}₾</p>
                                <button id={index} className="text-[20px] cursor-pointer" onClick={shop}>🛒</button>
                            </div>
                        </div>
                    )
                }
            </div>


        </>
    )
}

export default App

