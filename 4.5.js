// distance = √((x2 - x1)^2 + (y2 - y1)^2)

const points = [
  [
    [1, 1],
    [2, 2],
  ],
  [
    [1, 1],
    [3, 1],
  ],
  [
    [4, 1],
    [1, 1],
  ],
  [
    [-2, 2],
    [2, -2],
  ],
];

for (let i = 0; i < points.length; i++) {
  let left = points[i][1][0] - points[i][0][0];
  let right = points[i][1][1] - points[i][0][1];

  const distance = Math.sqrt(left ** 2 + right ** 2).toFixed(2);
  console.log(
    `The distance between point A = [${points[i][0][1]}, ${points[i][0][0]}] and point B = [${points[i][1][0]}, ${points[i][1][1]}] is: ${distance}`
  );
}
