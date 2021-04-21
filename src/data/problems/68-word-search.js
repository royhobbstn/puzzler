import { RECURSION, ALGORITHM, CRUISE, CURATED } from '../constants.js';

const solution = [
  { stage: 0, text: '' },
  { stage: 0, text: 'function wordSearch(board, word) {' },
  { stage: 1, text: '  for (let [rowIndex, row] of board.entries()) {' },
  { stage: 1, text: '    for (let [columnIndex, letter] of row.entries()) {' },
  { stage: 2, text: '      if (navigate(board, word, rowIndex, columnIndex, 0) === true) {' },
  { stage: 2, text: '        return true;' },
  { stage: 2, text: '      }' },
  { stage: 1, text: '    }' },
  { stage: 1, text: '  }' },
  { stage: 0, text: '' },
  { stage: 3, text: '  return false;' },
  { stage: 0, text: '}' },
  { stage: 0, text: '' },
  { stage: 4, text: 'function navigate(board, word, rowIndex, columnIndex, wordCharIndex) {' },
  { stage: 5, text: '  let nextCharToFind = word[wordCharIndex];' },
  { stage: 5, text: '  if (!nextCharToFind) {' },
  { stage: 5, text: '    return true;' },
  { stage: 5, text: '  }' },
  { stage: 0, text: '' },
  { stage: 6, text: '  if (' },
  { stage: 6, text: '    rowIndex < 0 ||' },
  { stage: 6, text: '    rowIndex == board.length ||' },
  { stage: 6, text: '    columnIndex < 0 ||' },
  { stage: 6, text: '    columnIndex == board[0].length ||' },
  { stage: 6, text: '    board[rowIndex][columnIndex] != nextCharToFind' },
  { stage: 6, text: '  ) {' },
  { stage: 7, text: '    return false;' },
  { stage: 6, text: '  }' },
  { stage: 0, text: '' },
  { stage: 8, text: '  let ret = false;' },
  { stage: 8, text: "  board[rowIndex][columnIndex] = '#';" },
  { stage: 0, text: '' },
  { stage: 9, text: '  let loop = [' },
  { stage: 9, text: '    [-1, 0],' },
  { stage: 9, text: '    [0, -1],' },
  { stage: 9, text: '    [0, 1],' },
  { stage: 9, text: '    [1, 0],' },
  { stage: 9, text: '  ];' },
  { stage: 10, text: '  for (let item of loop) {' },
  {
    stage: 11,
    text:
      '    ret = navigate(board, word, rowIndex + item[0], columnIndex + item[1], wordCharIndex + 1);',
  },
  { stage: 12, text: '    if (ret) {' },
  { stage: 12, text: '      break;' },
  { stage: 12, text: '    }' },
  { stage: 10, text: '  }' },
  { stage: 0, text: '' },
  { stage: 13, text: '  board[rowIndex][columnIndex] = word[wordCharIndex];' },
  { stage: 13, text: '  return ret;' },
  { stage: 4, text: '}' },
  { stage: 0, text: '' },
];

export const data = {
  problemID: 68,
  problemName: 'Solve Word Search.',
  problemText: `Given a \`board\` (two dimensional array), and a \`word\` (string), create a function **wordSearch** which returns a boolean indicating whether the word can be found on the board.  
  The word can be constructed from a series of letters which are either horizontally or vertically adjacent.  The same board letter can not be used multiple times.`,
  testCases: [
    {
      id: 1,
      name: 'case 1',
      inherit: [],
      code: `
      const board = [
        ['B', 'C', 'D', 'F'],
        ['T', 'G', 'D', 'T'],
        ['B', 'E', 'F', 'F'],
      ];
      const word = 'BCDDFE';`,
      evaluate: `wordSearch(board, word);`,
      expected: true,
    },
    {
      id: 2,
      name: 'case 2',
      inherit: [],
      code: `
      const board = [
        ['B', 'C', 'D', 'F'],
        ['T', 'G', 'D', 'T'],
        ['B', 'E', 'F', 'F'],
      ];
      const word = 'TFF';`,
      evaluate: `wordSearch(board, word);`,
      expected: true,
    },
    {
      id: 3,
      name: 'case 3',
      inherit: [],
      code: `
      const board = [
        ['B', 'C', 'D', 'F'],
        ['T', 'G', 'D', 'T'],
        ['B', 'E', 'F', 'F'],
      ];
      const word = 'BDDC';`,
      evaluate: `wordSearch(board, word);`,
      expected: false,
    },
  ],
  setupCode: '',
  lcid: 79,
  source: ['https://leetcode.com/problems/word-search/'],
  tags: [RECURSION, ALGORITHM, CRUISE, CURATED],
  solution,
};
