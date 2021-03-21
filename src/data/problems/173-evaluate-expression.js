import { ALGORITHM, SUBSETS } from '../constants.js';

const solution = [
  { stage: 0, text: '' },
  { stage: 0, text: 'function diff_ways_to_evaluate_expression_memo(input) {' },
  { stage: 1, text: '  return diff_ways_to_evaluate_expression_rec({}, input);' },
  { stage: 0, text: '' },
  { stage: 0, text: '}' },
  { stage: 0, text: '' },
  { stage: 2, text: 'function diff_ways_to_evaluate_expression_rec(map, input) {' },
  { stage: 3, text: '  if (input in map) {' },
  { stage: 4, text: '    return map[input];' },
  { stage: 3, text: '  }' },
  { stage: 0, text: '' },
  { stage: 5, text: '  const result = [];' },
  {
    stage: 6,
    text: "  if (!input.includes('+') && !input.includes('-') && !input.includes('*')) {",
  },
  { stage: 7, text: '    result.push(parseInt(input));' },
  { stage: 6, text: '  } else {' },
  { stage: 8, text: '    for (let i = 0; i < input.length; i++) {' },
  { stage: 9, text: '      const char = input[i];' },
  { stage: 10, text: '      if (isNaN(parseInt(char, 10))) {' },
  { stage: 0, text: '' },
  {
    stage: 11,
    text:
      '        const leftParts = diff_ways_to_evaluate_expression_rec(map, input.substring(0, i));',
  },
  {
    stage: 12,
    text:
      '        const rightParts = diff_ways_to_evaluate_expression_rec(map, input.substring(i + 1));',
  },
  { stage: 0, text: '' },
  { stage: 13, text: '        for (let l = 0; l < leftParts.length; l++) {' },
  { stage: 14, text: '          for (let r = 0; r < rightParts.length; r++) {' },
  { stage: 15, text: '            let part1 = leftParts[l];' },
  { stage: 16, text: '            let part2 = rightParts[r];' },
  { stage: 17, text: "            if (char === '+') {" },
  { stage: 18, text: '              result.push(part1 + part2);' },
  { stage: 17, text: '            } else if (char === ' - ') {' },
  { stage: 19, text: '              result.push(part1 - part2);' },
  { stage: 17, text: '            } else if (char === ' * ') {' },
  { stage: 20, text: '              result.push(part1 * part2);' },
  { stage: 17, text: '            }' },
  { stage: 14, text: '          }' },
  { stage: 13, text: '        }' },
  { stage: 10, text: '      }' },
  { stage: 8, text: '    }' },
  { stage: 6, text: '  }' },
  { stage: 0, text: '' },
  { stage: 21, text: '  map[input] = result;' },
  { stage: 22, text: '  return result;' },
  { stage: 2, text: '}' },
  { stage: 0, text: '' },
];

export const data = {
  problemID: 173,
  problemName: `Evaluate Expression`,
  problemText: `Given an expression containing digits and operations (+, -, *), find all possible ways in which the expression can be evaluated by grouping the numbers and operators using parentheses.`,
  testCases: [
    {
      id: 1,
      name: 'example 1',
      inherit: [],
      code: ``,
      evaluate: `diff_ways_to_evaluate_expression_memo('1+2*3');`,
      expected: JSON.stringify([7, 9]),
    },
    {
      id: 1,
      name: 'example 1',
      inherit: [],
      code: ``,
      evaluate: `diff_ways_to_evaluate_expression_memo('2*3-4-5');`,
      expected: JSON.stringify([8, -12, 7, -7, -3]),
    },
  ],
  setupCode: ``,
  source: [],
  tags: [SUBSETS, ALGORITHM],
  solution,
};
