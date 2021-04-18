function isValidSudoku(board) {
  // create lookups for row duplicates, column duplicates
  // and 3x3 box duplicates
  const rowsLookup = {};
  const columnsLookup = {};
  const boxesLookup = {};

  // initialize lookups for each of 9 indexes
  for (let i = 0; i < 9; i++) {
    rowsLookup[i] = {};
    columnsLookup[i] = {};
    boxesLookup[i] = {};
  }

  // grid for sudoku is fixed at 9x9
  for (let row = 0; row < 9; row++) {
    for (let column = 0; column < 9; column++) {
      const val = board[row][column];
      // areas in grid with no values are marked with "."  Skip these.
      if (val === '.') {
        continue;
      }

      // a clever way to create an index for the 3x3 box
      // corresponding to your current grid square
      let boxIndex = Math.floor(column / 3) * 3 + Math.floor(row / 3);

      // if value in lookup already exists, sudoku is not valid
      if (rowsLookup[row][val]) {
        return false;
      }
      rowsLookup[row][val] = true;

      // column level lookup logic
      if (columnsLookup[column][val]) {
        return false;
      }
      columnsLookup[column][val] = true;

      // box level lookup logic
      if (boxesLookup[boxIndex][val]) {
        return false;
      }
      boxesLookup[boxIndex][val] = true;
    }
  }

  // if arrived here, sudoku is valid
  return true;
}
