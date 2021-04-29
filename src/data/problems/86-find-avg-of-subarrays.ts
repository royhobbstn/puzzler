import { ALGORITHM, SLIDING_WINDOW } from '../constants';

const solution = [
  { stage: 0, text: '' },
  { stage: 0, text: 'function find_averages_of_subarrays(k, arr) {' },
  { stage: 1, text: '  const result = [];' },
  { stage: -2, text: '  // sum of numbers in current window' },
  { stage: 2, text: '  let windowSum = 0;' },
  { stage: -2, text: '  // window start index' },
  { stage: 2, text: '  let windowStart = 0;' },
  { stage: 3, text: '  for (let windowEnd = 0; windowEnd < arr.length; windowEnd++) {' },
  { stage: -4, text: '    // add next number to sum' },
  { stage: 4, text: '    windowSum += arr[windowEnd];' },
  {
    stage: -5,
    text:
      '    // only when index of windowEnd reaches kth number do we begin pushing to result array',
  },
  { stage: 5, text: '    if (windowEnd >= k - 1) {' },
  { stage: 6, text: '      result.push(windowSum / k);' },
  { stage: -7, text: '      // subtract item at beginning of window from sum' },
  { stage: 7, text: '      windowSum -= arr[windowStart];' },
  {
    stage: -7,
    text: '      // increment start of window so it no longer includes subtracted item',
  },
  { stage: 7, text: '      windowStart += 1;' },
  { stage: 5, text: '    }' },
  { stage: 3, text: '  }' },
  { stage: 0, text: '' },
  { stage: 8, text: '  return result;' },
  { stage: 0, text: '}' },
  { stage: 0, text: '' },
];

export const data = {
  problemID: 86,
  problemName: `Find Average of Subarrays`,
  problemText: `Given an array, find the average of all contiguous subarrays of size ‘k’ in it.`,
  testCases: [
    {
      id: 1,
      name: 'example 1',
      inherit: [],
      code: ``,
      evaluate: `find_averages_of_subarrays(5, [1, 3, 2, 6, -1, 4, 1, 8, 2]);`,
      expected: JSON.stringify([2.2, 2.8, 2.4, 3.6, 2.8]),
    },
  ],
  setupCode: ``,
  source: ['https://www.educative.io/courses/grokking-the-coding-interview/7D5NNZWQ8Wr'],
  tags: [SLIDING_WINDOW, ALGORITHM],
  solution,
};
