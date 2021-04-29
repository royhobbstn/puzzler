import { ALGORITHM, SUBSETS } from '../constants';

const solution = [
  { stage: 0, text: '' },
  { stage: 0, text: 'function find_permutations(nums) {' },
  { stage: 1, text: '  let numsLength = nums.length;' },
  { stage: 1, text: '  let result = [];' },
  { stage: 2, text: '  let permutations = [];' },
  { stage: 2, text: '  permutations.push([]);' },
  { stage: 0, text: '' },
  { stage: 3, text: '  for (let i = 0; i < nums.length; i++) {' },
  { stage: 4, text: '    const currentNumber = nums[i];' },
  { stage: 4, text: '    const n = permutations.length;' },
  { stage: 0, text: '' },
  { stage: 5, text: '    for (let p = 0; p < n; p++) {' },
  { stage: 6, text: '      const oldPermutation = permutations.shift();' },
  { stage: 0, text: '' },
  { stage: 7, text: '      for (let j = 0; j < oldPermutation.length + 1; j++) {' },
  { stage: 8, text: '        const newPermutation = oldPermutation.slice(0);' },
  { stage: 8, text: '        newPermutation.splice(j, 0, currentNumber);' },
  { stage: 9, text: '        if (newPermutation.length === numsLength) {' },
  { stage: 10, text: '          result.push(newPermutation);' },
  { stage: 9, text: '        } else {' },
  { stage: 11, text: '          permutations.push(newPermutation);' },
  { stage: 9, text: '        }' },
  { stage: 7, text: '      }' },
  { stage: 5, text: '    }' },
  { stage: 3, text: '  }' },
  { stage: 0, text: '' },
  { stage: 12, text: '  return result;' },
  { stage: 0, text: '}' },
  { stage: 0, text: '' },
];

export const data = {
  problemID: 166,
  problemName: `Permutations - Iterative`,
  problemText: `Given a set of distinct numbers, find all of its permutations.

  Permutation is defined as the re-arranging of the elements of the set. For example, {1, 2, 3} has the following six permutations:
  
  {1, 2, 3}
  {1, 3, 2}
  {2, 1, 3}
  {2, 3, 1}
  {3, 1, 2}
  {3, 2, 1}
  
  If a set has ‘n’ distinct elements it will have n! permutations.  
  
  Solve iteratively!`,
  testCases: [
    {
      id: 1,
      name: 'example 1',
      inherit: [],
      code: ``,
      evaluate: `find_permutations([1, 3, 5]);`,
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
