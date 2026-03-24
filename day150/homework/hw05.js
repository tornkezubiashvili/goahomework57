// 5)შექმენი კლასი BankAccount, რომელსაც ექნება:

// owner, balance
// მეთოდი deposit(amount) --> შეგვაქვს თანხა ანგარიშზე და ბეჭდავს განახლებულ ბალანსს
// მეთოდი withdraw(amount) --> გაგვაქვს თანხა ანგარიშიდან და ბეჭდავს დარჩენილ თანხას ანგარიშზე

// დააკონსოლლოგეთ ბოლოს მთლიანი ობიექტი რომ ნახოთ შეცვლილი ობიექტი

class BankAccount {
    constructor(owner, balance) {
        this.balance = balance
    }
    deposit(amount) {
        this.balance += amount
        console.log(this.balance)
    }
    withdraw(amount) {
        this.balance -= amount
        console.log(this.balance)
    }
}

let bank = new BankAccount("tornike", 200)
bank.deposit(200)
bank.withdraw(120)

console.log(bank)