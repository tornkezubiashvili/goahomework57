


async function func() {
    try{
        let response = await fetch("https://fakestoreapi.com/products")
        let data = await response.json()

        for(let i of data){
            console.log(i)
        }

        console.log(data)
    }catch(error){
        console.log(error)
    }
}
func()