// Kth Smallest Number in M Sorted Lists

// Given ‘M’ sorted arrays, find the K’th smallest number among all the arrays.

import Heap from '../../data-structures/Heap.js';

function find_Kth_smallest(lists, k) {
  const minHeap = new Heap((a, b) => a[0] <= b[0]);

  // put the 1st element of each list in the min heap
  for (let i = 0; i < lists.length; i++) {
    minHeap.add([lists[i][0], 0, lists[i]]);
  }

  // take the smallest(i.e., top) element form the min heap, if the running count is equal to k return the number
  let numberCount = 0;
  let number = 0;
  let i;
  let list;
  while (minHeap.length() > 0) {
    [number, i, list] = minHeap.poll();
    numberCount += 1;
    if (numberCount === k) {
      break;
    }
    // if the array of the top element has more elements, add the next element to the heap
    if (list.length > i + 1) {
      minHeap.add([list[i + 1], i + 1, list]);
    }
  }
  return number;
}

console.log(
  `Kth smallest number is: ${find_Kth_smallest(
    [
      [2, 6, 8],
      [3, 6, 7],
      [1, 3, 4],
    ],
    5,
  )}`,
);

// 4
