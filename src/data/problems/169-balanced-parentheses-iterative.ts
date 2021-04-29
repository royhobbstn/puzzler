import { ALGORITHM, SUBSETS } from '../constants';

const solution = [
  { stage: 0, text: '' },
  { stage: -1, text: 'class ParenthesesString {' },
  { stage: -1, text: '  constructor(str, openCount, closeCount) {' },
  { stage: -1, text: '    this.str = str;' },
  { stage: -1, text: '    this.openCount = openCount;' },
  { stage: -1, text: '    this.closeCount = closeCount;' },
  { stage: -1, text: '  }' },
  { stage: -1, text: '}' },
  { stage: 0, text: '' },
  { stage: 0, text: 'function generate_valid_parentheses(num) {' },
  { stage: 1, text: '  let result = [];' },
  { stage: 1, text: '  let queue = [];' },
  { stage: 2, text: "  queue.push(new ParenthesesString('', 0, 0));" },
  { stage: 3, text: '  while (queue.length > 0) {' },
  { stage: 4, text: '    const ps = queue.shift();' },
  { stage: 5, text: '    if (ps.openCount === num && ps.closeCount === num) {' },
  { stage: 6, text: '      result.push(ps.str);' },
  { stage: 5, text: '    } else {' },
  { stage: 7, text: '      if (ps.openCount < num) {' },
  {
    stage: 8,
    text:
      "        queue.push(new ParenthesesString(ps.str + '(', ps.openCount + 1, ps.closeCount));",
  },
  { stage: 7, text: '      }' },
  { stage: 9, text: '      if (ps.openCount > ps.closeCount) {' },
  {
    stage: 10,
    text:
      "        queue.push(new ParenthesesString(ps.str + ')', ps.openCount, ps.closeCount + 1));",
  },
  { stage: 9, text: '      }' },
  { stage: 5, text: '    }' },
  { stage: 3, text: '  }' },
  { stage: 0, text: '' },
  { stage: 11, text: '  return result;' },
  { stage: 0, text: '}' },
  { stage: 0, text: '' },
];

export const data = {
  problemID: 169,
  problemName: `Balanced Parentheses - Iterative`,
  problemText: `For a given number ‘N’, write a function to generate all combination of ‘N’ pairs of balanced parentheses.`,
  testCases: [
    {
      id: 1,
      name: 'example 1',
      inherit: [],
      code: ``,
      evaluate: `generate_valid_parentheses(2);`,
      expected: JSON.stringify(['(())', '()()']),
    },
    {
      id: 2,
      name: 'example 2',
      inherit: [],
      code: ``,
      evaluate: `generate_valid_parentheses(3);`,
      expected: JSON.stringify(['((()))', '(()())', '(())()', '()(())', '()()()']),
    },
  ],
  setupCode: `
  class ParenthesesString {
    constructor(str, openCount, closeCount) {
      this.str = str;
      this.openCount = openCount;
      this.closeCount = closeCount;
    }
  }`,
  source: ['https://www.educative.io/courses/grokking-the-coding-interview/NEXBg8YA5A2'],
  tags: [SUBSETS, ALGORITHM],
  solution,
};
