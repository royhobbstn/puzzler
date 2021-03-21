import { ALGORITHM, GRAPH } from '../constants.js';

const solution = [
  { stage: 0, text: '' },
  { stage: 11, text: 'const directions = [' },
  { stage: 11, text: '  [-1, -1],' },
  { stage: 11, text: '  [-1, 0],' },
  { stage: 11, text: '  [-1, 1],' },
  { stage: 11, text: '  [0, -1],' },
  { stage: 11, text: '  [0, 1],' },
  { stage: 11, text: '  [1, -1],' },
  { stage: 11, text: '  [1, 0],' },
  { stage: 11, text: '  [1, 1],' },
  { stage: 11, text: '];' },
  { stage: 0, text: '' },
  { stage: 0, text: 'function shortestPathBinaryMatrix(grid) {' },
  {
    stage: 1,
    text: '  if (grid[0][0] !== 0 || grid[grid.length - 1][grid[0].length - 1] !== 0) {',
  },
  { stage: 2, text: '    return -1;' },
  { stage: 1, text: '  }' },
  { stage: 0, text: '' },
  { stage: 3, text: '  const naiveQueue = [];' },
  { stage: 3, text: '  grid[0][0] = 1;' },
  { stage: 3, text: '  naiveQueue.push([0, 0]);' },
  { stage: 0, text: '' },
  { stage: 4, text: '  while (naiveQueue.length) {' },
  { stage: 5, text: '    const cell = naiveQueue.shift();' },
  { stage: 6, text: '    const row = cell[0];' },
  { stage: 6, text: '    const col = cell[1];' },
  { stage: 7, text: '    const distance = grid[row][col];' },
  { stage: 8, text: '    if (row === grid.length - 1 && col === grid[0].length - 1) {' },
  { stage: 9, text: '      return distance;' },
  { stage: 8, text: '    }' },
  { stage: 0, text: '' },
  { stage: 10, text: '    for (let neighbour of getNeighbours(row, col, grid)) {' },
  { stage: 18, text: '      const neighbourRow = neighbour[0];' },
  { stage: 18, text: '      const neighbourCol = neighbour[1];' },
  { stage: 19, text: '      naiveQueue.push([neighbourRow, neighbourCol]);' },
  { stage: 19, text: '      grid[neighbourRow][neighbourCol] = distance + 1;' },
  { stage: 10, text: '    }' },
  { stage: 4, text: '  }' },
  { stage: 0, text: '' },
  { stage: 20, text: '  return -1;' },
  { stage: 0, text: '}' },
  { stage: 0, text: '' },
  { stage: 11, text: 'function getNeighbours(row, col, grid) {' },
  { stage: 12, text: '  const neighbours = [];' },
  { stage: 12, text: '  for (let i = 0; i < directions.length; i++) {' },
  { stage: 13, text: '    const newRow = row + directions[i][0];' },
  { stage: 13, text: '    const newCol = col + directions[i][1];' },
  { stage: 14, text: '    if (' },
  { stage: 14, text: '      newRow < 0 ||' },
  { stage: 14, text: '      newCol < 0 ||' },
  { stage: 14, text: '      newRow >= grid.length ||' },
  { stage: 14, text: '      newCol >= grid[0].length ||' },
  { stage: 14, text: '      grid[newRow][newCol] !== 0' },
  { stage: 14, text: '    ) {' },
  { stage: 15, text: '      continue;' },
  { stage: 14, text: '    }' },
  { stage: 16, text: '    neighbours.push([newRow, newCol]);' },
  { stage: 12, text: '  }' },
  { stage: 17, text: '  return neighbours;' },
  { stage: 11, text: '}' },
  { stage: 0, text: '' },
];

export const data = {
  problemID: 79,
  problemName: `Shortest Path in a Binary Matrix`,
  problemText: `Given an \`n x n\` binary matrix \`grid\`, return the length of the shortest clear path in the matrix. If there is no clear path, return \`-1\`.

  A clear path in a binary matrix is a path from the top-left cell (i.e., (0, 0)) to the bottom-right cell (i.e., (n - 1, n - 1)) such that:
  
  All the visited cells of the path are 0.
  All the adjacent cells of the path are 8-directionally connected (i.e., they are different and they share an edge or a corner).
  The length of a clear path is the number of visited cells of this path.`,
  testCases: [
    {
      id: 1,
      name: 'example 1',
      inherit: [],
      code: ``,
      evaluate: `shortestPathBinaryMatrix([[0, 1],[1, 0]]);`,
      expected: 2,
    },
    {
      id: 2,
      name: 'example 2',
      inherit: [],
      code: ``,
      evaluate: `shortestPathBinaryMatrix([
        [0, 0, 0],
        [1, 1, 0],
        [1, 1, 0],
      ]);`,
      expected: 4,
    },
    {
      id: 3,
      name: 'example 3 - no path',
      inherit: [],
      code: ``,
      evaluate: `shortestPathBinaryMatrix([
        [1, 0, 0],
        [1, 1, 0],
        [1, 1, 0],
      ]);`,
      expected: -1,
    },
  ],
  setupCode: ``,
  source: ['https://leetcode.com/problems/shortest-path-in-binary-matrix'],
  tags: [GRAPH, ALGORITHM],
  solution,
};
