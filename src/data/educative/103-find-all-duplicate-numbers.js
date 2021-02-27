import { ALGORITHM, TEMP, INTERMEDIATE } from '../constants.js';

const solution = [
  { stage: 0, text: '' },
  { stage: 0, text: 'function find_all_duplicates(nums) {' },
  { stage: 1, text: '  let i = 0;' },
  { stage: 1, text: '  while (i < nums.length) {' },
  { stage: 2, text: '    let j = nums[i] - 1;' },
  { stage: 2, text: '    if (nums[i] != nums[j]) {' },
  { stage: 3, text: '      [nums[i], nums[j]] = [nums[j], nums[i]];' },
  { stage: 2, text: '    } else {' },
  { stage: 4, text: '      i++;' },
  { stage: 2, text: '    }' },
  { stage: 1, text: '  }' },
  { stage: 0, text: '' },
  { stage: 5, text: '  const duplicateNumbers = [];' },
  { stage: 6, text: '  for (i = 0; i < nums.length; i++) {' },
  { stage: 7, text: '    if (nums[i] !== i + 1) {' },
  { stage: 8, text: '      duplicateNumbers.push(nums[i]);' },
  { stage: 7, text: '    }' },
  { stage: 6, text: '  }' },
  { stage: 0, text: '' },
  { stage: 9, text: '  return duplicateNumbers;' },
  { stage: 0, text: '}' },
  { stage: 0, text: '' },
];

export const data = {
  problemID: 103,
  problemName: `Find All Duplicate Numbers`,
  problemText: `We are given an unsorted array containing ‘n’ numbers taken from the range 1 to ‘n’. The array has some numbers appearing twice, find all these duplicate numbers without using any extra space.  Return them as an array in ascending order.`,
  testCases: [
    {
      id: 1,
      name: 'example 1',
      inherit: [],
      code: ``,
      evaluate: `find_all_duplicates([3, 4, 4, 5, 5]);`,
      expected: JSON.stringify([5, 4]),
    },
    {
      id: 2,
      name: 'example 2',
      inherit: [],
      code: ``,
      evaluate: `find_all_duplicates([5, 4, 7, 2, 3, 5, 3]);`,
      expected: JSON.stringify([3, 5]),
    },
  ],
  setupCode: ``,
  category: TEMP,
  type: ALGORITHM,
  difficulty: INTERMEDIATE,
  maxExecutionTime: 2,
  solution: {
    stages: [0, 30, 60, 90, 120, 150, 180, 210, 240, 300],
    solutionLines: solution,
  },
};
