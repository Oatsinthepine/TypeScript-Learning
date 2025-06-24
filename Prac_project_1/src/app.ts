// const anchor = document.querySelector('a')!
//
// console.log(anchor.href)

import {Invoice} from './classes/invoice.js';
import {Payment} from './classes/payment.js';
import {hasFormatter} from './interfaces/hasFormmater.js';
import {listTemplate} from "./classes/listTemplate.js";


// let docOne: hasFormatter;
// let docTwo: hasFormatter;
// docOne = new Invoice('dev1', 'web development', 2000);
// docTwo = new Payment('data engineer', 'pipeline', 1500);
//
// let docs: hasFormatter[] = []
// docs.push(docOne);
// docs.push(docTwo);
//
// console.log(docs);

// const invOne = new Invoice("Someone", "work on the website", 250);
// const invTwo = new Invoice("Another", "work on the app", 300);
//
// console.log(invOne, invTwo);
//
// let invoices: Invoice[] = [];
// invoices.push(invOne);
// invoices.push(invTwo);
// console.log(invoices);

//
// invoices.forEach((inv: Invoice): void => {console.log(inv.client, inv.details, inv.amount)} );
//

const form = document.querySelector('.new-item-form') as HTMLFormElement;
//console.log(form.children);

// inputs
const type = document.querySelector('#type') as HTMLSelectElement;
const tofrom = document.querySelector('#tofrom') as HTMLInputElement;
const details = document.querySelector('#details') as HTMLInputElement;
const amount = document.querySelector('#amount') as HTMLInputElement;

const ul = document.querySelector('ul')!;
const list = new listTemplate(ul)


form.addEventListener('submit', (e:SubmitEvent):any => {
    e.preventDefault();

    let doc: hasFormatter;
    if (type.value === 'invoice') {
        doc = new Invoice(tofrom.value, details.value, amount.valueAsNumber);
    } else {
        doc = new Payment (tofrom.value, details.value, amount.valueAsNumber)
    }
    console.log(doc);

    console.log(type.value, tofrom.value, details.value, amount.valueAsNumber);

    list.render(doc, type.value, 'end')
})

// interfaces
interface IsPerson {
    name:string;
    age:number;
    speak(a: string): void;
    spend?:(a:number) => number;
}

const me: IsPerson = {
    name: "Jacky",
    age: 24,
    speak(text:string): void {
        console.log(text)
    }
}

const greetPerson = (person: IsPerson): void => {
    console.log(`Hello ${person.name}, you are ${person.age} years old`);
}