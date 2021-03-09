import { ALGORITHM, TEMP, INTERMEDIATE } from '../constants.js';

const solution = [
  { stage: 0, text: '' },
  { stage: -1, text: 'class Node {' },
  { stage: -1, text: '  constructor(value, next = null) {' },
  { stage: -1, text: '    this.value = value;' },
  { stage: -1, text: '    this.next = next;' },
  { stage: -1, text: '  }' },
  { stage: -1, text: '}' },
  { stage: 0, text: '' },
  { stage: 0, text: 'function has_cycle(head) {' },
  { stage: 1, text: '  let slow = head;' },
  { stage: 1, text: '  let fast = head;' },
  { stage: 0, text: '' },
  { stage: 2, text: '  while (fast !== null && fast.next !== null) {' },
  { stage: 3, text: '    fast = fast.next.next;' },
  { stage: 3, text: '    slow = slow.next;' },
  { stage: 4, text: '    if (slow === fast) {' },
  { stage: 5, text: '      return true;' },
  { stage: 4, text: '    }' },
  { stage: 2, text: '  }' },
  { stage: 0, text: '' },
  { stage: 6, text: '  return false;' },
  { stage: 0, text: '}' },
  { stage: 0, text: '' },
];

export const data = {
  problemID: 105,
  problemName: `Linked List Cycle`,
  problemText: `Given the head of a Singly LinkedList, write a function to determine if the LinkedList has a cycle in it or not.`,
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
      head.next.next.next.next.next = new Node(6);`,
      evaluate: `has_cycle(head);`,
      expected: false,
    },
    {
      id: 2,
      name: 'example 2',
      inherit: [1],
      code: `head.next.next.next.next.next.next = head.next.next;`,
      evaluate: `has_cycle(head);`,
      expected: true,
    },
    {
      id: 3,
      name: 'example 3',
      inherit: [1, 2],
      code: `head.next.next.next.next.next.next = head.next.next.next;`,
      evaluate: `has_cycle(head);`,
      expected: true,
    },
  ],
  setupCode: `class Node {
    constructor(value, next = null) {
      this.value = value;
      this.next = next;
    }
  }`,
  tags: [INTERMEDIATE, TEMP, ALGORITHM],
  solution,
};
