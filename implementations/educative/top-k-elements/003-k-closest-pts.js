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

class MaxHeap {
  constructor() {
    this.heapContainer = [];
  }

  // child utils
  getLeftChildIndex(parentIndex) {
    return 2 * parentIndex + 1;
  }

  getRightChildIndex(parentIndex) {
    return 2 * parentIndex + 2;
  }

  hasLeftChild(parentIndex) {
    return this.getLeftChildIndex(parentIndex) < this.heapContainer.length;
  }

  hasRightChild(parentIndex) {
    return this.getRightChildIndex(parentIndex) < this.heapContainer.length;
  }

  leftChild(parentIndex) {
    return this.heapContainer[this.getLeftChildIndex(parentIndex)];
  }

  rightChild(parentIndex) {
    return this.heapContainer[this.getRightChildIndex(parentIndex)];
  }

  // parent utils
  getParentIndex(childIndex) {
    return Math.floor((childIndex - 1) / 2);
  }

  hasParent(childIndex) {
    return this.getParentIndex(childIndex) >= 0;
  }

  parent(childIndex) {
    return this.heapContainer[this.getParentIndex(childIndex)];
  }

  // peek
  peek() {
    if (this.heapContainer.length === 0) {
      return null;
    }

    return this.heapContainer[0];
  }

  // poll
  poll() {
    if (this.heapContainer.length === 0) {
      return null;
    }

    if (this.heapContainer.length === 1) {
      return this.heapContainer.pop();
    }

    const item = this.heapContainer[0];

    // Move the last element from the end to the head.
    this.heapContainer[0] = this.heapContainer.pop();
    this.heapifyDown();

    return item;
  }

  // add
  add(item) {
    this.heapContainer.push(item);
    this.heapifyUp();
    return this;
  }

  // heapify up for min heap and max heap
  heapifyUp(customStartIndex) {
    // Take the last element (last in array or the bottom left in a tree)
    // in the heap container and lift it up until it is in the correct
    // order with respect to its parent element.
    let currentIndex = customStartIndex || this.heapContainer.length - 1;

    while (
      this.hasParent(currentIndex) &&
      !(this.parent(currentIndex).distance() >= this.heapContainer[currentIndex].distance())
    ) {
      this.swap(currentIndex, this.getParentIndex(currentIndex));
      currentIndex = this.getParentIndex(currentIndex);
    }
  }

  // heapify down for min heap or max heap
  heapifyDown(customStartIndex = 0) {
    // Compare the parent element to its children and swap parent with the appropriate
    // child (smallest child for MinHeap, largest child for MaxHeap).
    // Do the same for next children after swap.
    let currentIndex = customStartIndex;
    let nextIndex = null;

    while (this.hasLeftChild(currentIndex)) {
      if (
        this.hasRightChild(currentIndex) &&
        this.rightChild(currentIndex).distance() >= this.leftChild(currentIndex).distance()
      ) {
        nextIndex = this.getRightChildIndex(currentIndex);
      } else {
        nextIndex = this.getLeftChildIndex(currentIndex);
      }

      if (this.heapContainer[currentIndex].distance() >= this.heapContainer[nextIndex].distance()) {
        break;
      }

      this.swap(currentIndex, nextIndex);
      currentIndex = nextIndex;
    }
  }

  // no, but added as utility
  swap(indexOne, indexTwo) {
    const tmp = this.heapContainer[indexTwo];
    this.heapContainer[indexTwo] = this.heapContainer[indexOne];
    this.heapContainer[indexOne] = tmp;
  }

  length() {
    return this.heapContainer.length;
  }
}

function extractIds(arr) {
  return arr.map(d => d.id);
}

class Point {
  constructor(id, x, y) {
    this.id = id;
    this.x = x;
    this.y = y;
  }

  distance() {
    return this.x * this.x + this.y * this.y;
  }
}

function find_closest_points(points, k) {
  const maxHeap = new MaxHeap();
  // put first 'k' points in the max heap
  for (let i = 0; i < k; i++) {
    maxHeap.add(points[i]);
  }

  // go through the remaining points of the input array, if a point is closer to the origin than the top point
  // of the max-heap, remove the top point from heap and add the point from the input array
  for (let i = k; i < points.length; i++) {
    if (points[i].distance() < maxHeap.peek().distance()) {
      maxHeap.poll();
      maxHeap.add(points[i]);
    }
  }
  // the heap has 'k' points closest to the origin, return them in a list
  const arr = [];
  while (maxHeap.length()) {
    arr.push(maxHeap.poll());
  }
  return arr;
}

const result = find_closest_points(
  [new Point('a', 1, 3), new Point('b', 3, 4), new Point('c', 2, -1)],
  2,
);
console.log(extractIds(result));
