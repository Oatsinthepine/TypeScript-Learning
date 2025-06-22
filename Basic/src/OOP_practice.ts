// classes in typescript/javascript
class Book {
    public title: string;
    public author: string;
    public pages: number;
    constructor (t: string, a: string, p: number) {
        this.title = t;
        this.author = a;
        this.pages = p
    }
    describe(): string {
        return `Book title of ${this.title} is written by ${this.author}, and it has ${this.pages}.`
    }
}

// instantiate an object from the class
const newBook: Book = new Book('hands on deep learning', "O'Reilly", 79.99)
console.log(newBook)

console.log(newBook.describe())