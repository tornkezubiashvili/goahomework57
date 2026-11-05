import Foter from "../component/Foter"
import Heder from "../component/Heder"
import Main from "../component/main"

function App() {

    async function fetchData() {
        let country = "tbilisi"
        const url = `https://api.openweathermap.org/data/2.5/weather?q=Tbilisi&appid=912cbd0fe6ad94bb885b094671ef036c&units=${country}`
        const responsi = await fetch(url)
        const data = await responsi.json()
        console.log(data)
    }
    fetchData()


    return (
        <>
            <Heder />
            <Main />
            <Foter />
        </>
    )

}

export default App
