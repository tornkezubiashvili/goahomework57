// 5)შექმენი ობიექტი movie ველებით: name, genre, rating.
// Object.keys() მეთოდის გამოყენებით გამოიტანე ყველა key ცალ ცალკე ხაზზე (for loop)
// ასევე
// Object.values() მეთოდის გამოყენებით გამოიტანე ყველა value ცალ ცალკე ხაზზე (for loop)


let movie = {
    name : "ზებუნებრივი",
    genre : "დეტექტივი, საშინელებათა, ",
    rating : "......."
}
let key = Object.keys(movie)
let value = Object.values(movie)
for(let i = 0; i < key.length; i++){
    console.log("key" + key[i])
    console.log("value" + value[i])
}