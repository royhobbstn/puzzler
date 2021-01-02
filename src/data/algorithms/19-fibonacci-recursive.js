import { FIBONACCI, ALGORITHM, BEGINNER } from '../constants.js';

const solution = [
  { stage: 1, text: 'const fibonacciNth = n => {' },
  { stage: 2, text: '  if (n === 0 || n === 1) return n;' },
  { stage: 3, text: '  return fibonacci(n - 1) + fibonacci(n - 2);' },
  { stage: 1, text: '};' },
  { stage: 0, text: '' },
];

export const data = {
  problemID: 19,
  problemName: 'Implement a **recursive** fibonacci function.',
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
