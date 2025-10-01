//8)შექმენი ფუქნცია რომელსაც გადაეცემა არგუმენტად სია,სადაც მოთავსებული იქნება განსხვავებული მონაცემთა ტიპის ელემენტები,შენი დავალეაბა რომ --> დაითვალო ამ სიაში სტრინგ ტიპის მონაცემების რაოდენობა და ინტეჯერ ტიპის მონაცემების ჯამი, ანუ სიაში უდნა დათვალო რამდენი სტრინგია,და ინტეჯერის შემთხვევაში უნდა გაიგო სიაში მყოფი ინტეჯერების(ნამბერების) ჯამი

function type(arr) {
    let str = 0
    let int = 0
    let bol = 0

    for (let i = 0; i < arr.length; i++) {
        if (typeof arr[i] === "string") {
            str++
        } else if (typeof arr[i] === "number") {
            int += arr[i]

        } else {
            bol++
        }

    }
    console.log(str)
    console.log(int)
    console.log(bol)

}

type([2, true, 567, 5, "tornike", false, "goa"])