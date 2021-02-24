function numIslands(grid) {
  let count = 0;

  for (let row = 0; row < grid.length; row++) {
    for (let column = 0; column < grid[row].length; column++) {
      if (grid[row][column] === '1') {
        count++;
        doBFS(grid, row, column);
      }
    }
  }
  return count;
}

function doBFS(grid, row, column) {
  const rowOutOfBounds = row < 0 || row >= grid.length;
  if (rowOutOfBounds) {
    return;
  }
  const columnOutOfBounds = column < 0 || column >= grid[row].length;
  if (columnOutOfBounds || grid[row][column] === '0') {
    return;
  }

  grid[row][column] = '0';

  doBFS(grid, row + 1, column);
  doBFS(grid, row - 1, column);
  doBFS(grid, row, column + 1);
  doBFS(grid, row, column - 1);
}

const grid = [
  ['1', '1', '1', '1', '0'],
  ['1', '1', '0', '1', '0'],
  ['1', '1', '0', '0', '0'],
  ['0', '0', '0', '0', '0'],
];
console.log(numIslands(grid)); // 1

const grid2 = [
  ['1', '1', '0', '0', '0'],
  ['1', '1', '0', '0', '0'],
  ['0', '0', '1', '0', '0'],
  ['0', '0', '0', '1', '1'],
];
console.log(numIslands(grid2)); // 3
