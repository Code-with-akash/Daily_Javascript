// undefined
// null
// BigInt

// if we create a variable and dont asign any value it will retrun as undefined.

let firstName;

console.log(firstName); // --- undefined -- //

// null is the empty data type //

let myVariable = null;

console.log(myVariable , typeof(myVariable)) // -- it will return as null 'object' // 

// but it is a javascript error or bug .


// if we want to create the largest interger in javascript we have to use BigInt data type //
// javascript can only store a interger of value.

console.log(Number.MAX_SAFE_INTEGER) // 9007199254740991 

// so we need to use BigInt...

let myNumber = BigInt(120); // 120n
console.log(myNumber)

// we cant add simple number with bigInt it will give an error as explisit conversions
