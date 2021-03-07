import { ALGORITHM, TEMP, INTERMEDIATE } from '../constants.js';

const solution = [
  { stage: 0, text: '' },
  { stage: -1, text: 'class MaxHeap {' },
  { stage: -1, text: '  /*' },
  { stage: -1, text: '    add(item: Point)' },
  { stage: -1, text: '    peek() Point' },
  { stage: -1, text: '    poll() Point' },
  { stage: -1, text: '    length() Number' },
  { stage: -1, text: '  */' },
  { stage: -1, text: '}' },
  { stage: -1, text: '' },
  { stage: -1, text: 'class Point {' },
  { stage: -1, text: '  constructor(id, x, y) {' },
  { stage: -1, text: '    this.id = id;' },
  { stage: -1, text: '    this.x = x;' },
  { stage: -1, text: '    this.y = y;' },
  { stage: -1, text: '  }' },
  { stage: -1, text: '' },
  { stage: -1, text: '  distance() {' },
  { stage: -1, text: '    return this.x * this.x + this.y * this.y;' },
  { stage: -1, text: '  }' },
  { stage: -1, text: '}' },
  { stage: 0, text: '' },
  { stage: 0, text: 'function find_closest_points(points, k) {' },
  { stage: 1, text: '  const maxHeap = new MaxHeap();' },
  { stage: 0, text: '' },
  { stage: 2, text: '  for (let i = 0; i < k; i++) {' },
  { stage: 3, text: '    maxHeap.add(points[i]);' },
  { stage: 2, text: '  }' },
  { stage: 0, text: '' },
  { stage: 4, text: '  for (let i = k; i < points.length; i++) {' },
  { stage: 5, text: '    if (points[i].distance() < maxHeap.peek().distance()) {' },
  { stage: 6, text: '      maxHeap.poll();' },
  { stage: 6, text: '      maxHeap.add(points[i]);' },
  { stage: 5, text: '    }' },
  { stage: 4, text: '  }' },
  { stage: 0, text: '' },
  { stage: 7, text: '  const arr = [];' },
  { stage: 0, text: '' },
  { stage: 8, text: '  while (maxHeap.length()) {' },
  { stage: 9, text: '    arr.push(maxHeap.poll());' },
  { stage: 8, text: '  }' },
  { stage: 0, text: '' },
  { stage: 10, text: '  return arr;' },
  { stage: 0, text: '}' },
  { stage: 0, text: '' },
];

export const data = {
  problemID: 116,
  problemName: `Find K Closest Points to Origin`,
  problemText: `Given an array of *Points* in on a 2d plane, find and return the \`k\` closest points to the origin.`,
  testCases: [
    {
      id: 1,
      name: 'example 1',
      inherit: [],
      code: ``,
      evaluate: `extractIds(find_closest_points(
        [new Point('a', 1, 3), new Point('b', 3, 4), new Point('c', 2, -1)],
        2,
      ));`,
      expected: JSON.stringify(['a', 'c']),
    },
  ],
  setupCode: `
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
  `,
  tags: [TEMP, ALGORITHM],
  difficulty: INTERMEDIATE,
  solution,
};
