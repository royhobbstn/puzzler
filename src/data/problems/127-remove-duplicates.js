import { ALGORITHM, TEMP, INTERMEDIATE } from '../constants.js';

const solution = [
  { stage: 0, text: '' },
  { stage: 0, text: 'function remove_duplicates(arr) {' },
  { stage: 1, text: '  let nextNonDuplicate = 1;' },
  { stage: 0, text: '' },
  { stage: 1, text: '  let i = 1;' },
  { stage: 2, text: '  while (i < arr.length) {' },
  { stage: 3, text: '    if (arr[nextNonDuplicate - 1] !== arr[i]) {' },
  { stage: 4, text: '      arr[nextNonDuplicate] = arr[i];' },
  { stage: 4, text: '      nextNonDuplicate += 1;' },
  { stage: 3, text: '    }' },
  { stage: 5, text: '    i += 1;' },
  { stage: 2, text: '  }' },
  { stage: 0, text: '' },
  { stage: 5, text: '  return nextNonDuplicate;' },
  { stage: 0, text: '}' },
  { stage: 0, text: '' },
];

export const data = {
  problemID: 127,
  problemName: `Remove Duplicates in Sorted Array`,
  problemText: `Given an array of sorted numbers, remove all duplicates from it. You should not use any extra space; after removing the duplicates in-place return the length of the subarray that has no duplicate in it.`,
  testCases: [
    {
      id: 1,
      name: 'example 1',
      inherit: [],
      code: ``,
      evaluate: `remove_duplicates([2, 3, 3, 3, 6, 9, 9]);`,
      expected: 4,
    },
    {
      id: 2,
      name: 'example 2',
      inherit: [],
      code: ``,
      evaluate: `remove_duplicates([2, 2, 2, 11]);`,
      expected: 2,
    },
  ],
  setupCode: ``,
  tags: [TEMP, ALGORITHM],
  difficulty: INTERMEDIATE,
  solution: {
    stages: [0, 30, 60, 90, 120, 180],
    solutionLines: solution,
  },
};
