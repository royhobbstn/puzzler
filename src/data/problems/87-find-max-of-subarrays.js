import { ALGORITHM, SLIDING_WINDOW, BEGINNER } from '../constants.js';

const solution = [
  { stage: 0, text: '' },
  { stage: 0, text: 'function max_sub_array_of_size_k(k, arr) {' },
  { stage: 1, text: '  let maxSum = 0;' },
  { stage: 1, text: '  let windowSum = 0;' },
  { stage: 0, text: '' },
  { stage: 2, text: '  for (let i = 0; i < arr.length - k + 1; i++) {' },
  { stage: 3, text: '    windowSum = 0;' },
  { stage: 4, text: '    for (let j = i; j < i + k; j++) {' },
  { stage: 5, text: '      windowSum += arr[j];' },
  { stage: 4, text: '    }' },
  { stage: 6, text: '    maxSum = Math.max(maxSum, windowSum);' },
  { stage: 2, text: '  }' },
  { stage: 0, text: '' },
  { stage: 7, text: '  return maxSum;' },
  { stage: 0, text: '}' },
  { stage: 0, text: '' },
];

export const data = {
  problemID: 87,
  problemName: `Find maximum of subarrays.`,
  problemText: `Given an array of positive numbers and a positive number ‘k,’ find the maximum sum of any contiguous subarray of size ‘k’.`,
  testCases: [
    {
      id: 1,
      name: 'example 1',
      inherit: [],
      code: ``,
      evaluate: `max_sub_array_of_size_k(3, [2, 1, 5, 1, 3, 2]);`,
      expected: 9,
    },
    {
      id: 2,
      name: 'example 2',
      inherit: [],
      code: ``,
      evaluate: `max_sub_array_of_size_k(2, [2, 3, 4, 1, 5]);`,
      expected: 7,
    },
  ],
  setupCode: ``,
  source: [],
  tags: [BEGINNER, SLIDING_WINDOW, ALGORITHM],
  solution,
};
