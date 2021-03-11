import { ALGORITHM, TEMP, INTERMEDIATE } from '../constants.js';

const solution = [
  { stage: 0, text: '' },
  { stage: -1, text: 'class MinHeap {' },
  { stage: -1, text: '  /*' },
  { stage: -1, text: '    add(item: Number)' },
  { stage: -1, text: '    poll(): Number' },
  { stage: -1, text: '    length(): Number' },
  { stage: -1, text: '  */' },
  { stage: -1, text: '}' },
  { stage: -1, text: '' },
  { stage: -1, text: 'class MaxHeap {' },
  { stage: -1, text: '  /*' },
  { stage: -1, text: '    add(item: Number)' },
  { stage: -1, text: '    poll(): Number' },
  { stage: -1, text: '    length(): Number' },
  { stage: -1, text: '  */' },
  { stage: -1, text: '}' },
  { stage: 0, text: '' },
  { stage: 0, text: 'class MedianOfAStream {' },
  { stage: 0, text: '  constructor() {' },
  { stage: 0, text: '    this.maxHeap = new MaxHeap();' },
  { stage: 0, text: '    this.minHeap = new MinHeap();' },
  { stage: 0, text: '  }' },
  { stage: 0, text: '' },
  { stage: 0, text: '  insert_num(num) {' },
  { stage: 1, text: '    if (this.maxHeap.length() === 0 || this.maxHeap.peek() >= num) {' },
  { stage: 2, text: '      this.maxHeap.add(num);' },
  { stage: 1, text: '    } else {' },
  { stage: 3, text: '      this.minHeap.add(num);' },
  { stage: 1, text: '    }' },
  { stage: 0, text: '' },
  { stage: 4, text: '    if (this.maxHeap.length() > this.minHeap.length + 1) {' },
  { stage: 5, text: '      this.minHeap.add(this.maxHeap.poll());' },
  { stage: 4, text: '    } else if (this.maxHeap.length() < this.minHeap.length()) {' },
  { stage: 6, text: '      this.maxHeap.add(this.minHeap.poll());' },
  { stage: 4, text: '    }' },
  { stage: 0, text: '  }' },
  { stage: 0, text: '' },
  { stage: 0, text: '  find_median() {' },
  { stage: 7, text: '    if (this.maxHeap.length() === this.minHeap.length()) {' },
  { stage: 8, text: '      return this.maxHeap.peek() / 2.0 + this.minHeap.peek() / 2.0;' },
  { stage: 7, text: '    }' },
  { stage: 0, text: '' },
  { stage: 9, text: '    return this.maxHeap.peek();' },
  { stage: 0, text: '  }' },
  { stage: 0, text: '}' },
  { stage: 0, text: '' },
];

