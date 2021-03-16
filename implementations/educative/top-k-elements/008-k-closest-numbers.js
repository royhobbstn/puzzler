// 'K' Closest Numbers

// Given a sorted number array and two integers ‘K’ and ‘X’, find ‘K’ closest numbers to ‘X’ in the array. Return the numbers in the sorted order. ‘X’ is not necessarily present in the array.

import Heap from '../../data-structures/Heap.js';

function find_closest_elements(arr, K, X) {
  const index = binary_search(arr, X);
  let low = index - K,
    high = index + K;

  low = Math.max(low, 0); // 'low' should not be less than zero
  // 'high' should not be greater the size of the array
  high = Math.min(high, arr.length - 1);

  const minHeap = new Heap((a, b) => a[0] <= b[0]);
  // add all candidate elements to the min heap, sorted by their absolute difference from 'X'
  for (let i = low; i < high + 1; i++) {
    minHeap.add([Math.abs(arr[i] - X), arr[i]]);
  }

  // we need the top 'K' elements having smallest difference from 'X'
  const result = [];
  for (let i = 0; i < K; i++) {
    result.push(minHeap.poll()[1]);
  }

  result.sort((a, b) => a - b);
  return result;
}

function binary_search(arr, target) {
  let low = 0,
    high = arr.length - 1;
  while (low <= high) {
    const mid = Math.floor(low + (high - low) / 2);
    if (arr[mid] === target) {
      return mid;
    }
    if (arr[mid] < target) {
      low = mid + 1;
    } else {
      high = mid - 1;
    }
  }
  if (low > 0) {
    return low - 1;
  }
  return low;
}

console.log(`'K' closest numbers to 'X' are: ${find_closest_elements([5, 6, 7, 8, 9], 3, 7)}`);
// 'K' closest numbers to 'X' are: 6,7,8

console.log(`'K' closest numbers to 'X' are: ${find_closest_elements([2, 4, 5, 6, 9], 3, 6)}`);
// 'K' closest numbers to 'X' are: 4,5,6

console.log(`'K' closest numbers to 'X' are: ${find_closest_elements([2, 4, 5, 6, 9], 3, 10)}`);
// 'K' closest numbers to 'X' are: 5,6,9

// Alternate Solution using Two Pointers #

function find_closest_elements_tp(arr, K, X) {
  const result = [];
  const index = binary_search_tp(arr, X);
  let leftPointer = index,
    rightPointer = index + 1;
  const n = arr.length;
  for (let i = 0; i < K; i++) {
    if (leftPointer >= 0 && rightPointer < n) {
      const diff1 = Math.abs(X - arr[leftPointer]);
      const diff2 = Math.abs(X - arr[rightPointer]);
      if (diff1 <= diff2) {
        result.unshift(arr[leftPointer]);
        leftPointer -= 1;
      } else {
        result.push(arr[rightPointer]);
        rightPointer += 1;
      }
    } else if (leftPointer >= 0) {
      result.unshift(arr[leftPointer]);
      leftPointer -= 1;
    } else if (rightPointer < n) {
      result.push(arr[rightPointer]);
      rightPointer += 1;
    }
  }

  return result;
}

function binary_search_tp(arr, target) {
  let low = 0,
    high = arr.length - 1;
  while (low <= high) {
    const mid = Math.floor(low + (high - low) / 2);
    if (arr[mid] === target) {
      return mid;
    }
    if (arr[mid] < target) {
      low = mid + 1;
    } else {
      high = mid - 1;
    }
  }
  if (low > 0) {
    return low - 1;
  }
  return low;
}

console.log(`'K' closest numbers to 'X' are: ${find_closest_elements_tp([5, 6, 7, 8, 9], 3, 7)}`);
// 'K' closest numbers to 'X' are: 6,7,8

console.log(`'K' closest numbers to 'X' are: ${find_closest_elements_tp([2, 4, 5, 6, 9], 3, 6)}`);
// 'K' closest numbers to 'X' are: 4,5,6

console.log(`'K' closest numbers to 'X' are: ${find_closest_elements_tp([2, 4, 5, 6, 9], 3, 10)}`);
// 'K' closest numbers to 'X' are: 5,6,9
