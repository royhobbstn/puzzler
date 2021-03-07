import { ALGORITHM, TEMP, INTERMEDIATE } from '../constants.js';

const solution = [
  { stage: 0, text: '' },
  { stage: -1, text: 'class MaxHeap {' },
  { stage: -1, text: '  /*' },
  { stage: -1, text: '    add(item: Number)' },
  { stage: -1, text: '    poll() Number' },
  { stage: -1, text: '    peek() Number' },
  { stage: -1, text: '  */' },
  { stage: -1, text: '}' },
  { stage: 0, text: '' },
  { stage: 0, text: '' },
  { stage: 0, text: 'function find_Kth_smallest_number(nums, k) {' },
  { stage: 0, text: '' },
  { stage: 1, text: '  const maxHeap = new MaxHeap();' },
  { stage: 2, text: '  for (let i = 0; i < k; i++) {' },
  { stage: 3, text: '    maxHeap.add(nums[i]);' },
  { stage: 2, text: '  }' },
  { stage: 0, text: '' },
  { stage: 4, text: '  for (let i = k; i < nums.length; i++) {' },
  { stage: 5, text: '    if (nums[i] < maxHeap.peek()) {' },
  { stage: 6, text: '      maxHeap.poll();' },
  { stage: 6, text: '      maxHeap.add(nums[i]);' },
  { stage: 5, text: '    }' },
  { stage: 4, text: '  }' },
  { stage: 0, text: '' },
  { stage: 7, text: '  return maxHeap.peek();' },
  { stage: 0, text: '}' },
  { stage: 0, text: '' },
];

export const data = {
  problemID: 115,
  problemName: `Find Kth Smallest Number`,
  problemText: `Given an unsorted array of numbers, find Kth smallest number in it.

Please note that it is the Kth smallest number in the sorted order, not the Kth distinct element.`,
  testCases: [
    {
      id: 1,
      name: 'example 1',
      inherit: [],
      code: ``,
      evaluate: `find_Kth_smallest_number([1, 5, 12, 2, 11, 5], 3);`,
      expected: 5,
    },
    {
      id: 2,
      name: 'example 2',
      inherit: [],
      code: ``,
      evaluate: `find_Kth_smallest_number([1, 5, 12, 2, 11, 5], 4);`,
      expected: 5,
    },
    {
      id: 3,
      name: 'example 3',
      inherit: [],
      code: ``,
      evaluate: `find_Kth_smallest_number([5, 12, 11, -1, 12], 3);`,
      expected: 11,
    },
  ],
  setupCode: `
  class MaxHeap {
    constructor() {
      this.heapContainer = [];
    }
  
    // child utils
    getLeftChildIndex(parentIndex) {
      return 2 * parentIndex + 1;
    }
  
    getRightChildIndex(parentIndex) {
      return 2 * parentIndex + 2;
    }
  
    hasLeftChild(parentIndex) {
      return this.getLeftChildIndex(parentIndex) < this.heapContainer.length;
    }
  
    hasRightChild(parentIndex) {
      return this.getRightChildIndex(parentIndex) < this.heapContainer.length;
    }
  
    leftChild(parentIndex) {
      return this.heapContainer[this.getLeftChildIndex(parentIndex)];
    }
  
    rightChild(parentIndex) {
      return this.heapContainer[this.getRightChildIndex(parentIndex)];
    }
  
    // parent utils
    getParentIndex(childIndex) {
      return Math.floor((childIndex - 1) / 2);
    }
  
    hasParent(childIndex) {
      return this.getParentIndex(childIndex) >= 0;
    }
  
    parent(childIndex) {
      return this.heapContainer[this.getParentIndex(childIndex)];
    }
  
    // peek
    peek() {
      if (this.heapContainer.length === 0) {
        return null;
      }
  
      return this.heapContainer[0];
    }
  
    // poll
    poll() {
      if (this.heapContainer.length === 0) {
        return null;
      }
  
      if (this.heapContainer.length === 1) {
        return this.heapContainer.pop();
      }
  
      const item = this.heapContainer[0];
  
      // Move the last element from the end to the head.
      this.heapContainer[0] = this.heapContainer.pop();
      this.heapifyDown();
  
      return item;
    }
  
    // add
    add(item) {
      this.heapContainer.push(item);
      this.heapifyUp();
      return this;
    }
  
    // heapify up for min heap and max heap
    heapifyUp(customStartIndex) {
      // Take the last element (last in array or the bottom left in a tree)
      // in the heap container and lift it up until it is in the correct
      // order with respect to its parent element.
      let currentIndex = customStartIndex || this.heapContainer.length - 1;
  
      while (
        this.hasParent(currentIndex) &&
        !(this.parent(currentIndex) >= this.heapContainer[currentIndex])
      ) {
        this.swap(currentIndex, this.getParentIndex(currentIndex));
        currentIndex = this.getParentIndex(currentIndex);
      }
    }
  
    // heapify down for min heap or max heap
    heapifyDown(customStartIndex = 0) {
      // Compare the parent element to its children and swap parent with the appropriate
      // child (smallest child for MinHeap, largest child for MaxHeap).
      // Do the same for next children after swap.
      let currentIndex = customStartIndex;
      let nextIndex = null;
  
      while (this.hasLeftChild(currentIndex)) {
        if (
          this.hasRightChild(currentIndex) &&
          this.rightChild(currentIndex) >= this.leftChild(currentIndex)
        ) {
          nextIndex = this.getRightChildIndex(currentIndex);
        } else {
          nextIndex = this.getLeftChildIndex(currentIndex);
        }
  
        if (this.heapContainer[currentIndex] >= this.heapContainer[nextIndex]) {
          break;
        }
  
        this.swap(currentIndex, nextIndex);
        currentIndex = nextIndex;
      }
    }
  
    // no, but added as utility
    swap(indexOne, indexTwo) {
      const tmp = this.heapContainer[indexTwo];
      this.heapContainer[indexTwo] = this.heapContainer[indexOne];
      this.heapContainer[indexOne] = tmp;
    }
  }
  `,
  tags: [TEMP, ALGORITHM],
  difficulty: INTERMEDIATE,
  solution: {
    stages: [0, 30, 60, 90, 120, 150, 180, 240],
    solutionLines: solution,
  },
};
