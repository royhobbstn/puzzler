import { ALGORITHM, CYCLIC_SORT } from '../constants.js';

const solution = [
  { stage: 0, text: '' },
  { stage: 0, text: 'function cyclic_sort(nums) {' },
  { stage: 0, text: '' },
  { stage: 1, text: '  let i = 0;' },
  { stage: 2, text: '  while (i < nums.length) {' },
  { stage: 3, text: '    const j = nums[i] - 1;' },
  { stage: 4, text: '    if (nums[i] !== nums[j]) {' },
  { stage: 5, text: '      [nums[i], nums[j]] = [nums[j], nums[i]];' },
  { stage: 4, text: '    } else {' },
  { stage: 6, text: '      i += 1;' },
  { stage: 4, text: '    }' },
  { stage: 2, text: '  }' },
  { stage: 0, text: '' },
  { stage: 7, text: '  return nums;' },
  { stage: 0, text: '}' },
  { stage: 0, text: '' },
];

export const data = {
  problemID: 99,
  problemName: `Implement Cyclic Sort`,
  problemText: `We are given an array containing ‘n’ objects. Each object, when created, was assigned a unique number from 1 to ‘n’ based on their creation sequence. This means that the object with sequence number ‘3’ was created just before the object with sequence number ‘4’.

Write a function to sort the objects in-place on their creation sequence number in O(n)O(n) and without any extra space. For simplicity, let’s assume we are passed an integer array containing only the sequence numbers, though each number is actually an object.
`,
  testCases: [
    {
      id: 1,
      name: 'example 1',
      inherit: [],
      code: ``,
      evaluate: `cyclic_sort([3, 1, 5, 4, 2]);`,
      expected: JSON.stringify([1, 2, 3, 4, 5]),
    },
    {
      id: 2,
      name: 'example 2',
      inherit: [],
      code: ``,
      evaluate: `cyclic_sort([2, 6, 4, 3, 1, 5]);`,
      expected: JSON.stringify([1, 2, 3, 4, 5, 6]),
    },
    {
      id: 3,
      name: 'example 3',
      inherit: [],
      code: ``,
      evaluate: `cyclic_sort([1, 5, 6, 4, 3, 2]);`,
      expected: JSON.stringify([1, 2, 3, 4, 5, 6]),
    },
  ],
  setupCode: ``,
  source: ['https://www.educative.io/courses/grokking-the-coding-interview/B8qXVqVwDKY'],
  tags: [CYCLIC_SORT, ALGORITHM],
  solution,
};
