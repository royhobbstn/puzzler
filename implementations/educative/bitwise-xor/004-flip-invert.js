// Flip Invert

// Given a binary matrix representing an image, we want to flip the image horizontally, then invert it.

// To flip an image horizontally means that each row of the image is reversed. For example, flipping [0, 1, 1] horizontally results in [1, 1, 0].

// To invert an image means that each 0 is replaced by 1, and each 1 is replaced by 0. For example, inverting [1, 1, 0] results in [0, 0, 1].

function flip_and_invert_image(matrix) {
  const C = matrix.length;
  for (var row = 0; row < C; ++row) {
    for (var col = 0; col < Math.floor((C + 1) / 2); ++col) {
      var tmp = matrix[row][col] ^ 1;
      matrix[row][col] = matrix[row][C - 1 - col] ^ 1;
      matrix[row][C - 1 - col] = tmp;
    }
  }
  return matrix;
}

console.log(
  flip_and_invert_image([
    [1, 0, 1],
    [1, 1, 1],
    [0, 1, 1],
  ]),
);
// [ [ 0, 1, 0 ], [ 0, 0, 0 ], [ 0, 0, 1 ] ]

console.log(
  flip_and_invert_image([
    [1, 1, 0, 0],
    [1, 0, 0, 1],
    [0, 1, 1, 1],
    [1, 0, 1, 0],
  ]),
);
// [ [ 1, 1, 0, 0 ], [ 0, 1, 1, 0 ], [ 0, 0, 0, 1 ], [ 1, 0, 1, 0 ] ]
