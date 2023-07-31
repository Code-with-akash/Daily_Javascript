// For loop in Array

// let fruits = ["Apple" , "bannana" , "Grapes" , "Mango", "Pineapple"]; 
// we want to print array elements one by one so we have to use for loop.

// let fruits2 = [];
// for(let i = 0; i<=(fruits.length); i++ ){  // here we go by indexes of array , upto length of array...
//     // console.log(fruits[i]);  // this line is for printing each elements one by one in same array.
//     fruits2.push(fruits[i]); // printing each array elements  by pushing it into new array -- fruits2
// }

// console.log(fruits2)


// while loop in array

// let i = 0; // initialization of loop
// while(i <= fruits.length){ // condition check if true run
//     console.log(fruits[i]); // printing the result
//     i++; // incrementing the index
// }


// For of loop ---> in array


// const fruits = ["Apple" , "bannana" , "Grapes" , "Mango", "Pineapple"];
// for(let each_fruit of fruits){
//     console.log(each_fruit);
// }

// For in loop ---> in array

const fruits = ["Apple" , "bannana" , "Grapes" , "Mango", "Pineapple"];
for(let each_fruit in fruits){  // this will give the index's of each elemnts.
    console.log(each_fruit);
    console.log(fruits[each_fruit]) // this is how we can get the elements
}




