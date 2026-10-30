import { useState } from "react"
import Prouct from "./component/Prouct"
import { useEffect } from "react"


function App() {


    let [arry, setArry] = useState([])
    let [showshop, setShowshop] = useState(false)
    let [shoparry, setShoparry] = useState([])
    let [page, setPage] = useState([])
    let [pageindex, setPageindex] = useState(0)
    let [changSort, setChangSort] = useState("sort")
    let [additems, setAdditems] = useState(false)



    let fori = 0
    let forindex = 12

    useEffect(() => {
        if (arry.length > 0) {
            for (let j = 0; j < arry.length / 12; j++) {
                let forarray = []

                for (let i = fori; i < forindex; i++) {
                    if (i < arry.length) {
                        forarray.push(arry[i])

                    }

                }
                setPage((prev) => [...prev, forarray])
                fori += 12
                forindex += 12
            }

        }

    }, [arry])


    function sort() {
        if (changSort === "sort") {

            setPage([])
            fori = 0
            forindex = 12
            let newArr = []

            newArr = [...arry.sort((a, b) => Number(a.price) - Number(b.price))]

            if (arry.length > 0) {
                for (let j = 0; j < newArr.length / 12; j++) {
                    let list = []

                    for (let i = fori; i < forindex; i++) {
                        if (i < newArr.length) {
                            list.push(newArr[i])
                        }
                    }

                    setPage(prev => [...prev, list])

                    fori += 12
                    forindex += 12
                }

                setChangSort("reversed sort")
            }

        } else {

            setPage([])
            fori = 0
            forindex = 12
            let newArr = []

            newArr = [...arry.sort((a, b) => Number(a.price) - Number(b.price)).reverse()]

            if (arry.length > 0) {
                for (let j = 0; j < newArr.length / 12; j++) {
                    let list = []

                    for (let i = fori; i < forindex; i++) {
                        if (i < newArr.length) {
                            list.push(newArr[i])
                        }
                    }

                    setPage(prev => [...prev, list])

                    fori += 12
                    forindex += 12
                }
            }

            setChangSort("sort")
        }
    }

    function all() {
        fori = 0
        forindex = 12
        setPage([])
        if (arry.length > 0) {
            for (let j = 0; j < arry.length / 12; j++) {
                let forarray = []

                for (let i = fori; i < forindex; i++) {
                    if (i < arry.length) {
                        forarray.push(arry[i])

                    }

                }
                setPage((prev) => [...prev, forarray])
                fori += 12
                forindex += 12
            }
        }
    }



    function Less5() {

        fori = 0
        forindex = 12
        let forarray = []
        setPage([])
        arry.map((items, index) => {
            if (items.price <= 5) {
                forarray.push(arry[index])

            }
        })

        if (arry.length > 0) {
            for (let j = 0; j < forarray.length / 12; j++) {
                let list = []

                for (let i = fori; i < forindex; i++) {
                    if (i < forarray.length) {
                        list.push(forarray[i])

                    }

                }
                setPage((prev) => [...prev, list])
                fori += 12
                forindex += 12
            }

        }


    }

    function Less15() {

        fori = 0
        forindex = 12
        let forarray = []
        setPage([])
        arry.map((items, index) => {
            if (items.price > 5 && items.price <= 15) {
                forarray.push(arry[index])

            }
        })

        if (arry.length > 0) {
            for (let j = 0; j < forarray.length / 12; j++) {
                let list = []

                for (let i = fori; i < forindex; i++) {
                    if (i < forarray.length) {
                        list.push(forarray[i])

                    }

                }
                setPage((prev) => [...prev, list])
                fori += 12
                forindex += 12
            }

        }


    }

    function Less() {

        fori = 0
        forindex = 12
        let forarray = []
        setPage([])
        arry.map((items, index) => {
            if (items.price > 15) {
                forarray.push(arry[index])

            }
        })

        if (arry.length > 0) {
            for (let j = 0; j < forarray.length / 12; j++) {
                let list = []

                for (let i = fori; i < forindex; i++) {
                    if (i < forarray.length) {
                        list.push(forarray[i])

                    }

                }
                setPage((prev) => [...prev, list])
                fori += 12
                forindex += 12
            }

        }


    }



    function shop(e) {
        let index = e.target.id
        setShoparry([...shoparry, { ...page[pageindex][index], count: 1 }])
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

    function search(e) {
        let product = []
        for (let i = 0; i < arry.length; i++) {
            if (arry[i].title.includes(e.target.value)) {
                product.push(arry[i])
            }
        }


        if (product.length > 0) {
            for (let j = 0; j < product.length / 12; j++) {
                let list = []

                for (let i = fori; i < forindex; i++) {
                    if (i < product.length) {
                        setPage([])
                        list.push(product[i])
                    }
                }

                setPage((prev) => [...prev, list])

                fori += 12
                forindex += 12

                console.log(page)
            }
        }

    }

    function add(e) {
        e.preventDefault()
        let count = arry.length


        let newItems = {
            id: count,
            title: e.target.name.value,
            desc: e.target.description.value,
            price: e.target.price.value,
            imgSrc: e.target.img.value
        }

        setPage(prev =>
            prev.map((itmes, index) =>
                index === prev.length - 1
                    ? [...itmes, newItems]
                    : itmes
            )
        );
        count++
        setAdditems(false)

    }
    // console.log(page)


    return (
        <>
            <Prouct setArry={setArry} />
            {/* shop box */}

            <div className="flex gap-5 w-195 items-center justify-between">
                <h1 className="text-[20px] cursor-pointer" onClick={sort}>{changSort}</h1>
                <input onChange={search} type="text" placeholder="შეიყვანეთ პროდუქტი" className="border border-gray-700 w-80 p-0.75" />
                <div className="flex gap-5">
                    <h1 className="text-[20px] cursor-pointer" onClick={all}>ALL</h1>
                    <h1 className="text-[20px] cursor-pointer" onClick={Less5}>-5</h1>
                    <h1 className="text-[20px] cursor-pointer" onClick={Less15}>5-15</h1>
                    <h1 className="text-[20px] cursor-pointer" onClick={Less}>15+</h1>
                    <h1 className="text-[20px] cursor-pointer" onClick={() => setAdditems(true)}>➕</h1>
                </div>
            </div>
            <form onSubmit={add} className={`absolute bg-gray-400 top-60 w-125 h-100 flex flex-col items-center justify-center gap-5 rounded-[20px]  ${additems === true ? "block" : "hidden"}`}>
                <input type="text" name="img" placeholder="შეიყვანე სურათის URL" className="border border-black-200 w-75 p-1.5 rounded-[20px]" />

                <input type="text" name="name" placeholder="შეიყვანე პროუქტის სახელი" className="border border-black-200 w-75 p-1.5 rounded-[20px]" />

                <input type="text" name="description" placeholder="შეიყვანე პროდუქტის აღწერა" className="border border-black-200 w-75 p-1.5 rounded-[20px]" />

                <input type="number" name="price" placeholder="შეიყვანე პროდუქტის ფასი" className="border border-black-200 w-75 p-1.5 rounded-[20px]" />

                <button type="submit" className="border border-black-200 w-75 p-1.5 rounded-[20px] cursor-pointer">{additems ? "Add items" : "Success"}</button>

            </form>
            <div className="flex gap-38">
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
                        page[pageindex]?.map((items, index) =>
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
            </div>

            {/* page */}
            <div className="flex gap-5 cursor-pointer">
                {
                    page.map((items, index) =>
                        <h1 onClick={() => setPageindex(index)} className="text-[20px]">{index + 1}</h1>
                    )
                }

            </div>


        </>
    )
}

export default App

