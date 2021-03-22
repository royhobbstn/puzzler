// 304. Range Sum Query 2D - Immutable

// Given a 2D matrix matrix, find the sum of the elements inside the rectangle defined by its upper left corner (row1, col1) and lower right corner (row2, col2).

// Implement the NumMatrix class:

// NumMatrix(int[][] matrix) initializes the object with the integer matrix matrix.
// int sumRegion(int row1, int col1, int row2, int col2) returns the sum of the elements of the matrix array inside the rectangle defined by its upper left corner (row1, col1) and lower right corner (row2, col2).

class NumMatrix {
  constructor(matrix) {
    this.matrix = matrix;
    this.cache = [];
    this.preCompute();
  }

  preCompute() {
    for (let row = 0; row < this.matrix.length; row++) {
      this.cache[row] = [];
      for (let col = 0; col < this.matrix[0].length; col++) {
        let prevCol = col > 0 ? this.cache[row][col - 1] : 0;
        let prevRow = row > 0 ? this.cache[row - 1][col] : 0;
        let prevCache = row > 0 && col > 0 ? this.cache[row - 1][col - 1] : 0;
        let sum = this.matrix[row][col] + prevCol + prevRow - prevCache;
        this.cache[row].push(sum);
      }
    }
  }

  sumRegion(row1, col1, row2, col2) {
    let totalArea = this.cache[row2][col2];
    let topArea = row1 > 0 ? this.cache[row1 - 1][col2] : 0;
    let sideArea = col1 > 0 ? this.cache[row2][col1 - 1] : 0;
    let cornerArea = row1 > 0 && col1 > 0 ? this.cache[row1 - 1][col1 - 1] : 0;

    return totalArea - topArea - sideArea + cornerArea;
  }
}

const numMatrix = new NumMatrix([
  [3, 0, 1, 4, 2],
  [5, 6, 3, 2, 1],
  [1, 2, 0, 1, 5],
  [4, 1, 0, 1, 7],
  [1, 0, 3, 0, 5],
]);
console.log(numMatrix.sumRegion(2, 1, 4, 3)); // return 8 (i.e sum of the red rectangele).
console.log(numMatrix.sumRegion(1, 1, 2, 2)); // return 11 (i.e sum of the green rectangele).
console.log(numMatrix.sumRegion(1, 2, 2, 4)); // return 12 (i.e sum of the blue rectangele).
