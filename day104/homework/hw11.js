// push + pop----
// ფუნქციამ მიიღოს სია.

// დაამატოს "test" ბოლოში,

// შემდეგ მოაშოროს ბოლო ელემენტი.
// ბოლოს დააბრუნოს მიღებული სია.


function list(arr){
    arr.push("test")
    arr.pop()
    console.log(arr)
}

list([234,456,68,345])