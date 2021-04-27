import { MIN_HEAP_CLASS_PLAIN } from '../code-imports/import-index.js';
import { ALGORITHM, HEAP } from '../constants.ts';

const solution = [
  { stage: 0, text: '' },
  { stage: -1, text: 'class MinHeap {' },
  { stage: -1, text: '  /*' },
  { stage: -1, text: '    add(item: Number)' },
  { stage: -1, text: '    poll() Number' },
  { stage: -1, text: '    length() Number' },
  { stage: -1, text: '  */' },
  { stage: -1, text: '}' },
  { stage: 0, text: '' },
  { stage: 0, text: 'function minimum_cost_to_connect_ropes(ropeLengths) {' },
  { stage: 0, text: '' },
  { stage: 1, text: '  const minHeap = new MinHeap();' },
  { stage: 0, text: '' },
  { stage: 2, text: '  ropeLengths.forEach(len => {' },
  { stage: 3, text: '    minHeap.add(len);' },
  { stage: 2, text: '  });' },
  { stage: 0, text: '' },
  { stage: 4, text: '  let result = 0;' },
  { stage: 4, text: '  while (minHeap.length() > 1) {' },
  { stage: 5, text: '    const temp = minHeap.poll() + minHeap.poll();' },
  { stage: 5, text: '    result += temp;' },
  { stage: 6, text: '    minHeap.add(temp);' },
  { stage: 4, text: '  }' },
  { stage: 0, text: '' },
  { stage: 7, text: '  return result;' },
  { stage: 0, text: '}' },
  { stage: 0, text: '' },
];

export const data = {
  problemID: 117,
  problemName: `Connect Ropes`,
  problemText: `Given ‘N’ ropes with different lengths, we need to connect these ropes into one big rope with minimum cost. The cost of connecting two ropes is equal to the sum of their lengths.
  
Example 1:

 - Input: [1, 3, 11, 5]
 - Output: 33
 - Explanation: First connect 1+3(=4), then 4+5(=9), and then 9+11(=20). So the total cost is 33 (4+9+20)

 `,
  testCases: [
    {
      id: 1,
      name: 'example 1',
      inherit: [],
      code: ``,
      evaluate: `minimum_cost_to_connect_ropes([1, 3, 11, 5]);`,
      expected: 33,
    },
    {
      id: 2,
      name: 'example 2',
      inherit: [],
      code: ``,
      evaluate: `minimum_cost_to_connect_ropes([3, 4, 5, 6]);`,
      expected: 36,
    },
    {
      id: 3,
      name: 'example 3',
      inherit: [],
      code: ``,
      evaluate: `minimum_cost_to_connect_ropes([1, 3, 11, 5, 2]);`,
      expected: 42,
    },
  ],
  setupCode: `${MIN_HEAP_CLASS_PLAIN}`,
  source: ['https://www.educative.io/courses/grokking-the-coding-interview/qVZmZJVxPY0'],
  tags: [HEAP, ALGORITHM],
  solution,
};
