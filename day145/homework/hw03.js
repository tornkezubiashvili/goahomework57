// 3)დესტრუქციით გამოიტანე:

// store name

// city

// street

// first product name

// second product price
const store = {
  name: "MegaShop",
  address: {
    city: "Batumi",
    location: {
      street: "Chavchavadze",
      number: 10
    }
  },
  products: [
    {
      name: "Laptop",
      price: 2500
    },
    {
      name: "Phone",
      price: 1200
    }
  ]
}

const {name,address:{city,location:{street}},products:[{name:productname},{price}]} = store


console.log(name)
console.log(city)
console.log(street)
console.log(productname)
console.log(price)

