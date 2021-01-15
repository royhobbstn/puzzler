import { FIBONACCI, ALGORITHM, BEGINNER } from '../constants.js';

const solution = [
  { stage: 1, text: 'function fibonacciNth(n) {' },
  { stage: 2, text: '  let currentValue = 1;' },
  { stage: 2, text: '  let previousValue = 0;' },
  { stage: 2, text: '' },
  { stage: 3, text: '  if (n === 1) {' },
  { stage: 3, text: '    return 1;' },
  { stage: 3, text: '  }' },
  { stage: 3, text: '' },
  { stage: 4, text: '  let iterationsCounter = n - 1;' },
  { stage: 4, text: '' },
  { stage: 5, text: '  while (iterationsCounter) {' },
  { stage: 6, text: '    currentValue += previousValue;' },
  { stage: 6, text: '    previousValue = currentValue - previousValue;' },
  { stage: 6, text: '    iterationsCounter -= 1;' },
  { stage: 5, text: '  }' },
  { stage: 5, text: '' },
  { stage: 4, text: '  return currentValue;' },
  { stage: 1, text: '}' },
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
    stages: [0, 30, 60, 90, 120, 150, 210],
    solutionLines: solution,
  },
};
