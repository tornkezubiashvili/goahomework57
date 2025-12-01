//1) შექმენით ფორმა სადაც იქნება რამდენიმე ინფუთი, სადაც შეიყვანთ სახელს, გვარს, ასაკს, მეილს, შემდეგ კი js ში როდესაც ფორმა დასაბმითდება კონსოლში დაბეჭდეთ ის მონაცემები რაც მომხმარებელმა ინფუთებში შეიყვანა

let form = document.getElementById('form')

form.addEventListener('submit',function(event){
    event.preventDefault()
    console.log(event.target.name.value)
    console.log(event.target.suenamename.value)
    console.log(event.target.age.value)
})