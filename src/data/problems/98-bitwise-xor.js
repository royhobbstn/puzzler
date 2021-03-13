import { ALGORITHM, BITWISE, EXPERT } from '../constants.js';

const solution = [
  { stage: 0, text: '' },
  { stage: 0, text: 'function find_single_number(arr) {' },
  { stage: 1, text: '  let num = 0;' },
  { stage: 2, text: '  for (let i = 0; i < arr.length; i++) {' },
  { stage: 3, text: '    num ^= arr[i];' },
  { stage: 2, text: '  }' },
  { stage: 0, text: '' },
  { stage: 4, text: '  return num;' },
  { stage: 0, text: '}' },
  { stage: 0, text: '' },
];

export const data = {
  problemID: 98,
  problemName: `Use Bitwise XOR`,
  problemText: `In a non-empty array of integers, every number appears twice except for one, find that single number.`,
  testCases: [
    {
      id: 1,
      name: 'example 1',
      inherit: [],
      code: ``,
      evaluate: `find_single_number([1, 4, 2, 1, 3, 2, 3]);`,
      expected: 4,
    },
    {
      id: 2,
      name: 'example 2',
      inherit: [],
      code: ``,
      evaluate: `find_single_number([7, 9, 7]);`,
      expected: 9,
    },
  ],
  setupCode: ``,
  source: ['https://www.educative.io/courses/grokking-the-coding-interview/gk20xz4VwpG'],
  tags: [EXPERT, BITWISE, ALGORITHM],
  solution,
};
