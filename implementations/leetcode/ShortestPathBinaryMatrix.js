const directions = [
  [-1, -1],
  [-1, 0],
  [-1, 1],
  [0, -1],
  [0, 1],
  [1, -1],
  [1, 0],
  [1, 1],
];

function shortestPathBinaryMatrix(grid) {
  // Firstly, we need to check that the start and target cells are open.
  if (grid[0][0] !== 0 || grid[grid.length - 1][grid[0].length - 1] !== 0) {
    return -1;
  }

  const naiveQueue = [];
  grid[0][0] = 1;
  naiveQueue.push([0, 0]);

  // Carry out the BFS
  while (naiveQueue.length) {
    const cell = naiveQueue.shift();
    const row = cell[0];
    const col = cell[1];
    const distance = grid[row][col];
    if (row === grid.length - 1 && col === grid[0].length - 1) {
      return distance;
    }
    for (let neighbour of getNeighbours(row, col, grid)) {
      const neighbourRow = neighbour[0];
      const neighbourCol = neighbour[1];
      naiveQueue.push([neighbourRow, neighbourCol]);
      grid[neighbourRow][neighbourCol] = distance + 1;
    }
  }

  // The target was unreachable.
  return -1;
}

function getNeighbours(row, col, grid) {
  const neighbours = [];
  for (let i = 0; i < directions.length; i++) {
    const newRow = row + directions[i][0];
    const newCol = col + directions[i][1];
    if (
      newRow < 0 ||
      newCol < 0 ||
      newRow >= grid.length ||
      newCol >= grid[0].length ||
      grid[newRow][newCol] !== 0
    ) {
      continue;
    }
    neighbours.push([newRow, newCol]);
  }
  return neighbours;
}

console.log(
  shortestPathBinaryMatrix([
    [0, 1],
    [1, 0],
  ]),
); // 2

console.log(
  shortestPathBinaryMatrix([
    [0, 0, 0],
    [1, 1, 0],
    [1, 1, 0],
  ]),
); // 4

console.log(
  shortestPathBinaryMatrix([
    [1, 0, 0],
    [1, 1, 0],
    [1, 1, 0],
  ]),
); // -1
