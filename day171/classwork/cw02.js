// 2)შექმენით მსგავსი ფეიჯი

// გააკეთეთ ეიპიაის სიმულლაცია(შექმენით ობიექტი სადაც იქნება სახელი გვარი მეილი ტელ ნომერი მისამართ და დაბადბის თარიღი

// ეს ყველაფერო ააწყვეთ პრომისებით

// გამოგიტანოთ ინფორმაცია resolvee შემთხვევაში ხოლო რეჯექთიშ შემთხვევეაში გამოიტანეთ რაიმე ტიპის ერორი ეკრანის ცენტრში




let Photo = document.getElementById("Photo")
let FirstName = document.getElementById("FirstName")
let LastName = document.getElementById("LastName")
let Email = document.getElementById("Email")
let Phone = document.getElementById("Phone")
let Address = document.getElementById("Address")
let Birthday = document.getElementById("Birthday")

let profilePromise = new Promise((resolve, reject) => {

    setTimeout(() => {
        let profileObject = {
            Photo: "https://scontent.ftbs9-1.fna.fbcdn.net/v/t39.30808-1/710745456_2420911421750318_4650210404543210182_n.jpg?stp=dst-jpg_tt6&cstp=mx2048x2032&ctp=s200x200&_nc_cat=107&ccb=1-7&_nc_sid=e99d92&_nc_ohc=wHwPe7GxecMQ7kNvwEGJmdv&_nc_oc=AdrJ38b-QBNys18cJ3J906CQPve3e7mPv6zHNPVjlL8x8aLRuoUgg2_fC7CIb2fGxfY&_nc_zt=24&_nc_ht=scontent.ftbs9-1.fna&_nc_gid=WOCfOIcT1LkX4iaGoemjdA&_nc_ss=7b2a8&oh=00_Af9QmS3gb_s27fNlJmhd7sKw5tRbshxcbQPbh8lqn-ppvQ&oe=6A3B60B1",
            FirstName: "tornike",
            LastName: "zubiashvili",
            Email: "tornikezubiashvili@gmail.com",
            Phone: "598 38 88 **",
            Address: "Georgian,Gori,Zerti",
            Birtday: "October 24, 2008"
        }
        resolve(profileObject)
    }, 2000)

    reject("error")
   
})
profilePromise.then((info) =>{
    Photo.src = info.Photo
    FirstName.textContent = info.FirstName
    LastName.textContent = info.LastName
    Email.textContent = info.Email
    Phone.textContent = info.Phone
    Address.textContent = info.Address
    Birthday.textContent = info.Birtday
}).catch((error) =>{
    FirstName.textContent = error
    LastName.textContent = error
    Email.textContent = error
    Phone.textContent = error
    Address.textContent = error
    Birthday.textContent = error
})
