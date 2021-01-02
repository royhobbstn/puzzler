import { FIBONACCI, ALGORITHM, BEGINNER } from '../constants.js';

const solution = [
  { stage: 0, text: 'function fibonacciNth(n) {' },
  { stage: 0, text: '  let currentValue = 1;' },
  { stage: 0, text: '  let previousValue = 0;' },
  { stage: 0, text: '' },
  { stage: 0, text: '  if (n === 1) {' },
  { stage: 0, text: '    return 1;' },
  { stage: 0, text: '  }' },
  { stage: 0, text: '' },
  { stage: 0, text: '  let iterationsCounter = n - 1;' },
  { stage: 0, text: '' },
  { stage: 0, text: '  while (iterationsCounter) {' },
  { stage: 0, text: '    currentValue += previousValue;' },
  { stage: 0, text: '    previousValue = currentValue - previousValue;' },
  { stage: 0, text: '    iterationsCounter -= 1;' },
  { stage: 0, text: '  }' },
  { stage: 0, text: '' },
  { stage: 0, text: '  return currentValue;' },
  { stage: 0, text: '}' },
  { stage: 0, text: '' },
];

export const data = {
  problemID: 20,
  problemName: 'Implement an **iterative** fibonacci function.',
  problemText:
    'Implement a function `fibonacciNth` which takes an integer **n** and returns the nth indexed fibonnaci number in the sequence.  For example, n=0 would return 0, n=1 would return 1, n=2 would return 1, and n=3 would return 2. ([0,1,1,2,3,5,8,13... etc])',
  testCases: [
    {
      id: 1,
      name: '0 case',
      inherit: [],
      code: ``,
      evaluate: `fibonacciNth(0);`,
      expected: 0,
    },
  ],
  setupCode: '',
  category: FIBONACCI,
  type: ALGORITHM,
  difficulty: BEGINNER,
  maxExecutionTime: 2,
  solution: {
    stages: [0, 30, 60, 120],
    solutionLines: solution,
  },
};
