// Sum of Elements

// Given an array, find the sum of all numbers between the K1’th and K2’th smallest elements of that array.

import Heap from '../../data-structures/Heap.js';

function find_sum_of_elements(nums, k1, k2) {
  // insert all numbers in a min heap
  const minHeap = new Heap((a, b) => a <= b);

  for (let num of nums) {
    minHeap.add(num);
  }

  // remove k1 small numbers from the min heap
  for (let i = 0; i < k1; i++) {
    minHeap.poll();
  }

  let elementSum = 0;
  // sum next k2-k1-1 numbers
  for (let i = 0; i < k2 - k1 - 1; i++) {
    elementSum += minHeap.poll();
  }

  return elementSum;
}

console.log(
  `Sum of all numbers between k1 and k2 smallest numbers: ${find_sum_of_elements(
    [1, 3, 12, 5, 15, 11],
    3,
    6,
  )}`,
);
// 23

console.log(
  `Sum of all numbers between k1 and k2 smallest numbers: ${find_sum_of_elements(
    [3, 5, 8, 7],
    1,
    4,
  )}`,
);
// 12
