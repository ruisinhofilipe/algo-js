const array = [20, 1, 313, 0, 1233];

// // Simplest way

// for (let i of array) {
//   if (i > max) {
//     max = i;
//   } else if (i < min) {
//     min = i;
//   }
// }

// console.log(`The min value of the array is ${min}`);
// console.log(`The max value of the array is ${max}`);

const min = array.reduce((a, b) => {
  return b < a ? b : a;
});

const max = array.reduce((a, b) => {
  return b > a ? b : a;
});

console.log(min);
console.log(max);
