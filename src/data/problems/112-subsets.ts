import { ALGORITHM, BFS, SUBSETS } from '../constants';

const solution = [
  { stage: 0, text: '' },
  { stage: 0, text: 'function find_subsets(nums) {' },
  { stage: -1, text: '  // initialize new array with an empty set' },
  { stage: 1, text: '  const subsets = [];' },
  { stage: 2, text: '  subsets.push([]);' },
  { stage: 0, text: '' },
  { stage: -3, text: '  // iterate all numbers in the original array' },
  { stage: 3, text: '  for (let i = 0; i < nums.length; i++) {' },
  { stage: 4, text: '    let currentNumber = nums[i];' },
  { stage: 0, text: '' },
  { stage: -5, text: '    // iterate all existing subsets' },
  { stage: -5, text: '    // we need to derive the length of subsets anew each iteration' },
  { stage: 5, text: '    const n = subsets.length;' },
  { stage: 6, text: '    for (let j = 0; j < n; j++) {' },
  { stage: -7, text: '      // copy elements from subset to a new array' },
  { stage: 7, text: '      const set1 = subsets[j].slice(0);' },
  { stage: -8, text: '      // add number from original array to the new subset' },
  { stage: 8, text: '      set1.push(currentNumber);' },
  { stage: -9, text: '      // push new subset back into original array' },
  { stage: 9, text: '      subsets.push(set1);' },
  { stage: 6, text: '    }' },
  { stage: 3, text: '  }' },
  { stage: 0, text: '' },
  { stage: 10, text: '  return subsets;' },
  { stage: 0, text: '}' },
  { stage: 0, text: '' },
];

export const data = {
  problemID: 112,
  problemName: `Subsets (distinct)`,
  problemText: `Given a set with distinct elements, find all of its distinct subsets.
  
  Example:
   - Input: [1, 3]
   - Output: [], [1], [3], [1,3]`,
  testCases: [
    {
      id: 1,
      name: 'example 1',
      inherit: [],
      code: ``,
      evaluate: `standardize(find_subsets([1, 3]));`,
      expected: JSON.stringify(['', '1', '1-3', '3']),
    },
    {
      id: 2,
      name: 'example 2',
      inherit: [],
      code: ``,
      evaluate: `standardize(find_subsets([1, 5, 3]));`,
      expected: JSON.stringify(['', '1', '1-3', '1-3-5', '1-5', '3', '3-5', '5']),
    },
  ],
  setupCode: `
  function standardize(arr) {
    return arr
      .map(d => {
        return d.sort((a, b) => a - b).join('-');
      })
      .sort();
  }`,
  source: ['https://www.educative.io/courses/grokking-the-coding-interview/gx2OqlvEnWG'],
  tags: [SUBSETS, ALGORITHM, BFS],
  solution,
};
