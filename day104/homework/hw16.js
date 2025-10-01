// ყველა მეთოდი რაც ვისწავლეთ + for loop----

// ფუნქციამ მიიღოს სია.

// დასაწყისში ჩასვას "Start" (unshift)

// ბოლოში "End" (push)

// წაშალოს პირველი (shift)

// წაშალოს ბოლო (pop)

// გააერთიანოს მეორე სიასთან (concat)

// for-ით დაბეჭდოს ყველა ელემენტი.
// ბოლოს დააბრუნოს "საბოლოო სიის სიგრძე: N".


function list(a,b){
    a.unshift("start")
    a.push("end")
    a.shift()
    a.pop()
    c = a.concat(b)
    for (let i = 0; i< c.length;i++){
        console.log(c[i])
    }
console.log(`საბოლოო სიის იგრძე: ${c.length}`)

    
}

list([234,43,546,24] , [34,456,23,65])