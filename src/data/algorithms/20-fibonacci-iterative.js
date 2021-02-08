import { FIBONACCI, ALGORITHM, INTERMEDIATE } from '../constants.js';

const solution = [
  { stage: 1, text: 'function fibonacciNth(n) {' },
  { stage: 2, text: '  let currentValue = 1;' },
  { stage: 2, text: '  let previousValue = 0;' },
  { stage: 2, text: '' },
  { stage: 3, text: '  if (n <= 1) {' },
  { stage: 3, text: '    return n;' },
  { stage: 3, text: '  }' },
  { stage: 3, text: '' },
  { stage: 4, text: '  let iteration = 2;' },
  { stage: 4, text: '' },
  { stage: 5, text: '  while (iteration <= n) {' },
  { stage: 6, text: '    currentValue += previousValue;' },
  { stage: 6, text: '    previousValue = currentValue - previousValue;' },
  { stage: 6, text: '    iteration++;' },
  { stage: 5, text: '  }' },
  { stage: 5, text: '' },
  { stage: 4, text: '  return currentValue;' },
  { stage: 1, text: '}' },
  { stage: 0, text: '' },
];

export const data = {
  problemID: 20,
  problemName: 'Implement an iterative fibonacci function.',
  problemText:
    'Implement a function `fibonacciNth` which takes an integer parameter `n` and returns the nth indexed fibonnaci number in the sequence.  For example, n=0 would return 0, n=1 would return 1, n=2 would return 1, and n=3 would return 2. ([0,1,1,2,3,5,8,13... etc]).  Please solve **iteratively**.',
  testCases: [
    {
      id: 1,
      name: '0 case',
      inherit: [],
      code: ``,
      evaluate: `fibonacciNth(0);`,
      expected: 0,
    },
    {
      id: 2,
      name: '1 case',
      inherit: [],
      code: ``,
      evaluate: `fibonacciNth(1);`,
      expected: 1,
    },
    {
      id: 3,
      name: '2 case',
      inherit: [],
      code: ``,
      evaluate: `fibonacciNth(2);`,
      expected: 1,
    },
    {
      id: 4,
      name: '3 case',
      inherit: [],
      code: ``,
      evaluate: `fibonacciNth(3);`,
      expected: 2,
    },
    {
      id: 5,
      name: '4 case',
      inherit: [],
      code: ``,
      evaluate: `fibonacciNth(4);`,
      expected: 3,
    },
    {
      id: 6,
      name: '5 case',
      inherit: [],
      code: ``,
      evaluate: `fibonacciNth(5);`,
      expected: 5,
    },
    {
      id: 7,
      name: '6 case',
      inherit: [],
      code: ``,
      evaluate: `fibonacciNth(6);`,
      expected: 8,
    },
    {
      id: 8,
      name: '7 case',
      inherit: [],
      code: ``,
      evaluate: `fibonacciNth(7);`,
      expected: 13,
    },
    {
      id: 9,
      name: '8 case',
      inherit: [],
      code: ``,
      evaluate: `fibonacciNth(8);`,
      expected: 21,
    },
  ],
  setupCode: '',
  category: FIBONACCI,
  type: ALGORITHM,
  difficulty: INTERMEDIATE,
  maxExecutionTime: 2,
  solution: {
    stages: [0, 30, 60, 90, 120, 150, 210],
    solutionLines: solution,
  },
};
