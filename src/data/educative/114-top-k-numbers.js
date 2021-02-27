import { ALGORITHM, TEMP, INTERMEDIATE } from '../constants.js';

const solution = [
  { stage: 0, text: '' },
  { stage: -1, text: 'class MinHeap {' },
  { stage: -1, text: '  /*' },
  { stage: -1, text: '    add(item: Number)' },
  { stage: -1, text: '    poll() Number' },
  { stage: -1, text: '  */' },
  { stage: -1, text: '}' },
  { stage: 0, text: '' },
  { stage: 0, text: 'function find_k_largest_numbers(nums, k) {' },
  { stage: 1, text: '  const minHeap = new MinHeap();' },
  { stage: 2, text: '  for (let i = 0; i < k; i++) {' },
  { stage: 3, text: '    minHeap.add(nums[i]);' },
  { stage: 2, text: '  }' },
  { stage: 0, text: '' },
  { stage: 4, text: '  for (let i = k; i < nums.length; i++) {' },
  { stage: 5, text: '    if (nums[i] > minHeap.peek()) {' },
  { stage: 6, text: '      minHeap.poll();' },
  { stage: 6, text: '      minHeap.add(nums[i]);' },
  { stage: 5, text: '    }' },
  { stage: 4, text: '  }' },
  { stage: 0, text: '' },
  { stage: 7, text: '  let arr = [];' },
  { stage: 8, text: '  while (minHeap.length()) {' },
  { stage: 9, text: '    arr.push(minHeap.poll());' },
  { stage: 8, text: '  }' },
  { stage: 0, text: '' },
  { stage: 10, text: '  return arr;' },
  { stage: 0, text: '}' },
  { stage: 0, text: '' },
];

export const data = {
  problemID: 114,
  problemName: `Top K Numbers`,
  problemText: `Given an unsorted array of numbers, find the ‘K’ largest numbers in it.  Return them as an array sorted lowest to highest.`,
  testCases: [
    {
      id: 1,
      name: 'example 1',
      inherit: [],
      code: ``,
      evaluate: `find_k_largest_numbers([3, 1, 5, 12, 2, 11], 3);`,
      expected: JSON.stringify([5, 11, 12]),
    },
    {
      id: 2,
      name: 'example 2',
      inherit: [],
      code: ``,
      evaluate: `find_k_largest_numbers([5, 12, 11, -1, 12], 3);`,
      expected: JSON.stringify([11, 12, 12]),
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

  peek() {
    if (this.heapContainer.length === 0) {
      return null;
    }

    return this.heapContainer[0];
  }

  length() {
    return this.heapContainer.length;
  }
}
`,
  category: TEMP,
  type: ALGORITHM,
  difficulty: INTERMEDIATE,
  maxExecutionTime: 2,
  solution: {
    stages: [0, 30, 60, 90, 120, 150, 180, 210, 240, 270, 330],
    solutionLines: solution,
  },
};
