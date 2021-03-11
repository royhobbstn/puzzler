import { ALGORITHM, SLIDING_WINDOW, BEGINNER } from '../constants.js';

const solution = [
  { stage: 0, text: '' },
  { stage: 0, text: 'function find_averages_of_subarrays(K, arr) {' },
  { stage: 1, text: '  const result = [];' },
  { stage: 2, text: '  let windowSum = 0.0;' },
  { stage: 2, text: '  let windowStart = 0;' },
  { stage: 3, text: '  for (let windowEnd = 0; windowEnd < arr.length; windowEnd++) {' },
  { stage: 4, text: '    windowSum += arr[windowEnd];' },
  { stage: 5, text: '    if (windowEnd >= K - 1) {' },
  { stage: 6, text: '      result.push(windowSum / K);' },
  { stage: 7, text: '      windowSum -= arr[windowStart];' },
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
  problemText: `Given an array, find the average of all contiguous subarrays of size ‘K’ in it.`,
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
  source: [],
  tags: [BEGINNER, SLIDING_WINDOW, ALGORITHM],
  solution,
};
