// a variable can be initialised as an empty array with two square brackets
var myarray:(string|number)[] = ['Jar', 29];
var myArray:(string|number|string[])[]= [320, 'John', 26, ['dog', 'frog']];

// elements can be added to arrays with the push() method
myArray.push(['happy','cat']);
console.log(myarray)
myarray.pop();
console.log(myarray)

let shifted:string | number | string[] = myArray.shift()
console.log(shifted)
console.log(`the shifted array is now ${myArray}`)

// on contrary, unshift will push the element in the front of the array. like insert(0) in python.

// to access a single element from an array, use index notation
// similar to python, JavaScript uses 0-indexing
console.log(myArray[0])

// elements from arrays can be overwritten by assigning a new value
myArray[2] = 'omega'
console.log(myArray)

// to access a range of values from the array, use the slice() method.
// slice(start, end) returns a new array of the objects at indexing beginning at `start` and up to (but not including) `end`.
console.log(myArray.slice(1,3));

//nested array
var example:(string|number)[][] = [['one', 1], ['two', 2]];
console.log(typeof example)

let element:(string|number)[] = example[0]
console.log(element[1])

let arr:(string|number)[] = [18, 's', 65];
arr[1] = 20;
console.log(arr)
