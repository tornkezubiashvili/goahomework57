// 6)გვერდზე იყოს ორი <p>.
// JS-ით გაცვალე ერთმანეთის textContent-ები
// (პირველის ტექსტი გახდეს მეორის და პირიქით).



let p = document.getElementsByTagName("p")
let p2 = document.getElementsByTagName("p")



// p[0].textContent = p[1].textContent 
// p2[1].textContent = p2[0].textContent 



console.log(p[1].textContent)
console.log(p[0].textContent)