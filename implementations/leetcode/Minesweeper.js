// 529. Minesweeper

// Let's play the minesweeper game (Wikipedia, online game)!

// You are given a 2D char matrix representing the game board. 'M' represents an unrevealed mine, 'E' represents an unrevealed empty square, 'B' represents a revealed blank square that has no adjacent (above, below, left, right, and all 4 diagonals) mines, digit ('1' to '8') represents how many mines are adjacent to this revealed square, and finally 'X' represents a revealed mine.

// Now given the next click position (row and column indices) among all the unrevealed squares ('M' or 'E'), return the board after revealing this position according to the following rules:

// If a mine ('M') is revealed, then the game is over - change it to 'X'.
// If an empty square ('E') with no adjacent mines is revealed, then change it to revealed blank ('B') and all of its adjacent unrevealed squares should be revealed recursively.
// If an empty square ('E') with at least one adjacent mine is revealed, then change it to a digit ('1' to '8') representing the number of adjacent mines.
// Return the board when no more squares will be revealed.

const NEXT_COORD_OFFSETS = [
  [1, -1],
  [1, 0],
  [1, 1],
  [0, 1],
  [0, -1],
  [-1, -1],
  [-1, 0],
  [-1, 1],
];

function updateBoard(board, click) {
  const [x, y] = click;

  if (board[x][y] === 'M') {
    board[x][y] = 'X';
  } else if (board[x][y] === 'E') {
    propagateClick(board, click);
  }

  return board;
}

function propagateClick(board, coords) {
  const [x, y] = coords;

  if (!board[x] || board[x][y] !== 'E') return;

  const sum = NEXT_COORD_OFFSETS.reduce((acc, [xOffset, yOffset]) => {
    if ((Math.abs(xOffset) === 1 && board[x + xOffset]) || !xOffset) {
      return board[x + xOffset][y + yOffset] === 'M' ? acc + 1 : acc;
    }

    return acc;
  }, 0);

  if (sum === 0) {
    board[x][y] = 'B';

    NEXT_COORD_OFFSETS.forEach(([xOffset, yOffset]) => {
      if ((Math.abs(xOffset) === 1 && board[x + xOffset]) || !xOffset) {
        propagateClick(board, [x + xOffset, y + yOffset]);
      }
    });
  } else {
    board[x][y] = sum.toString();
  }
}

// Example 1:

// Input:

const board = [
  ['E', 'E', 'E', 'E', 'E'],
  ['E', 'E', 'M', 'E', 'E'],
  ['E', 'E', 'E', 'E', 'E'],
  ['E', 'E', 'E', 'E', 'E'],
];

const click = [3, 0];

// Output:

console.log(updateBoard(board, click));

const output = [
  ['B', '1', 'E', '1', 'B'],
  ['B', '1', 'M', '1', 'B'],
  ['B', '1', '1', '1', 'B'],
  ['B', 'B', 'B', 'B', 'B'],
];

console.log(JSON.stringify(updateBoard(board, click)) === JSON.stringify(output));

// Example 2:

// Input:

const board2 = [
  ['B', '1', 'E', '1', 'B'],
  ['B', '1', 'M', '1', 'B'],
  ['B', '1', '1', '1', 'B'],
  ['B', 'B', 'B', 'B', 'B'],
];

const click2 = [1, 2];

// Output:

console.log(updateBoard(board2, click2));

const output2 = [
  ['B', '1', 'E', '1', 'B'],
  ['B', '1', 'X', '1', 'B'],
  ['B', '1', '1', '1', 'B'],
  ['B', 'B', 'B', 'B', 'B'],
];

console.log(JSON.stringify(updateBoard(board2, click2)) === JSON.stringify(output2));
