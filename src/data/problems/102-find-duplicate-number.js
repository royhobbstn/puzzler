import { ALGORITHM, TEMP, INTERMEDIATE } from '../constants.js';

const solution = [
  { stage: 0, text: '' },
  { stage: 0, text: 'function find_duplicate(nums) {' },
  { stage: 1, text: '  let i = 0;' },
  { stage: 0, text: '' },
  { stage: 1, text: '  while (i < nums.length) {' },
  { stage: 2, text: '    if (nums[i] !== i + 1) {' },
  { stage: 3, text: '      let j = nums[i] - 1;' },
  { stage: 4, text: '      if (nums[i] !== nums[j]) {' },
  { stage: 5, text: '        [nums[i], nums[j]] = [nums[j], nums[i]];' },
  { stage: 4, text: '      } else {' },
  { stage: 6, text: '        return nums[i];' },
  { stage: 4, text: '      }' },
  { stage: 2, text: '    } else {' },
  { stage: 7, text: '      i += 1;' },
  { stage: 2, text: '    }' },
  { stage: 1, text: '  }' },
  { stage: 0, text: '' },
  { stage: 8, text: '  return -1;' },
  { stage: 0, text: '}' },
  { stage: 0, text: '' },
];

export const data = {
  problemID: 102,
  problemName: `Find Duplicate Number`,
  problemText: `We are given an unsorted array containing ‘n+1’ numbers taken from the range 1 to ‘n’. The array has only one duplicate but it can be repeated multiple times. Find that duplicate number without using any extra space. You are, however, allowed to modify the input array.`,
  testCases: [
    {
      id: 1,
      name: 'example 1',
      inherit: [],
      code: ``,
      evaluate: `find_duplicate([1, 4, 4, 3, 2]);`,
      expected: 4,
    },
    {
      id: 2,
      name: 'example 2',
      inherit: [],
      code: ``,
      evaluate: `find_duplicate([2, 1, 3, 3, 5, 4]);`,
      expected: 3,
    },
    {
      id: 3,
      name: 'example 3',
      inherit: [],
      code: ``,
      evaluate: `find_duplicate([2, 4, 1, 4, 4]);`,
      expected: 4,
    },
  ],
  setupCode: ``,
  tags: [TEMP, ALGORITHM],
  difficulty: INTERMEDIATE,
  solution: {
    stages: [0, 30, 60, 90, 120, 150, 180, 210, 270],
    solutionLines: solution,
  },
};
