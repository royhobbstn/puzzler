import {
  MIN_HEAP_SWAP,
  MIN_HEAP_PARENT_FNS,
  MIN_HEAP_HEAPIFY_UP,
} from '../code-imports/import-index.js';
import { HEAP, DATA_STRUCTURE } from '../constants.js';

const solution = [
  { stage: 0, text: 'class MinHeap {' },
  { stage: 0, text: '  constructor() {' },
  { stage: 0, text: '    this.heapContainer = [];' },
  { stage: 0, text: '  }' },
  { stage: 0, text: '' },
  { stage: -1, text: '// IMPLEMENTED:  heapifyUp()' },
  { stage: 0, text: '' },
  { stage: 1, text: '  add(item) {' },
  { stage: 2, text: '    this.heapContainer.push(item);' },
  { stage: 3, text: '    this.heapifyUp();' },
  { stage: 2, text: '    return this;' },
  { stage: 1, text: '  }' },
  { stage: 0, text: '' },
  { stage: 0, text: '}' },
  { stage: 0, text: '' },
];

export const data = {
  problemID: 33,
  problemName: `Implement **add** for a *MinHeap* class.`,
  problemText: `Implement an **add** method for a *MinHeap* to receive an \`item\` (integer) and add it to the heap.  The method should then return the heap.`,
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
      name: 'add item to empty heap',
      inherit: [1],
      code: `minheap.add(5);`,
      evaluate: `JSON.stringify(minheap.heapContainer);`,
      expected: JSON.stringify([5]),
    },
    {
      id: 3,
      name: 'add 2nd item to heap',
      inherit: [1, 2],
      code: `minheap.add(6);`,
      evaluate: `JSON.stringify(minheap.heapContainer);`,
      expected: JSON.stringify([5, 6]),
    },
    {
      id: 4,
      name: 'add 3rd item to heap',
      inherit: [1, 2, 3],
      code: `minheap.add(3);`,
      evaluate: `JSON.stringify(minheap.heapContainer);`,
      expected: JSON.stringify([3, 6, 5]),
    },
    {
      id: 5,
      name: 'add 4th item to heap',
      inherit: [1, 2, 3, 4],
      code: `minheap.add(8);`,
      evaluate: `JSON.stringify(minheap.heapContainer);`,
      expected: JSON.stringify([3, 6, 5, 8]),
    },
    {
      id: 6,
      name: 'add 5th item to heap',
      inherit: [1, 2, 3, 4, 5],
      code: `minheap.add(1);`,
      evaluate: `JSON.stringify(minheap.heapContainer);`,
      expected: JSON.stringify([1, 3, 5, 8, 6]),
    },
    {
      id: 7,
      name: 'add 6th item to heap',
      inherit: [1, 2, 3, 4, 5, 6],
      code: `minheap.add(4);`,
      evaluate: `JSON.stringify(minheap.heapContainer);`,
      expected: JSON.stringify([1, 3, 4, 8, 6, 5]),
    },
    {
      id: 8,
      name: 'add 7th item to heap',
      inherit: [1, 2, 3, 4, 5, 6, 7],
      code: `minheap.add(2);`,
      evaluate: `JSON.stringify(minheap.heapContainer);`,
      expected: JSON.stringify([1, 3, 2, 8, 6, 5, 4]),
    },
    {
      id: 9,
      name: 'method should return itself',
      inherit: [1, 2, 3, 4, 5, 6, 7],
      code: ``,
      evaluate: `minheap.add(2) === minheap`,
      expected: true,
    },
  ],
  setupCode: `${MIN_HEAP_PARENT_FNS} ${MIN_HEAP_HEAPIFY_UP} ${MIN_HEAP_SWAP}`,
  source: [],
  tags: [HEAP, DATA_STRUCTURE],
  solution,
};
