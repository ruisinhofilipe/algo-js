const array = [125, 10, 1, 5, 3, 12301, 7, 102301230, 12];
const sortedArray = [];
let index;

do {
  index = array.indexOf(Math.min(...array));
  sortedArray.push(array[index]);
  array.splice(index, 1);
} while (array.length > 0);

console.log(sortedArray);
