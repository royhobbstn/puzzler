import { ALGORITHM, BFS, SUBSETS } from '../constants.ts';

const solution = [
  { stage: 0, text: '' },
  { stage: 0, text: 'function find_subsets(nums) {' },
  { stage: 0, text: '' },
  { stage: -1, text: '  // input must be sorted' },
  { stage: 1, text: '  nums.sort((a, b) => a - b);' },
  { stage: 0, text: '' },
  { stage: -1, text: '  // subsets array initialized with a single empty array' },
  { stage: 1, text: '  const subsets = [];' },
  { stage: 1, text: '  subsets.push([]);' },
  { stage: 0, text: '' },
  { stage: -2, text: '  // start / end indexes of subsets' },
  { stage: 2, text: '  let startIndex = 0;' },
  { stage: -2, text: '  // endIndex corresponds to the index of the last added subset in the' },
  { stage: -2, text: "  // previous iteration of 'i'" },
  { stage: 2, text: '  let endIndex = 0;' },
  { stage: 0, text: '' },
  { stage: 3, text: '  for (let i = 0; i < nums.length; i++) {' },
  { stage: 4, text: '    startIndex = 0;' },
  { stage: 0, text: '' },
  { stage: -4, text: '    // if current and the previous elements are same, create new subsets' },
  { stage: -4, text: '    // only from the subsets added in the previous step' },
  { stage: 4, text: '    if (i > 0 && nums[i] === nums[i - 1]) {' },
  {
    stage: -5,
    text: '      // set the start subset iteration index to be the first new element created',
  },
  { stage: -5, text: '      // during the last iteration' },
  { stage: 5, text: '      startIndex = endIndex + 1;' },
  { stage: 4, text: '    }' },
  {
    stage: -6,
    text: '    // set the endIndex (to be used next iteration) to be the current last index',
  },
  { stage: -6, text: '    // of the subsets array' },
  { stage: 6, text: '    endIndex = subsets.length - 1;' },
  { stage: 7, text: '    for (let j = startIndex; j < endIndex + 1; j++) {' },
  {
    stage: -8,
    text: '      // create a new subset from the existing subset and add the current element to it',
  },
  { stage: 8, text: '      const set1 = subsets[j].slice(0);' },
  { stage: 8, text: '      set1.push(nums[i]);' },
  { stage: 9, text: '      subsets.push(set1);' },
  { stage: 7, text: '    }' },
  { stage: 3, text: '  }' },
  { stage: 0, text: '' },
  { stage: 10, text: '  return subsets;' },
  { stage: 0, text: '}' },
  { stage: 0, text: '' },
];

export const data = {
  problemID: 113,
  problemName: `Subsets with Duplicates`,
  problemText: `Given a set of numbers that might contain duplicates, find all of its distinct subsets.

Example 1:

 - Input: [1, 3, 3]
 - Output: [], [1], [3], [1,3], [3,3], [1,3,3]`,
  testCases: [
    {
      id: 1,
      name: 'example 1',
      inherit: [],
      code: ``,
      evaluate: `standardize(find_subsets([1, 3, 3]));`,
      expected: JSON.stringify(['', '1', '1-3', '1-3-3', '3', '3-3']),
    },
    {
      id: 2,
      name: 'example 2',
      inherit: [],
      code: ``,
      evaluate: `standardize(find_subsets([1,3, 5, 3]));`,
      expected: JSON.stringify([
        '',
        '1',
        '1-3',
        '1-3-3',
        '1-3-3-5',
        '1-3-5',
        '1-5',
        '3',
        '3-3',
        '3-3-5',
        '3-5',
        '5',
      ]),
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
  source: ['https://www.educative.io/courses/grokking-the-coding-interview/7npk3V3JQNr'],
  tags: [SUBSETS, ALGORITHM, BFS],
  solution,
};
