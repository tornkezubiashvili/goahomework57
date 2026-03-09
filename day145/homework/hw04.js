// 4)📌 დესტრუქციის გამოყენებით გამოიტანე:

// name

// surname

// country

// city name

// street
const user = {
  name: "Nika",
  surname: "Beridze",
  address: {
    country: "Georgia",
    city: {
      name: "Tbilisi",
      street: "Pekini"
    }
  }
}


const {name,surname,address:{country,city:{name:citynaem,street}}} = user


console.log(name)
console.log(surname)
console.log(country)
console.log(citynaem)
console.log(street)

