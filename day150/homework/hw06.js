// 6)შექმენი კლასი Library, რომელსაც ექნება:

// books (მასივი)

// მეთოდები:

// addBook(book) ამატებს არგუმენტად გადაცემულ წიგნს სიის ბოლოში
// bookList() --- ბეჭდავს სიას იმის შემდეგ რაც წიგნი დაემატა

class Library {
  constructor() {
    this.books = []
  }

  addBook(book) {
    this.books.push(book)
    this.bookList()
  }

  bookList() {
    console.log(this.books)
  }
}


let lib = new Library()

lib.addBook("Harry Potter")
lib.addBook("1984")