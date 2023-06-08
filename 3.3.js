// // Push

// let array = [23, 42, 12, 2];
// let secondArray = [];

// for (let i of array) {
//   secondArray.push(i);
// }

// console.log(secondArray);

// for single method I'll use concat

let array = [123, 13, 31, 23];
// let secondArray = [...array];
let secondArray = [];

secondArray = secondArray.concat(array);

console.log(secondArray);
