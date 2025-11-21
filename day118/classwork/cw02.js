// 2) დაამატეთ საიტზე ღილაკი როცა ამ ღილაკს დააჭერთ კონსოლში დაიბეჭდოს რომ ღილაკს დაეჭირა და ამასთან ერთად გვერძე მიეწეროს მერამდენე დაჭერა(დაკლიკება მოხდა)

let button = document.createElement('button')
button.textContent = "klick"




document.body.appendChild(button)
let count = 1

function klickfunc(){
    console.log("GOA",count)
    count++
}



button.addEventListener('click',klickfunc)





