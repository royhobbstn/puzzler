import { HEAP, DATA_STRUCTURE, BEGINNER } from '../constants.js';

const solution = [
  { stage: 0, text: 'class MinHeap {' },
  { stage: 0, text: '  constructor() {' },
  { stage: 0, text: '    this.heapContainer = [];' },
  { stage: 0, text: '  }' },
  { stage: 0, text: '' },
  { stage: -1, text: '// IMPLEMENTED:  heapifyUp(index: int)' },
  { stage: -1, text: '// IMPLEMENTED:  heapifyDown(index: int)' },
  { stage: -1, text: '// IMPLEMENTED:  find(item: int) []index:int' },
  { stage: -1, text: '// IMPLEMENTED:  parent(index: int) item:int' },
  { stage: -1, text: '// IMPLEMENTED:  hasLeftChild(index: int) bool' },

  { stage: 1, text: '  remove(item) {' },
  { stage: 2, text: '    const numberOfItemsToRemove = this.find(item).length;' },
  { stage: 2, text: '' },
  {
    stage: 3,
    text: '    for (let iteration = 0; iteration < numberOfItemsToRemove; iteration += 1) {',
  },
  { stage: 4, text: '      const indexToRemove = this.find(item).pop();' },
  { stage: 4, text: '      if (indexToRemove === this.heapContainer.length - 1) {' },
  { stage: 5, text: '        this.heapContainer.pop();' },
  { stage: 4, text: '      } else {' },
  { stage: 5, text: '        this.heapContainer[indexToRemove] = this.heapContainer.pop();' },
  { stage: 5, text: '        const parentItem = this.parent(indexToRemove);' },
  { stage: 6, text: '' },
  { stage: 6, text: '        if (' },
  { stage: 6, text: '          this.hasLeftChild(indexToRemove) &&' },
  { stage: 6, text: '          (!parentItem || parentItem <= this.heapContainer[indexToRemove])' },
  { stage: 6, text: '        ) {' },
  { stage: 7, text: '          this.heapifyDown(indexToRemove);' },
  { stage: 6, text: '        } else {' },
  { stage: 8, text: '          this.heapifyUp(indexToRemove);' },
  { stage: 6, text: '        }' },
  { stage: 4, text: '      }' },
  { stage: 3, text: '    }' },
  { stage: 2, text: '    return this;' },
  { stage: 1, text: '  }' },
  { stage: 0, text: '' },
  { stage: 0, text: '}' },
  { stage: 0, text: '' },
];

export const data = {
  problemID: 34,
  problemName: `Implement **remove** for a *MinHeap* class.`,
  problemText: `Implement a **remove** method for a *MinHeap* to receive an \`item\` (integer) and remove all instances of that item from the heap.  The method should then return the heap.
  
  (note: remove duplicate items from back to front)`,
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
      name: 'remove from empty heap, remains empty heap',
      inherit: [1],
      code: ``,
      evaluate: `minheap.remove(5);JSON.stringify(minheap.heapContainer);`,
      expected: JSON.stringify([]),
    },
    {
      id: 3,
      name: 'remove from empty heap, returns empty heap',
      inherit: [1],
      code: ``,
      evaluate: `minheap.remove(5) === minheap;`,
      expected: true,
    },
    {
      id: 4,
      name: 'remove one from one item heap, heap becomes empty',
      inherit: [1],
      code: `minheap.heapContainer = [5];minheap.remove(5);`,
      evaluate: `JSON.stringify(minheap.heapContainer);`,
      expected: JSON.stringify([]),
    },
    {
      id: 5,
      name: 'remove one from two item heap, one item remains',
      inherit: [1],
      code: `minheap.heapContainer = [5,6];minheap.remove(5);`,
      evaluate: `JSON.stringify(minheap.heapContainer);`,
      expected: JSON.stringify([6]),
    },
    {
      id: 6,
      name: 'remove value from two item heap where value is duplicated',
      inherit: [1],
      code: `minheap.heapContainer = [5,5];minheap.remove(5);`,
      evaluate: `JSON.stringify(minheap.heapContainer);`,
      expected: JSON.stringify([]),
    },
    {
      id: 7,
      name: 'complex example',
      inherit: [1],
      code: `minheap.heapContainer = [1,2,4,6,3,5,6,10,8,7];minheap.remove(5).remove(6);`,
      evaluate: `JSON.stringify(minheap.heapContainer);`,
      expected: JSON.stringify([1, 2, 4, 10, 3, 7, 8]),
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
  MinHeap.prototype.find = function (item) {
    const foundItemIndices = [];
    for (let itemIndex = 0; itemIndex < this.heapContainer.length; itemIndex += 1) {
      if (item === this.heapContainer[itemIndex]) {
        foundItemIndices.push(itemIndex);
      }
    }
    return foundItemIndices;
  };
  MinHeap.prototype.heapifyUp = function (customStartIndex) {
    let currentIndex = customStartIndex || this.heapContainer.length - 1;
    while (
      this.hasParent(currentIndex) &&
      this.parent(currentIndex) > this.heapContainer[currentIndex]
    ) {
      this.swap(currentIndex, this.getParentIndex(currentIndex));
      currentIndex = this.getParentIndex(currentIndex);
    }
  };
  MinHeap.prototype.heapifyDown = function (customStartIndex = 0) {
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
  MinHeap.prototype.swap = function (indexOne, indexTwo) {
    const tmp = this.heapContainer[indexTwo];
    this.heapContainer[indexTwo] = this.heapContainer[indexOne];
    this.heapContainer[indexOne] = tmp;
  };
  `,
  category: HEAP,
  type: DATA_STRUCTURE,
  difficulty: BEGINNER,
  maxExecutionTime: 2,
  solution: {
    stages: [0, 30, 60, 90, 120, 150, 180, 210, 270],
    solutionLines: solution,
  },
};
