import { HEAP_GENERIC } from '../code-imports/import-index.js';
import { ALGORITHM, K_WAY_MERGE } from '../constants.js';

const solution = [
  { stage: 0, text: '' },
  { stage: 0, text: 'function find_smallest_range(lists) {' },
  { stage: 1, text: '  const minHeap = new Heap((a, b) => a[0] <= b[0]);' },
  { stage: 2, text: '  let rangeStart = 0;' },
  { stage: 2, text: '  let rangeEnd = Infinity;' },
  { stage: 3, text: '  let currentMaxNumber = -Infinity;' },
  { stage: 0, text: '' },
  { stage: 4, text: '  lists.forEach(list => {' },
  { stage: 5, text: '    minHeap.add([list[0], 0, list]);' },
  { stage: 6, text: '    currentMaxNumber = Math.max(currentMaxNumber, list[0]);' },
  { stage: 4, text: '  });' },
  { stage: 0, text: '' },
  { stage: 7, text: '  while (minHeap.length() === lists.length) {' },
  { stage: 8, text: '    const [num, i, list] = minHeap.poll();' },
  { stage: 9, text: '    if (rangeEnd - rangeStart > currentMaxNumber - num) {' },
  { stage: 10, text: '      rangeStart = num;' },
  { stage: 10, text: '      rangeEnd = currentMaxNumber;' },
  { stage: 9, text: '    }' },
  { stage: 11, text: '    if (list.length > i + 1) {' },
  { stage: 12, text: '      minHeap.add([list[i + 1], i + 1, list]);' },
  { stage: 13, text: '      currentMaxNumber = Math.max(currentMaxNumber, list[i + 1]);' },
  { stage: 11, text: '    }' },
  { stage: 7, text: '  }' },
  { stage: 0, text: '' },
  { stage: 14, text: '  return [rangeStart, rangeEnd];' },
  { stage: 0, text: '}' },
  { stage: 0, text: '' },
];

export const data = {
  problemID: 186,
  problemName: `Smallest Number Range`,
  problemText: `Given ‘M’ sorted arrays, find the smallest range that includes at least one number from each of the ‘M’ lists.`,
  testCases: [
    {
      id: 1,
      name: 'example 1',
      inherit: [],
      code: ``,
      evaluate: `find_smallest_range([
        [1, 5, 8],
        [4, 12],
        [7, 8, 10],
      ]);`,
      expected: JSON.stringify([4, 7]),
    },
  ],
  setupCode: `${HEAP_GENERIC}`,
  source: [],
  tags: [K_WAY_MERGE, ALGORITHM],
  solution,
};
