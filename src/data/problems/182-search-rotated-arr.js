import { ALGORITHM, BINARY_SEARCH } from '../constants.ts';

const solution = [
  { stage: 0, text: '' },
  { stage: 0, text: 'function search_rotated_array(arr, key) {' },
  { stage: 1, text: '  let start = 0;' },
  { stage: 2, text: '  let end = arr.length - 1;' },
  { stage: 0, text: '' },
  { stage: 3, text: '  while (start <= end) {' },
  { stage: 4, text: '    let mid = Math.floor(start + (end - start) / 2);' },
  { stage: 0, text: '' },
  { stage: -5, text: "    // if we've found the key, we can return right away" },
  { stage: 5, text: '    if (arr[mid] === key) {' },
  { stage: 6, text: '      return mid;' },
  { stage: 5, text: '    }' },
  { stage: 0, text: '' },
  { stage: -7, text: '    // the numbers from start to middle are sorted in ascending order' },
  { stage: 7, text: '    if (arr[start] <= arr[mid]) {' },
  { stage: 0, text: '' },
  { stage: -8, text: '      // if the key is somewhere in the range of start to middle' },
  { stage: 8, text: '      if (key >= arr[start] && key < arr[mid]) {' },
  { stage: 9, text: '        end = mid - 1;' },
  { stage: 8, text: '      } else {' },
  { stage: 10, text: '        start = mid + 1;' },
  { stage: 8, text: '      }' },
  { stage: 7, text: '    } else {' },
  { stage: -7, text: '      // the numbers from middle to end are sorted in ascending order' },
  { stage: 0, text: '' },
  { stage: -11, text: '      // if the key is in the range of middle to end' },
  { stage: 11, text: '      if (key > arr[mid] && key <= arr[end]) {' },
  { stage: 12, text: '        start = mid + 1;' },
  { stage: 11, text: '      } else {' },
  { stage: 13, text: '        end = mid - 1;' },
  { stage: 11, text: '      }' },
  { stage: 7, text: '    }' },
  { stage: 3, text: '  }' },
  { stage: 0, text: '' },
  { stage: 14, text: '  return -1;' },
  { stage: 0, text: '}' },
  { stage: 0, text: '' },
];

export const data = {
  problemID: 182,
  problemName: `Search in Rotated Array`,
  problemText: `Given an array of numbers which is sorted in ascending order and also rotated by some arbitrary number, find if a given ‘key’ is present in it.

  Write a function to return the index of the ‘key’ in the rotated array. If the ‘key’ is not present, return -1. You can assume that the given array does not have any duplicates.`,
  testCases: [
    {
      id: 1,
      name: 'example 1',
      inherit: [],
      code: ``,
      evaluate: `search_rotated_array([10, 15, 1, 3, 8], 15);`,
      expected: 1,
    },
    {
      id: 2,
      name: 'example 2',
      inherit: [],
      code: ``,
      evaluate: `search_rotated_array([4, 5, 7, 9, 10, -1, 2], 10);`,
      expected: 4,
    },
  ],
  setupCode: ``,
  source: ['https://www.educative.io/courses/grokking-the-coding-interview/RMPVM2Y4PW0'],
  tags: [BINARY_SEARCH, ALGORITHM],
  solution,
};
