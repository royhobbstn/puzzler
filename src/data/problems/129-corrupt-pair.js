import { ALGORITHM, CYCLIC_SORT } from '../constants.ts';

const solution = [
  { stage: 0, text: '' },
  { stage: 0, text: 'function find_corrupt_numbers(nums) {' },
  { stage: 1, text: '  let i = 0;' },
  { stage: 2, text: '  while (i < nums.length) {' },
  { stage: 3, text: '    const j = nums[i] - 1;' },
  { stage: 4, text: '    if (nums[i] !== nums[j]) {' },
  { stage: 5, text: '      [nums[i], nums[j]] = [nums[j], nums[i]];' },
  { stage: 4, text: '    } else {' },
  { stage: 5, text: '      i += 1;' },
  { stage: 4, text: '    }' },
  { stage: 2, text: '  }' },
  { stage: 0, text: '' },
  { stage: 6, text: '  for (i = 0; i < nums.length; i++) {' },
  { stage: 7, text: '    if (nums[i] !== i + 1) {' },
  { stage: 8, text: '      return [nums[i], i + 1];' },
  { stage: 7, text: '    }' },
  { stage: 6, text: '  }' },
  { stage: 9, text: '  return [-1, -1];' },
  { stage: 0, text: '}' },
  { stage: 0, text: '' },
];

export const data = {
  problemID: 129,
  problemName: `Find the Corrupt Pair`,
  problemText: `We are given an unsorted array containing ‘n’ numbers taken from the range 1 to ‘n’. The array originally contained all the numbers from 1 to ‘n’, but due to a data error, one of the numbers got duplicated which also resulted in one number going missing. Find both these numbers.`,
  testCases: [
    {
      id: 1,
      name: 'example 1',
      inherit: [],
      code: ``,
      evaluate: `find_corrupt_numbers([3, 1, 2, 5, 2]);`,
      expected: JSON.stringify([2, 4]),
    },
    {
      id: 2,
      name: 'example 2',
      inherit: [],
      code: ``,
      evaluate: `find_corrupt_numbers([3, 1, 2, 3, 6, 4]);`,
      expected: JSON.stringify([3, 5]),
    },
  ],
  setupCode: ``,
  source: ['https://www.educative.io/courses/grokking-the-coding-interview/N7Vw2GBQr6D'],
  tags: [CYCLIC_SORT, ALGORITHM],
  solution,
};
