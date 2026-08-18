import User from './hw01.jsx'
import Person from './hw02.jsx'
import Button from './hw03.jsx'
import Box from './hw04.jsx'


function App() {
    return (
        <div>
            <User desc="Hello, Giorgi" />
            <Person name = "Giorgi" age = "21" />
            <Button desc = "Login" />
            <Button desc = "Register" />
            <Button desc = "Click me" />
            <Box color = "red"/>
        </div>

    )


}

export default App
