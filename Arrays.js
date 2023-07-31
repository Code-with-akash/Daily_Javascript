// An array is a special variable , which can hold more than one value.

// const cars = ["BMW", "Vista" , "Audi" , "Swift" , "Honda"];

// You can also create an array, and then provide the elements:

/* const items = [];

items[0] = "A";
items[1] = "B";
items[2] = "C";

console.log(items)

*/


// Using the JavaScript Keyword new.

// const cars = new Array("BMW", "Vista", "Aud");

// console.log(cars);


// You access an array element by referring to the index number:

// const cars = new Array("BMW", "Vista", "Aud");

// let firstCar = cars[0];
// console.log(firstCar);


// Changing an Array Element
// This statement changes the value of the first element in cars:


/* const cars = ["BMW", "Vista", "Audi"];

cars[0] = "Desire"; // by asigning a new value/item we change the array element.

console.log(cars);

*/


// Array Properties and Methods

// const num = [7, 2 , 1, 4, 3];

// console.log(num.length);  // this gives the length of the array elements

// console.log(num.sort());

// Accessing the Last Array Element

//  const num = [7, 2, 1, 4, 3];

//  console.log(num[num.length - 1]);


// loop through the array elements with for loops , for each loop , for off loop.

// const num = ["akash", "ram", "kiran", "krishna" , "radhe"];

// for (let i = 0; i < num.length; i++){
//     console.log(num[i]);
// }


// num.forEach((element) =>{
//     console.log(element);
// })


// The easiest way to add a new element to an array is using the push() method:

// const names = ["akash", "ram", "kiran", "krishna"];

// names.push("radhe");

// console.log(names);

// New element can also be added to an array using the length property:

// names[names.length] = "sita";

// console.log(names);

// Adding elements with high indexes can create undefined "holes" in an array:

/* When to Use Arrays. When to use Objects.

1. JavaScript does not support associative arrays.
2. You should use objects when you want the element names to be strings (text).
3. You should use arrays when you want the element names to be numbers.

*/

// console.log(Array.isArray(names));

/* JavaScript Array Methods
Array length
Array toString()
Array pop() -- removes the last element of the array
Array push() -- addes new element to the end of the array
Array shift() -- The shift() method removes the first array element and "shifts" all other elements to a lower index.
Array unshift() -- The unshift() method adds a new element to an array (at the beginning).
Array join()

Array delete() -- Warning !
Array elements can be deleted using the JavaScript operator delete.
Using delete leaves undefined holes in the array.
Use pop() or shift() instead. -- 

Array concat()
Array flat()
Array splice()
Array slice()

*/


// The concat() method creates a new array by merging (concatenating) existing arrays:

// Exampl (Merging Two Arrays)

// const myGirls = ["Cecilie", "Lone"];
// const myBoys = ["Emil", "Tobias", "Linus"];

// const myChildren = myGirls.concat(myBoys);

// console.log(myChildren)

// it will not change the array but it will return a new array.


// Example (Merging Three Arrays)
// const arr1 = ["Cecilie", "Lone"];
// const arr2 = ["Emil", "Tobias", "Linus"];
// const arr3 = ["Robin", "Morgan"];
// const myChildren = arr1.concat(arr2, arr3);

// console.log(myChildren);


// The splice() method can be used to add new items to an array:

// Example
// const fruits = ["Banana", "Orange", "Apple", "Mango"];
// fruits.splice(2, 0, "Lemon", "Kiwi");

// console.log(fruits)
// The first parameter (2) defines the position where new elements should be added (spliced in).

// The second parameter (0) defines how many elements should be removed.

// The rest of the parameters ("Lemon" , "Kiwi") define the new elements to be added.











