import { ALGORITHM, INTERMEDIATE, BINARY_SEARCH } from '../constants.js';

const solution = [
  { stage: 0, text: '' },
  { stage: 0, text: 'function search_min_diff_element(arr, key) {' },
  { stage: 1, text: '  if (key < arr[0]) {' },
  { stage: 2, text: '    return arr[0];' },
  { stage: 1, text: '  }' },
  { stage: 3, text: '  const n = arr.length;' },
  { stage: 4, text: '  if (key > arr[n - 1]) {' },
  { stage: 5, text: '    return arr[n - 1];' },
  { stage: 4, text: '  }' },
  { stage: 0, text: '' },
  { stage: 6, text: '  let start = 0;' },
  { stage: 6, text: '  let end = n - 1;' },
  { stage: 7, text: '  while (start <= end) {' },
  { stage: 8, text: '    let mid = Math.floor(start + (end - start) / 2);' },
  { stage: 9, text: '    if (key < arr[mid]) {' },
  { stage: 10, text: '      end = mid - 1;' },
  { stage: 9, text: '    } else if (key > arr[mid]) {' },
  { stage: 11, text: '      start = mid + 1;' },
  { stage: 9, text: '    } else {' },
  { stage: 12, text: '      return arr[mid];' },
  { stage: 9, text: '    }' },
  { stage: 7, text: '  }' },
  { stage: 0, text: '' },
  { stage: 13, text: '  if (arr[start] - key < key - arr[end]) {' },
  { stage: 14, text: '    return arr[start];' },
  { stage: 13, text: '  }' },
  { stage: 0, text: '' },
  { stage: 15, text: '  return arr[end];' },
  { stage: 0, text: '}' },
  { stage: 0, text: '' },
];

export const data = {
  problemID: 180,
  problemName: `Minimum Difference Element`,
  problemText: `Given an array of numbers sorted in ascending order, find the element in the array that has the minimum difference with the given ‘key’.`,
  testCases: [
    {
      id: 1,
      name: 'example 1',
      inherit: [],
      code: ``,
      evaluate: `search_min_diff_element([4, 6, 10], 7);`,
      expected: 6,
    },
    {
      id: 2,
      name: 'example 2',
      inherit: [],
      code: ``,
      evaluate: `search_min_diff_element([4, 6, 10], 4);`,
      expected: 4,
    },
    {
      id: 3,
      name: 'example 3',
      inherit: [],
      code: ``,
      evaluate: `search_min_diff_element([1, 3, 8, 10, 15], 12);`,
      expected: 10,
    },
    {
      id: 4,
      name: 'example 4',
      inherit: [],
      code: ``,
      evaluate: `search_min_diff_element([4, 6, 10], 17);`,
      expected: 10,
    },
  ],
  setupCode: ``,
  source: [],
  tags: [INTERMEDIATE, BINARY_SEARCH, ALGORITHM],
  solution,
};