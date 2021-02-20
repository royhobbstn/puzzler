const board = [
  ['A', 'B', 'C', 'E'],
  ['S', 'F', 'C', 'S'],
  ['A', 'D', 'E', 'E'],
];
const word = 'ABCCED';

console.log(wordSearch(board, word));

// ------------

function wordSearch(board, word) {
  for (let [rowIndex, row] of board.entries()) {
    for (let [columnIndex, letter] of row.entries()) {
      if (navigate(board, word, rowIndex, columnIndex, 0) === true) {
        return true;
      }
    }
  }

  return false;
}

function navigate(board, word, rowIndex, columnIndex, wordCharIndex) {
  let nextCharToFind = word[wordCharIndex];
  if (!nextCharToFind) {
    return true;
  }

  if (
    rowIndex < 0 ||
    rowIndex == board.length ||
    columnIndex < 0 ||
    columnIndex == board[0].length ||
    board[rowIndex][columnIndex] != nextCharToFind
  ) {
    return false;
  }

  let ret = false;
  board[rowIndex][columnIndex] = '#';

  let loop = [
    [-1, 0],
    [0, -1],
    [0, 1],
    [1, 0],
  ];
  for (let item of loop) {
    ret = navigate(board, word, rowIndex + item[0], columnIndex + item[1], wordCharIndex + 1);
    if (ret) {
      break;
    }
  }

  board[rowIndex][columnIndex] = word[wordCharIndex];
  return ret;
}
