// შექმენით ასინქრონული ფუიქნცია რომელიც წამოიღებს აიპიაიდან ინფორმაციას(ნახეთ რამე api დავალებიდან ან ნებსიმიერი) შენი დავალებაა რომ ეკრანზე გამოიტანო ეიპიაიდან რაიმე ტექსტი . გამოიყენე awync await

// ასევე გამოიყენე try catch finallt ბლოკი


try{
    async function api() {
        let response = await fetch("https://jsonplaceholder.typicode.com/posts")
        let data = await response.json()
        console.log(data[0].title)
    }
    api()

}catch(error){
    console.log(error)
}

