// 3)შექმენი ფუნქცია register(username, password) 

// თუ ორივე მნიშვნელობა truthy არის → დაბეჭდე "Registration successful"

// თუ რომელიმე falsy არის → დაბეჭდე "All fields are required"

// გამოიძახე ფუნქცია სხვადასხვა მნიშვნელობებით და შეამოწმე შედეგი.


function register(username, password) {
  if (username && password) {
    console.log("Registration successful")
  } else {
    console.log("All fields are required")
  }
}


register("user1", "mypassword")
register("", "mypassword")      
register("user2", "")        
register("admin", "1234")