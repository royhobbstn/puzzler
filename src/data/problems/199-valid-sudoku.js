import { ALGORITHM, CRUISE } from '../constants.js';

const solution = [
  { stage: 0, text: '' },
  { stage: 0, text: 'function isValidSudoku(board) {' },
  { stage: -1, text: '  // create lookups for row duplicates, column duplicates' },
  { stage: -1, text: '  // and 3x3 box duplicates' },
  { stage: 1, text: '  const rowsLookup = {};' },
  { stage: 1, text: '  const columnsLookup = {};' },
  { stage: 2, text: '  const boxesLookup = {};' },
  { stage: 0, text: '' },
  { stage: -3, text: '  // initialize lookups for each of 9 indexes' },
  { stage: 3, text: '  for (let i = 0; i < 9; i++) {' },
  { stage: 4, text: '    rowsLookup[i] = {};' },
  { stage: 4, text: '    columnsLookup[i] = {};' },
  { stage: 4, text: '    boxesLookup[i] = {};' },
  { stage: 3, text: '  }' },
  { stage: 0, text: '' },
  { stage: -5, text: '  // grid for sudoku is fixed at 9x9' },
  { stage: 5, text: '  for (let row = 0; row < 9; row++) {' },
  { stage: 6, text: '    for (let column = 0; column < 9; column++) {' },
  { stage: 7, text: '      const val = board[row][column];' },
  { stage: -8, text: '      // areas in grid with no values are marked with "."  Skip these.' },
  { stage: 8, text: "      if (val === '.') {" },
  { stage: 9, text: '        continue;' },
  { stage: 8, text: '      }' },
  { stage: 0, text: '' },
  { stage: -10, text: '      // a clever way to create an index for the 3x3 box' },
  { stage: -10, text: '      // corresponding to your current grid square' },
  { stage: 10, text: '      let boxIndex = Math.floor(column / 3) * 3 + Math.floor(row / 3);' },
  { stage: 0, text: '' },
  { stage: -11, text: '      // if value in lookup already exists, sudoku is not valid' },
  { stage: 11, text: '      if (rowsLookup[row][val]) {' },
  { stage: 12, text: '        return false;' },
  { stage: 11, text: '      }' },
  { stage: 13, text: '      rowsLookup[row][val] = true;' },
  { stage: 0, text: '' },
  { stage: -14, text: '      // column level lookup logic' },
  { stage: 14, text: '      if (columnsLookup[column][val]) {' },
  { stage: 15, text: '        return false;' },
  { stage: 14, text: '      }' },
  { stage: 16, text: '      columnsLookup[column][val] = true;' },
  { stage: 0, text: '' },
  { stage: -17, text: '      // box level lookup logic' },
  { stage: 17, text: '      if (boxesLookup[boxIndex][val]) {' },
  { stage: 18, text: '        return false;' },
  { stage: 17, text: '      }' },
  { stage: 19, text: '      boxesLookup[boxIndex][val] = true;' },
  { stage: 6, text: '    }' },
  { stage: 5, text: '  }' },
  { stage: 0, text: '' },
  { stage: -20, text: '  // if arrived here, sudoku is valid' },
  { stage: 20, text: '  return true;' },
  { stage: 0, text: '}' },
  { stage: 0, text: '' },
];

export const data = {
  problemID: 199,
  problemName: `Valid Sudoku`,
  problemText: `Determine if a 9 x 9 Sudoku board is valid. Only the filled cells need to be validated according to the following rules:

  Each row must contain the digits 1-9 without repetition.

  Each column must contain the digits 1-9 without repetition.

  Each of the nine 3 x 3 sub-boxes of the grid must contain the digits 1-9 without repetition.`,
  testCases: [
    {
      id: 1,
      name: 'example 1',
      inherit: [],
      code: `const board = 
      [["5","3",".",".","7",".",".",".","."]
      ,["6",".",".","1","9","5",".",".","."]
      ,[".","9","8",".",".",".",".","6","."]
      ,["8",".",".",".","6",".",".",".","3"]
      ,["4",".",".","8",".","3",".",".","1"]
      ,["7",".",".",".","2",".",".",".","6"]
      ,[".","6",".",".",".",".","2","8","."]
      ,[".",".",".","4","1","9",".",".","5"]
      ,[".",".",".",".","8",".",".","7","9"]];`,
      evaluate: `isValidSudoku(board);`,
      expected: true,
    },
    {
      id: 2,
      name: 'example 2',
      inherit: [],
      code: `const board = 
        [["8","3",".",".","7",".",".",".","."]
        ,["6",".",".","1","9","5",".",".","."]
        ,[".","9","8",".",".",".",".","6","."]
        ,["8",".",".",".","6",".",".",".","3"]
        ,["4",".",".","8",".","3",".",".","1"]
        ,["7",".",".",".","2",".",".",".","6"]
        ,[".","6",".",".",".",".","2","8","."]
        ,[".",".",".","4","1","9",".",".","5"]
        ,[".",".",".",".","8",".",".","7","9"]];`,
      evaluate: `isValidSudoku(board);`,
      expected: false,
    },
  ],
  setupCode: ``,
  lcid: 36,
  source: [],
  tags: [CRUISE, ALGORITHM],
  solution,
};
