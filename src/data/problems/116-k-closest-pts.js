import { ALGORITHM, HEAP } from '../constants.js';
import { MAX_HEAP_CLASS_DISTANCE } from '../code-imports/import-index.js';

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
  setupCode: `${MAX_HEAP_CLASS_DISTANCE} 
  
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
  source: ['https://www.educative.io/courses/grokking-the-coding-interview/3YxNVYwNR5p'],
  tags: [HEAP, ALGORITHM],
  solution,
};
