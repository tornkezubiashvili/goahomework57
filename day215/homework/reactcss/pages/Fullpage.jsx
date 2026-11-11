import { useEffect, useState, createContext } from "react"
import Foter from "../component/Foter"
import Heder from "../component/Heder"
import { Outlet } from "react-router-dom"
export const UserContext = createContext();

function Fullpage() {
    const [obj, setObj] = useState()
    const [country, setCountry] = useState()
    async function fetchData(country = "tbilisi") {

        const url = `https://api.weatherapi.com/v1/current.json?key=94a4fbb3c1224baca5e155006260511&q=${country}`
        const responsi = await fetch(url)
        const data = await responsi.json()
        console.log(data)
        setObj(data)
    }
    useEffect(() => {
        fetchData()
    }, [])


    return (
        <>
            <UserContext.Provider value={[obj?.location.name, obj]}>
                <Heder />
                <Outlet />
                <Foter />
            </UserContext.Provider>
        </>

    )

}

export default Fullpage