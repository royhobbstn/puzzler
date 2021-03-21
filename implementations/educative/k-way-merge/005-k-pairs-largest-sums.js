// K Pairs with Largest Sums

// Given two sorted arrays in descending order, find ‘K’ pairs with the largest sum where each pair consists of numbers from both the arrays.

import Heap from '../../data-structures/Heap.js';

function find_k_largest_pairs(nums1, nums2, k) {
  const minHeap = new Heap((a, b) => a[0] <= b[0]);

  for (let i = 0; i < Math.min(k, nums1.length); i++) {
    for (let j = 0; j < Math.min(k, nums2.length); j++) {
      if (minHeap.length() < k) {
        minHeap.add([nums1[i] + nums2[j], i, j]);
      } else {
        // if the sum of the two numbers from the two arrays is smaller than the smallest(top)
        // element of the heap, we can 'break' here. Since the arrays are sorted in the
        // descending order, we'll not be able to find a pair with a higher sum moving forward
        if (nums1[i] + nums2[j] < minHeap.peek()[0]) {
          break;
        } else {
          // we have a pair with a larger sum, remove top and insert this pair in the heap
          minHeap.poll();
          minHeap.add([nums1[i] + nums2[j], i, j]);
        }
      }
    }
  }

  const result = [];

  while (minHeap.length()) {
    const a = minHeap.poll();
    result.push([nums1[a[1]], nums2[a[2]]]);
  }

  return result;
}

const result = find_k_largest_pairs([9, 8, 2], [6, 3, 1], 3);
console.log(result);
// [9, 3] [8, 6] [9, 6]
