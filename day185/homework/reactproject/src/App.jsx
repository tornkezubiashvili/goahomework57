import User from './hw01.jsx'
import Person from './hw02.jsx'
import Button from './hw03.jsx'
import Box from './hw04.jsx'
import Product from './hw05.jsx'
import Student from './hw06.jsx'
import Card from './hw07.jsx'
import User2 from './hw08.jsx'
import Product2 from './hw09.jsx'
import UserCard from './hw10.jsx'



function App() {
    return (
        <div>
            <User desc="Hello, Giorgi" />
            <Person name = "Giorgi" age = "21" />
            <Button desc = "Login" />
            <Button desc = "Register" />
            <Button desc = "Click me" />
            <Box color = "red"/>
            <Product name = "W211 E55 AMG" price = "20000%" imgsrc = "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTIF7EmV3ayM762zfapYYBhEI0bOwNsM4wR92SsT1dP7ihZpDoxLSQtzSJI&s=10" />
            <Student name = "gocha" age = "22" course = "IT" />
            <Card title = "title1" description = "description1" buttonText = "buttonText1" />
            <Card title = "title2" description = "description2" buttonText = "buttonText2" />
            <Card title = "title3" description = "description3" buttonText = "buttonText3" />
            <User2 name = "tornike" isOnline = "true"/>
            <Product2 name = "product1" price = "1" category = "category1"/>
            <Product2 name = "product2" price = "2" category = "category2"/>
            <Product2 name = "product3" price = "3" category = "category3"/>
            <UserCard name = "tornike" age = "17" job = "IT" city = "Gori" isOnline = "Offline" />

        </div>

    )


}

export default App
