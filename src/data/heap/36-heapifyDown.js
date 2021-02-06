import { HEAP, DATA_STRUCTURE, ADVANCED } from '../constants.js';

const solution = [
  { stage: 0, text: 'class MinHeap {' },
  { stage: 0, text: '  constructor() {' },
  { stage: 0, text: '    this.heapContainer = [];' },
  { stage: 0, text: '  }' },
  { stage: 0, text: '' },
  { stage: -1, text: '// IMPLEMENTED:  swap(index1: int, index2: int)' },
  { stage: -1, text: '// IMPLEMENTED:  getLeftChildIndex(index: int) int' },
  { stage: -1, text: '// IMPLEMENTED:  getRightChildIndex(index: int) int' },
  { stage: -1, text: '// IMPLEMENTED:  hasLeftChild(index: int) bool' },
  { stage: -1, text: '// IMPLEMENTED:  hasRightChild(index: int) bool' },
  { stage: -1, text: '// IMPLEMENTED:  getLeftChildIndex(index: int) int' },
  { stage: -1, text: '// IMPLEMENTED:  getrightChildIndex(index: int) int' },
  { stage: 0, text: '' },
  { stage: 1, text: '  heapifyDown(customStartIndex = 0) {' },
  { stage: 2, text: '    let currentIndex = customStartIndex;' },
  { stage: 2, text: '    let nextIndex = null;' },
  { stage: 2, text: '' },
  { stage: 3, text: '    while (this.hasLeftChild(currentIndex)) {' },
  { stage: 4, text: '      if (' },
  { stage: 4, text: '        this.hasRightChild(currentIndex) &&' },
  { stage: 4, text: '        this.rightChild(currentIndex) <= this.leftChild(currentIndex)' },
  { stage: 4, text: '      ) {' },
  { stage: 5, text: '        nextIndex = this.getRightChildIndex(currentIndex);' },
  { stage: 4, text: '      } else {' },
  { stage: 5, text: '        nextIndex = this.getLeftChildIndex(currentIndex);' },
  { stage: 4, text: '      }' },
  { stage: 5, text: '' },
  {
    stage: 6,
    text: '      if (this.heapContainer[currentIndex] <= this.heapContainer[nextIndex]) {',
  },
  { stage: 6, text: '        break;' },
  { stage: 6, text: '      }' },
  { stage: 6, text: '' },
  { stage: 7, text: '      this.swap(currentIndex, nextIndex);' },
  { stage: 7, text: '      currentIndex = nextIndex;' },
  { stage: 3, text: '    }' },
  { stage: 1, text: '  }' },
  { stage: 0, text: '' },
  { stage: 0, text: '}' },
  { stage: 0, text: '' },
];

export const data = {
  problemID: 36,
  problemName: `Implement **heapifyDown** for a *MinHeap* class.`,
  problemText: `Implement a **heapifyDown** method for a *MinHeap* to take an array item at a specified \`index\` (the first item in the array by default) and move it down to the correct placement in the heap.`,
  testCases: [
    {
      id: 1,
      name: 'compiles',
      inherit: [],
      code: `const minheap=new MinHeap();`,
      evaluate: `Boolean(minheap);`,
      expected: true,
    },
    {
      id: 2,
      name: 'one item in heap, heap is same',
      inherit: [1],
      code: `minheap.heapContainer = [1];  minheap.heapifyDown();`,
      evaluate: `JSON.stringify(minheap.heapContainer);`,
      expected: JSON.stringify([1]),
    },
    {
      id: 3,
      name: 'two items in heap, no change',
      inherit: [1],
      code: `minheap.heapContainer = [1,2];  minheap.heapifyDown();`,
      evaluate: `JSON.stringify(minheap.heapContainer);`,
      expected: JSON.stringify([1, 2]),
    },
    {
      id: 4,
      name: 'two items in heap, reorder',
      inherit: [1],
      code: `minheap.heapContainer = [2,1];  minheap.heapifyDown();`,
      evaluate: `JSON.stringify(minheap.heapContainer);`,
      expected: JSON.stringify([1, 2]),
    },
    {
      id: 5,
      name: 'five items in heap, reorder',
      inherit: [1],
      code: `minheap.heapContainer = [5,1,2,3,4];  minheap.heapifyDown();`,
      evaluate: `JSON.stringify(minheap.heapContainer);`,
      expected: JSON.stringify([1, 3, 2, 5, 4]),
    },
    {
      id: 6,
      name: 'five items in heap, specific index',
      inherit: [1],
      code: `minheap.heapContainer = [1,5,2,3,4];  minheap.heapifyDown(1);`,
      evaluate: `JSON.stringify(minheap.heapContainer);`,
      expected: JSON.stringify([1, 3, 2, 5, 4]),
    },
  ],
  setupCode: `
  MinHeap.prototype.getLeftChildIndex = function(parentIndex) {
    return 2 * parentIndex + 1;
  };
  MinHeap.prototype.getRightChildIndex = function(parentIndex) {
    return 2 * parentIndex + 2;
  };
  MinHeap.prototype.hasLeftChild = function(parentIndex) {
    return this.getLeftChildIndex(parentIndex) < this.heapContainer.length;
  };
  MinHeap.prototype.hasRightChild = function(parentIndex) {
    return this.getRightChildIndex(parentIndex) < this.heapContainer.length;
  };
  MinHeap.prototype.leftChild = function(parentIndex) {
    return this.heapContainer[this.getLeftChildIndex(parentIndex)];
  };
  MinHeap.prototype.rightChild = function(parentIndex) {
    return this.heapContainer[this.getRightChildIndex(parentIndex)];
  };
  MinHeap.prototype.swap = function (indexOne, indexTwo) {
    const tmp = this.heapContainer[indexTwo];
    this.heapContainer[indexTwo] = this.heapContainer[indexOne];
    this.heapContainer[indexOne] = tmp;
  };
  `,
  category: HEAP,
  type: DATA_STRUCTURE,
  difficulty: ADVANCED,
  maxExecutionTime: 2,
  solution: {
    stages: [0, 30, 60, 90, 120, 150, 180, 240],
    solutionLines: solution,
  },
};
