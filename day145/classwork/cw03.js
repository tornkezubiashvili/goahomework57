// მოახდინეთ ყველაფრის დესტრუქცია და დაბეჭდე საერთოდ ყველაფრის მნიშვნელობა

const user = [{
    name: "nika",
    surname: "nishnianidze",
    address: {
        city: {
            street: "beliashvili"
        },
        country: "Georgia"
    }
}] 

let[{name,surname,address,address:{city,city:{street},country,}}] = user


console.log(name)
console.log(surname)
console.log(street)
console.log(country)


