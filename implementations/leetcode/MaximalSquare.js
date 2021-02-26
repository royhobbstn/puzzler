function maximalSquareBruteForce(matrix) {
  let ans = 0;
  for (let row = 0; row < matrix.length; row++) {
    for (let column = 0; column < matrix[row].length; column++) {
      if (matrix[row][column] === '1') {
        const result = findSquare(matrix, row, column);
        if (result > ans) {
          ans = result;
        }
      }
    }
  }
  return ans;
}

function findSquare(matrix, row, column) {
  let count = 1;
  let miss = false;
  while (!miss) {
    const list = [];
    for (let i = 0; i <= count; i++) {
      list.push([row + i, column + count]);
    }
    for (let i = 0; i < count; i++) {
      list.push([row + count, column + i]);
    }
    for (let item of list) {
      if (item[0] >= matrix.length || matrix[item[0]][item[1]] !== '1') {
        miss = true;
      }
    }
    if (!miss) {
      count++;
    }
  }
  return Math.pow(count, 2);
}

// Brute force solution above.  Dynamic programming below.
// Attempt to understand this.

function maximalSquare(matrix) {
  let rows = matrix.length;
  let cols = rows > 0 ? matrix[0].length : 0;

  let dp = new Array(cols + 1).fill(0);
  let maxsqlen = 0;
  let prev = 0;

  for (let i = 1; i <= rows; i++) {
    for (let j = 1; j <= cols; j++) {
      let temp = dp[j];
      if (matrix[i - 1][j - 1] === '1') {
        dp[j] = Math.min(Math.min(dp[j - 1], prev), dp[j]) + 1;
        maxsqlen = Math.max(maxsqlen, dp[j]);
      } else {
        dp[j] = 0;
      }
      prev = temp;
    }
  }

  return maxsqlen * maxsqlen;
}

const matrix = [
  ['1', '0', '1', '0', '0'],
  ['1', '0', '1', '1', '1'],
  ['1', '1', '1', '1', '1'],
  ['1', '0', '0', '1', '0'],
];

console.log(maximalSquare(matrix)); // 4
