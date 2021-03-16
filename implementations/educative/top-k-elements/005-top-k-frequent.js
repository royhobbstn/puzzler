// Top 'K' Frequent Numbers

// Given an unsorted array of numbers, find the top ‘K’ frequently occurring numbers in it.

import Heap from '../../data-structures/Heap.js';

function find_k_frequent_numbers(nums, k) {
  // find the frequency of each number
  const numFrequencyMap = {};
  nums.forEach(num => {
    if (!(num in numFrequencyMap)) {
      numFrequencyMap[num] = 1;
    } else {
      numFrequencyMap[num]++;
    }
  });

  const minHeap = new Heap((a, b) => a <= b);

  // go through all numbers of the numFrequencyMap and push them in the minHeap, which will have
  // top k frequent numbers. If the heap size is more than k, we remove the smallest(top) number
  Object.keys(numFrequencyMap).forEach(num => {
    minHeap.add([numFrequencyMap[num], num]);
    if (minHeap.length() > k) {
      minHeap.poll();
    }
  });

  // create a list of top k numbers
  const topNumbers = [];
  while (minHeap.length() > 0) {
    topNumbers.push(minHeap.poll()[1]);
  }

  return topNumbers;
}

console.log(
  `Here are the K frequent numbers: ${find_k_frequent_numbers([1, 3, 5, 12, 11, 12, 11], 2)}`,
);
// Here are the K frequent numbers: 11,12

console.log(`Here are the K frequent numbers: ${find_k_frequent_numbers([5, 12, 11, 3, 11], 2)}`);
// Here are the K frequent numbers: 5,11  (Output: [11, 5] or [11, 12] or [11, 3])
