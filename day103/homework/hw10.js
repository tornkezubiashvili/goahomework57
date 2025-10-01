//შექმენი ფუნქცია რომელსაც გადაეცემა სტრინგები და ინტეჯერები,შენი დავალებაა რომ თუ სიაში მყოფი რომელიმე ელემენტი არის სტრინგ ტიპის,ასეთი ელემენტი ჩაანაცვლო true - ით

function list(arr) {
    for (let i = 0; i < arr.length; i++) {
        if (typeof arr[i] === "string") {
            arr[i] = true;
        }
    }
    console.log(arr)
}

list([1, "hello", 42, "world", 99])

