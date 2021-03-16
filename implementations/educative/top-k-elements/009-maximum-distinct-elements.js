// Maximum Distinct Elements

// Given an array of numbers and a number ‘K’, we need to remove ‘K’ numbers from the array such that we are left with maximum distinct numbers.

import Heap from '../../data-structures/Heap.js';

function find_maximum_distinct_elements(nums, k) {
  let distinctElementsCount = 0;
  if (nums.length <= k) {
    return distinctElementsCount;
  }

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
  // insert all numbers with frequency greater than '1' into the min-heap
  Object.keys(numFrequencyMap).forEach(num => {
    if (numFrequencyMap[num] === 1) {
      distinctElementsCount += 1;
    } else {
      minHeap.add(numFrequencyMap[num]);
    }
  });

  // following a greedy approach, try removing the least frequent numbers first from the min-heap
  while (k > 0 && minHeap.length() > 0) {
    const frequency = minHeap.poll();
    // to make an element distinct, we need to remove all of its occurrences except one
    k -= frequency - 1;
    if (k >= 0) {
      distinctElementsCount += 1;
    }
  }

  // if k > 0, this means we have to remove some distinct numbers
  if (k > 0) {
    distinctElementsCount -= k;
  }

  return distinctElementsCount;
}

console.log(
  `Maximum distinct numbers after removing K numbers: ${find_maximum_distinct_elements(
    [7, 3, 5, 8, 5, 3, 3],
    2,
  )}`,
);
// 3

console.log(
  `Maximum distinct numbers after removing K numbers: ${find_maximum_distinct_elements(
    [3, 5, 12, 11, 12],
    3,
  )}`,
);
// 2

console.log(
  `Maximum distinct numbers after removing K numbers: ${find_maximum_distinct_elements(
    [1, 2, 3, 3, 3, 3, 4, 4, 5, 5, 5],
    2,
  )}`,
);
// 3
