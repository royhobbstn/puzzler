import { ALGORITHM, K_WAY_MERGE } from '../constants.js';
import { HEAP_GENERIC } from '../code-imports/import-index.js';

const solution = [
  { stage: 0, text: '' },
  { stage: 0, text: 'function find_k_largest_pairs(nums1, nums2, k) {' },
  { stage: 1, text: '  const minHeap = new Heap((a, b) => a[0] <= b[0]);' },
  { stage: 2, text: '  for (let i = 0; i < Math.min(k, nums1.length); i++) {' },
  { stage: 0, text: '' },
  { stage: 3, text: '    for (let j = 0; j < Math.min(k, nums2.length); j++) {' },
  { stage: 4, text: '      if (minHeap.length() < k) {' },
  { stage: 5, text: '        minHeap.add([nums1[i] + nums2[j], i, j]);' },
  { stage: 4, text: '      } else {' },
  { stage: 6, text: '        if (nums1[i] + nums2[j] < minHeap.peek()[0]) {' },
  { stage: 7, text: '          break;' },
  { stage: 6, text: '        } else {' },
  { stage: 8, text: '          minHeap.poll();' },
  { stage: 9, text: '          minHeap.add([nums1[i] + nums2[j], i, j]);' },
  { stage: 6, text: '        }' },
  { stage: 4, text: '      }' },
  { stage: 3, text: '    }' },
  { stage: 2, text: '  }' },
  { stage: 0, text: '' },
  { stage: 10, text: '  const result = [];' },
  { stage: 0, text: '' },
  { stage: 11, text: '  while (minHeap.length()) {' },
  { stage: 12, text: '    const a = minHeap.poll();' },
  { stage: 13, text: '    result.push([nums1[a[1]], nums2[a[2]]]);' },
  { stage: 11, text: '  }' },
  { stage: 0, text: '' },
  { stage: 14, text: '  return result;' },
  { stage: 0, text: '}' },
  { stage: 0, text: '' },
];

export const data = {
  problemID: 187,
  problemName: `K Pairs with Largest Sums`,
  problemText: `Given two sorted arrays in descending order, find ‘K’ pairs with the largest sum where each pair consists of numbers from both the arrays.`,
  testCases: [
    {
      id: 1,
      name: 'example 1',
      inherit: [],
      code: ``,
      evaluate: `find_k_largest_pairs([9, 8, 2], [6, 3, 1], 3);`,
      expected: JSON.stringify([
        [9, 3],
        [8, 6],
        [9, 6],
      ]),
    },
  ],
  setupCode: `${HEAP_GENERIC}`,
  source: [],
  tags: [K_WAY_MERGE, ALGORITHM],
  solution,
};
