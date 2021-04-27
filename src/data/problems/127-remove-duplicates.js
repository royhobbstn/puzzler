import { ALGORITHM, TWO_POINTERS } from '../constants.ts';

const solution = [
  { stage: 0, text: '' },
  { stage: 0, text: 'function remove_duplicates(arr) {' },
  { stage: 0, text: '' },
  { stage: -1, text: '  // keeps track of position of current element minus any duplicates' },
  { stage: 1, text: '  let nextNonDuplicate = 1;' },
  {
    stage: -2,
    text:
      '  // start loop at 1, so we can compare to previous element in array (i-1) and be in range',
  },
  { stage: 2, text: '  let i = 1;' },
  { stage: 0, text: '' },
  { stage: 3, text: '  while (i < arr.length) {' },
  { stage: -4, text: '    // if the previous and current items are not the same' },
  { stage: 4, text: '    if (arr[nextNonDuplicate - 1] !== arr[i]) {' },
  {
    stage: -5,
    text: '      // move placement of current element to the position at nextNonDuplicate',
  },
  { stage: 5, text: '      arr[nextNonDuplicate] = arr[i];' },
  { stage: -6, text: '      // nextNonDuplicate is only updated when a non-duplicate is found' },
  { stage: 6, text: '      nextNonDuplicate += 1;' },
  { stage: 4, text: '    }' },
  {
    stage: -7,
    text: '    // in either scenario we increment i to look at the next item in the array',
  },
  { stage: 7, text: '    i += 1;' },
  { stage: 3, text: '  }' },
  { stage: 0, text: '' },
  { stage: 8, text: '  return nextNonDuplicate;' },
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
  source: ['https://www.educative.io/courses/grokking-the-coding-interview/mEEA22L5mNA'],
  tags: [TWO_POINTERS, ALGORITHM],
  solution,
};
