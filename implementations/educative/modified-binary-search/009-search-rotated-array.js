// Search in Rotated Array

// Given an array of numbers which is sorted in ascending order and also rotated by some arbitrary number, find if a given ‘key’ is present in it.

// Write a function to return the index of the ‘key’ in the rotated array. If the ‘key’ is not present, return -1. You can assume that the given array does not have any duplicates.

function search_rotated_array(arr, key) {
  let start = 0;
  let end = arr.length - 1;
  while (start <= end) {
    let mid = Math.floor(start + (end - start) / 2);
    if (arr[mid] === key) {
      return mid;
    }

    if (arr[start] <= arr[mid]) {
      // left side is sorted in ascending order
      if (key >= arr[start] && key < arr[mid]) {
        end = mid - 1;
      } else {
        // key > arr[mid]
        start = mid + 1;
      }
    } else {
      // right side is sorted in ascending order
      if (key > arr[mid] && key <= arr[end]) {
        start = mid + 1;
      } else {
        end = mid - 1;
      }
    }
  }
  // we are not able to find the element in the given array
  return -1;
}

console.log(search_rotated_array([10, 15, 1, 3, 8], 15));
// 1

console.log(search_rotated_array([4, 5, 7, 9, 10, -1, 2], 10));
// 4
