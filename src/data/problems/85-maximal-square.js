import { ALGORITHM, EXPERT, DYNAMIC_PROGRAMMING } from '../constants.js';

const solution = [
  { stage: 0, text: '' },
  { stage: 0, text: 'function maximalSquare(matrix) {' },
  { stage: 1, text: '  let rows = matrix.length;' },
  { stage: 1, text: '  let cols = rows > 0 ? matrix[0].length : 0;' },
  { stage: 0, text: '' },
  { stage: 2, text: '  let dp = new Array(cols + 1).fill(0);' },
  { stage: 3, text: '  let maxsqlen = 0;' },
  { stage: 3, text: '  let prev = 0;' },
  { stage: 0, text: '' },
  { stage: 4, text: '  for (let i = 1; i <= rows; i++) {' },
  { stage: 5, text: '    for (let j = 1; j <= cols; j++) {' },
  { stage: 6, text: '      let temp = dp[j];' },
  { stage: 7, text: "      if (matrix[i - 1][j - 1] === '1') {" },
  { stage: 8, text: '        dp[j] = Math.min(Math.min(dp[j - 1], prev), dp[j]) + 1;' },
  { stage: 9, text: '        maxsqlen = Math.max(maxsqlen, dp[j]);' },
  { stage: 7, text: '      } else {' },
  { stage: 10, text: '        dp[j] = 0;' },
  { stage: 7, text: '      }' },
  { stage: 11, text: '      prev = temp;' },
  { stage: 5, text: '    }' },
  { stage: 4, text: '  }' },
  { stage: 0, text: '' },
  { stage: 12, text: '  return maxsqlen * maxsqlen;' },
  { stage: 0, text: '}' },
  { stage: 0, text: '' },
];

export const data = {
  problemID: 85,
  problemName: `Find the Maximal Square in a Grid.`,
  problemText: `Given an m x n binary matrix filled with 0's and 1's, find the largest square containing only 1's and return its area.`,
  testCases: [
    {
      id: 1,
      name: 'example 1',
      inherit: [],
      code: `const matrix = [
        ['1', '0', '1', '0', '0'],
        ['1', '0', '1', '1', '1'],
        ['1', '1', '1', '1', '1'],
        ['1', '0', '0', '1', '0'],
      ];`,
      evaluate: `maximalSquare(matrix);`,
      expected: 4,
    },
  ],
  setupCode: ``,
  tags: [DYNAMIC_PROGRAMMING, ALGORITHM],
  difficulty: EXPERT,
  solution,
};
