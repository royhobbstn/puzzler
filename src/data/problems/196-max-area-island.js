import { ALGORITHM, CRUISE, DFS } from '../constants.js';

const solution = [
  { stage: 0, text: '' },
  { stage: 0, text: 'function maxAreaOfIsland(grid) {' },
  { stage: -1, text: '  // will keep track of largest island seen' },
  { stage: 1, text: '  let maxArea = 0;' },
  { stage: 0, text: '' },
  { stage: -2, text: '  // iterate over all rows and columns of grid' },
  { stage: 2, text: '  for (let row = 0; row < grid.length; row++) {' },
  { stage: 3, text: '    for (let column = 0; column < (grid[0] || []).length; column++) {' },
  { stage: 4, text: '      let count = explore(grid, row, column);' },
  { stage: 5, text: '      maxArea = Math.max(maxArea, count);' },
  { stage: 3, text: '    }' },
  { stage: 2, text: '  }' },
  { stage: 0, text: '' },
  { stage: 6, text: '  return maxArea;' },
  { stage: 0, text: '}' },
  { stage: 0, text: '' },
  { stage: 6, text: 'function explore(grid, row, column) {' },
  { stage: -7, text: '  // base case, out of range of grid, or value at location is 0' },
  { stage: 7, text: '  if (!grid[row] || !grid[row][column]) {' },
  { stage: 8, text: '    return 0;' },
  { stage: 7, text: '  }' },
  { stage: 0, text: '' },
  { stage: -9, text: "  // set grid value to 0 so we don't ever double count" },
  { stage: 9, text: '  grid[row][column] = 0;' },
  { stage: 0, text: '' },
  { stage: -10, text: '  // explore in 4 directions' },
  { stage: 10, text: '  return (' },
  { stage: 10, text: '    1 +' },
  { stage: 10, text: '    explore(grid, row + 1, column) +' },
  { stage: 10, text: '    explore(grid, row, column + 1) +' },
  { stage: 10, text: '    explore(grid, row - 1, column) +' },
  { stage: 10, text: '    explore(grid, row, column - 1)' },
  { stage: 10, text: '  );' },
  { stage: 6, text: '}' },
  { stage: 0, text: '' },
];

export const data = {
  problemID: 196,
  problemName: `Max Area of Island`,
  problemText: `Given a non-empty 2D array grid of 0's and 1's, an island is a group of 1's (representing land) connected 4-directionally (horizontal or vertical.) You may assume all four edges of the grid are surrounded by water.

  Find the maximum area of an island in the given 2D array. (If there is no island, the maximum area is 0.)`,
  testCases: [
    {
      id: 1,
      name: 'example 1',
      inherit: [],
      code: ``,
      evaluate: `maxAreaOfIsland([[0,0,1,0,0,0,0,1,0,0,0,0,0],
        [0,0,0,0,0,0,0,1,1,1,0,0,0],
        [0,1,1,0,1,0,0,0,0,0,0,0,0],
        [0,1,0,0,1,1,0,0,1,0,1,0,0],
        [0,1,0,0,1,1,0,0,1,1,1,0,0],
        [0,0,0,0,0,0,0,0,0,0,1,0,0],
        [0,0,0,0,0,0,0,1,1,1,0,0,0],
        [0,0,0,0,0,0,0,1,1,0,0,0,0]]);`,
      expected: 6,
    },
    {
      id: 2,
      name: 'example 2',
      inherit: [],
      code: ``,
      evaluate: `maxAreaOfIsland([[0,0,0,0,0,0,0,0]]);`,
      expected: 0,
    },
  ],
  setupCode: ``,
  lcid: 695,
  source: ['https://leetcode.com/problems/max-area-of-island/'],
  tags: [DFS, ALGORITHM, CRUISE],
  solution,
};
