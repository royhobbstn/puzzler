import { ALGORITHM, TEMP, INTERMEDIATE } from '../constants.js';

const solution = [
  { stage: 0, text: '' },
  { stage: 0, text: 'function pair_with_target_sum(arr, targetSum) {' },
  { stage: 1, text: '  let left = 0;' },
  { stage: 1, text: '  let right = arr.length - 1;' },
  { stage: 2, text: '  while (left < right) {' },
  { stage: 3, text: '    const currentSum = arr[left] + arr[right];' },
  { stage: 4, text: '    if (currentSum === targetSum) {' },
  { stage: 4, text: '      return [left, right];' },
  { stage: 4, text: '    }' },
  { stage: 0, text: '' },
  { stage: 5, text: '    if (targetSum > currentSum) {' },
  { stage: 6, text: '      left += 1;' },
  { stage: 5, text: '    } else {' },
  { stage: 6, text: '      right -= 1;' },
  { stage: 5, text: '    }' },
  { stage: 2, text: '  }' },
  { stage: 0, text: '' },
  { stage: 7, text: '  return [-1, -1];' },
  { stage: 0, text: '}' },
  { stage: 0, text: '' },
];

export const data = {
  problemID: 126,
  problemName: `Pair with Target Sum`,
  problemText: `Given an array of sorted numbers and a target sum, find a pair in the array whose sum is equal to the given target.

Write a function to return the indices of the two numbers (i.e. the pair) such that they add up to the given target.
  `,
  testCases: [
    {
      id: 1,
      name: 'example 1',
      inherit: [],
      code: ``,
      evaluate: `pair_with_target_sum([1, 2, 3, 4, 6], 6);`,
      expected: JSON.stringify([1, 3]),
    },
    {
      id: 2,
      name: 'example 2',
      inherit: [],
      code: ``,
      evaluate: `pair_with_target_sum([2, 5, 9, 11], 11);`,
      expected: JSON.stringify([0, 2]),
    },
  ],
  setupCode: ``,
  source: ['https://www.educative.io/courses/grokking-the-coding-interview/xog6q15W9GP'],
  tags: [INTERMEDIATE, TEMP, ALGORITHM],
  solution,
};
