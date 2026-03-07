// დესტრუქციის გამოყენებით ერთ ლაინში გამოიტანე კონსოლში:

// company name

// country

// city name

// street

// პირველი employee-ს name

// მეორე employee-ს age


const company = {
  name: "TechCorp",
  location: {
    country: "Georgia",
    city: {
      name: "Tbilisi",
      street: "Rustaveli"
    }
  },
  employees: [
    { name: "Nika", age: 22 },
    { name: "Giorgi", age: 25 }
  ]
}

let {name,location,location:{country,city,city:{name:cityname,street}}} = company


console.log(country)
console.log(cityname)

console.log( street)

console.log(name3)
console.log(age2)


