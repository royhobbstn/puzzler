import { FIBONACCI, ALGORITHM } from '../constants';

const solution = [
  { stage: 1, text: 'const fibonacciNth = n => {' },
  { stage: 2, text: '  if (n === 0 || n === 1) return n;' },
  { stage: 3, text: '  return fibonacciNth(n - 1) + fibonacciNth(n - 2);' },
  { stage: 1, text: '};' },
  { stage: 0, text: '' },
];

export const data = {
  problemID: 19,
  problemName: 'Implement a recursive fibonacci function.',
  problemText:
    'Implement a function **fibonacciNth** which takes an integer parameter `n` and returns the nth indexed fibonnaci number in the sequence.  For example, n=0 would return 0, n=1 would return 1, n=2 would return 1, and n=3 would return 2. ([0,1,1,2,3,5,8,13... etc]).  Please solve **recursively**.',
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
  source: [],
  tags: [FIBONACCI, ALGORITHM],
  solution,
};
