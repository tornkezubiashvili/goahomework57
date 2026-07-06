// ნებისმიერი api ის გამოყენებით ააწყვეთ მინი პროექტი სადა გამოიყენებთ async await და try catch ბლოკებს


let form = document.getElementById("form")
let p = document.getElementById("p")



try{
    async function api() {
        let response = await fetch("https://v6.exchangerate-api.com/v6/5ff86e573d0e12ed27d616d6/latest/USD")
        let data = await response.json()
        form.addEventListener("submit",function(e){
            e.preventDefault()
            let input = e.target.search.value
            let amount = e.target.amount.value
            let text = input.toUpperCase()
            let apiText = data.conversion_rates[text]
            if(amount.length > 0){
               p.textContent = amount * apiText
            }else{
                p.textContent = `${text} : ${apiText}`
            }
           
        })
        
    }
    api()

}catch(error){
    console.log(error)
}