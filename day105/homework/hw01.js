//დაწერე ფუნქცია, რომელიც იღებს არგუმენტად რიცხვების სიას
//და ახალ სიაში ამატებს მხოლოდ ლუწ რიცხვებს. შემდეგ იპოვეთ ამ სიაში მყოფი რიცხვების ჯამი


function list(arr){
    even = []
    sum = 0
    for(let i = 0; i < arr.length;i++){
        if(arr[i] % 2 == 0){
            even.push(arr[i])
        }
    }

    for(let n = 0; n < even.length;n++){
        sum+=even[n]
    }
    console.log(sum)
}


list([1,2,3,4,5,6,7,8,9,10])
