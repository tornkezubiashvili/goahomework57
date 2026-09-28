import Usercard from "./component/UserCard"
import Productcard from "./component/ProductCard"
import StudentsList from "./component/StudentList"
import StudentCard from "./component/StudentCard"


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

    return (
        <>
            <Usercard name={user.name} age={user.age} city={user.city} />
            <Productcard name={product.name} price={product.price} category={product.category} inStock={product.category} />
            <StudentsList name = {students}/>
            <StudentCard/>

        </>
    )
}

export default App
