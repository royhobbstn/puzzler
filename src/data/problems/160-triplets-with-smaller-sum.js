import { ALGORITHM, TWO_POINTERS } from '../constants.js';

const solution = [
  { stage: 0, text: '' },
  { stage: 0, text: 'function triplet_with_smaller_sum(arr, target) {' },
  { stage: 1, text: '  arr.sort((a, b) => a - b);' },
  { stage: 2, text: '  let count = 0;' },
  { stage: 0, text: '' },
  { stage: 3, text: '  for (let i = 0; i < arr.length - 2; i++) {' },
  { stage: 4, text: '    count += search_pair(arr, target - arr[i], i);' },
  { stage: 3, text: '  }' },
  { stage: 0, text: '' },
  { stage: 5, text: '  return count;' },
  { stage: 0, text: '}' },
  { stage: 0, text: '' },
  { stage: 6, text: 'function search_pair(arr, target_sum, first) {' },
  { stage: 7, text: '  let count = 0;' },
  { stage: 8, text: '  let left = first + 1;' },
  { stage: 8, text: '  let right = arr.length - 1;' },
  { stage: 0, text: '' },
  { stage: 9, text: '  while (left < right) {' },
  { stage: 10, text: '    if (arr[left] + arr[right] < target_sum) {' },
  { stage: 11, text: '      count += right - left;' },
  { stage: 11, text: '      left += 1;' },
  { stage: 10, text: '    } else {' },
  { stage: 12, text: '      right -= 1;' },
  { stage: 10, text: '    }' },
  { stage: 9, text: '  }' },
  { stage: 0, text: '' },
  { stage: 13, text: '  return count;' },
  { stage: 6, text: '}' },
  { stage: 0, text: '' },
];

export const data = {
  problemID: 160,
  problemName: `Triplets with Smaller Sum`,
  problemText: `Given an array arr of unsorted numbers and a target sum, count all triplets in it such that arr[i] + arr[j] + arr[k] < target where i, j, and k are three different indices. Write a function to return the count of such triplets.`,
  testCases: [
    {
      id: 1,
      name: 'example 1',
      inherit: [],
      code: ``,
      evaluate: `triplet_with_smaller_sum([-1, 0, 2, 3], 3);`,
      expected: 2,
    },
    {
      id: 2,
      name: 'example 2',
      inherit: [],
      code: ``,
      evaluate: `triplet_with_smaller_sum([-1, 4, 2, 1, 3], 5);`,
      expected: 4,
    },
  ],
  setupCode: ``,
  source: [],
  tags: [TWO_POINTERS, ALGORITHM],
  solution,
};
