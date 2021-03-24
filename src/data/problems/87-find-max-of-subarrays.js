import { ALGORITHM, SLIDING_WINDOW } from '../constants.js';

const solution = [
  { stage: 0, text: '' },
  { stage: 0, text: 'function max_sub_array_of_size_k(k, arr) {' },
  { stage: 1, text: '  let maxSum = 0;' },
  { stage: 1, text: '  let windowSum = 0;' },
  { stage: 1, text: '  let windowStart = 0;' },
  { stage: 0, text: '' },
  { stage: 2, text: '  for (let windowEnd = 0; windowEnd < arr.length; windowEnd++) {' },
  { stage: 3, text: '    windowSum += arr[windowEnd];' },
  {
    stage: -4,
    text: '    // only when window is "k" elements or larger do we start comparing to max',
  },
  { stage: 4, text: '    if (windowEnd >= k - 1) {' },
  { stage: 5, text: '      maxSum = Math.max(maxSum, windowSum);' },
  { stage: -6, text: '      // window is currently at k elements' },
  {
    stage: -6,
    text: '      // in preparation for next iteration, subtract number at start of window from sum',
  },
  { stage: 6, text: '      windowSum -= arr[windowStart];' },
  { stage: 7, text: '      windowStart += 1;' },
  { stage: 4, text: '    }' },
  { stage: 2, text: '  }' },
  { stage: 0, text: '' },
  { stage: 8, text: '  return maxSum;' },
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
  source: ['https://www.educative.io/courses/grokking-the-coding-interview/JPKr0kqLGNP'],
  tags: [SLIDING_WINDOW, ALGORITHM],
  solution,
};
