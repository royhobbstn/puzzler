function minPathSum(grid) {
  const lastRow = grid.length - 1;
  for (let row = lastRow; row >= 0; row--) {
    const lastColumn = grid[row].length - 1;
    for (let column = lastColumn; column >= 0; column--) {
      if (row == lastRow && column != lastColumn) {
        grid[row][column] = grid[row][column] + grid[row][column + 1];
      } else if (column == lastColumn && row != lastRow) {
        grid[row][column] = grid[row][column] + grid[row + 1][column];
      } else if (column != lastColumn && row != lastRow) {
        grid[row][column] =
          grid[row][column] + Math.min(grid[row + 1][column], grid[row][column + 1]);
      }
    }
  }
  return grid[0][0];
}

console.log(
  minPathSum([
    [1, 3, 1],
    [1, 5, 1],
    [4, 2, 1],
  ]),
); // 7
console.log(
  minPathSum([
    [1, 2, 3],
    [4, 5, 6],
  ]),
); // 12
