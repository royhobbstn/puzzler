import { ALGORITHM, TWO_POINTERS } from '../constants';

const solution = [
  { stage: 0, text: '' },
  { stage: 0, text: 'function dutch_flag_sort(arr) {' },
  { stage: -1, text: "  // all elements to my left are 0's" },
  { stage: 1, text: '  let low = 0;' },
  { stage: -1, text: "  // all elements to my right are 2's" },
  { stage: 1, text: '  let high = arr.length - 1;' },
  { stage: 2, text: '  let i = 0;' },
  { stage: 0, text: '' },
  { stage: -3, text: "  // while iterating, move all 0's before low, and all 2's after high" },
  { stage: 3, text: '  while (i <= high) {' },
  { stage: 4, text: '    if (arr[i] === 0) {' },
  { stage: -5, text: '      // swap element at i, with element at low' },
  { stage: 5, text: '      [arr[i], arr[low]] = [arr[low], arr[i]];' },
  { stage: -6, text: '      // increment both i and low' },
  { stage: 6, text: '      i += 1;' },
  { stage: 6, text: '      low += 1;' },
  { stage: 4, text: '    } else if (arr[i] === 1) {' },
  {
    stage: -7,
    text: '      // 1 should be between low and high, which it is, so just increase iterator',
  },
  { stage: 7, text: '      i += 1;' },
  { stage: 4, text: '    } else {' },
  { stage: -8, text: '      // swap element at i with element at high' },
  { stage: 8, text: '      [arr[i], arr[high]] = [arr[high], arr[i]];' },
  { stage: -9, text: '      // decrement just high' },
  { stage: 9, text: '      high -= 1;' },
  { stage: 4, text: '    }' },
  { stage: 3, text: '  }' },
  { stage: 0, text: '}' },
  { stage: 0, text: '' },
];

export const data = {
  problemID: 162,
  problemName: `Dutch National Flag Problem`,
  problemText: `Given an array containing 0s, 1s and 2s, sort the array in-place. You should treat numbers of the array as objects, hence, we can’t count 0s, 1s, and 2s to recreate the array.

  The flag of the Netherlands consists of three colors: red, white and blue; and since our input array also consists of three different numbers that is why it is called Dutch National Flag problem.`,
  testCases: [
    {
      id: 1,
      name: 'example 1',
      inherit: [],
      code: ``,
      evaluate: `let arr = [1, 0, 2, 1, 0]; dutch_flag_sort(arr); arr;`,
      expected: JSON.stringify([0, 0, 1, 1, 2]),
    },
    {
      id: 2,
      name: 'example 2',
      inherit: [],
      code: ``,
      evaluate: `let arr = [2, 2, 0, 1, 2, 0]; dutch_flag_sort(arr); arr;`,
      expected: JSON.stringify([0, 0, 1, 2, 2, 2]),
    },
  ],
  setupCode: ``,
  source: ['https://www.educative.io/courses/grokking-the-coding-interview/RMBxV6jz6Q0'],
  tags: [TWO_POINTERS, ALGORITHM],
  solution,
};
