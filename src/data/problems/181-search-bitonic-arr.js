import { ALGORITHM, BINARY_SEARCH } from '../constants.ts';

const solution = [
  { stage: 0, text: '' },
  { stage: 0, text: 'function search_bitonic_array(arr, key) {' },
  { stage: 1, text: '  const maxIndex = find_max(arr);' },
  { stage: 2, text: '  const keyIndex = binary_search(arr, key, 0, maxIndex);' },
  { stage: 3, text: '  if (keyIndex !== -1) {' },
  { stage: 4, text: '    return keyIndex;' },
  { stage: 3, text: '  }' },
  { stage: 0, text: '' },
  { stage: 5, text: '  return binary_search(arr, key, maxIndex + 1, arr.length - 1);' },
  { stage: 0, text: '}' },
  { stage: 0, text: '' },
  { stage: 6, text: 'function find_max(arr) {' },
  { stage: 7, text: '  let start = 0;' },
  { stage: 7, text: '  let end = arr.length - 1;' },
  { stage: 0, text: '' },
  { stage: 8, text: '  while (start < end) {' },
  { stage: 9, text: '    const mid = Math.floor(start + (end - start) / 2);' },
  { stage: 10, text: '    if (arr[mid] > arr[mid + 1]) {' },
  { stage: 11, text: '      end = mid;' },
  { stage: 10, text: '    } else {' },
  { stage: 12, text: '      start = mid + 1;' },
  { stage: 10, text: '    }' },
  { stage: 8, text: '  }' },
  { stage: 0, text: '' },
  { stage: 13, text: '  return start;' },
  { stage: 6, text: '}' },
  { stage: 0, text: '' },
  { stage: 14, text: 'function binary_search(arr, key, start, end) {' },
  { stage: 15, text: '  while (start <= end) {' },
  { stage: 16, text: '    const mid = Math.floor(start + (end - start) / 2);' },
  { stage: 17, text: '    if (key === arr[mid]) {' },
  { stage: 18, text: '      return mid;' },
  { stage: 17, text: '    }' },
  { stage: 0, text: '' },
  { stage: 19, text: '    if (arr[start] < arr[end]) {' },
  { stage: 20, text: '      if (key < arr[mid]) {' },
  { stage: 21, text: '        end = mid - 1;' },
  { stage: 20, text: '      } else {' },
  { stage: 21, text: '        start = mid + 1;' },
  { stage: 20, text: '      }' },
  { stage: 19, text: '    } else {' },
  { stage: 22, text: '      if (key > arr[mid]) {' },
  { stage: 23, text: '        end = mid - 1;' },
  { stage: 22, text: '      } else {' },
  { stage: 23, text: '        start = mid + 1;' },
  { stage: 22, text: '      }' },
  { stage: 19, text: '    }' },
  { stage: 15, text: '  }' },
  { stage: 0, text: '' },
  { stage: 24, text: '  return -1;' },
  { stage: 14, text: '}' },
  { stage: 0, text: '' },
];

export const data = {
  problemID: 181,
  problemName: `Search Bitonic Array`,
  problemText: `Given a Bitonic array, find if a given ‘key’ is present in it. An array is considered bitonic if it is monotonically increasing and then monotonically decreasing. Monotonically increasing or decreasing means that for any index i in the array arr[i] != arr[i+1].

  Write a function to return the index of the ‘key’. If the ‘key’ is not present, return -1.`,
  testCases: [
    {
      id: 1,
      name: 'example 1',
      inherit: [],
      code: ``,
      evaluate: `search_bitonic_array([1, 3, 8, 4, 3], 4);`,
      expected: 3,
    },
    {
      id: 2,
      name: 'example 2',
      inherit: [],
      code: ``,
      evaluate: `search_bitonic_array([3, 8, 3, 1], 8);`,
      expected: 1,
    },
    {
      id: 3,
      name: 'example 3',
      inherit: [],
      code: ``,
      evaluate: `search_bitonic_array([1, 3, 8, 12], 12);`,
      expected: 3,
    },
    {
      id: 4,
      name: 'example 4',
      inherit: [],
      code: ``,
      evaluate: `search_bitonic_array([10, 9, 8], 10);`,
      expected: 0,
    },
  ],
  setupCode: ``,
  source: ['https://www.educative.io/courses/grokking-the-coding-interview/7n3BlOvqW0r'],
  tags: [BINARY_SEARCH, ALGORITHM],
  solution,
};
