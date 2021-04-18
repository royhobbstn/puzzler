function intervalIntersection(a, b) {
  const ans = [];

  // increment vars for a list and b list
  let i = 0;
  let j = 0;

  // can't check intersection if reached end of either list
  while (i < a.length && j < b.length) {
    // get highest of low points
    let low = Math.max(a[i][0], b[j][0]);
    // get lowest of high points
    let high = Math.min(a[i][1], b[j][1]);
    // as low > high, there is no intersection
    if (low <= high) {
      ans.push([low, high]);
    }

    // increment counter of list with the smallest endpoint
    if (a[i][1] < b[j][1]) {
      i++;
    } else {
      j++;
    }
  }

  return ans;
}

let firstList = [
  [0, 2],
  [5, 10],
  [13, 23],
  [24, 25],
];
let secondList = [
  [1, 5],
  [8, 12],
  [15, 24],
  [25, 26],
];

console.log(intervalIntersection(firstList, secondList));
// [ [ 1, 2 ], [ 5, 5 ], [ 8, 10 ], [ 15, 23 ], [ 24, 24 ], [ 25, 25 ] ]

firstList = [
  [1, 3],
  [5, 9],
];
secondList = [];
console.log(intervalIntersection(firstList, secondList));
// []

firstList = [];
secondList = [
  [4, 8],
  [10, 12],
];
console.log(intervalIntersection(firstList, secondList));
// []

firstList = [[1, 7]];
secondList = [[3, 10]];
console.log(intervalIntersection(firstList, secondList));
// [ [ 3, 7 ] ]
