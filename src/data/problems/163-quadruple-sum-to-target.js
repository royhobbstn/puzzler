import { ALGORITHM, TWO_POINTERS } from '../constants.js';

const solution = [
  { stage: 0, text: '' },
  { stage: 0, text: 'function search_quadruplets(arr, target) {' },
  { stage: 1, text: '  arr.sort((a, b) => a - b);' },
  { stage: 1, text: '  const quadruplets = [];' },
  { stage: 0, text: '' },
  { stage: 2, text: '  for (let i = 0; i < arr.length - 3; i++) {' },
  { stage: 3, text: '    if (i > 0 && arr[i] === arr[i - 1]) {' },
  { stage: 4, text: '      continue;' },
  { stage: 3, text: '    }' },
  { stage: 5, text: '    for (let j = i + 1; j < arr.length - 2; j++) {' },
  { stage: 6, text: '      if (j > i + 1 && arr[j] === arr[j - 1]) {' },
  { stage: 7, text: '        continue;' },
  { stage: 6, text: '      }' },
  { stage: 8, text: '      search_pairs(arr, target, i, j, quadruplets);' },
  { stage: 5, text: '    }' },
  { stage: 2, text: '  }' },
  { stage: 9, text: '  return quadruplets;' },
  { stage: 0, text: '}' },
  { stage: 0, text: '' },
  { stage: 10, text: 'function search_pairs(arr, targetSum, first, second, quadruplets) {' },
  { stage: 11, text: '  let left = second + 1;' },
  { stage: 11, text: '  let right = arr.length - 1;' },
  { stage: 0, text: '' },
  { stage: 12, text: '  while (left < right) {' },
  { stage: 13, text: '    let sum = arr[first] + arr[second] + arr[left] + arr[right];' },
  { stage: 14, text: '    if (sum === targetSum) {' },
  { stage: 15, text: '      quadruplets.push([arr[first], arr[second], arr[left], arr[right]]);' },
  { stage: 16, text: '      left += 1;' },
  { stage: 16, text: '      right -= 1;' },
  { stage: 17, text: '      while (left < right && arr[left] === arr[left - 1]) {' },
  { stage: 18, text: '        left += 1;' },
  { stage: 17, text: '      }' },
  { stage: 19, text: '      while (left < right && arr[right] === arr[right + 1]) {' },
  { stage: 20, text: '        right -= 1;' },
  { stage: 19, text: '      }' },
  { stage: 14, text: '    } else if (sum < targetSum) {' },
  { stage: 21, text: '      left += 1;' },
  { stage: 14, text: '    } else {' },
  { stage: 22, text: '      right -= 1;' },
  { stage: 14, text: '    }' },
  { stage: 0, text: '' },
  { stage: 12, text: '  }' },
  { stage: 0, text: '' },
  { stage: 10, text: '}' },
  { stage: 0, text: '' },
];

export const data = {
  problemID: 163,
  problemName: `Quadruple Sum to Target`,
  problemText: `Given an array of unsorted numbers and a target number, find all unique quadruplets in it, whose sum is equal to the target number.`,
  testCases: [
    {
      id: 1,
      name: 'example 1',
      inherit: [],
      code: ``,
      evaluate: `search_quadruplets([4, 1, 2, -1, 1, -3], 1);`,
      expected: JSON.stringify([
        [-3, -1, 1, 4],
        [-3, 1, 1, 2],
      ]),
    },
    {
      id: 2,
      name: 'example 2',
      inherit: [],
      code: ``,
      evaluate: `search_quadruplets([2, 0, -1, 1, -2, 2], 2);`,
      expected: JSON.stringify([
        [-2, 0, 2, 2],
        [-1, 0, 1, 2],
      ]),
    },
  ],
  setupCode: ``,
  source: ['https://www.educative.io/courses/grokking-the-coding-interview/B6XOq8KlkWo'],
  tags: [TWO_POINTERS, ALGORITHM],
  solution,
};
