import { ALGORITHM, HEAP } from '../constants.ts';
import { MAX_HEAP_CLASS_PLAIN } from '../code-imports/import-index.js';

const solution = [
  { stage: 0, text: '' },
  { stage: -1, text: 'class MaxHeap {' },
  { stage: -1, text: '  /*' },
  { stage: -1, text: '    add(item: Number)' },
  { stage: -1, text: '    poll() Number' },
  { stage: -1, text: '    peek() Number' },
  { stage: -1, text: '  */' },
  { stage: -1, text: '}' },
  { stage: 0, text: '' },
  { stage: 0, text: '' },
  { stage: 0, text: 'function find_Kth_smallest_number(nums, k) {' },
  { stage: 0, text: '' },
  { stage: 1, text: '  const maxHeap = new MaxHeap();' },
  { stage: 2, text: '  for (let i = 0; i < k; i++) {' },
  { stage: 3, text: '    maxHeap.add(nums[i]);' },
  { stage: 2, text: '  }' },
  { stage: 0, text: '' },
  { stage: 4, text: '  for (let i = k; i < nums.length; i++) {' },
  { stage: 5, text: '    if (nums[i] < maxHeap.peek()) {' },
  { stage: 6, text: '      maxHeap.poll();' },
  { stage: 6, text: '      maxHeap.add(nums[i]);' },
  { stage: 5, text: '    }' },
  { stage: 4, text: '  }' },
  { stage: 0, text: '' },
  { stage: 7, text: '  return maxHeap.peek();' },
  { stage: 0, text: '}' },
  { stage: 0, text: '' },
];

export const data = {
  problemID: 115,
  problemName: `Find Kth Smallest Number`,
  problemText: `Given an unsorted array of numbers, find Kth smallest number in it.

Please note that it is the Kth smallest number in the sorted order, not the Kth distinct element.`,
  testCases: [
    {
      id: 1,
      name: 'example 1',
      inherit: [],
      code: ``,
      evaluate: `find_Kth_smallest_number([1, 5, 12, 2, 11, 5], 3);`,
      expected: 5,
    },
    {
      id: 2,
      name: 'example 2',
      inherit: [],
      code: ``,
      evaluate: `find_Kth_smallest_number([1, 5, 12, 2, 11, 5], 4);`,
      expected: 5,
    },
    {
      id: 3,
      name: 'example 3',
      inherit: [],
      code: ``,
      evaluate: `find_Kth_smallest_number([5, 12, 11, -1, 12], 3);`,
      expected: 11,
    },
  ],
  setupCode: `${MAX_HEAP_CLASS_PLAIN}`,
  source: ['https://www.educative.io/courses/grokking-the-coding-interview/gxxPGn8vE8G'],
  tags: [HEAP, ALGORITHM],
  solution,
};
