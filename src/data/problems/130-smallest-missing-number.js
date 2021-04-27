import { ALGORITHM, CYCLIC_SORT } from '../constants.ts';

const solution = [
  { stage: 0, text: '' },
  { stage: 0, text: 'function find_first_smallest_missing_positive(nums) {' },
  { stage: 1, text: '  let i = 0;' },
  { stage: 1, text: '  let n = nums.length;' },
  { stage: 2, text: '  while (i < n) {' },
  { stage: 3, text: '    let j = nums[i] - 1;' },
  { stage: 4, text: '    if (nums[i] > 0 && nums[i] <= n && nums[i] !== nums[j]) {' },
  { stage: 5, text: '      [nums[i], nums[j]] = [nums[j], nums[i]];' },
  { stage: 4, text: '    } else {' },
  { stage: 6, text: '      i += 1;' },
  { stage: 4, text: '    }' },
  { stage: 2, text: '  }' },
  { stage: 0, text: '' },
  { stage: 7, text: '  for (let i = 0; i < n; i++) {' },
  { stage: 8, text: '    if (nums[i] !== i + 1) {' },
  { stage: 9, text: '      return i + 1;' },
  { stage: 8, text: '    }' },
  { stage: 7, text: '  }' },
  { stage: 0, text: '' },
  { stage: 10, text: '  return nums.length + 1;' },
  { stage: 0, text: '}' },
  { stage: 0, text: '' },
];

export const data = {
  problemID: 130,
  problemName: `Find the Smallest Missing Positive Number`,
  problemText: `Given an unsorted array containing numbers, find the smallest missing positive number in it.`,
  testCases: [
    {
      id: 1,
      name: 'example 1',
      inherit: [],
      code: ``,
      evaluate: `find_first_smallest_missing_positive([-3, 1, 5, 4, 2]);`,
      expected: 3,
    },
    {
      id: 2,
      name: 'example 2',
      inherit: [],
      code: ``,
      evaluate: `find_first_smallest_missing_positive([3, -2, 0, 1, 2]);`,
      expected: 4,
    },
    {
      id: 3,
      name: 'example 3',
      inherit: [],
      code: ``,
      evaluate: `find_first_smallest_missing_positive([3, 2, 5, 1]);`,
      expected: 4,
    },
  ],
  setupCode: ``,
  source: ['https://www.educative.io/courses/grokking-the-coding-interview/R1GXQ071GQ0'],
  tags: [CYCLIC_SORT, ALGORITHM],
  solution,
};
