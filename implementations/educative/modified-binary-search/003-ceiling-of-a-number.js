// Ceiling of a Number

// Given an array of numbers sorted in an ascending order, find the ceiling of a given number ‘key’. The ceiling of the ‘key’ will be the smallest element in the given array greater than or equal to the ‘key’.

// Write a function to return the index of the ceiling of the ‘key’. If there isn’t any ceiling return -1.

function search_ceiling_of_a_number(arr, key) {
  const n = arr.length;
  if (key > arr[n - 1]) {
    // if the 'key' is bigger than the biggest element
    return -1;
  }

  let start = 0;
  let end = n - 1;
  while (start <= end) {
    let mid = Math.floor(start + (end - start) / 2);
    if (key < arr[mid]) {
      end = mid - 1;
    } else if (key > arr[mid]) {
      start = mid + 1;
    } else {
      // found the key
      return mid;
    }
  }
  // since the loop is running until 'start <= end', so at the end of the while loop, 'start === end+1'
  // we are not able to find the element in the given array, so the next big number will be arr[start]
  return start;
}

console.log(search_ceiling_of_a_number([4, 6, 10], 6));
// 1

console.log(search_ceiling_of_a_number([1, 3, 8, 10, 15], 12));
// 4

console.log(search_ceiling_of_a_number([4, 6, 10], 17));
// -1

console.log(search_ceiling_of_a_number([4, 6, 10], -1));
// 0
