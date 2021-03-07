import { HEAP, DATA_STRUCTURE, ADVANCED } from '../constants.js';

const solution = [
  { stage: 0, text: 'class MinHeap {' },
  { stage: 0, text: '  constructor() {' },
  { stage: 0, text: '    this.heapContainer = [];' },
  { stage: 0, text: '  }' },
  { stage: 0, text: '' },
  { stage: -1, text: '// IMPLEMENTED:  swap(index1: int, index2: int)' },
  { stage: -1, text: '// IMPLEMENTED:  getParentIndex(index: int) int' },
  { stage: -1, text: '// IMPLEMENTED:  hasParent(index: int) bool' },
  { stage: -1, text: '// IMPLEMENTED:  parent(index: int) int' },
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
  problemName: `Implement **heapifyUp** for a *MinHeap* class.`,
  problemText: `Implement a **heapifyUp** method for a *MinHeap* to take an array item at a specified \`index\` (the last index in the array by default) and move it up to the correct placement in the heap.`,
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
      name: 'heapifyUp on one item heap, remains same',
      inherit: [1],
      code: `minheap.heapContainer = [5];minheap.heapifyUp();`,
      evaluate: `JSON.stringify(minheap.heapContainer);`,
      expected: JSON.stringify([5]),
    },
    {
      id: 3,
      name: 'heapifyUp on two item heap',
      inherit: [1],
      code: `minheap.heapContainer = [5,4];minheap.heapifyUp(1);`,
      evaluate: `JSON.stringify(minheap.heapContainer);`,
      expected: JSON.stringify([4, 5]),
    },
    {
      id: 4,
      name: 'heapifyUp on three item heap',
      inherit: [1],
      code: `minheap.heapContainer = [5,6,4];minheap.heapifyUp(2);`,
      evaluate: `JSON.stringify(minheap.heapContainer);`,
      expected: JSON.stringify([4, 6, 5]),
    },
    {
      id: 5,
      name: 'heapifyUp on four item heap',
      inherit: [1],
      code: `minheap.heapContainer = [4,6,5,3];minheap.heapifyUp(3);`,
      evaluate: `JSON.stringify(minheap.heapContainer);`,
      expected: JSON.stringify([3, 4, 5, 6]),
    },
    {
      id: 6,
      name: 'heapifyUp on complex heap',
      inherit: [1],
      code: `minheap.heapContainer = [2,3,5,7,4,6,7,11,9,8,1];minheap.heapifyUp(10);`,
      evaluate: `JSON.stringify(minheap.heapContainer);`,
      expected: JSON.stringify([1, 2, 5, 7, 3, 6, 7, 11, 9, 8, 4]),
    },
    {
      id: 7,
      name: 'by default, works on last item in heap',
      inherit: [1],
      code: `minheap.heapContainer = [2,3,5,7,4,6,7,11,9,8,1];minheap.heapifyUp();`,
      evaluate: `JSON.stringify(minheap.heapContainer);`,
      expected: JSON.stringify([1, 2, 5, 7, 3, 6, 7, 11, 9, 8, 4]),
    },
  ],
  setupCode: `
  MinHeap.prototype.getParentIndex = function (childIndex) {
    return Math.floor((childIndex - 1) / 2);
  };
  MinHeap.prototype.hasParent = function (childIndex) {
    return this.getParentIndex(childIndex) >= 0;
  };
  MinHeap.prototype.parent = function (childIndex) {
    return this.heapContainer[this.getParentIndex(childIndex)];
  };
  MinHeap.prototype.swap = function (indexOne, indexTwo) {
    const tmp = this.heapContainer[indexTwo];
    this.heapContainer[indexTwo] = this.heapContainer[indexOne];
    this.heapContainer[indexOne] = tmp;
  };
  `,
  tags: [HEAP, DATA_STRUCTURE],
  difficulty: ADVANCED,
  solution,
};
