import { HEAP, DATA_STRUCTURE, BEGINNER } from '../constants.js';

const solution = [
  { stage: 0, text: 'class MinHeap {' },
  { stage: 0, text: '  constructor() {' },
  { stage: 0, text: '    this.heapContainer = [];' },
  { stage: 0, text: '  }' },
  { stage: 0, text: '' },
  { stage: 1, text: '  peek() {' },
  { stage: 2, text: '    if (this.heapContainer.length === 0) {' },
  { stage: 2, text: '      return null;' },
  { stage: 2, text: '    }' },
  { stage: 3, text: '    return this.heapContainer[0];' },
  { stage: 1, text: '  }' },
  { stage: 0, text: '' },
  { stage: 0, text: '}' },
  { stage: 0, text: '' },
];

export const data = {
  problemID: 30,
  problemName: `Implement the **peek** method for a *MinHeap* class.`,
  problemText: `Implement a **peek** method that will return the value of the first (next-up) item in a *MinHeap*.  Return \`null\` instead if there are no items in the heap.`,
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
      name: 'null if no values in heap',
      inherit: [1],
      code: `minheap.heapContainer = [];`,
      evaluate: `minheap.peek();`,
      expected: null,
    },
    {
      id: 3,
      name: 'first value - 1',
      inherit: [1],
      code: `minheap.heapContainer = [5];`,
      evaluate: `minheap.peek();`,
      expected: 5,
    },
    {
      id: 4,
      name: 'first value - 2',
      inherit: [1],
      code: `minheap.heapContainer = [3,7];`,
      evaluate: `minheap.peek();`,
      expected: 3,
    },
  ],
  setupCode: ``,
  tags: [BEGINNER, HEAP, DATA_STRUCTURE],
  solution,
};
