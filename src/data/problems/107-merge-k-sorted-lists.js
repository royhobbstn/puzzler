import { ALGORITHM, TEMP, INTERMEDIATE } from '../constants.js';
import { MIN_HEAP_CLASS_VALUE } from '../code-imports/import-index.js';

const solution = [
  { stage: 0, text: '' },
  { stage: -1, text: 'class MinHeap {' },
  { stage: -1, text: '/*' },
  { stage: -1, text: '  poll(): ListNode' },
  { stage: -1, text: '  add(item: ListNode) void' },
  { stage: -1, text: '  length() Number' },
  { stage: -1, text: '*/' },
  { stage: -1, text: '}' },
  { stage: -1, text: '' },
  { stage: -1, text: 'class ListNode {' },
  { stage: -1, text: '  constructor(value, next = null) {' },
  { stage: -1, text: '    this.value = value;' },
  { stage: -1, text: '    this.next = next;' },
  { stage: -1, text: '  }' },
  { stage: -1, text: '}' },
  { stage: 0, text: '' },
  { stage: 0, text: 'function merge_lists(lists) {' },
  { stage: 1, text: '  const minHeap = new MinHeap();' },
  { stage: 0, text: '' },
  { stage: 2, text: '  lists.forEach(a => {' },
  { stage: 3, text: '    if (a !== null) {' },
  { stage: 3, text: '      minHeap.add(a);' },
  { stage: 3, text: '    }' },
  { stage: 2, text: '  });' },
  { stage: 0, text: '' },
  { stage: 4, text: '  let resultHead = null;' },
  { stage: 4, text: '  let resultTail = null;' },
  { stage: 5, text: '  while (minHeap.length() > 0) {' },
  { stage: 6, text: '    let node = minHeap.poll();' },
  { stage: 0, text: '' },
  { stage: 7, text: '    if (resultHead === null) {' },
  { stage: 8, text: '      resultHead = resultTail = node;' },
  { stage: 7, text: '    } else {' },
  { stage: 9, text: '      resultTail.next = node;' },
  { stage: 9, text: '      resultTail = resultTail.next;' },
  { stage: 7, text: '    }' },
  { stage: 10, text: '    if (node.next !== null) {' },
  { stage: 11, text: '      minHeap.add(node.next);' },
  { stage: 10, text: '    }' },
  { stage: 5, text: '  }' },
  { stage: 0, text: '' },
  { stage: 12, text: '  return resultHead;' },
  { stage: 0, text: '}' },
  { stage: 0, text: '' },
];

export const data = {
  problemID: 107,
  problemName: `Merge K Sorted Lists`,
  problemText: `Given an array of ‘K’ sorted LinkedLists, merge them into one sorted list.`,
  testCases: [
    {
      id: 1,
      name: 'example 1',
      inherit: [],
      code: `const l1 = new ListNode(2);
      l1.next = new ListNode(6);
      l1.next.next = new ListNode(8);
      const l2 = new ListNode(3);
      l2.next = new ListNode(6);
      l2.next.next = new ListNode(7);
      const l3 = new ListNode(1);
      l3.next = new ListNode(3);
      l3.next.next = new ListNode(4);`,
      evaluate: `merge_lists([l1, l2, l3]).convert();`,
      expected: JSON.stringify([1, 2, 3, 3, 4, 6, 6, 7, 8]),
    },
    {
      id: 2,
      name: 'example 2',
      inherit: [],
      code: `const l1 = new ListNode(5);
      l1.next = new ListNode(8);
      l1.next.next = new ListNode(9);
      const l2 = new ListNode(1);
      l2.next = new ListNode(7);;`,
      evaluate: `merge_lists([l1, l2]).convert();`,
      expected: JSON.stringify([1, 5, 7, 8, 9]),
    },
  ],
  setupCode: `${MIN_HEAP_CLASS_VALUE} 
  class ListNode {
    constructor(value, next = null) {
      this.value = value;
      this.next = next;
    }
  }

  ListNode.prototype.convert = function () {
    const arr = [];
    let node = this;
    while (node) {
      arr.push(node.value);
      node = node.next;
    }
    return arr;
  };`,
  source: ['https://www.educative.io/courses/grokking-the-coding-interview/Y5n0n3vAgYK'],
  tags: [INTERMEDIATE, TEMP, ALGORITHM],
  solution,
};
