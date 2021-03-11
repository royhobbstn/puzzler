import { HEAP, DATA_STRUCTURE, INTERMEDIATE } from '../constants.js';

const solution = [
  { stage: 0, text: 'class MinHeap {' },
  { stage: 0, text: '  constructor() {' },
  { stage: 0, text: '    this.heapContainer = [];' },
  { stage: 0, text: '  }' },
  { stage: 0, text: '' },
  { stage: 1, text: '  getLeftChildIndex(parentIndex) {' },
  { stage: 2, text: '    return 2 * parentIndex + 1;' },
  { stage: 1, text: '  }' },
  { stage: 2, text: '' },
  { stage: 1, text: '  getRightChildIndex(parentIndex) {' },
  { stage: 3, text: '    return 2 * parentIndex + 2;' },
  { stage: 1, text: '  }' },
  { stage: 3, text: '' },
  { stage: 1, text: '  hasLeftChild(parentIndex) {' },
  { stage: 4, text: '    return this.getLeftChildIndex(parentIndex) < this.heapContainer.length;' },
  { stage: 1, text: '  }' },
  { stage: 4, text: '' },
  { stage: 1, text: '  hasRightChild(parentIndex) {' },
  {
    stage: 5,
    text: '    return this.getRightChildIndex(parentIndex) < this.heapContainer.length;',
  },
  { stage: 1, text: '  }' },
  { stage: 5, text: '' },
  { stage: 1, text: '  leftChild(parentIndex) {' },
  { stage: 6, text: '    return this.heapContainer[this.getLeftChildIndex(parentIndex)];' },
  { stage: 1, text: '  }' },
  { stage: 6, text: '' },
  { stage: 1, text: '  rightChild(parentIndex) {' },
  { stage: 7, text: '    return this.heapContainer[this.getRightChildIndex(parentIndex)];' },
  { stage: 1, text: '  }' },
  { stage: 0, text: '}' },
  { stage: 0, text: '' },
];

export const data = {
  problemID: 28,
  problemName: `Implement child index functions for a *MinHeap* class.`,
  problemText: `Implement the following methods for the *MinHeap* data structure:  
   - **getLeftChildIndex** (parentIndex: integer) => integer  
   - **getRightChildIndex** (parentIndex: integer) => integer  
   - **hasLeftChild** (parentIndex: integer) => boolean  
   - **hasRightChild** (parentIndex: integer) => boolean  
   - **leftChild** (parentIndex: integer) => heap value  
   - **rightChild** (parentIndex: integer) => heap value
`,
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
      name: 'getLeftChildIndex - test 0',
      inherit: [1],
      code: ``,
      evaluate: `minheap.getLeftChildIndex(0);`,
      expected: 1,
    },
    {
      id: 2,
      name: 'getLeftChildIndex - test 1',
      inherit: [1],
      code: ``,
      evaluate: `minheap.getLeftChildIndex(5);`,
      expected: 11,
    },
    {
      id: 3,
      name: 'getRightChildIndex - test 0',
      inherit: [1],
      code: ``,
      evaluate: `minheap.getRightChildIndex(0);`,
      expected: 2,
    },
    {
      id: 4,
      name: 'getRightChildIndex - test 1',
      inherit: [1],
      code: ``,
      evaluate: `minheap.getRightChildIndex(12);`,
      expected: 26,
    },
    {
      id: 5,
      name: 'hasLeftChild - true',
      inherit: [1],
      code: `minheap.heapContainer.length = 10;`,
      evaluate: `minheap.hasLeftChild(4);`,
      expected: true,
    },
    {
      id: 6,
      name: 'hasLeftChild - false',
      inherit: [1],
      code: `minheap.heapContainer.length = 9;`,
      evaluate: `minheap.hasLeftChild(4);`,
      expected: false,
    },
    {
      id: 7,
      name: 'hasRightChild - true',
      inherit: [1],
      code: `minheap.heapContainer.length = 11;`,
      evaluate: `minheap.hasRightChild(4);`,
      expected: true,
    },
    {
      id: 8,
      name: 'hasRightChild - false',
      inherit: [1],
      code: `minheap.heapContainer.length = 10;`,
      evaluate: `minheap.hasRightChild(4);`,
      expected: false,
    },
    {
      id: 9,
      name: 'leftChild',
      inherit: [1],
      code: `minheap.heapContainer = [1,4,5,8,10,12,16];`,
      evaluate: `minheap.leftChild(0);`,
      expected: 4,
    },
    {
      id: 10,
      name: 'leftChild',
      inherit: [1, 9],
      code: ``,
      evaluate: `minheap.leftChild(2);`,
      expected: 12,
    },
    {
      id: 11,
      name: 'rightChild',
      inherit: [1, 9],
      code: ``,
      evaluate: `minheap.rightChild(0);`,
      expected: 5,
    },
    {
      id: 12,
      name: 'rightChild',
      inherit: [1, 9],
      code: ``,
      evaluate: `minheap.rightChild(2);`,
      expected: 16,
    },
  ],
  setupCode: ``,
  source: [],
  tags: [INTERMEDIATE, HEAP, DATA_STRUCTURE],
  solution,
};
