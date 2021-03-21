import { ALGORITHM, BINARY_SEARCH } from '../constants.js';

const solution = [
  { stage: 0, text: '' },
  { stage: 0, text: 'function count_rotations(arr) {' },
  { stage: 1, text: '  let start = 0;' },
  { stage: 1, text: '  let end = arr.length - 1;' },
  { stage: 0, text: '' },
  { stage: 2, text: '  while (start < end) {' },
  { stage: 3, text: '    let mid = Math.floor(start + (end - start) / 2);' },
  { stage: 4, text: '    if (mid < end && arr[mid] > arr[mid + 1]) {' },
  { stage: 5, text: '      return mid + 1;' },
  { stage: 4, text: '    }' },
  { stage: 0, text: '' },
  { stage: 6, text: '    if (mid > start && arr[mid - 1] > arr[mid]) {' },
  { stage: 7, text: '      return mid;' },
  { stage: 6, text: '    }' },
  { stage: 0, text: '' },
  { stage: 8, text: '    if (arr[start] < arr[mid]) {' },
  { stage: 9, text: '      start = mid + 1;' },
  { stage: 8, text: '    } else {' },
  { stage: 10, text: '      end = mid - 1;' },
  { stage: 8, text: '    }' },
  { stage: 2, text: '  }' },
  { stage: 0, text: '' },
  { stage: 11, text: '  return 0;' },
  { stage: 0, text: '}' },
  { stage: 0, text: '' },
];

export const data = {
  problemID: 183,
  problemName: `Rotation Count`,
  problemText: `Given an array of numbers which is sorted in ascending order and is rotated ‘k’ times around a pivot, find ‘k’.

  You can assume that the array does not have any duplicates.`,
  testCases: [
    {
      id: 1,
      name: 'example 1',
      inherit: [],
      code: ``,
      evaluate: `count_rotations([10, 15, 1, 3, 8]);`,
      expected: 2,
    },
    {
      id: 2,
      name: 'example 2',
      inherit: [],
      code: ``,
      evaluate: `count_rotations([4, 5, 7, 9, 10, -1, 2]);`,
      expected: 5,
    },
    {
      id: 3,
      name: 'example 3',
      inherit: [],
      code: ``,
      evaluate: `count_rotations([1, 3, 8, 10]);`,
      expected: 0,
    },
  ],
  setupCode: ``,
  source: ['https://www.educative.io/courses/grokking-the-coding-interview/R1v4P0R7VZw'],
  tags: [BINARY_SEARCH, ALGORITHM],
  solution,
};
