import { useState } from "react"
import Prouct from "./component/Prouct"
import { useEffect } from "react"

function App() {


    let [arry, setArry] = useState([])
    let [showshop, setShowshop] = useState(false)
    let [shoparry, setShoparry] = useState([])
    let [page, setPage] = useState([])
    let list = []


    let fori = 0
    let forindex = 12
    useEffect(() => {

        if (arry.length > 0) {
            for (let j = 0; j < arry.length / 10; j++) {
                let forarray = []

                for (let i = fori; i < forindex; i++) {
                    // console.log(arry[i])
                    // list.push(arry[i])
                    // setPage((prev) => [...prev, [arry[i]]])
                    forarray.push(arry[i])

                }
                setPage((prev) => [...prev, forarray])
                fori += 10
                forindex += 10
            }

        }

    }, [arry])


    console.log(page)

    function shop(e) {
        let index = e.target.id
        setShoparry([...shoparry, { ...arry[index], count: 1 }])
        setShowshop(true)
        // setQuantity([...quantity, { num: 1 }])
    }


    function minus(e) {
        let index = Number(e.target.id)
        setShoparry((prev) => {
            return prev.map((items, id) => index === id ? { ...items, count: items.count - 1 } : items)
        })


    }
    function plus(e) {
        let index = Number(e.target.id)
        setShoparry((prev) => {
            return prev.map((items, id) => index === id ? { ...items, count: items.count + 1 } : items)
        })
        console.log(shoparry[index].count)


    }
    function del(e) {
        let index = Number(e.target.id)
        setShoparry((prev) => {
            return prev.filter((item, ind) => ind !== index)
        })

    }





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
                                        <p>{shoparry[index].count}</p>
                                        <button id={index} className="text-green-600 cursor-pointer text-[30px]" onClick={plus}>+</button>
                                    </div>
                                    <p>x {items.price}₾</p>
                                </div>
                            </div>
                            <div className="flex flex-col gap-3 items-center justify-center">
                                <button id={index} className="cursor-pointer" onClick={del}>❌️</button>
                                <p>{shoparry[index].count * items.price} ₾</p>
                            </div>
                        </div>
                    )
                }

            </div >
            <div className="grid grid-cols-3 flex-wrap justify-items-center gap-8 max-w-200 ">
                {
                    arry.map((items, index) =>
                        <div className="flex flex-col border flex-wrap  -between border-gray-400 w-60 h-auto">
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

