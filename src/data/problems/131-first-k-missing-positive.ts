import { ALGORITHM, CYCLIC_SORT } from '../constants';

const solution = [
  { stage: 0, text: '' },
  { stage: 0, text: 'function find_first_k_missing_positive(nums, k) {' },
  { stage: 1, text: '  const n = nums.length;' },
  { stage: 1, text: '  let i = 0;' },
  { stage: 0, text: '' },
  { stage: 2, text: '  while (i < n) {' },
  { stage: 3, text: '    const j = nums[i] - 1;' },
  { stage: 4, text: '    if (nums[i] > 0 && nums[i] <= n && nums[i] !== nums[j]) {' },
  { stage: 5, text: '      [nums[i], nums[j]] = [nums[j], nums[i]];' },
  { stage: 4, text: '    } else {' },
  { stage: 6, text: '      i += 1;' },
  { stage: 4, text: '    }' },
  { stage: 2, text: '  }' },
  { stage: 0, text: '' },
  { stage: 7, text: '  const missingNumbers = [];' },
  { stage: 7, text: '  const extraNumbers = new Set();' },
  { stage: 8, text: '  for (let i = 0; i < n; i++) {' },
  { stage: 9, text: '    if (missingNumbers.length < k) {' },
  { stage: 10, text: '      if (nums[i] !== i + 1) {' },
  { stage: 11, text: '        missingNumbers.push(i + 1);' },
  { stage: 11, text: '        extraNumbers.add(nums[i]);' },
  { stage: 10, text: '      }' },
  { stage: 9, text: '    }' },
  { stage: 8, text: '  }' },
  { stage: 0, text: '' },
  { stage: 12, text: '  i = 1;' },
  { stage: 13, text: '  while (missingNumbers.length < k) {' },
  { stage: 14, text: '    const candidateNumber = i + n;' },
  { stage: 15, text: '    if (!extraNumbers.has(candidateNumber)) {' },
  { stage: 16, text: '      missingNumbers.push(candidateNumber);' },
  { stage: 15, text: '    }' },
  { stage: 17, text: '    i += 1;' },
  { stage: 13, text: '  }' },
  { stage: 18, text: '  return missingNumbers;' },
  { stage: 0, text: '}' },
  { stage: 0, text: '' },
];

export const data = {
  problemID: 131,
  problemName: `Find the First K Missing Positive Numbers`,
  problemText: `Given an unsorted array containing numbers and a number ‘k’, find the first ‘k’ missing positive numbers in the array.`,
  testCases: [
    {
      id: 1,
      name: 'example 1',
      inherit: [],
      code: ``,
      evaluate: `find_first_k_missing_positive([3, -1, 4, 5, 5], 3);`,
      expected: JSON.stringify([1, 2, 6]),
    },
    {
      id: 2,
      name: 'example 2',
      inherit: [],
      code: ``,
      evaluate: `find_first_k_missing_positive([2, 3, 4], 3);`,
      expected: JSON.stringify([1, 5, 6]),
    },
    {
      id: 3,
      name: 'example 3',
      inherit: [],
      code: ``,
      evaluate: `find_first_k_missing_positive([-2, -3, 4], 2);`,
      expected: JSON.stringify([1, 2]),
    },
  ],
  setupCode: ``,
  source: ['https://www.educative.io/courses/grokking-the-coding-interview/g286M2Gk3YY'],
  tags: [CYCLIC_SORT, ALGORITHM],
  solution,
};
