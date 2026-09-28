import Usercard from "./component/UserCard"
import Productcard from "./component/ProductCard"
import StudentsList from "./component/StudentList"
import StudentCard from "./component/StudentCard"
import User from "./component/User"
import Student from "./component/Student"
import Profile from "./component/Profile"
import Card from "./component/Card"
import Student2 from "./component/Student2"
import Person from "./component/Person"
import User2 from "./component/User2"


function App() {
    const user = {
        name: "Goga",
        age: 22,
        city: "Tbilisi"
    }

    const product = {
        name: "Laptop",
        price: 1200,
        category: "Electronics",
        inStock: true
    }

    const students = [
        {
            id: 1,
            name: "Giorgi",
            age: 18,
            grade: 90
        },
        {
            id: 2,
            name: "Nino",
            age: 19,
            grade: 85
        },
        {
            id: 3,
            name: "Luka",
            age: 18,
            grade: 95
        }
    ]

    const namee = "Goga";
    const age = 22;

    const student = {
        name: "Nika",
        age: 18
    };

    const name = "Giorgi";
    const profession = "Frontend Developer";
    const city = "Tbilisi";

    const title = "React";
    const description = "JavaScript library for building user interfaces";
    const buttonText = "Learn More";

    const name3 = "Nika";
    const grade = 85;

    const name4 = "Giorgi";
    const age4 = 20;

    const name5 = "Goga";
    const role = "admin";




    return (
        <>
            <Usercard name={user.name} age={user.age} city={user.city} />
            <Productcard name={product.name} price={product.price} category={product.category} inStock={product.category} />
            <StudentsList name={students} />
            <StudentCard />
            <User name={namee} age={age} />
            <Student name={student.name} age={student.age} />
            <Profile name={name} profession={profession} city={city} />
            <Card title={title} description={description} buttonText={buttonText} />
            <Student2 name={name3} grade={grade} />
            <Person name={name4} age={age4} />
            <User2 name={name5} role={role}/>

        </>
    )
}

export default App
