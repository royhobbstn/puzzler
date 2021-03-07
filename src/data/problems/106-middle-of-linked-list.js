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
  { stage: 0, text: 'function find_middle_of_linked_list(head) {' },
  { stage: 1, text: '  let slow = head;' },
  { stage: 1, text: '  let fast = head;' },
  { stage: 0, text: '' },
  { stage: 2, text: '  while (fast !== null && fast.next !== null) {' },
  { stage: 3, text: '    slow = slow.next;' },
  { stage: 3, text: '    fast = fast.next.next;' },
  { stage: 2, text: '  }' },
  { stage: 0, text: '' },
  { stage: 4, text: '  return slow;' },
  { stage: 0, text: '}' },
  { stage: 0, text: '' },
];

export const data = {
  problemID: 106,
  problemName: `Middle of Linked List`,
  problemText: `Given the head of a Singly LinkedList, write a method to return the middle node of the LinkedList.

If the total number of nodes in the LinkedList is even, return the second middle node.`,
  testCases: [
    {
      id: 1,
      name: 'example 1',
      inherit: [],
      code: `const head = new Node(1);
      head.next = new Node(2);
      head.next.next = new Node(3);
      head.next.next.next = new Node(4);
      head.next.next.next.next = new Node(5);`,
      evaluate: `find_middle_of_linked_list(head).value`,
      expected: 3,
    },
    {
      id: 2,
      name: 'example 2',
      inherit: [1],
      code: `head.next.next.next.next.next = new Node(6);`,
      evaluate: `find_middle_of_linked_list(head).value`,
      expected: 4,
    },
    {
      id: 3,
      name: 'example 3',
      inherit: [1, 2],
      code: `head.next.next.next.next.next.next = new Node(7);`,
      evaluate: `find_middle_of_linked_list(head).value`,
      expected: 4,
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
  tags: [TEMP, ALGORITHM],
  difficulty: INTERMEDIATE,
  solution,
};
