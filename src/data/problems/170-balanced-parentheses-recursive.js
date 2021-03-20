import { ALGORITHM, SUBSETS, INTERMEDIATE } from '../constants.js';

const solution = [
  { stage: 0, text: '' },
  { stage: 0, text: 'function generate_valid_parentheses_start(num) {' },
  { stage: 1, text: '  const result = [];' },
  { stage: 2, text: '  const parenthesesString = Array(2 * num);' },
  { stage: 3, text: '  generate_valid_parentheses_rec(num, 0, 0, parenthesesString, 0, result);' },
  { stage: 0, text: '' },
  { stage: 4, text: '  return result;' },
  { stage: 0, text: '}' },
  { stage: 0, text: '' },
  { stage: 5, text: 'function generate_valid_parentheses_rec(' },
  { stage: 5, text: '  num,' },
  { stage: 5, text: '  openCount,' },
  { stage: 5, text: '  closeCount,' },
  { stage: 5, text: '  parenthesesString,' },
  { stage: 5, text: '  index,' },
  { stage: 5, text: '  result,' },
  { stage: 5, text: ') {' },
  { stage: 0, text: '' },
  { stage: 6, text: '  if (openCount === num && closeCount === num) {' },
  { stage: 0, text: "    result.push(parenthesesString.join(''));" },
  { stage: 6, text: '  } else {' },
  { stage: 7, text: '    if (openCount < num) {' },
  { stage: 9, text: "      parenthesesString[index] = '(';" },
  { stage: 10, text: '      generate_valid_parentheses_rec(' },
  { stage: 10, text: '        num,' },
  { stage: 10, text: '        openCount + 1,' },
  { stage: 10, text: '        closeCount,' },
  { stage: 10, text: '        parenthesesString,' },
  { stage: 10, text: '        index + 1,' },
  { stage: 10, text: '        result,' },
  { stage: 10, text: '      );' },
  { stage: 7, text: '    }' },
  { stage: 0, text: '' },
  { stage: 8, text: '    if (openCount > closeCount) {' },
  { stage: 11, text: "      parenthesesString[index] = ')';" },
  { stage: 12, text: '      generate_valid_parentheses_rec(' },
  { stage: 12, text: '        num,' },
  { stage: 12, text: '        openCount,' },
  { stage: 12, text: '        closeCount + 1,' },
  { stage: 12, text: '        parenthesesString,' },
  { stage: 12, text: '        index + 1,' },
  { stage: 12, text: '        result,' },
  { stage: 12, text: '      );' },
  { stage: 8, text: '    }' },
  { stage: 0, text: '' },
  { stage: 6, text: '  }' },
  { stage: 0, text: '' },
  { stage: 5, text: '}' },
  { stage: 0, text: '' },
];

export const data = {
  problemID: 170,
  problemName: `Balanced Parentheses - Recursive`,
  problemText: `For a given number ‘N’, write a function to generate all combination of ‘N’ pairs of balanced parentheses.`,
  testCases: [
    {
      id: 1,
      name: 'example 1',
      inherit: [],
      code: ``,
      evaluate: `generate_valid_parentheses_start(2);`,
      expected: JSON.stringify(['(())', '()()']),
    },
    {
      id: 2,
      name: 'example 2',
      inherit: [],
      code: ``,
      evaluate: `generate_valid_parentheses_start(3);`,
      expected: JSON.stringify(['((()))', '(()())', '(())()', '()(())', '()()()']),
    },
  ],
  setupCode: ``,
  source: [],
  tags: [INTERMEDIATE, SUBSETS, ALGORITHM],
  solution,
};
