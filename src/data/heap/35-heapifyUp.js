import { HEAP, DATA_STRUCTURE, BEGINNER } from '../constants.js';

const solution = [
  { stage: 0, text: 'class MinHeap {' },
  { stage: 0, text: '  constructor() {' },
  { stage: 0, text: '    this.heapContainer = [];' },
  { stage: 0, text: '  }' },
  { stage: 0, text: '' },
  { stage: 1, text: '  heapifyUp(customStartIndex) {' },
  { stage: 2, text: '    let currentIndex = customStartIndex || this.heapContainer.length - 1;' },
  { stage: 2, text: '' },
  { stage: 3, text: '    while (' },
  { stage: 3, text: '      this.hasParent(currentIndex) &&' },
  { stage: 3, text: '      (this.parent(currentIndex) > this.heapContainer[currentIndex])' },
  { stage: 3, text: '    ) {' },
  { stage: 4, text: '      this.swap(currentIndex, this.getParentIndex(currentIndex));' },
  { stage: 5, text: '      currentIndex = this.getParentIndex(currentIndex);' },
  { stage: 3, text: '    }' },
  { stage: 1, text: '  }' },
  { stage: 0, text: '' },
  { stage: 0, text: '}' },
  { stage: 0, text: '' },
];

export const data = {
  problemID: 35,
  problemName: `Implement **heapifyUp** for a MinHeap.`,
  problemText: `Implement a **heapifyUp** method for a MinHeap to take an array item at a specified index (the last index in the array by default) and move it up to the correct placement in the heap.  The method must then return the heap.`,
  testCases: [
    {
      id: 1,
      name: 'compiles',
      inherit: [],
      code: `const minheap=new MinHeap();`,
      evaluate: `minheap;`,
      expected: `{"head":null,"tail":null}`,
    },
  ],
  setupCode: `
  MinHeap.Prototype.getParentIndex = function (childIndex) {
    return Math.floor((childIndex - 1) / 2);
  };
  MinHeap.Prototype.hasParent = function (childIndex) {
    return this.getParentIndex(childIndex) >= 0;
  };
  MinHeap.Prototype.parent = function (childIndex) {
    return this.heapContainer[this.getParentIndex(childIndex)];
  };
  MinHeap.Prototype.getLeftChildIndex = function(parentIndex) {
    return 2 * parentIndex + 1;
  };
  MinHeap.Prototype.getRightChildIndex = function(parentIndex) {
    return 2 * parentIndex + 2;
  };
  MinHeap.Prototype.hasLeftChild = function(parentIndex) {
    return this.getLeftChildIndex(parentIndex) < this.heapContainer.length;
  };
  MinHeap.Prototype.hasRightChild = function(parentIndex) {
    return this.getRightChildIndex(parentIndex) < this.heapContainer.length;
  };
  MinHeap.Prototype.leftChild = function(parentIndex) {
    return this.heapContainer[this.getLeftChildIndex(parentIndex)];
  };
  MinHeap.Prototype.rightChild = function(parentIndex) {
    return this.heapContainer[this.getRightChildIndex(parentIndex)];
  };
  MinHeap.Prototype.peek = function () {
    if (this.heapContainer.length === 0) {
      return null;
    }
    return this.heapContainer[0];
  };
  MinHeap.Prototype.find = function (item) {
    const foundItemIndices = [];
    for (let itemIndex = 0; itemIndex < this.heapContainer.length; itemIndex += 1) {
      if (item === this.heapContainer[itemIndex]) {
        foundItemIndices.push(itemIndex);
      }
    }
    return foundItemIndices;
  };
  MinHeap.Prototype.poll = function () {
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
  };
  MinHeap.Prototype.add = function (item) {
    this.heapContainer.push(item);
    this.heapifyUp();
    return this;
  };
  MinHeap.Prototype.remove = function (item) {
    const numberOfItemsToRemove = this.find(item).length;
    for (let iteration = 0; iteration < numberOfItemsToRemove; iteration += 1) {
      const indexToRemove = this.find(item).pop();
      if (indexToRemove === this.heapContainer.length - 1) {
        this.heapContainer.pop();
      } else {
        this.heapContainer[indexToRemove] = this.heapContainer.pop();
        const parentItem = this.parent(indexToRemove);
        if (
          this.hasLeftChild(indexToRemove) &&
          (!parentItem || parentItem <= this.heapContainer[indexToRemove])
        ) {
          this.heapifyDown(indexToRemove);
        } else {
          this.heapifyUp(indexToRemove);
        }
      }
    }
    return this;
  };
  MinHeap.Prototype.heapifyDown = function (customStartIndex = 0) {
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
  };
  MinHeap.Prototype.swap = function (indexOne, indexTwo) {
    const tmp = this.heapContainer[indexTwo];
    this.heapContainer[indexTwo] = this.heapContainer[indexOne];
    this.heapContainer[indexOne] = tmp;
  };
  MinHeap.Prototype.isEmpty = function () {
    return !this.heapContainer.length;
  };
  MinHeap.Prototype.toString = function () {
    return this.heapContainer.toString();
  };
  `,
  category: HEAP,
  type: DATA_STRUCTURE,
  difficulty: BEGINNER,
  maxExecutionTime: 2,
  solution: {
    stages: [0, 30, 60, 90, 120, 180],
    solutionLines: solution,
  },
};
