import { ALGORITHM, FAST_SLOW_PTRS } from '../constants';

const solution = [
  { stage: 0, text: '' },
  { stage: -1, text: 'class Node {' },
  { stage: -1, text: '  constructor(value, next = null) {' },
  { stage: -1, text: '    this.value = value;' },
  { stage: -1, text: '    this.next = next;' },
  { stage: -1, text: '  }' },
  { stage: -1, text: '}' },
  { stage: 0, text: '' },
  { stage: 0, text: 'function find_cycle_start(head) {' },
  { stage: 1, text: '  let cycle_length = 0;' },
  { stage: 0, text: '' },
  { stage: 2, text: '  let slow = head;' },
  { stage: 2, text: '  let fast = head;' },
  { stage: 0, text: '' },
  { stage: 3, text: '  while (fast !== null && fast.next !== null) {' },
  { stage: 4, text: '    fast = fast.next.next;' },
  { stage: 4, text: '    slow = slow.next;' },
  { stage: 0, text: '' },
  { stage: 5, text: '    if (slow === fast) {' },
  { stage: 6, text: '      cycle_length = calculate_cycle_length(slow);' },
  { stage: 6, text: '      break;' },
  { stage: 5, text: '    }' },
  { stage: 3, text: '  }' },
  { stage: 0, text: '' },
  { stage: 8, text: '  return find_start(head, cycle_length);' },
  { stage: 0, text: '}' },
  { stage: 0, text: '' },
  { stage: 7, text: 'function calculate_cycle_length(slow) {' },
  { stage: 9, text: '  let current = slow;' },
  { stage: 9, text: '  let cycle_length = 0;' },
  { stage: 0, text: '' },
  { stage: 10, text: '  while (true) {' },
  { stage: 11, text: '    current = current.next;' },
  { stage: 11, text: '    cycle_length += 1;' },
  { stage: 12, text: '    if (current === slow) {' },
  { stage: 12, text: '      break;' },
  { stage: 12, text: '    }' },
  { stage: 10, text: '  }' },
  { stage: 0, text: '' },
  { stage: 13, text: '  return cycle_length;' },
  { stage: 7, text: '}' },
  { stage: 0, text: '' },
  { stage: 14, text: 'function find_start(head, cycle_length) {' },
  { stage: 15, text: '  let pointer1 = head;' },
  { stage: 15, text: '  let pointer2 = head;' },
  { stage: 0, text: '' },
  { stage: 16, text: '  while (cycle_length > 0) {' },
  { stage: 17, text: '    pointer2 = pointer2.next;' },
  { stage: 17, text: '    cycle_length -= 1;' },
  { stage: 16, text: '  }' },
  { stage: 0, text: '' },
  { stage: 18, text: '  while (pointer1 !== pointer2) {' },
  { stage: 19, text: '    pointer1 = pointer1.next;' },
  { stage: 19, text: '    pointer2 = pointer2.next;' },
  { stage: 18, text: '  }' },
  { stage: 0, text: '' },
  { stage: 20, text: '  return pointer1;' },
  { stage: 14, text: '}' },
  { stage: 0, text: '' },
];

export const data = {
  problemID: 132,
  problemName: `Start of Linked List Cycle`,
  problemText: `Given the head of a Singly LinkedList that contains a cycle, write a function to find the starting node of the cycle.`,
  testCases: [
    {
      id: 1,
      name: 'example 1',
      inherit: [],
      code: `const head = new Node(1);
      head.next = new Node(2);
      head.next.next = new Node(3);
      head.next.next.next = new Node(4);
      head.next.next.next.next = new Node(5);
      head.next.next.next.next.next = new Node(6);
      head.next.next.next.next.next.next = head.next.next;`,
      evaluate: `find_cycle_start(head).value;`,
      expected: 3,
    },
    {
      id: 2,
      name: 'example 2',
      inherit: [1],
      code: `head.next.next.next.next.next.next = head.next.next.next;`,
      evaluate: `find_cycle_start(head).value;`,
      expected: 4,
    },
    {
      id: 3,
      name: 'example 3',
      inherit: [1, 2],
      code: `head.next.next.next.next.next.next = head;`,
      evaluate: `find_cycle_start(head).value;`,
      expected: 1,
    },
  ],
  setupCode: `
  class Node {
    constructor(value, next = null) {
      this.value = value;
      this.next = next;
    }
  }
  `,
  source: ['https://www.educative.io/courses/grokking-the-coding-interview/N7pvEn86YrN'],
  tags: [FAST_SLOW_PTRS, ALGORITHM],
  solution,
};
