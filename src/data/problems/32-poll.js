import { HEAP, DATA_STRUCTURE, INTERMEDIATE } from '../constants.js';
import {
  MIN_HEAP_CHILD_FNS,
  MIN_HEAP_HEAPIFY_DOWN,
  MIN_HEAP_SWAP,
} from '../code-imports/import-index.js';

const solution = [
  { stage: 0, text: 'class MinHeap {' },
  { stage: 0, text: '  constructor() {' },
  { stage: 0, text: '    this.heapContainer = [];' },
  { stage: 0, text: '  }' },
  { stage: 0, text: '' },
  { stage: -1, text: '// IMPLEMENTED:  heapifyDown(startIndex: int = 0)' },
  { stage: 0, text: '' },
  { stage: 1, text: '  poll() {' },
  { stage: 2, text: '    if (this.heapContainer.length === 0) {' },
  { stage: 2, text: '      return null;' },
  { stage: 2, text: '    }' },
  { stage: 3, text: '' },
  { stage: 3, text: '    if (this.heapContainer.length === 1) {' },
  { stage: 3, text: '      return this.heapContainer.pop();' },
  { stage: 3, text: '    }' },
  { stage: 4, text: '' },
  { stage: 4, text: '    const item = this.heapContainer[0];' },
  { stage: 4, text: '' },
  { stage: 5, text: '    this.heapContainer[0] = this.heapContainer.pop();' },
  { stage: 5, text: '    this.heapifyDown();' },
  { stage: 4, text: '    return item;' },
  { stage: 1, text: '  }' },
  { stage: 0, text: '' },
  { stage: 0, text: '}' },
  { stage: 0, text: '' },
];

export const data = {
  problemID: 32,
  problemName: `Implement **poll** for a *MinHeap* class.`,
  problemText: `Implement a **poll** method for a *MinHeap* to remove and return the item at the top of the heap.  If the heap is empty, return \`null\`.`,
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
      name: 'empty list',
      inherit: [1],
      code: ``,
      evaluate: `minheap.poll();`,
      expected: null,
    },
    {
      id: 3,
      name: 'list, return top item',
      inherit: [1],
      code: `minheap.heapContainer = [1,2,4,6,3,5,6,10,8,7];`,
      evaluate: `minheap.poll();`,
      expected: 1,
    },
    {
      id: 4,
      name: 'list, correct 2nd item',
      inherit: [1, 3],
      code: `minheap.poll();`,
      evaluate: `minheap.poll();`,
      expected: 2,
    },
    {
      id: 5,
      name: 'list, correct 3rd item',
      inherit: [1, 3, 4],
      code: `minheap.poll();`,
      evaluate: `minheap.poll();`,
      expected: 3,
    },
    {
      id: 6,
      name: 'list, correct 4th item',
      inherit: [1, 3, 4, 5],
      code: `minheap.poll();`,
      evaluate: `minheap.poll();`,
      expected: 4,
    },
    {
      id: 7,
      name: 'list, correct 5th item',
      inherit: [1, 3, 4, 5, 6],
      code: `minheap.poll();`,
      evaluate: `minheap.poll();`,
      expected: 5,
    },
  ],
  setupCode: `${MIN_HEAP_CHILD_FNS} ${MIN_HEAP_HEAPIFY_DOWN} ${MIN_HEAP_SWAP}`,
  source: [],
  tags: [INTERMEDIATE, HEAP, DATA_STRUCTURE],
  solution,
};
