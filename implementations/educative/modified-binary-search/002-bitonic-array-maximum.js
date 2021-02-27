// Find the maximum value in a given Bitonic array. An array is considered bitonic if it is monotonically increasing and then monotonically decreasing. Monotonically increasing or decreasing means that for any index i in the array arr[i] != arr[i+1].

// Input: [1, 3, 8, 12, 4, 2]
// Output: 12
// Explanation: The maximum number in the input bitonic array is '12'.

// Input: [3, 8, 3, 1]
// Output: 8

// Input: [1, 3, 8, 12]
// Output: 12

// Input: [10, 9, 8]
// Output: 10

function find_max_in_bitonic_array(arr) {
  let start = 0;
  let end = arr.length - 1;
  while (start < end) {
    let mid = Math.floor(start + (end - start) / 2);
    if (arr[mid] > arr[mid + 1]) {
      end = mid;
    } else {
      start = mid + 1;
    }
  }

  // at the end of the while loop, 'start === end'
  return arr[start];
}

console.log(find_max_in_bitonic_array([1, 3, 8, 12, 4, 2]));
console.log(find_max_in_bitonic_array([3, 8, 3, 1]));
console.log(find_max_in_bitonic_array([1, 3, 8, 12]));
console.log(find_max_in_bitonic_array([10, 9, 8]));
