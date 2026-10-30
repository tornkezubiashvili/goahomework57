import photo from "../src/assets/img/amazon.png"
function App() {

    return (
        <>
            <div className="flex w-full bg-black items-center justify-center">
                <img className="w-50 items-center justify-center p-3.75" src="../src/assets/img/amazon.png" alt="" />
            </div>
            <div className="flex">
                <div className="relative items-center justify-center">
                    <img  className="w-100" src="../src/assets/img/image2.png" alt="" />
                    <h1 className="absolute top-50">22:26:28</h1>
                </div>
                <div>
                    <h1>FitBit19-The Smartest Watch</h1>
                    <p>Loream,ipsum dolar sit amet consectetuar adipisicing.Sit laudantium distinction</p>
                    <h1>Select color</h1>
                    <div>
                        <div></div>
                        <div></div>
                        <div></div>
                        <div></div>
                        <div></div>
                    </div>
                    <h1>Features</h1>
                    <div>
                        <button>Time</button>
                        <button>Heart Rate</button>
                    </div>
                    <button>Buy Now</button>
                </div>
            </div>
        </>
    )
}
export default App