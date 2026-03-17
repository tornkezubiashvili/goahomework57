// 2)შექმენი მასივი პოსტების ობიექტებით:
// გამოიყენე filter, რათა გამოარჩიო მხოლოდ ის პოსტები, რომლებმაც 100-ზე მეტი ლაიქი მიიღო.

// თითოეული ობიექტი შენახე ახალი მასივში და დაბეჭდე.


const posts = [
    { id: 1, title: "JavaScript Basics", likes: 150 },
    { id: 2, title: "CSS Tricks", likes: 75 },
    { id: 3, title: "React Guide", likes: 200 },
    { id: 4, title: "Node.js Tips", likes: 50 }
];


let FilterPosts = posts.filter(info =>{
    if(info.likes > 100){
        return info
    }
})

console.log(FilterPosts)