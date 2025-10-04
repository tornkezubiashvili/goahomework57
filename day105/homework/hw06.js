//დაწერე ფუნქცია, რომელიც იღებს სტუდენტების სახელების სიას და აბრუნებს(ითვლის) რამდენი სახელი იწყება ასო „გ“-ზე.

function list(arr){
    let num  = 0
    for(let i = 0; i< arr.length;i++){
        if(arr[i][0] === "g" || arr[i][0] === "G" || arr[i][0] === "გ"){
            num ++
        }
    }
    console.log(num)

}

list(["gio","გოჩა","სოსო","Gio"])