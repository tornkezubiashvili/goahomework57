// 2)შექმენი კლასი User, რომელსაც ექნება:

// name, age
// მეთოდი changeName(newName) --> შეცვლის სახელს
// მეთოდი increaseAge() ---> გაზრდის ასაკს თქვენთვის სასურველი რიცხვით

// გამოიძახეთ ორივე ფუნქცია და ამის შემდეგ დააკონსოლლოგეთ მთლიანი ობიექტი

class User {
    constructor(name, age) {
        this.UserNaem = name
        this.UserAge = age
    }
    changeName(newName) {
        this.UserNaem = newName
        return this.UserNaem
    }
    increaseAge(newAge) {
        this.UserAge += newAge
        return this.UserAge
    }
}

let usr = new User("Tornike", 17)

console.log(usr.changeName("bondo"))
console.log(usr.increaseAge(24))

console.log(usr)
