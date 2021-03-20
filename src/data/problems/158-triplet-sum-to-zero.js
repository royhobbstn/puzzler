import { ALGORITHM, TWO_POINTERS, INTERMEDIATE } from '../constants.js';

const solution = [
  { stage: 0, text: '' },
  { stage: 0, text: 'function search_triplets(arr) {' },
  { stage: 1, text: '  arr.sort((a, b) => a - b);' },
  { stage: 2, text: '  const triplets = [];' },
  { stage: 0, text: '' },
  { stage: 3, text: '  for (let i = 0; i < arr.length; i++) {' },
  { stage: 4, text: '    if (i > 0 && arr[i] === arr[i - 1]) {' },
  { stage: 5, text: '      continue;' },
  { stage: 4, text: '    }' },
  { stage: 6, text: '    search_pair(arr, -arr[i], i + 1, triplets);' },
  { stage: 3, text: '  }' },
  { stage: 0, text: '' },
  { stage: 7, text: '  return triplets;' },
  { stage: 0, text: '}' },
  { stage: 0, text: '' },
  { stage: 8, text: 'function search_pair(arr, target_sum, left, triplets) {' },
  { stage: 9, text: '  let right = arr.length - 1;' },
  { stage: 0, text: '' },
  { stage: 10, text: '  while (left < right) {' },
  { stage: 11, text: '    const current_sum = arr[left] + arr[right];' },
  { stage: 12, text: '    if (current_sum === target_sum) {' },
  { stage: 13, text: '      triplets.push([-target_sum, arr[left], arr[right]]);' },
  { stage: 14, text: '      left += 1;' },
  { stage: 14, text: '      right -= 1;' },
  { stage: 15, text: '      while (left < right && arr[left] === arr[left - 1]) {' },
  { stage: 16, text: '        left += 1;' },
  { stage: 15, text: '      }' },
  { stage: 17, text: '      while (left < right && arr[right] === arr[right + 1]) {' },
  { stage: 18, text: '        right -= 1;' },
  { stage: 17, text: '      }' },
  { stage: 12, text: '    } else if (target_sum > current_sum) {' },
  { stage: 19, text: '      left += 1;' },
  { stage: 12, text: '    } else {' },
  { stage: 20, text: '      right -= 1;' },
  { stage: 12, text: '    }' },
  { stage: 0, text: '' },
  { stage: 10, text: '  }' },
  { stage: 0, text: '' },
  { stage: 8, text: '}' },
  { stage: 0, text: '' },
];

export const data = {
  problemID: 158,
  problemName: `Triplet Sum to Zero`,
  problemText: `Given an array of unsorted numbers, find all unique triplets in it that add up to zero.`,
  testCases: [
    {
      id: 1,
      name: 'example 1',
      inherit: [],
      code: ``,
      evaluate: `search_triplets([-3, 0, 1, 2, -1, 1, -2]);`,
      expected: JSON.stringify([
        [-3, 1, 2],
        [-2, 0, 2],
        [-2, 1, 1],
        [-1, 0, 1],
      ]),
    },
    {
      id: 2,
      name: 'example 2',
      inherit: [],
      code: ``,
      evaluate: `search_triplets([-5, 2, -1, -2, 3]);`,
      expected: JSON.stringify([
        [-5, 2, 3],
        [-2, -1, 3],
      ]),
    },
  ],
  setupCode: ``,
  source: [],
  tags: [INTERMEDIATE, TWO_POINTERS, ALGORITHM],
  solution,
};
