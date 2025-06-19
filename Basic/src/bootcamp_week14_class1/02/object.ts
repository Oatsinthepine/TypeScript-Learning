// objects are collections of properties. Properties are key-value pairs
interface cityInterface {
    name: string;
    state: string;
    area: number;
    nickname?: string; // optional property
    population?: number; // optional property
}


let city: cityInterface = {
    name: "Queensland",
    state: "Brisbane",
    area: 1342.7,
    nickname: "Brisneyland"
};


// to access a property from a TypeScript object, there are two options
// 1) Bracket notation, similar to python
console.log(city['name'])

// 2) Dot notation (the preferred convention in JavaScript)
console.log(city.state)

// properties can be overwritten by assigning a new value
city.nickname = 'whatever';


// to add a property to an existing object, simply assign a value to a new key
city.population = 10999999
