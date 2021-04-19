import { ALGORITHM, CRUISE, DYNAMIC_PROGRAMMING, FACEBOOK } from '../constants.js';

const solution = [
  { stage: 0, text: '' },
  { stage: 0, text: 'class NumMatrix {' },
  { stage: 0, text: '  constructor(matrix) {' },
  { stage: 1, text: '    this.matrix = matrix;' },
  { stage: 1, text: '    this.cache = [];' },
  { stage: 1, text: '    this.preCompute();' },
  { stage: 0, text: '  }' },
  { stage: 0, text: '' },
  { stage: 2, text: '  preCompute() {' },
  { stage: 3, text: '    for (let row = 0; row < this.matrix.length; row++) {' },
  { stage: 4, text: '      this.cache[row] = [];' },
  { stage: 0, text: '' },
  { stage: 5, text: '      for (let col = 0; col < this.matrix[0].length; col++) {' },
  { stage: 6, text: '        let prevCol = col > 0 ? this.cache[row][col - 1] : 0;' },
  { stage: 7, text: '        let prevRow = row > 0 ? this.cache[row - 1][col] : 0;' },
  {
    stage: 8,
    text: '        let prevCache = row > 0 && col > 0 ? this.cache[row - 1][col - 1] : 0;',
  },
  { stage: 9, text: '        let sum = this.matrix[row][col] + prevCol + prevRow - prevCache;' },
  { stage: 10, text: '        this.cache[row].push(sum);' },
  { stage: 5, text: '      }' },
  { stage: 3, text: '    }' },
  { stage: 2, text: '  }' },
  { stage: 0, text: '' },
  { stage: 11, text: '  sumRegion(row1, col1, row2, col2) {' },
  { stage: 12, text: '    let totalArea = this.cache[row2][col2];' },
  { stage: 13, text: '    let topArea = row1 > 0 ? this.cache[row1 - 1][col2] : 0;' },
  { stage: 14, text: '    let sideArea = col1 > 0 ? this.cache[row2][col1 - 1] : 0;' },
  {
    stage: 15,
    text: '    let cornerArea = row1 > 0 && col1 > 0 ? this.cache[row1 - 1][col1 - 1] : 0;',
  },
  { stage: 0, text: '' },
  { stage: 16, text: '    return totalArea - topArea - sideArea + cornerArea;' },
  { stage: 11, text: '  }' },
  { stage: 0, text: '}' },
  { stage: 0, text: '' },
];

export const data = {
  problemID: 194,
  problemName: `Range Sum Query 2D - Immutable`,
  problemText: `Given a 2D matrix \`matrix\`, find the sum of the elements inside the rectangle defined by its upper left corner (row1, col1) and lower right corner (row2, col2).

  Implement the NumMatrix class:
  
  NumMatrix(int[][] matrix) initializes the object with the integer matrix matrix.
  
  int sumRegion(int row1, int col1, int row2, int col2) returns the sum of the elements of the matrix array inside the rectangle defined by its upper left corner (row1, col1) and lower right corner (row2, col2).`,
  testCases: [
    {
      id: 1,
      name: 'example 1',
      inherit: [],
      code: `const numMatrix = new NumMatrix([
        [3, 0, 1, 4, 2],
        [5, 6, 3, 2, 1],
        [1, 2, 0, 1, 5],
        [4, 1, 0, 1, 7],
        [1, 0, 3, 0, 5],
      ]);`,
      evaluate: `numMatrix.sumRegion(2, 1, 4, 3);`,
      expected: 8,
    },
    {
      id: 2,
      name: 'example 2',
      inherit: [1],
      code: ``,
      evaluate: `numMatrix.sumRegion(1, 1, 2, 2);`,
      expected: 11,
    },
    {
      id: 3,
      name: 'example 3',
      inherit: [1],
      code: ``,
      evaluate: `numMatrix.sumRegion(1, 2, 2, 4);`,
      expected: 12,
    },
  ],
  setupCode: ``,
  lcid: 304,
  source: ['https://leetcode.com/problems/range-sum-query-2d-immutable/'],
  tags: [ALGORITHM, DYNAMIC_PROGRAMMING, FACEBOOK, CRUISE],
  solution,
};
