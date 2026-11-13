import { BrowserRouter, Routes, Route } from "react-router-dom"
import Firstpage from "../pages/Firstpage"
import Fullpage from "../pages/Fullpage"
import History from "../pages/History"
function App() {

    return (
        <>
            <BrowserRouter>
                <Routes>
                    <Route element={<Fullpage />}>
                        <Route path="/" element={<Firstpage />} />
                        <Route path="/History" element={<History />} />
                    </Route>
                </Routes>
            </BrowserRouter>
        </>

    )

}

export default App
