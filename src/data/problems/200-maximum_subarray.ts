import { ALGORITHM, CURATED } from '../constants';

const solution = [
  { stage: 0, text: '' },
  { stage: 0, text: 'function maxSubArray(nums) {' },
  { stage: -1, text: '  // Initialize our variables using the first element.' },
  { stage: 1, text: '  let currentSubarray = nums[0];' },
  { stage: 2, text: '  let maxSubarray = nums[0];' },
  { stage: 0, text: '' },
  { stage: -3, text: '  // Start with the 2nd element since we already used the first one.' },
  { stage: 3, text: '  for (let i = 1; i < nums.length; i++) {' },
  { stage: 4, text: '    let num = nums[i];' },
  {
    stage: -5,
    text: '    // If current_subarray is negative, throw it away. Otherwise, keep adding to it.',
  },
  { stage: 5, text: '    currentSubarray = Math.max(num, currentSubarray + num);' },
  { stage: 6, text: '    maxSubarray = Math.max(maxSubarray, currentSubarray);' },
  { stage: 3, text: '  }' },
  { stage: 0, text: '' },
  { stage: 7, text: '  return maxSubarray;' },
  { stage: 0, text: '}' },
  { stage: 0, text: '' },
];

export const data = {
  problemID: 200,
  problemName: `Maximum Subarray`,
  problemText: `Given an integer array \`nums\`, find the contiguous subarray (containing at least one number) which has the largest sum and return its sum.`,
  testCases: [
    {
      id: 1,
      name: 'example 1',
      inherit: [],
      code: `const nums = [-2,1,-3,4,-1,2,1,-5,4];`,
      evaluate: `maxSubArray(nums);`,
      expected: 6,
    },
    {
      id: 2,
      name: 'example 2',
      inherit: [],
      code: `const nums = [1];`,
      evaluate: `maxSubArray(nums);`,
      expected: 1,
    },
    {
      id: 3,
      name: 'example 3',
      inherit: [],
      code: `const nums = [5,4,-1,7,8];`,
      evaluate: `maxSubArray(nums);`,
      expected: 23,
    },
  ],
  setupCode: ``,
  lcid: 53,
  source: ['https://leetcode.com/problems/maximum-subarray/'],
  tags: [ALGORITHM, CURATED],
  solution,
};
