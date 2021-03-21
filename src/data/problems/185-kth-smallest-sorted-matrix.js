import { ALGORITHM, K_WAY_MERGE } from '../constants.js';
import { HEAP_GENERIC } from '../code-imports/import-index.js';

const solution = [
  { stage: 0, text: '' },
  { stage: 0, text: 'function find_Kth_smallest(matrix, k) {' },
  { stage: 1, text: '  const minHeap = new Heap((a, b) => a[0] <= b[0]);' },
  { stage: 0, text: '' },
  { stage: 2, text: '  for (let i = 0; i < Math.min(k, matrix.length); i++) {' },
  { stage: 3, text: '    minHeap.add([matrix[i][0], 0, matrix[i]]);' },
  { stage: 2, text: '  }' },
  { stage: 0, text: '' },
  { stage: 4, text: '  let numberCount = 0;' },
  { stage: 4, text: '  let number = 0;' },
  { stage: 5, text: '  let i;' },
  { stage: 5, text: '  let row;' },
  { stage: 0, text: '' },
  { stage: 6, text: '  while (minHeap.length() > 0) {' },
  { stage: 7, text: '    [number, i, row] = minHeap.poll();' },
  { stage: 8, text: '    numberCount += 1;' },
  { stage: 9, text: '    if (numberCount === k) {' },
  { stage: 10, text: '      break;' },
  { stage: 9, text: '    }' },
  { stage: 0, text: '' },
  { stage: 11, text: '    if (row.length > i + 1) {' },
  { stage: 12, text: '      minHeap.add([row[i + 1], i + 1, row]);' },
  { stage: 11, text: '    }' },
  { stage: 6, text: '  }' },
  { stage: 0, text: '' },
  { stage: 13, text: '  return number;' },
  { stage: 0, text: '}' },
  { stage: 0, text: '' },
];

export const data = {
  problemID: 185,
  problemName: `Kth Smallest Number in a Sorted Matrix`,
  problemText: `Given an N * NN∗N matrix where each row and column is sorted in ascending order, find the Kth smallest element in the matrix.`,
  testCases: [
    {
      id: 1,
      name: 'example 1',
      inherit: [],
      code: ``,
      evaluate: `find_Kth_smallest(
        [
          [2, 6, 8],
          [3, 7, 10],
          [5, 8, 11],
        ],
        5,
      );`,
      expected: 7,
    },
  ],
  setupCode: `${HEAP_GENERIC}`,
  source: [],
  tags: [K_WAY_MERGE, ALGORITHM],
  solution,
};
