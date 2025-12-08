function Student(Name,Date){
    this.Name = Name
    this.Data = Date
    this.Goa = function func(){
        console.log("მოსწავლის სახელი",Name,"სწავლოს დაწყების თარიღი",Date)
    }
}

let stude = new Student("Tornike",2024)

stude.Goa()