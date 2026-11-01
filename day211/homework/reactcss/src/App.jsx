import { useState } from "react"
import photo from "../src/assets/img/amazon.png"
function App() {
    let [ind, setInd] = useState(2)
    let [heart, setHeart] = useState(34)
    let [showtime, setShowtime] = useState(true)
    let [showheart, setShowheart] = useState(false)



    setInterval(() => {
        let number = Math.floor(Math.random() * (120 - 30 + 1)) + 30;
        setHeart(number)
    }, 10000);

    let array = [
        "../src/assets/img/image2.png",
        "../src/assets/img/image1.png",
        "../src/assets/img/image3.png",
        "../src/assets/img/image4.png",
        "../src/assets/img/image5.png",
    ]

    function indexfunc(e) {
        setInd(e.target.id)
    }
    function showtimes() {
        setShowtime(!showtime)
        setShowheart(!showheart)
    }
    function showhearts() {
        setShowheart(!showheart)
        setShowtime(!showtime)

    }


    return (
        <>
            <div className="flex w-full bg-black items-center justify-center">
                <img className="w-50  items-center justify-center p-3.75" src="../src/assets/img/amazon.png" alt="" />
            </div>
            <div className="flex ">
                <div className="relative items-center justify-center">
                    <img className="w-120 h-125" src={array[ind]} alt="" />
                    <h1 className={`absolute top-53 left-45.5 text-white text-[30px] ${showtime === true ? "flex" : "hidden"} `}>22:26:28</h1>
                    <div className={`relative ${showheart === true ? 'flex' : "hidden"}`}>
                        <img src="../src/assets/img/image6.png" alt="" className="w-45 left-37.5 bottom-50 absolute" />
                        <h1 className="w-45 left-56 bottom-48 absolute text-white text-[20px]">{heart}</h1>
                    </div>
                </div>
                <div className="flex flex-col gap-5">
                    <h1 className="text-[40px] font-medium">FitBit19-The Smartest Watch</h1>
                    <p>Loream,ipsum dolar sit amet consectetuar adipisicing.Sit laudantium distinction</p>
                    <h1 className="text-[25px] font-bold">Select color</h1>
                    <div className="flex gap-2.5">
                        <button id={0} onClick={indexfunc} className="bg-black w-12.5 h-10 rounded-[5px] cursor-pointer"></button>
                        <button id={1} onClick={indexfunc} className="bg-gray-700 w-12.5 h-10 rounded-[5px] cursor-pointer"></button>
                        <button id={2} onClick={indexfunc} className="bg-red-300 w-12.5 h-10 rounded-[5px] cursor-pointer"></button>
                        <button id={3} onClick={indexfunc} className="bg-orange-950 w-12.5 h-10 rounded-[5px] cursor-pointer"></button>
                        <button id={4} onClick={indexfunc} className="bg-red-900 w-12.5 h-10 rounded-[5px] cursor-pointer"></button>


                    </div>
                    <h1 className="text-[25px] font-bold">Features</h1>
                    <div className="flex gap-2">
                        <button onClick={showtimes} className="bg-gray-300  rounded-[5px] p-1.75 text-black font-medium cursor-pointer" >Time</button>
                        <button onClick={showhearts} className="bg-gray-300  rounded-[5px] p-1.75 text-black font-medium cursor-pointer">Heart Rate</button>
                    </div>
                    <button className="bg-orange-500 rounded-[5px] p-1.75 w-32.5 text-black font-medium cursor-pointer">Buy Now</button>
                </div>
            </div >
        </>
    )
}
export default App