import { ALGORITHM, TEMP, INTERMEDIATE } from '../constants.js';

const solution = [
  { stage: 0, text: '' },
  { stage: 0, text: 'function find_subsets(nums) {' },
  { stage: 0, text: '' },
  { stage: 1, text: '  nums.sort();' },
  { stage: 1, text: '  const subsets = [];' },
  { stage: 1, text: '  subsets.push([]);' },
  { stage: 2, text: '  let startIndex = 0;' },
  { stage: 2, text: '  let endIndex = 0;' },
  { stage: 0, text: '' },
  { stage: 3, text: '  for (let i = 0; i < nums.length; i++) {' },
  { stage: 4, text: '    startIndex = 0;' },
  { stage: 0, text: '' },
  { stage: 4, text: '    if (i > 0 && nums[i] === nums[i - 1]) {' },
  { stage: 5, text: '      startIndex = endIndex + 1;' },
  { stage: 4, text: '    }' },
  { stage: 6, text: '    endIndex = subsets.length - 1;' },
  { stage: 7, text: '    for (let j = startIndex; j < endIndex + 1; j++) {' },
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
      evaluate: `standardize(find_subsets([1, 5, 3, 3]));`,
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
  tags: [TEMP, ALGORITHM],
  difficulty: INTERMEDIATE,
  solution,
};
