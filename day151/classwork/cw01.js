// level 151:
//    1) შექმენი კლასი User, რომელსაც ექნება:

// name, age
// მეთოდი changeName(newName) --> შეცვლის სახელს
// მეთოდი increaseAge() ---> გაზრდის ასაკს თქვენთვის სასურველი რიცხვით

// გამოიძახეთ ორივე ფუნქცია და ამის შემდეგ დააკონსოლლოგეთ მთლიანი ობიექტი


// ამ ყველაფერს დაამატეთ dom და html ის ინფუთებით შეიყვანეთ მონაცემები

let form = document.getElementById("form");
let nameinput = document.getElementById("name");
let ageinput = document.getElementById("age");
let submitBtn = document.getElementById("submit");

class User {
    constructor(name, age) {
        this.name = name
        this.age = age
    }

    changeName() {
        this.name = nameinput.value
    }

    increaseAge() {
        this.age += Number(ageinput.value)
    }
}

let user1 = new User("ბონდო", 12);

console.log(user1)

form.addEventListener("submit", (e) => {

    e.preventDefault()

    user1.changeName()

    user1.increaseAge()

    console.log(user1)
})