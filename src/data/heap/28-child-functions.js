import { HEAP, DATA_STRUCTURE, BEGINNER } from '../constants.js';

const solution = [
  { stage: 0, text: 'class MinHeap {' },
  { stage: 0, text: '  constructor() {' },
  { stage: 0, text: '    this.heapContainer = [];' },
  { stage: 0, text: '  }' },
  { stage: 0, text: '' },
  { stage: 0, text: '  getLeftChildIndex(parentIndex) {' },
  { stage: 0, text: '    return 2 * parentIndex + 1;' },
  { stage: 0, text: '  }' },
  { stage: 0, text: '' },
  { stage: 0, text: '  getRightChildIndex(parentIndex) {' },
  { stage: 0, text: '    return 2 * parentIndex + 2;' },
  { stage: 0, text: '  }' },
  { stage: 0, text: '' },
  { stage: 0, text: '  hasLeftChild(parentIndex) {' },
  { stage: 0, text: '    return this.getLeftChildIndex(parentIndex) < this.heapContainer.length;' },
  { stage: 0, text: '  }' },
  { stage: 0, text: '' },
  { stage: 0, text: '  hasRightChild(parentIndex) {' },
  {
    stage: 0,
    text: '    return this.getRightChildIndex(parentIndex) < this.heapContainer.length;',
  },
  { stage: 0, text: '  }' },
  { stage: 0, text: '' },
  { stage: 0, text: '  leftChild(parentIndex) {' },
  { stage: 0, text: '    return this.heapContainer[this.getLeftChildIndex(parentIndex)];' },
  { stage: 0, text: '  }' },
  { stage: 0, text: '' },
  { stage: 0, text: '  rightChild(parentIndex) {' },
  { stage: 0, text: '    return this.heapContainer[this.getRightChildIndex(parentIndex)];' },
  { stage: 0, text: '  }' },
  { stage: 0, text: '}' },
  { stage: 0, text: '' },
  { stage: 0, text: 'MinHeap.Prototype.getParentIndex = function(childIndex) {' },
  { stage: 0, text: '  return Math.floor((childIndex - 1) / 2);' },
  { stage: 0, text: '};' },
  { stage: 0, text: '' },
  { stage: 0, text: 'MinHeap.Prototype.hasParent = function(childIndex) {' },
  { stage: 0, text: '  return this.getParentIndex(childIndex) >= 0;' },
  { stage: 0, text: '};' },
  { stage: 0, text: '' },
  { stage: 0, text: 'MinHeap.Prototype.parent = function(childIndex) {' },
  { stage: 0, text: '  return this.heapContainer[this.getParentIndex(childIndex)];' },
  { stage: 0, text: '};' },
  { stage: 0, text: '' },
  { stage: 0, text: 'MinHeap.Prototype.peek = function() {' },
  { stage: 0, text: '  if (this.heapContainer.length === 0) {' },
  { stage: 0, text: '    return null;' },
  { stage: 0, text: '  }' },
  { stage: 0, text: '  return this.heapContainer[0];' },
  { stage: 0, text: '};' },
  { stage: 0, text: '' },
  { stage: 0, text: 'MinHeap.Prototype.find = function(item) {' },
  { stage: 0, text: '  const foundItemIndices = [];' },
  {
    stage: 0,
    text: '  for (let itemIndex = 0; itemIndex < this.heapContainer.length; itemIndex += 1) {',
  },
  { stage: 0, text: '    if (item === this.heapContainer[itemIndex]) {' },
  { stage: 0, text: '      foundItemIndices.push(itemIndex);' },
  { stage: 0, text: '    }' },
  { stage: 0, text: '  }' },
  { stage: 0, text: '  return foundItemIndices;' },
  { stage: 0, text: '};' },
  { stage: 0, text: '' },
  { stage: 0, text: 'MinHeap.Prototype.poll = function() {' },
  { stage: 0, text: '  if (this.heapContainer.length === 0) {' },
  { stage: 0, text: '    return null;' },
  { stage: 0, text: '  }' },
  { stage: 0, text: '' },
  { stage: 0, text: '  if (this.heapContainer.length === 1) {' },
  { stage: 0, text: '    return this.heapContainer.pop();' },
  { stage: 0, text: '  }' },
  { stage: 0, text: '' },
  { stage: 0, text: '  const item = this.heapContainer[0];' },
  { stage: 0, text: '' },
  { stage: 0, text: '  this.heapContainer[0] = this.heapContainer.pop();' },
  { stage: 0, text: '  this.heapifyDown();' },
  { stage: 0, text: '  return item;' },
  { stage: 0, text: '};' },
  { stage: 0, text: '' },
  { stage: 0, text: 'MinHeap.Prototype.add = function(item) {' },
  { stage: 0, text: '  this.heapContainer.push(item);' },
  { stage: 0, text: '  this.heapifyUp();' },
  { stage: 0, text: '  return this;' },
  { stage: 0, text: '};' },
  { stage: 0, text: '' },
  { stage: 0, text: 'MinHeap.Prototype.remove = function(item) {' },
  { stage: 0, text: '  const numberOfItemsToRemove = this.find(item).length;' },
  { stage: 0, text: '' },
  {
    stage: 0,
    text: '  for (let iteration = 0; iteration < numberOfItemsToRemove; iteration += 1) {',
  },
  { stage: 0, text: '    const indexToRemove = this.find(item).pop();' },
  { stage: 0, text: '    if (indexToRemove === this.heapContainer.length - 1) {' },
  { stage: 0, text: '      this.heapContainer.pop();' },
  { stage: 0, text: '    } else {' },
  { stage: 0, text: '      this.heapContainer[indexToRemove] = this.heapContainer.pop();' },
  { stage: 0, text: '      const parentItem = this.parent(indexToRemove);' },
  { stage: 0, text: '' },
  { stage: 0, text: '      if (' },
  { stage: 0, text: '        this.hasLeftChild(indexToRemove) &&' },
  { stage: 0, text: '        (!parentItem || parentItem <= this.heapContainer[indexToRemove])' },
  { stage: 0, text: '      ) {' },
  { stage: 0, text: '        this.heapifyDown(indexToRemove);' },
  { stage: 0, text: '      } else {' },
  { stage: 0, text: '        this.heapifyUp(indexToRemove);' },
  { stage: 0, text: '      }' },
  { stage: 0, text: '    }' },
  { stage: 0, text: '  }' },
  { stage: 0, text: '  return this;' },
  { stage: 0, text: '};' },
  { stage: 0, text: '' },
  { stage: 0, text: 'MinHeap.Prototype.heapifyUp = function(customStartIndex) {' },
  { stage: 0, text: '  let currentIndex = customStartIndex || this.heapContainer.length - 1;' },
  { stage: 0, text: '' },
  { stage: 0, text: '  while (' },
  { stage: 0, text: '    this.hasParent(currentIndex) &&' },
  { stage: 0, text: '    (this.parent(currentIndex) > this.heapContainer[currentIndex])' },
  { stage: 0, text: '  ) {' },
  { stage: 0, text: '    this.swap(currentIndex, this.getParentIndex(currentIndex));' },
  { stage: 0, text: '    currentIndex = this.getParentIndex(currentIndex);' },
  { stage: 0, text: '  }' },
  { stage: 0, text: '};' },
  { stage: 0, text: '' },
  { stage: 0, text: 'MinHeap.Prototype.heapifyDown = function(customStartIndex = 0) {' },
  { stage: 0, text: '  let currentIndex = customStartIndex;' },
  { stage: 0, text: '  let nextIndex = null;' },
  { stage: 0, text: '' },
  { stage: 0, text: '  while (this.hasLeftChild(currentIndex)) {' },
  { stage: 0, text: '    if (' },
  { stage: 0, text: '      this.hasRightChild(currentIndex) &&' },
  { stage: 0, text: '      this.rightChild(currentIndex) <= this.leftChild(currentIndex)' },
  { stage: 0, text: '    ) {' },
  { stage: 0, text: '      nextIndex = this.getRightChildIndex(currentIndex);' },
  { stage: 0, text: '    } else {' },
  { stage: 0, text: '      nextIndex = this.getLeftChildIndex(currentIndex);' },
  { stage: 0, text: '    }' },
  { stage: 0, text: '' },
  {
    stage: 0,
    text: '    if (this.heapContainer[currentIndex] <= this.heapContainer[nextIndex]) {',
  },
  { stage: 0, text: '      break;' },
  { stage: 0, text: '    }' },
  { stage: 0, text: '' },
  { stage: 0, text: '    this.swap(currentIndex, nextIndex);' },
  { stage: 0, text: '    currentIndex = nextIndex;' },
  { stage: 0, text: '  }' },
  { stage: 0, text: '};' },
  { stage: 0, text: '' },
  { stage: 0, text: 'MinHeap.Prototype.swap = function(indexOne, indexTwo) {' },
  { stage: 0, text: '  const tmp = this.heapContainer[indexTwo];' },
  { stage: 0, text: '  this.heapContainer[indexTwo] = this.heapContainer[indexOne];' },
  { stage: 0, text: '  this.heapContainer[indexOne] = tmp;' },
  { stage: 0, text: '};' },
  { stage: 0, text: '' },
  { stage: 0, text: 'MinHeap.Prototype.isEmpty = function() {' },
  { stage: 0, text: '  return !this.heapContainer.length;' },
  { stage: 0, text: '};' },
  { stage: 0, text: '' },
  { stage: 0, text: 'MinHeap.Prototype.toString = function() {' },
  { stage: 0, text: '  return this.heapContainer.toString();' },
  { stage: 0, text: '};' },
  { stage: 0, text: '' },
];

export const data = {
  problemID: 28,
  problemName: `Implement child index functions for a MinHeap.`,
  problemText: `Implement the following methods for the MinHeap data structure:  
  **getLeftChildIndex** (parentIndex: integer) => integer  
  **getRightChildIndex** (parentIndex: integer) => integer  
  **hasLeftChild** (parentIndex: integer) => boolean  
  **hasRightChild** (parentIndex: integer) => boolean  
  **leftChild** (parentIndex: integer) => heap value  
  **rightChild** (parentIndex: integer) => heap value
`,
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
  setupCode: '',
  category: HEAP,
  type: DATA_STRUCTURE,
  difficulty: BEGINNER,
  maxExecutionTime: 2,
  solution: {
    stages: [0, 30, 60, 120],
    solutionLines: solution,
  },
};
