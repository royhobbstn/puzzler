function minAreaRect(points) {
  const map = {};

  for (const [x, y] of points) {
    if (!map[x]) {
      map[x] = [];
    }
    map[x].push(y);
  }

  let min = Infinity;

  for (const [x1, y1] of points) {
    for (const [x2, y2] of points) {
      if (x1 === x2 || y1 === y2) {
        continue;
      }

      if (map[x1].includes(y2) && map[x2].includes(y1)) {
        min = Math.min(min, Math.abs(x1 - x2) * Math.abs(y1 - y2));
      }
    }
  }

  return min === Infinity ? 0 : min;
}

console.log(
  minAreaRect([
    [1, 1],
    [1, 3],
    [3, 1],
    [3, 3],
    [2, 2],
  ]) === 4,
);

console.log(
  minAreaRect([
    [1, 1],
    [1, 3],
    [3, 1],
    [3, 3],
    [4, 1],
    [4, 3],
  ]) === 2,
);

// Let's say you are given [1,1],[1,3],[3,1],[3,3],[2,2] as coordinates. If you draw the coordinates on the graph, you will see a rectangle being formed with coordinates, [1,1],[1,3],[3,1],[3,3] (Ignore 2,2). The goal is to find the area of this (the only) rectangle formed. Which would be length * breath, i.e. 2*2 = 4.

// Again, if we have [1,1],[1,3],[3,1],[3,3],[4,1],[4,3] as coordinates. There are total 3 rectangles formed. First: [1,1][1,3],[3,3],[3,1], Second: [3,1][3,3][4,3],[4,1], Third: [1,1][1,3][4,3][4,1]. Out of these rectangles formed by the given coordinates, second rectangle has the smallest area, of 2. Therefore the answer is 2.

// Description also includes that the rectangle formed from these coordinates will have sides parallel to x and y axis. This is to keep the problem simple.

// ------

// A rectangle aligned to xy axis must be created with 2 points which their both X,Y coords are different (points on the diagonal).
// That being said, we go through every possible pair of points (that's why solution is O(N^2)) and look for such pair where for points (x1,y1), (x2,y2) -> x1 != x2 and y1 != y2, or just write
// if (x1 == x2 || y1==y2) continue;

// Now that we found such pair, we need to look for the missing points (x1,y2), (x2,y1), that we do with pre-built hashmap where key is x coord and value is a set of all y coords exists in the given array.

// after we have all 4 points, we can easily calculate rectangle area and decide if it's lower than our min area (initially set to integer max value)
