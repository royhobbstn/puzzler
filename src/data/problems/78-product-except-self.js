import { ALGORITHM, FACEBOOK, GENERAL } from '../constants.js';

const solution = [
  { stage: 0, text: '' },
  { stage: 0, text: 'function productExceptSelf(nums) {' },
  { stage: 1, text: '  let length = nums.length;' },
  { stage: 0, text: '' },
  { stage: 2, text: '  const leftProducts = [];' },
  { stage: 2, text: '  const rightProducts = [];' },
  { stage: 0, text: '' },
  { stage: 3, text: '  const answer = [];' },
  { stage: 0, text: '' },
  { stage: 4, text: '  leftProducts[0] = 1;' },
  { stage: 5, text: '  for (let i = 1; i < length; i++) {' },
  { stage: 5, text: '    leftProducts[i] = nums[i - 1] * leftProducts[i - 1];' },
  { stage: 5, text: '  }' },
  { stage: 0, text: '' },
  { stage: 6, text: '  rightProducts[length - 1] = 1;' },
  { stage: 7, text: '  for (let i = length - 2; i >= 0; i--) {' },
  { stage: 7, text: '    rightProducts[i] = nums[i + 1] * rightProducts[i + 1];' },
  { stage: 7, text: '  }' },
  { stage: 0, text: '' },
  { stage: 8, text: '  for (let i = 0; i < length; i++) {' },
  { stage: 8, text: '    answer[i] = leftProducts[i] * rightProducts[i];' },
  { stage: 8, text: '  }' },
  { stage: 0, text: '' },
  { stage: 9, text: '  return answer;' },
  { stage: 0, text: '}' },
  { stage: 0, text: '' },
];

export const data = {
  problemID: 78,
  problemName: `Product of Array Except Self`,
  problemText: `Given an array nums of \`n\` integers where \`n > 1\`,  return an array output such that \`output[i]\` is equal to the product of all the elements of\` nums\` except \`nums[i]\`.

  Example:
  
  Input:  \`[1,2,3,4]\`
  Output: \`[24,12,8,6]\`
  Constraint: It's guaranteed that the product of the elements of any prefix or suffix of the array (including the whole array) fits in a 32 bit integer.
  
  Note: Please solve it **without** division and in O(n).`,
  testCases: [
    {
      id: 1,
      name: 'example 1',
      inherit: [],
      code: ``,
      evaluate: `productExceptSelf([1, 2, 3, 4]);`,
      expected: JSON.stringify([24, 12, 8, 6]),
    },
    {
      id: 2,
      name: 'example 2',
      inherit: [],
      code: ``,
      evaluate: `productExceptSelf([5, 8, 4, 3, 7]);`,
      expected: JSON.stringify([672, 420, 840, 1120, 480]),
    },
  ],
  setupCode: ``,
  lcid: 238,
  source: ['https://leetcode.com/problems/product-of-array-except-self'],
  tags: [GENERAL, ALGORITHM, FACEBOOK],
  solution,
};
