import { ALGORITHM, SLIDING_WINDOW } from '../constants.js';

const solution = [
  { stage: 0, text: '' },
  { stage: 0, text: 'function smallest_subarray_with_given_sum(s, arr) {' },
  { stage: 1, text: '  let windowSum = 0;' },
  { stage: 0, text: '' },
  {
    stage: -1,
    text:
      "  // since we'll be using Math.min for comparison, initialize starting value at Infinity",
  },
  { stage: 1, text: '  let minLength = Infinity;' },
  { stage: 1, text: '  let windowStart = 0;' },
  { stage: 0, text: '' },
  { stage: 2, text: '  for (let windowEnd = 0; windowEnd < arr.length; windowEnd++) {' },
  { stage: 3, text: '    windowSum += arr[windowEnd];' },
  { stage: 0, text: '' },
  { stage: -4, text: '    // each time sum > s, we check to see if subarray is shortest' },
  {
    stage: -4,
    text: '    // sum might still be > s after subtracting item at windowStart, so use a loop',
  },
  { stage: 4, text: '    while (windowSum >= s) {' },
  { stage: 5, text: '      minLength = Math.min(minLength, windowEnd - windowStart + 1);' },
  { stage: 6, text: '      windowSum -= arr[windowStart];' },
  { stage: 6, text: '      windowStart += 1;' },
  { stage: 4, text: '    }' },
  { stage: 2, text: '  }' },
  { stage: 0, text: '' },
  { stage: -7, text: '  // a value of Infinity means we did not find a substring with sum > s' },
  { stage: 7, text: '  if (minLength === Infinity) {' },
  { stage: 7, text: '    return 0;' },
  { stage: 7, text: '  }' },
  { stage: 0, text: '' },
  { stage: 8, text: '  return minLength;' },
  { stage: 0, text: '}' },
  { stage: 0, text: '' },
];

export const data = {
  problemID: 88,
  problemName: `Smallest Subarray given Sum.`,
  problemText: `Given an array of positive numbers and a positive number ‘S,’ find the length of the smallest contiguous subarray whose sum is greater than or equal to ‘S’. Return 0 if no such subarray exists.`,
  testCases: [
    {
      id: 1,
      name: 'example 1',
      inherit: [],
      code: ``,
      evaluate: `smallest_subarray_with_given_sum(7, [2, 1, 5, 2, 3, 2]);`,
      expected: 2,
    },
    {
      id: 2,
      name: 'example 2',
      inherit: [],
      code: ``,
      evaluate: `smallest_subarray_with_given_sum(7, [2, 1, 5, 2, 8]);`,
      expected: 1,
    },
    {
      id: 3,
      name: 'example 3',
      inherit: [],
      code: ``,
      evaluate: `smallest_subarray_with_given_sum(8, [3, 4, 1, 1, 6]);`,
      expected: 3,
    },
  ],
  setupCode: ``,
  source: ['https://www.educative.io/courses/grokking-the-coding-interview/7XMlMEQPnnQ'],
  tags: [SLIDING_WINDOW, ALGORITHM],
  solution,
};
