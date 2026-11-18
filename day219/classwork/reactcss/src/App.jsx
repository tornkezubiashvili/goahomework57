import { useRef, useState } from "react"
import logo from "../public/images/card-logo.svg"



function App() {
    return (
        <>
            <div className="w-full flex gap-150">
                <div className="bg-pink-900 w-130 h-screen flex items-start relative ">
                    <div className="absolute flex flex-col
                     items-start justify-between p-6 w-110 h-60  left-80 top-50 rounded-[10px] bg-pink-500">
                        <div>
                            <img className="w-18" src={logo} alt="" />
                        </div>
                        <h1 className="text-white text-[35px]">0000 0000 0000 0000</h1>
                        <div className="flex w-85 items-center justify-between">
                            <p className="text-white">JANA APPLESEED</p>
                            <p className="text-white">00/00</p>
                        </div>
                    </div>

                    <div className="absolute bg-gray-300 w-110 h-60 flex flex-col items-center justify-between  left-110 top-120 rounded-[10px] py-6 ">
                        <div className="bg-gray-700 w-full h-10 "></div>
                        <div className="bg-gray-500 w-80 h-8 flex items-center justify-end px-5">
                            <p className="text-white">000</p>
                        </div>
                        <div></div>
                    </div>
                </div>

                <form className="flex flex-col items-start justify-center gap-5">
                    <label htmlFor="name" className="text-pink-950 text-[15px]">CARDMODER NAME</label>
                    <input name="name" type="text" placeholder="e.g. Jana Applessed" className="border rounded-[10px] w-90 p-2 border-gray-300" />

                    <label htmlFor="number" className="text-pink-950 text-[15px]">CAR NUMBER</label>
                    <input name="number" type="text" placeholder="e.g. 1234 5678 9123 0000" className="border rounded-[10px] w-90 p-2 border-gray-300" />

                    <div className="flex gap-5">
                        <div className=" flex flex-col items-start justify-center gap-2">
                            <label className="text-pink-950 text-[15px]">EXP.DATE(MM/YY)</label>
                            <div className="flex items-start justify-start gap-2">
                                <input type="text" placeholder="MM" name="MM" className="border rounded-[10px] w-15 p-2 border-gray-300" />
                                <input type="text" placeholder="YY" name="YY" className="border rounded-[10px] w-15 p-2 border-gray-300" />
                            </div>
                        </div>
                        <div className="flex flex-col gap-2">
                            <label htmlFor="cvc" className="text-pink-950 text-[15px]">CVC</label>
                            <input type="text" placeholder="e.g 123" name="cvc" className="border rounded-[10px] w-53 p-2 border-gray-300" />
                        </div>
                    </div>

                    <button type="submit" className="w-90 h-10 bg-pink-950 text-white rounded-[10px] cursor-pointer">Confirm</button>
                </form>
            </div>

        </>
    )

}

export default App
