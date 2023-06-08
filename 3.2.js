const arrayNumber = [1, 2, 3, 4];
let sum = 0;
let average;

for (let i = 0; i < arrayNumber.length; i++) {
  sum += arrayNumber[i];
}

average = sum / arrayNumber.length;

console.log(average);
