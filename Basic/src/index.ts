console.log('Happy developing ✨')


function helloWorld (str: string) {
    return 'hello, ' + str
}

console.log(helloWorld('ts'))

// TS static type checking
let isEnabled: boolean = true
let course: string = 'TypeScript'
let year: number = 2025
let u: undefined = undefined
let n: null = null
let arr: Array<string> = ['a', 'b', 'c']


let tupleType: [string, boolean] = ['a', true]
tupleType = ['b', false] // valid

// enum - a way to define a set of named constants
enum Score {
    BAD,
    NG,
    GOOD,
    PERFECT
}
let score: Score = Score.BAD

enum Score1 {
    BAD = 'bad',
    NG = 'ng',
    GOOD = 'good',
    PERFECT = 'perfect'
}

// enum can also with mixed data types
enum MixedEnum {
    A = 1,
    B = 'b',
    C = 2,
    D = 'd'
}

// any | unknown | void
// any - can be anything, no type checking
let anyType: any = 123
anyType = 'hello'

// unknown - can be anything, but type checking is required before using it
let unknownType: unknown
unknownType = true
unknownType = 123
if (typeof unknownType === 'number') {
    console.log(unknownType.toFixed(2)) // valid
}

let value1: unknown = unknownType // this is valid
let value2: any = unknownType // this is also valid
let value3: string = unknownType // this is invalid, TS will throw an error

// (void v.s never) - these two types often used to indicate the return value of a function
function voidFunction(): void {
    console.log('No return value')
}
voidFunction()

// never - indicates that a function will never return, often used for functions that throw an error or have an infinite loop
function errorFunction(): never {
    throw new Error('This function always throws an error')
}

function infiniteLoop(): never {
    while(true) {
        console.log('This function runs forever')
    }
}

// object | Object | {}
// object - a type that represents any non-primitive value, including arrays, functions, and objects
let a: object;

a = { name: 'Jacky' };     // ✅ OK
a = [1, 2, 3];             // ✅ OK
a = function () {};        // ✅ OK

a = 123;                   // ❌ Error: number is primitive
a = "hello";               // ❌ Error: string is primitive

// Object - a type that represents any non-primitive value, but it is not recommended to use it
interface Object {
    constructor: Function;
    toString(): string;
}
let b: Object;

b = { name: 'Jacky' };     // ✅ OK
b = 123;                   // ✅ Allowed!
b = "hello";               // ✅ Allowed!

// But b is now string/number... not really an object!

// {} - an empty object type, which is a subtype of object, but it is not recommended to use it
let c: {} = { a: 1 };       // ✅ OK
c = [];                     // ✅ OK
c = "hello";                // ✅ OK
c = 42;                     // ✅ OK

c = null;                   // ❌ Error
c = undefined;              // ❌ Error

// interface - a way to define a custom type with properties and methods
interface Person {
    name: string;
    age: number;
}

const jacky: Person = {
    name: "Jacky",
    age: 30
};

// optional properties - properties that are not required
interface Car {
    make: string;
    model?: string;  // optional
}
// readonly properties - properties that cannot be modified

interface ReadonlyCar {
    readonly make: string;  // readonly
    model?: string;         // optional
}

const myCar: ReadonlyCar = {
    make: "Toyota",
    model: "Corolla"
};
myCar.make = "Honda"
console.log(myCar.make);

//
interface dynamicObject {
    readonly name: string;
    time?: number;
    [propName: string]: any; // means that this object can have any number of additional properties with any name and type
}

// type v.s interface, both can be used to define object and function types, but there are some differences
interface Class {
    name: string;
}
interface Course extends Class {
    duration: number;
}

interface Course {
    price: number; // can extend the same interface with additional properties
}

type Class2 = {
    name: string;
}
type Course2 = Class2 & {
    duration: number;
};

let anyValue: any = 'hello world';
let anyLength: number = (anyValue as string).length; // type assertion, tells TS to treat anyValue as a string
console.log(anyLength);

//
interface teacher {
    name: string,
    course: string
}
interface student {
    name: string,
    startTime: Date
}
type Class3 = teacher | student; // union type, means that the variable can be either a teacher or a student
function startCourse(cls: Class3) {
    if ('course' in cls) {
        console.log(`Teacher ${cls.name} is teaching ${cls.course}`);
    }
    if ('startTime' in cls) {
        console.log(`Student ${cls.name} started at ${cls.startTime}`);
    }
}