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

// encapsulation -> wrapping data and behaviour inside a class, control access to it
class Account {
    private balance: number;
    constructor(initialBalance: number) {
        this.balance = initialBalance;
    }
    deposit(amount:number): void {
        this.balance += amount
    }
    getBalance(): number {
        return this.balance
    }
}

// inheritance -> creating a new class based on an existing class
class EBook extends Book {
    public fileSize: number;
    constructor(title:string, author: string, price:number, fileSize: number) {
        super(title, author, price); // call the parent class constructor
        this.fileSize = fileSize;
    }
    download():string {
        return `Downloading ${this.title} by ${this.author}, file size: ${this.fileSize}MB.`;
    }
}

// Abstraction -> hiding the complex implementation details and showing only the essential features
abstract class Shape {
    abstract area(): number; // abstract method, must be implemented by subclasses
}

class Circle extends Shape {
    private radius: number;
    constructor(radius: number) {
        super();
        this.radius = radius;
    }
    area(): number {
        return Math.PI * this.radius * this.radius; // implementation of the abstract method
    }
}

class Square extends Shape {
    private side: number;
    constructor(side: number) {
        super();
        this.side = side;
    }
    area(): number {
        return this.side * this.side; // implementation of the abstract method
    }
}


// Polymorphism -> same interface, different implementations
const circle = new Circle(5)
function printArea(shape: Shape): void {
    console.log(`Area: ${shape.area()}`);
}
printArea(circle); // prints the area of the circle

const square = new Square(3)
printArea(square); // prints the area of the square
