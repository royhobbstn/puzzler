import { GENERAL, ALGORITHM, BEGINNER } from '../constants.js';

const solution = [
  { stage: 0, text: '' },
  { stage: 0, text: 'function twoSum(array, target) {' },
  { stage: 1, text: '  let hash = {};' },
  { stage: 0, text: '' },
  { stage: 2, text: '  for (let [index, num] of array.entries()) {' },
  { stage: 3, text: '    const difference = target - num;' },
  { stage: 4, text: '    if (hash[difference] !== undefined) {' },
  { stage: 5, text: '      return [hash[difference], index];' },
  { stage: 4, text: '    }' },
  { stage: 5, text: '    hash[num] = index;' },
  { stage: 2, text: '  }' },
  { stage: 0, text: '' },
  { stage: 1, text: '  return null;' },
  { stage: 0, text: '}' },
  { stage: 0, text: '' },
];

export const data = {
  problemID: 64,
  problemName: 'Solve Two Sum (Unsorted Array).',
  problemText: `Given an unsorted array of integers \`array\`, and an integer \`target\`, return the indices of two numbers in the \`array\` that sum to \`target\`.
  Assume one solution.  Return indices in a two element array.  Solution can be returned in any order.
  Return \`null\` if no solution could be found.`,
  testCases: [
    {
      id: 1,
      name: 'case 1',
      inherit: [],
      code: ``,
      evaluate: `twoSum([3, 6, 17, 12], 9);`,
      expected: JSON.stringify([0, 1]),
    },
    {
      id: 2,
      name: 'case 2',
      inherit: [],
      code: ``,
      evaluate: `twoSum([3, 4, 5], 9);`,
      expected: JSON.stringify([1, 2]),
    },
    {
      id: 3,
      name: 'case 3',
      inherit: [],
      code: ``,
      evaluate: `twoSum([2, 2], 4)`,
      expected: JSON.stringify([0, 1]),
    },
    {
      id: 4,
      name: 'not found',
      inherit: [],
      code: ``,
      evaluate: `twoSum([1, 3], 7) === null;`,
      expected: true,
    },
  ],
  setupCode: '',
  category: GENERAL,
  type: ALGORITHM,
  difficulty: BEGINNER,
  maxExecutionTime: 2,
  solution: {
    stages: [0, 30, 60, 90, 120, 180],
    solutionLines: solution,
  },
};