export const data = {
  problemID: 125,
  problemName: `Find Median In Stream`,
  problemText: `Design a class to calculate the median of a number stream. The class should have the following two methods:

 - **insertNum** (int num): stores the number in the class
 - **findMedian** (): returns the median of all numbers inserted in the class

If the count of numbers inserted in the class is even, the median will be the average of the middle two numbers.`,
  testCases: [
    {
      id: 1,
      name: 'example 1',
      inherit: [],
      code: `const medianOfAStream = new MedianOfAStream();medianOfAStream.insert_num(3);medianOfAStream.insert_num(1);`,
      evaluate: `medianOfAStream.find_median();`,
      expected: 3,
    },
    {
      id: 2,
      name: 'example 2',
      inherit: [1],
      code: `medianOfAStream.insert_num(5);`,
      evaluate: `medianOfAStream.find_median();`,
      expected: 3,
    },
    {
      id: 3,
      name: 'example 3',
      inherit: [1, 2],
      code: `medianOfAStream.insert_num(4);`,
      evaluate: `medianOfAStream.find_median();`,
      expected: 3.5,
    },
  ],
  setupCode: `
  class MinHeap {
    constructor() {
      this.heapContainer = [];
    }
  
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
  
    getParentIndex(childIndex) {
      return Math.floor((childIndex - 1) / 2);
    }
  
    hasParent(childIndex) {
      return this.getParentIndex(childIndex) >= 0;
    }
  
    parent(childIndex) {
      return this.heapContainer[this.getParentIndex(childIndex)];
    }
  
    peek() {
      if (this.heapContainer.length === 0) {
        return null;
      }
      return this.heapContainer[0];
    }
  
    poll() {
      if (this.heapContainer.length === 0) {
        return null;
      }
      if (this.heapContainer.length === 1) {
        return this.heapContainer.pop();
      }
      const item = this.heapContainer[0];
      this.heapContainer[0] = this.heapContainer.pop();
      this.heapifyDown();
      return item;
    }
  
    add(item) {
      this.heapContainer.push(item);
      this.heapifyUp();
      return this;
    }
  
    heapifyUp(customStartIndex) {
      let currentIndex = customStartIndex || this.heapContainer.length - 1;
      while (
        this.hasParent(currentIndex) &&
        !(this.parent(currentIndex) <= this.heapContainer[currentIndex])
      ) {
        this.swap(currentIndex, this.getParentIndex(currentIndex));
        currentIndex = this.getParentIndex(currentIndex);
      }
    }
  
    heapifyDown(customStartIndex = 0) {
      let currentIndex = customStartIndex;
      let nextIndex = null;
      while (this.hasLeftChild(currentIndex)) {
        if (
          this.hasRightChild(currentIndex) &&
          this.rightChild(currentIndex) <= this.leftChild(currentIndex)
        ) {
          nextIndex = this.getRightChildIndex(currentIndex);
        } else {
          nextIndex = this.getLeftChildIndex(currentIndex);
        }
        if (this.heapContainer[currentIndex] <= this.heapContainer[nextIndex]) {
          break;
        }
        this.swap(currentIndex, nextIndex);
        currentIndex = nextIndex;
      }
    }
  
    swap(indexOne, indexTwo) {
      const tmp = this.heapContainer[indexTwo];
      this.heapContainer[indexTwo] = this.heapContainer[indexOne];
      this.heapContainer[indexOne] = tmp;
    }
  
    length() {
      return this.heapContainer.length;
    }
  }
  
  class MaxHeap {
    constructor() {
      this.heapContainer = [];
    }
  
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
  
    getParentIndex(childIndex) {
      return Math.floor((childIndex - 1) / 2);
    }
  
    hasParent(childIndex) {
      return this.getParentIndex(childIndex) >= 0;
    }
  
    parent(childIndex) {
      return this.heapContainer[this.getParentIndex(childIndex)];
    }
  
    peek() {
      if (this.heapContainer.length === 0) {
        return null;
      }
      return this.heapContainer[0];
    }
  
    poll() {
      if (this.heapContainer.length === 0) {
        return null;
      }
      if (this.heapContainer.length === 1) {
        return this.heapContainer.pop();
      }
      const item = this.heapContainer[0];
      this.heapContainer[0] = this.heapContainer.pop();
      this.heapifyDown();
      return item;
    }
  
    add(item) {
      this.heapContainer.push(item);
      this.heapifyUp();
      return this;
    }
  
    heapifyUp(customStartIndex) {
      let currentIndex = customStartIndex || this.heapContainer.length - 1;
      while (
        this.hasParent(currentIndex) &&
        !(this.parent(currentIndex) >= this.heapContainer[currentIndex])
      ) {
        this.swap(currentIndex, this.getParentIndex(currentIndex));
        currentIndex = this.getParentIndex(currentIndex);
      }
    }
  
    heapifyDown(customStartIndex = 0) {
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
  
    swap(indexOne, indexTwo) {
      const tmp = this.heapContainer[indexTwo];
      this.heapContainer[indexTwo] = this.heapContainer[indexOne];
      this.heapContainer[indexOne] = tmp;
    }
  
    length() {
      return this.heapContainer.length;
    }
  }
  `,
  source: [],
  tags: [INTERMEDIATE, TEMP, ALGORITHM],
  solution,
};
