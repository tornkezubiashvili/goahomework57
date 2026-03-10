// 7) შექმენი ახალი მასივი, სადაც ყველა პროდუქტის ფასი 10%-ით შემცირებული იქნება.
const products = [
  {name: "Phone", price: 1000},
  {name: "Laptop", price: 2000}
];

let newarry = products.map(info =>{
    let newprice = info.price * 10 / 100
    console.log(info.name,info.price - newprice)
})

