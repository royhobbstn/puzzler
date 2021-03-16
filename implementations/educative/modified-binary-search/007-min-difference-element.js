// Minimum Difference Element

// Given an array of numbers sorted in ascending order, find the element in the array that has the minimum difference with the given ‘key’.

function search_min_diff_element(arr, key) {
  if (key < arr[0]) {
    return arr[0];
  }
  const n = arr.length;
  if (key > arr[n - 1]) {
    return arr[n - 1];
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
      return arr[mid];
    }
  }

  // at the end of the while loop, 'start === end+1'
  // we are not able to find the element in the given array
  // return the element which is closest to the 'key'
  if (arr[start] - key < key - arr[end]) {
    return arr[start];
  }

  return arr[end];
}

console.log(search_min_diff_element([4, 6, 10], 7));
// 6
console.log(search_min_diff_element([4, 6, 10], 4));
// 4
console.log(search_min_diff_element([1, 3, 8, 10, 15], 12));
// 10
console.log(search_min_diff_element([4, 6, 10], 17));
// 10
