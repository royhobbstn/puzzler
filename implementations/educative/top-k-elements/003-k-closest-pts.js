// Given an array of points in the a 2D2D plane, find ‘K’ closest points to the origin.

// Example 1:

// Input: points = [[1,2],[1,3]], K = 1
// Output: [[1,2]]
// Explanation: The Euclidean distance between (1, 2) and the origin is sqrt(5).
// The Euclidean distance between (1, 3) and the origin is sqrt(10).
// Since sqrt(5) < sqrt(10), therefore (1, 2) is closer to the origin.
// Example 2:

// Input: point = [[1, 3], [3, 4], [2, -1]], K = 2
// Output: [[1, 3], [2, -1]]

const Heap = require('./collections/heap'); //http://www.collectionsjs.com

class Point {
  constructor(x, y) {
    this.x = x;
    this.y = y;
  }

  // used for max-heap
  compare(other) {
    return this.distance_from_origin() - other.distance_from_origin();
  }

  distance_from_origin() {
    // ignoring sqrt to calculate the distance
    return this.x * this.x + this.y * this.y;
  }

  print_point() {
    process.stdout.write(`[${this.x}, ${this.y}] `);
  }
}

function find_closest_points(points, k) {
  const maxHeap = new Heap([], null, (a, b) => a.compare(b));
  // put first 'k' points in the max heap
  for (i = 0; i < k; i++) {
    maxHeap.push(points[i]);
  }

  // go through the remaining points of the input array, if a point is closer to the origin than the top point
  // of the max-heap, remove the top point from heap and add the point from the input array
  for (i = k; i < points.length; i++) {
    if (points[i].distance_from_origin() < maxHeap.peek().distance_from_origin()) {
      maxHeap.pop();
      maxHeap.push(points[i]);
    }
  }
  // the heap has 'k' points closest to the origin, return them in a list
  return maxHeap.toArray();
}

const result = find_closest_points([new Point(1, 3), new Point(3, 4), new Point(2, -1)], 2);
process.stdout.write('Here are the k points closest the origin: ');
result.forEach(p => p.print_point());
