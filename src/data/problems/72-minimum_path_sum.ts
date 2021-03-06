import { ALGORITHM, DYNAMIC_PROGRAMMING } from '../constants';

const solution = [
  { stage: 0, text: '' },
  { stage: 0, text: 'function minPathSum(grid) {' },
  { stage: 1, text: '  const lastRow = grid.length - 1;' },
  { stage: 2, text: '  for (let row = lastRow; row >= 0; row--) {' },
  { stage: 3, text: '    const lastColumn = grid[row].length - 1;' },
  { stage: 4, text: '    for (let column = lastColumn; column >= 0; column--) {' },
  { stage: 5, text: '      if (row == lastRow && column != lastColumn) {' },
  { stage: 6, text: '        grid[row][column] = grid[row][column] + grid[row][column + 1];' },
  { stage: 5, text: '      } else if (column == lastColumn && row != lastRow) {' },
  { stage: 7, text: '        grid[row][column] = grid[row][column] + grid[row + 1][column];' },
  { stage: 5, text: '      } else if (column != lastColumn && row != lastRow) {' },
  { stage: 8, text: '        grid[row][column] =' },
  {
    stage: 8,
    text: '          grid[row][column] + Math.min(grid[row + 1][column], grid[row][column + 1]);',
  },
  { stage: 5, text: '      }' },
  { stage: 4, text: '    }' },
  { stage: 2, text: '  }' },
  { stage: 0, text: '' },
  { stage: 9, text: '  return grid[0][0];' },
  { stage: 0, text: '}' },
  { stage: 0, text: '' },
];

export const data = {
  problemID: 72,
  problemName: `Minimum Path Sum on a 2D Matrix.`,
  problemText: `Given a 2D \`grid\` filled with positive integers, trace a path from the top left to the bottom right which produces the minimum sum along its path, and return that value.

   - Your path must only follow a trajectory of downward and rightward movements.`,
  testCases: [
    {
      id: 1,
      name: 'example 1',
      inherit: [],
      code: ``,
      evaluate: `minPathSum([
        [1, 3, 1],
        [1, 5, 1],
        [4, 2, 1],
      ]);`,
      expected: 7,
    },
    {
      id: 2,
      name: 'example 2',
      inherit: [],
      code: ``,
      evaluate: `minPathSum([
        [1, 2, 3],
        [4, 5, 6],
      ]);`,
      expected: 12,
    },
  ],
  setupCode: ``,
  lcid: 64,
  source: ['https://leetcode.com/problems/minimum-path-sum'],
  tags: [DYNAMIC_PROGRAMMING, ALGORITHM],
  solution,
};
