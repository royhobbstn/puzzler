// Given a sorted array, create a new array containing squares of all the numbers of the input array in the sorted order.

// Example 1:

// Input: [-2, -1, 0, 2, 3]
// Output: [0, 1, 4, 4, 9]
// Example 2:

// Input: [-3, -1, 0, 1, 2]
// Output: [0, 1, 1, 4, 9]

function make_squares(arr) {
  const n = arr.length;
  squares = Array(n).fill(0);
  let highestSquareIdx = n - 1;
  let left = 0,
    right = n - 1;
  while (left <= right) {
    let leftSquare = arr[left] * arr[left],
      rightSquare = arr[right] * arr[right];
    if (leftSquare > rightSquare) {
      squares[highestSquareIdx] = leftSquare;
      left += 1;
    } else {
      squares[highestSquareIdx] = rightSquare;
      right -= 1;
    }
    highestSquareIdx -= 1;
  }

  return squares;
}

console.log(`Squares: ${make_squares([-2, -1, 0, 2, 3])}`);
console.log(`Squares: ${make_squares([-3, -1, 0, 1, 2])}`);
