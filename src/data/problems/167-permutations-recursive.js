import { ALGORITHM, SUBSETS } from '../constants.js';

const solution = [
  { stage: 0, text: '' },
  { stage: 0, text: 'function generate_permutations(nums) {' },
  { stage: 1, text: '  const result = [];' },
  {
    stage: -2,
    text: '  // initialize nums iterator index at 0, initialize first Permutation array',
  },
  { stage: 2, text: '  generate_permutations_recursive(nums, 0, [], result);' },
  { stage: 0, text: '' },
  { stage: 3, text: '  return result;' },
  { stage: 0, text: '}' },
  { stage: 0, text: '' },
  {
    stage: 4,
    text: 'function generate_permutations_recursive(nums, index, currentPermutation, result) {',
  },
  { stage: -5, text: '  // base case, the array iterator index is out of range' },
  { stage: 5, text: '  if (index === nums.length) {' },
  { stage: 6, text: '    result.push(currentPermutation);' },
  { stage: 5, text: '  } else {' },
  {
    stage: -7,
    text:
      '    // insert number at index (nums[index) into each position of currentPermutation array',
  },
  { stage: -7, text: '    // hence why we start iterator at 0, and end at length + 1' },
  { stage: 7, text: '    for (let i = 0; i < currentPermutation.length + 1; i++) {' },
  { stage: -8, text: '      // copy the current permutation' },
  { stage: 8, text: '      let newPermutation = currentPermutation.slice(0);' },
  { stage: -9, text: '      // insert nums[index] at i' },
  { stage: 9, text: '      newPermutation.splice(i, 0, nums[index]);' },
  {
    stage: -10,
    text:
      '      // recursively call to insert next number in nums to each position in newPermutation',
  },
  {
    stage: 10,
    text: '      generate_permutations_recursive(nums, index + 1, newPermutation, result);',
  },
  { stage: 7, text: '    }' },
  { stage: 5, text: '  }' },
  { stage: 0, text: '' },
  { stage: 4, text: '}' },
  { stage: 0, text: '' },
];

export const data = {
  problemID: 167,
  problemName: `Permutations - Recursive`,
  problemText: `Given a set of distinct numbers, find all of its permutations.

  Permutation is defined as the re-arranging of the elements of the set. For example, {1, 2, 3} has the following six permutations:
  
  {1, 2, 3}
  {1, 3, 2}
  {2, 1, 3}
  {2, 3, 1}
  {3, 1, 2}
  {3, 2, 1}
  
  If a set has ‘n’ distinct elements it will have n! permutations.  
  
  Solve recursively!`,
  testCases: [
    {
      id: 1,
      name: 'example 1',
      inherit: [],
      code: ``,
      evaluate: `generate_permutations([1, 3, 5]);`,
      expected: JSON.stringify([
        [5, 3, 1],
        [3, 5, 1],
        [3, 1, 5],
        [5, 1, 3],
        [1, 5, 3],
        [1, 3, 5],
      ]),
    },
  ],
  setupCode: ``,
  source: ['https://www.educative.io/courses/grokking-the-coding-interview/B8R83jyN3KY'],
  tags: [SUBSETS, ALGORITHM],
  solution,
};
