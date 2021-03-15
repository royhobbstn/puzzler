// Sliding Window Median

// Given an array of numbers and a number ‘k’, find the median of all the ‘k’ sized sub-arrays (or windows) of the array.

import Heap from '../../data-structures/Heap.js';

class SlidingWindowMedian {
  constructor() {
    this.maxHeap = new Heap((a, b) => a >= b);
    this.minHeap = new Heap((a, b) => a <= b);
  }

  find_sliding_window_median(nums, k) {
    const result = Array(nums.length - k + 1).fill(0.0);
    for (let i = 0; i < nums.length; i++) {
      if (this.maxHeap.length() === 0 || nums[i] <= this.maxHeap.peek()) {
        this.maxHeap.add(nums[i]);
      } else {
        this.minHeap.add(nums[i]);
      }

      this.rebalance_heaps();

      if (i - k + 1 >= 0) {
        // if we have at least 'k' elements in the sliding window
        // add the median to the the result array
        if (this.maxHeap.length() === this.minHeap.length()) {
          // we have even number of elements, take the average of middle two elements
          result[i - k + 1] = this.maxHeap.peek() / 2.0 + this.minHeap.peek() / 2.0;
        } else {
          // because max-heap will have one more element than the min-heap
          result[i - k + 1] = this.maxHeap.peek();
        }

        // remove the element going out of the sliding window
        const elementToBeRemoved = nums[i - k + 1];
        if (elementToBeRemoved <= this.maxHeap.peek()) {
          this.maxHeap.remove(elementToBeRemoved, (a, b) => a === b); // delete from heap
        } else {
          this.minHeap.remove(elementToBeRemoved, (a, b) => a === b); // delete from heap
        }

        this.rebalance_heaps();
      }
    }

    return result;
  }

  rebalance_heaps() {
    // either both the heaps will have equal number of elements or max-heap will have
    // one more element than the min-heap
    if (this.maxHeap.length() > this.minHeap.length() + 1) {
      this.minHeap.add(this.maxHeap.poll());
    } else if (this.maxHeap.length() < this.minHeap.length()) {
      this.maxHeap.add(this.minHeap.poll());
    }
  }
}

let slidingWindowMedian = new SlidingWindowMedian();
let result = slidingWindowMedian.find_sliding_window_median([1, 2, -1, 3, 5], 2);
console.log(`Sliding window medians are: ${result}`);

slidingWindowMedian = new SlidingWindowMedian();
result = slidingWindowMedian.find_sliding_window_median([1, 2, -1, 3, 5], 3);
console.log(`Sliding window medians are: ${result}`);
