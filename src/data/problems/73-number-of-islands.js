import { ALGORITHM, AMAZON, CRUISE, CURATED, GENERAL } from '../constants.js';

const solution = [
  { stage: 0, text: '' },
  { stage: 0, text: 'function numIslands(grid) {' },
  { stage: 1, text: '  let count = 0;' },
  { stage: 0, text: '' },
  { stage: 1, text: '  for (let row = 0; row < grid.length; row++) {' },
  { stage: 2, text: '    for (let column = 0; column < grid[row].length; column++) {' },
  { stage: 3, text: "      if (grid[row][column] === '1') {" },
  { stage: 4, text: '        count++;' },
  { stage: 4, text: '        doBFS(grid, row, column);' },
  { stage: 3, text: '      }' },
  { stage: 2, text: '    }' },
  { stage: 1, text: '  }' },
  { stage: 5, text: '  return count;' },
  { stage: 0, text: '}' },
  { stage: 0, text: '' },
  { stage: 6, text: 'function doBFS(grid, row, column) {' },
  { stage: 7, text: '  const rowOutOfBounds = row < 0 || row >= grid.length;' },
  { stage: 7, text: '  if (rowOutOfBounds) {' },
  { stage: 7, text: '    return;' },
  { stage: 7, text: '  }' },
  { stage: 8, text: '  const columnOutOfBounds = column < 0 || column >= grid[row].length;' },
  { stage: 8, text: "  if (columnOutOfBounds || grid[row][column] === '0') {" },
  { stage: 8, text: '    return;' },
  { stage: 8, text: '  }' },
  { stage: 0, text: '' },
  { stage: 9, text: "  grid[row][column] = '0';" },
  { stage: 0, text: '' },
  { stage: 10, text: '  doBFS(grid, row + 1, column);' },
  { stage: 10, text: '  doBFS(grid, row - 1, column);' },
  { stage: 11, text: '  doBFS(grid, row, column + 1);' },
  { stage: 11, text: '  doBFS(grid, row, column - 1);' },
  { stage: 6, text: '}' },
  { stage: 0, text: '' },
];

export const data = {
  problemID: 73,
  problemName: `Determine Number of Islands in a 2D Grid.`,
  problemText: `Given an 2d \`grid\` of '1's (land) and '0's (water), return the number of islands.

  An island is surrounded by water and includes all land connected horizontally or vertically. 
  
  Assume areas outside the bounds of the grid are water.`,
  testCases: [
    {
      id: 1,
      name: 'example 1',
      inherit: [],
      code: `const grid = [
        ['1', '1', '1', '1', '0'],
        ['1', '1', '0', '1', '0'],
        ['1', '1', '0', '0', '0'],
        ['0', '0', '0', '0', '0'],
      ];`,
      evaluate: `numIslands(grid);`,
      expected: 1,
    },
    {
      id: 1,
      name: 'example 1',
      inherit: [],
      code: `const grid = [
        ['1', '1', '0', '0', '0'],
        ['1', '1', '0', '0', '0'],
        ['0', '0', '1', '0', '0'],
        ['0', '0', '0', '1', '1'],
      ];`,
      evaluate: `numIslands(grid);`,
      expected: 3,
    },
  ],
  setupCode: ``,
  lcid: 200,
  source: ['https://leetcode.com/problems/number-of-islands'],
  tags: [GENERAL, ALGORITHM, AMAZON, CRUISE, CURATED],
  solution,
};
