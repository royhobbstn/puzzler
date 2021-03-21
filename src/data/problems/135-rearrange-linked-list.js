import { ALGORITHM, FAST_SLOW_PTRS } from '../constants.js';

const solution = [
  { stage: 0, text: '' },
  { stage: -1, text: 'class Node {' },
  { stage: -1, text: '  constructor(value, next = null) {' },
  { stage: -1, text: '    this.value = value;' },
  { stage: -1, text: '    this.next = next;' },
  { stage: -1, text: '  }' },
  { stage: -1, text: '}' },
  { stage: 0, text: '' },
  { stage: 0, text: 'function reorder(head) {' },
  { stage: 1, text: '  if (head === null || head.next === null) {' },
  { stage: 1, text: '    return;' },
  { stage: 1, text: '  }' },
  { stage: 0, text: '' },
  { stage: 2, text: '  let slow = head;' },
  { stage: 2, text: '  let fast = head;' },
  { stage: 3, text: '  while (fast !== null && fast.next !== null) {' },
  { stage: 4, text: '    slow = slow.next;' },
  { stage: 4, text: '    fast = fast.next.next;' },
  { stage: 3, text: '  }' },
  { stage: 0, text: '' },
  { stage: 5, text: '  let headSecondHalf = reverse(slow);' },
  { stage: 5, text: '  let headFirstHalf = head;' },
  { stage: 0, text: '' },
  { stage: 12, text: '  while (headFirstHalf !== null && headSecondHalf !== null) {' },
  { stage: 13, text: '    let temp = headFirstHalf.next;' },
  { stage: 13, text: '    headFirstHalf.next = headSecondHalf;' },
  { stage: 13, text: '    headFirstHalf = temp;' },
  { stage: 0, text: '' },
  { stage: 14, text: '    temp = headSecondHalf.next;' },
  { stage: 14, text: '    headSecondHalf.next = headFirstHalf;' },
  { stage: 14, text: '    headSecondHalf = temp;' },
  { stage: 0, text: '' },
  { stage: 15, text: '  if (headFirstHalf !== null) {' },
  { stage: 15, text: '    headFirstHalf.next = null;' },
  { stage: 15, text: '  }' },
  { stage: 12, text: '}' },
  { stage: 0, text: '' },
  { stage: 6, text: 'function reverse(head) {' },
  { stage: 7, text: '  let prev = null;' },
  { stage: 0, text: '' },
  { stage: 8, text: '  while (head !== null) {' },
  { stage: 9, text: '    let next = head.next;' },
  { stage: 9, text: '    head.next = prev;' },
  { stage: 10, text: '    prev = head;' },
  { stage: 10, text: '    head = next;' },
  { stage: 8, text: '  }' },
  { stage: 11, text: '  return prev;' },
  { stage: 6, text: '}' },
  { stage: 0, text: '' },
];

export const data = {
  problemID: 135,
  problemName: `Rearrange a LinkedList`,
  problemText: `Given the head of a Singly LinkedList, write a method to modify the LinkedList such that the nodes from the second half of the LinkedList are inserted alternately to the nodes from the first half in reverse order. So if the LinkedList has nodes 1 -> 2 -> 3 -> 4 -> 5 -> 6 -> null, your method should return 1 -> 6 -> 2 -> 5 -> 3 -> 4 -> null.

  Your algorithm should not use any extra space and the input LinkedList should be modified in-place.`,
  testCases: [
    {
      id: 1,
      name: 'example 1',
      inherit: [],
      code: `var head = new Node(2);
      head.next = new Node(4);
      head.next.next = new Node(6);
      head.next.next.next = new Node(8);
      head.next.next.next.next = new Node(10);
      head.next.next.next.next.next = new Node(12);
      reorder(head);`,
      evaluate: `printList(head);`,
      expected: true,
    },
  ],
  setupCode: `
  class Node {
    constructor(value, next = null) {
      this.value = value;
      this.next = next;
    }
  }
  function printList(list) {
    let arr = [];
    for(let item of list) {
        arr.push(item.value);
    }
    return arr;
  }
  `,
  source: ['https://www.educative.io/courses/grokking-the-coding-interview/qAo438WozV7'],
  tags: [FAST_SLOW_PTRS, ALGORITHM],
  solution,
};
