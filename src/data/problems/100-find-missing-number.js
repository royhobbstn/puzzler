import { ALGORITHM, TEMP, INTERMEDIATE } from '../constants.js';

const solution = [
  { stage: 0, text: '' },
  { stage: 0, text: 'function find_missing_number(nums) {' },
  { stage: 1, text: '  let i = 0;' },
  { stage: 1, text: '  const n = nums.length;' },
  { stage: 0, text: '' },
  { stage: 2, text: '  while (i < n) {' },
  { stage: 3, text: '    let j = nums[i];' },
  { stage: 4, text: '    if (nums[i] < n && nums[i] !== nums[j]) {' },
  { stage: 5, text: '      [nums[i], nums[j]] = [nums[j], nums[i]];' },
  { stage: 4, text: '    } else {' },
  { stage: 5, text: '      i += 1;' },
  { stage: 4, text: '    }' },
  { stage: 2, text: '  }' },
  { stage: 0, text: '' },
  { stage: 6, text: '  for (i = 0; i < n; i++) {' },
  { stage: 7, text: '    if (nums[i] !== i) {' },
  { stage: 7, text: '      return i;' },
  { stage: 7, text: '    }' },
  { stage: 6, text: '  }' },
  { stage: 0, text: '' },
  { stage: 8, text: '  return n;' },
  { stage: 0, text: '}' },
  { stage: 0, text: '' },
];

export const data = {
  problemID: 100,
  problemName: `Find Missing Number`,
  problemText: `We are given an array containing ‘n’ distinct numbers taken from the range 0 to ‘n’. Since the array has only ‘n’ numbers out of the total ‘n+1’ numbers, find the missing number.`,
  testCases: [
    {
      id: 1,
      name: 'example 1',
      inherit: [],
      code: ``,
      evaluate: `find_missing_number([4, 0, 3, 1]);`,
      expected: 2,
    },
    {
      id: 2,
      name: 'example 2',
      inherit: [],
      code: ``,
      evaluate: `find_missing_number([8, 3, 5, 2, 4, 6, 0, 1]);`,
      expected: 7,
    },
  ],
  setupCode: ``,
  tags: [INTERMEDIATE, TEMP, ALGORITHM],
  solution,
};
