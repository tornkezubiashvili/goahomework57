import { useRef, useState } from "react"
import logo from "../public/images/card-logo.svg"



function App() {
    const name = useRef()
    const num = useRef()
    const mm = useRef()
    const yy = useRef()
    const cvc = useRef()

    const name2 = useRef()
    const num2 = useRef()
    const mm2 = useRef()
    const cvc2 = useRef()

    const nameref = useRef()
    const numref = useRef()
    const mmref = useRef()
    const cvcref = useRef()

    // const [state, setState] = [
    //     {
    //         namebool: true,
    //         numbool: true,
    //         mmbool: true,
    //         cvcbool: true,

    //     }
    // ]



    function formfuc(e) {
        e.preventDefault()

        name.current.value = name.current.value
        num.current.value = num.current.value
        mm.current.value = mm.current.value
        yy.current.value = yy.current.value
        cvc.current.value = cvc.current.value

        name2.current.textContent = name.current.value
        num2.current.textContent = `${num.current.value.slice(0, 4)} ${num.current.value.slice(4, 8)} ${num.current.value.slice(8, 12) }  ${num.current.value.slice(12, 16)}`
        mm2.current.textContent = `${mm.current.value}/${yy.current.value}`
        cvc2.current.textContent = cvc.current.value

        if (name.current.value.length > 20 || name.current.value.length < 2 || !isNaN(name.current.value)) {
            name2.current.textContent = "JANA APPLESEED"
            nameref.current.textContent = "incorrect name"
            mm2.current.textContent = "00/00"
        }
        if (num.current.value.length !== 16 || num.current.value < 0 || isNaN(num.current.value)) {
            num2.current.textContent = "0000 0000 0000 0000"
            numref.current.textContent = "incorrect CARD NUMBER"
            mm2.current.textContent = "00/00"
        }
        if (cvc.current.value.length !== 3) {
            cvc2.current.textContent = "000"
            cvcref.current.textContent = "incorrect CARD NUMBER"
            mm2.current.textContent = "00/00"
        }

    }





    return (
        <>
            <div className="w-full flex gap-150">
                <div className="bg-pink-900 w-130 h-screen flex items-start relative ">
                    <div className="absolute flex flex-col
                     items-start justify-between p-6 w-110 h-60  left-80 top-50 rounded-[10px] bg-pink-500">
                        <div>
                            <img className="w-18" src={logo} alt="" />
                        </div>
                        <h1 className="text-white text-[35px]" ref={num2}>0000 0000 0000 0000</h1>
                        <div className="flex w-85 items-center justify-between">
                            <p className="text-white" ref={name2}>JANA APPLESEED</p>
                            <p className="text-white" ref={mm2}>00/00</p>
                        </div>
                    </div>

                    <div className="absolute bg-gray-300 w-110 h-60 flex flex-col items-center justify-between  left-110 top-120 rounded-[10px] py-6 ">
                        <div className="bg-gray-700 w-full h-10 "></div>
                        <div className="bg-gray-500 w-80 h-8 flex items-center justify-end px-5">
                            <p className="text-white" ref={cvc2}>000</p>
                        </div>
                        <div></div>
                    </div>
                </div>

                <form onSubmit={formfuc} className="flex flex-col items-start justify-center gap-5">
                    <label htmlFor="name" className="text-pink-950 text-[15px]">CARDMODER NAME</label>
                    <input name="name" ref={name} maxLength={20} type="text" placeholder="e.g. Jana Applessed" className="border rounded-[10px] w-90 p-2 border-gray-300" />
                    <p ref={nameref}></p>


                    <label htmlFor="number" className="text-pink-950 text-[15px]">CARD NUMBER</label>
                    <input name="number" ref={num} type="text" maxLength={16} placeholder="e.g. 1234 5678 9123 0000" className="border rounded-[10px] w-90 p-2 border-gray-300" />
                    <p ref={numref}></p>

                    <div className="flex gap-5">
                        <div className=" flex flex-col items-start justify-center gap-2">
                            <label className="text-pink-950 text-[15px]">EXP.DATE(MM/YY)</label>
                            <div className="flex items-start justify-start gap-2">
                                <input type="number" ref={mm} min={1} max={12} maxLength={2} placeholder="MM" name="MM" className="border rounded-[10px] w-15 p-2 border-gray-300" />
                                <input type="number" ref={yy} maxLength={2} min={0} max={99} placeholder="YY" name="YY" className="border rounded-[10px] w-15 p-2 border-gray-300" />
                            </div>
                            <p ref={mmref}></p>
                        </div>
                        <div className="flex flex-col gap-2">
                            <label htmlFor="cvc" className="text-pink-950 text-[15px]">CVC</label>
                            <input type="number" max={999} ref={cvc} minLength={3} maxLength={3} placeholder="e.g 123" name="cvc" className="border rounded-[10px] w-53 p-2 border-gray-300" />
                            <p ref={cvcref}></p>
                        </div>
                    </div>

                    <button type="submit" className="w-90 h-10 bg-pink-950 text-white rounded-[10px] cursor-pointer">Confirm</button>
                </form>
            </div>

        </>
    )

}

export default App
