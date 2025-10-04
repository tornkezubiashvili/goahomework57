//დაწერე ფუნქცია, რომელიც იღებს სახელების სიას და აბრუნებს ახალ სიას მხოლოდ
//იმ სახელებისგან შემდგარს, რომლებსაც სიგრძე 5-ზე მეტია და არის ლუწი.შემდეგ
//შეამოწმეთამ ახალ სიაში მყოფი სახელებიდან თუ რომელიმე იწყება ასო "ა" ზე ასეთი
//ელემენტები ამოშალეთ სიიდან(ამაში გამოიყენეთ splice ფუნქცია,თუ მიხვდებით როგორ)


function list(arr){
    let namelist = []
    for(let i = 0; i <arr.length;i++){
        if(arr[i].length > 5 && arr[i].length % 2 == 0){
            namelist.push(arr[i])
        }
    }
    for(let n = 0; n < namelist.length;n++){
        if(namelist[n][0] === "ა"  || namelist[n][0] === "a" || namelist[n][0] === "A"){
            namelist.splice(0,1)
        }
    }

    console.log(namelist)
}

list(["tornike","ana","anastasiaa","gio","irakli"])