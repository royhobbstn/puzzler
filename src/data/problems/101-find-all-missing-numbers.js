import { ALGORITHM, CYCLIC_SORT } from '../constants.ts';

const solution = [
  { stage: 0, text: '' },
  { stage: 0, text: 'function find_missing_numbers(nums) {' },
  { stage: 1, text: '  let i = 0;' },
  { stage: 1, text: '  while (i < nums.length) {' },
  { stage: 2, text: '    const j = nums[i] - 1;' },
  { stage: 3, text: '    if (nums[i] !== nums[j]) {' },
  { stage: 4, text: '      [nums[i], nums[j]] = [nums[j], nums[i]];' },
  { stage: 3, text: '    } else {' },
  { stage: 4, text: '      i += 1;' },
  { stage: 3, text: '    }' },
  { stage: 1, text: '  }' },
  { stage: 0, text: '' },
  { stage: 5, text: '  const missingNumbers = [];' },
  { stage: 6, text: '  for (i = 0; i < nums.length; i++) {' },
  { stage: 7, text: '    if (nums[i] !== i + 1) {' },
  { stage: 8, text: '      missingNumbers.push(i + 1);' },
  { stage: 7, text: '    }' },
  { stage: 6, text: '  }' },
  { stage: 0, text: '' },
  { stage: 8, text: '  return missingNumbers;' },
  { stage: 0, text: '}' },
  { stage: 0, text: '' },
];

export const data = {
  problemID: 101,
  problemName: `Find All Missing Numbers`,
  problemText: `We are given an unsorted array containing numbers taken from the range 1 to ‘n’. The array can have duplicates, which means some numbers will be missing. Find all those missing numbers.  Return missing numbers as an array (in ascending order).`,
  testCases: [
    {
      id: 1,
      name: 'example 1',
      inherit: [],
      code: ``,
      evaluate: `find_missing_numbers([2, 3, 1, 8, 2, 3, 5, 1]);`,
      expected: JSON.stringify([4, 6, 7]),
    },
    {
      id: 2,
      name: 'example 2',
      inherit: [],
      code: ``,
      evaluate: `find_missing_numbers([2, 4, 1, 2]);`,
      expected: JSON.stringify([3]),
    },
    {
      id: 3,
      name: 'example 3',
      inherit: [],
      code: ``,
      evaluate: `find_missing_numbers([2, 3, 2, 1]);`,
      expected: JSON.stringify([4]),
    },
  ],
  setupCode: ``,
  source: ['https://www.educative.io/courses/grokking-the-coding-interview/Y52qNM0ljWK'],
  tags: [ALGORITHM, CYCLIC_SORT],
  solution,
};
