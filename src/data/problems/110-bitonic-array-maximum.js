import { ALGORITHM, TEMP, INTERMEDIATE } from '../constants.js';

const solution = [
  { stage: 0, text: '' },
  { stage: 0, text: 'function find_max_in_bitonic_array(arr) {' },
  { stage: 1, text: '  let start = 0;' },
  { stage: 1, text: '  let end = arr.length - 1;' },
  { stage: 0, text: '' },
  { stage: 2, text: '  while (start < end) {' },
  { stage: 3, text: '    let mid = Math.floor(start + (end - start) / 2);' },
  { stage: 4, text: '    if (arr[mid] > arr[mid + 1]) {' },
  { stage: 5, text: '      end = mid;' },
  { stage: 4, text: '    } else {' },
  { stage: 5, text: '      start = mid + 1;' },
  { stage: 4, text: '    }' },
  { stage: 2, text: '  }' },
  { stage: 0, text: '' },
  { stage: 6, text: '  return arr[start];' },
  { stage: 0, text: '}' },
  { stage: 0, text: '' },
];

export const data = {
  problemID: 110,
  problemName: `Bitonic Array Maximum`,
  problemText: `Find the maximum value in a given Bitonic array. An array is considered bitonic if it is monotonically increasing and then monotonically decreasing. Monotonically increasing or decreasing means that for any index i in the array arr[i] != arr[i+1].`,
  testCases: [
    {
      id: 1,
      name: 'example 1',
      inherit: [],
      code: ``,
      evaluate: `find_max_in_bitonic_array([1, 3, 8, 12, 4, 2]);`,
      expected: 12,
    },
    {
      id: 2,
      name: 'example 2',
      inherit: [],
      code: ``,
      evaluate: `find_max_in_bitonic_array([3, 8, 3, 1]);`,
      expected: 8,
    },
    {
      id: 3,
      name: 'example 3',
      inherit: [],
      code: ``,
      evaluate: `find_max_in_bitonic_array([1, 3, 8, 12]);`,
      expected: 12,
    },
    {
      id: 4,
      name: 'example 4',
      inherit: [],
      code: ``,
      evaluate: `find_max_in_bitonic_array([10, 9, 8]);`,
      expected: 10,
    },
  ],
  setupCode: ``,
  tags: [INTERMEDIATE, TEMP, ALGORITHM],
  solution,
};
