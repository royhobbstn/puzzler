import { ALGORITHM, DFS } from '../constants';

const solution = [
  { stage: 0, text: '' },
  { stage: 13, text: 'const NEXT_COORD_OFFSETS = [' },
  { stage: 14, text: '  [1, -1],' },
  { stage: 14, text: '  [1, 0],' },
  { stage: 14, text: '  [1, 1],' },
  { stage: 14, text: '  [0, 1],' },
  { stage: 14, text: '  [0, -1],' },
  { stage: 14, text: '  [-1, -1],' },
  { stage: 14, text: '  [-1, 0],' },
  { stage: 14, text: '  [-1, 1],' },
  { stage: 13, text: '];' },
  { stage: 0, text: '' },
  { stage: 0, text: 'function updateBoard(board, click) {' },
  { stage: 1, text: '  const [x, y] = click;' },
  { stage: 0, text: '' },
  { stage: 2, text: "  if (board[x][y] === 'M') {" },
  { stage: 3, text: "    board[x][y] = 'X';" },
  { stage: 2, text: "  } else if (board[x][y] === 'E') {" },
  { stage: 4, text: '    propagateClick(board, click);' },
  { stage: 2, text: '  }' },
  { stage: 0, text: '' },
  { stage: 5, text: '  return board;' },
  { stage: 0, text: '}' },
  { stage: 0, text: '' },
  { stage: 6, text: 'function propagateClick(board, coords) {' },
  { stage: 7, text: '  const [x, y] = coords;' },
  { stage: 0, text: '' },
  { stage: 8, text: "  if (!board[x] || board[x][y] !== 'E') return;" },
  { stage: 0, text: '' },
  { stage: 9, text: '  const sum = NEXT_COORD_OFFSETS.reduce((acc, [xOffset, yOffset]) => {' },
  { stage: 10, text: '    if ((Math.abs(xOffset) === 1 && board[x + xOffset]) || !xOffset) {' },
  { stage: 11, text: "      return board[x + xOffset][y + yOffset] === 'M' ? acc + 1 : acc;" },
  { stage: 10, text: '    }' },
  { stage: 0, text: '' },
  { stage: 12, text: '    return acc;' },
  { stage: 9, text: '  }, 0);' },
  { stage: 0, text: '' },
  { stage: 15, text: '  if (sum === 0) {' },
  { stage: 16, text: "    board[x][y] = 'B';" },
  { stage: 0, text: '' },
  { stage: 17, text: '    NEXT_COORD_OFFSETS.forEach(([xOffset, yOffset]) => {' },
  { stage: 18, text: '      if ((Math.abs(xOffset) === 1 && board[x + xOffset]) || !xOffset) {' },
  { stage: 19, text: '        propagateClick(board, [x + xOffset, y + yOffset]);' },
  { stage: 18, text: '      }' },
  { stage: 17, text: '    });' },
  { stage: 15, text: '  } else {' },
  { stage: 20, text: '    board[x][y] = sum.toString();' },
  { stage: 15, text: '  }' },
  { stage: 6, text: '}' },
  { stage: 0, text: '' },
];

export const data = {
  problemID: 195,
  problemName: `Minesweeper`,
  problemText: `You are given a 2D char matrix representing the game board. 'M' represents an unrevealed mine, 'E' represents an unrevealed empty square, 'B' represents a revealed blank square that has no adjacent (above, below, left, right, and all 4 diagonals) mines, digit ('1' to '8') represents how many mines are adjacent to this revealed square, and finally 'X' represents a revealed mine.
  
  Now given the next click position (row and column indices) among all the unrevealed squares ('M' or 'E'), return the board after revealing this position according to the following rules:
  
  If a mine ('M') is revealed, then the game is over - change it to 'X'.

  If an empty square ('E') with no adjacent mines is revealed, then change it to revealed blank ('B') and all of its adjacent unrevealed squares should be revealed recursively.

  If an empty square ('E') with at least one adjacent mine is revealed, then change it to a digit ('1' to '8') representing the number of adjacent mines.

  Return the board when no more squares will be revealed.`,
  testCases: [
    {
      id: 1,
      name: 'example 1',
      inherit: [],
      code: `const board = [
        ['E', 'E', 'E', 'E', 'E'],
        ['E', 'E', 'M', 'E', 'E'],
        ['E', 'E', 'E', 'E', 'E'],
        ['E', 'E', 'E', 'E', 'E'],
      ];
      
      const click = [3, 0];`,
      evaluate: `updateBoard(board, click);`,
      expected: JSON.stringify([
        ['B', '1', 'E', '1', 'B'],
        ['B', '1', 'M', '1', 'B'],
        ['B', '1', '1', '1', 'B'],
        ['B', 'B', 'B', 'B', 'B'],
      ]),
    },
    {
      id: 2,
      name: 'example 2',
      inherit: [],
      code: `const board2 = [
        ['B', '1', 'E', '1', 'B'],
        ['B', '1', 'M', '1', 'B'],
        ['B', '1', '1', '1', 'B'],
        ['B', 'B', 'B', 'B', 'B'],
      ];
      
      const click2 = [1, 2];`,
      evaluate: `updateBoard(board2, click2);`,
      expected: JSON.stringify([
        ['B', '1', 'E', '1', 'B'],
        ['B', '1', 'X', '1', 'B'],
        ['B', '1', '1', '1', 'B'],
        ['B', 'B', 'B', 'B', 'B'],
      ]),
    },
  ],
  setupCode: ``,
  lcid: 529,
  source: ['https://leetcode.com/problems/minesweeper/'],
  tags: [ALGORITHM, DFS],
  solution,
};
