import { ALGORITHM, BINARY_SEARCH, INTERMEDIATE } from '../constants.js';

const solution = [
  { stage: 0, text: '' },
  { stage: 0, text: 'function search_ceiling_of_a_number(arr, key) {' },
  { stage: 1, text: '  const n = arr.length;' },
  { stage: 2, text: '  if (key > arr[n - 1]) {' },
  { stage: 3, text: '    return -1;' },
  { stage: 2, text: '  }' },
  { stage: 0, text: '' },
  { stage: 4, text: '  let start = 0;' },
  { stage: 4, text: '  let end = n - 1;' },
  { stage: 0, text: '' },
  { stage: 5, text: '  while (start <= end) {' },
  { stage: 6, text: '    let mid = Math.floor(start + (end - start) / 2);' },
  { stage: 7, text: '    if (key < arr[mid]) {' },
  { stage: 8, text: '      end = mid - 1;' },
  { stage: 7, text: '    } else if (key > arr[mid]) {' },
  { stage: 9, text: '      start = mid + 1;' },
  { stage: 7, text: '    } else {' },
  { stage: 10, text: '      return mid;' },
  { stage: 7, text: '    }' },
  { stage: 5, text: '  }' },
  { stage: 0, text: '' },
  { stage: 11, text: '  return start;' },
  { stage: 0, text: '}' },
  { stage: 0, text: '' },
];

export const data = {
  problemID: 176,
  problemName: `Ceiling of a Number`,
  problemText: `Given an array of numbers sorted in an ascending order, find the ceiling of a given number ‘key’. The ceiling of the ‘key’ will be the smallest element in the given array greater than or equal to the ‘key’.

  Write a function to return the index of the ceiling of the ‘key’. If there isn’t any ceiling return -1.`,
  testCases: [
    {
      id: 1,
      name: 'example 1',
      inherit: [],
      code: ``,
      evaluate: `search_ceiling_of_a_number([4, 6, 10], 6);`,
      expected: 1,
    },
    {
      id: 2,
      name: 'example 2',
      inherit: [],
      code: ``,
      evaluate: `search_ceiling_of_a_number([1, 3, 8, 10, 15], 12);`,
      expected: 4,
    },
    {
      id: 3,
      name: 'example 3',
      inherit: [],
      code: ``,
      evaluate: `search_ceiling_of_a_number([4, 6, 10], 17);`,
      expected: -1,
    },
    {
      id: 4,
      name: 'example 4',
      inherit: [],
      code: ``,
      evaluate: `search_ceiling_of_a_number([4, 6, 10], -1);`,
      expected: 0,
    },
  ],
  setupCode: ``,
  source: [],
  tags: [INTERMEDIATE, BINARY_SEARCH, ALGORITHM],
  solution,
};
