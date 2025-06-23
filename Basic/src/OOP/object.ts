interface User {
    email:string,
    name:string,
    login?: () => void;
    logout?: () => void;

    // add new property
    age?: number;
}

let userOne: User = {
    email:'exmaple@gmail.com',
    name: 'Tom',
    login: function() {console.log(this.email, "has logged in.")},
    logout: function() {console.log(this.email, "has logged out.")},
    age: 25
}
console.log(userOne.name)
userOne.login()
userOne.logout()

// I can reassign
userOne.name = 'Jacky'
console.log(userOne.name)

// adding new property to the User object
console.log(userOne)

// use of class
class UserClass {
    public email: string;
    public name: string;
    public age?: number;
    public score: number
    constructor(e: string, n:string, a?:number, s: number = 0) {
        this.email = e;
        this.name = n;
        this.age = a;
        this.score = s;
    }
    login():UserClass {
        console.log(this.email, "just logged in.");
        return this;
    }
    logout():UserClass{
        console.log(this.email, "just logged out.");
        return this;
    }
    updateScore():UserClass {
        this.score += 1;
        console.log(this.email, "score is now", this.score);
        return this; // return the current instance for method chaining
    }
}

// instantiate an object from the class
let userTwo: UserClass = new UserClass('Alice@gmail.com', 'Alice', 30);
console.log(userTwo.name);

// method chaining
userTwo.login().updateScore();
userTwo.login().updateScore().updateScore().logout();

// inheritance
class Admin extends UserClass {
    public role: string;
    protected users: UserClass[] = []; // private property to hold users
    constructor(e:string, n:string, a?:number, s:number = 0, r:string = 'admin') {
        super(e,n,a,s); // call the parent class constructor
        this.role = r
    }
    addUser(user:UserClass): void {
        this.users.push(user);
    }
    deleteUser(user: UserClass): void {
        this.users = this.users.filter((u) => {
            return u.email !== user.email;
        });
    }
    listUsers(): void {
        console.log(this.users)
    }
}

const adminOne: Admin = new Admin('admin@gmail.com', 'AdminUser', 35, 10);
let userThree: UserClass = new UserClass('Bob@outlook.com', 'Bob', 28);
adminOne.addUser(userTwo);
adminOne.addUser(userThree);
adminOne.listUsers();
console.log(adminOne.name);
adminOne.deleteUser(userTwo)
adminOne.listUsers()

//prototype inheritance
function User(email:string, name:string, age?:number): void {
    this.email = email;
    this.name = name;
    this.age = age;
    this.online = false;
    this.login = function() {
        console.log(this.email, "has logged in.");
        this.online = true;
    }
}

User.prototype.login = function():void {
    this.login = true;
    console.log(this.email, "has logged in.");
}

function AdminUser (...args: any[]): void {
    User.apply(this, args); // call the User constructor)
    this.role = 'admin';
    this.users = [];
}


AdminUser.prototype = Object.create(User.prototype); // inherit from User prototype

// this method only available to AdminUser instances
AdminUser.prototype.addUser = function(user: any): void {
    this.users.push(user);
}


let newUser1: any = new User('user1@live.com', 'User1', 22);
let newUser2: any = new User('user2@whatever.com', 'User2');
let newAdmin: any = new AdminUser('admin@outlook.com', 'Admin', 30);

console.log(newAdmin);

newAdmin.addUser(newUser1)
console.log(newAdmin.users);