import { ALGORITHM, LINKED_LIST, ADVANCED } from '../constants.js';

const solution = [
  { stage: 0, text: '' },
  { stage: -1, text: 'function Node(val) {' },
  { stage: -1, text: '  this.val = val;' },
  { stage: -1, text: '  this.next = null;' },
  { stage: -1, text: '}' },
  { stage: 0, text: '' },
  { stage: 0, text: 'function reorderList(head) {' },
  { stage: 1, text: '  if (!head) {' },
  { stage: 1, text: '    return;' },
  { stage: 1, text: '  }' },
  { stage: 0, text: '' },
  { stage: 2, text: '  let slow = head;' },
  { stage: 2, text: '  let fast = head;' },
  { stage: 3, text: '  while (fast && fast.next) {' },
  { stage: 4, text: '    slow = slow.next;' },
  { stage: 4, text: '    fast = fast.next.next;' },
  { stage: 3, text: '  }' },
  { stage: 0, text: '' },
  { stage: 5, text: '  let prev = null;' },
  { stage: 5, text: '  let curr = slow;' },
  { stage: 5, text: '  let tmp = null;' },
  { stage: 6, text: '  while (curr != null) {' },
  { stage: 7, text: '    tmp = curr.next;' },
  { stage: 7, text: '    curr.next = prev;' },
  { stage: 7, text: '    prev = curr;' },
  { stage: 7, text: '    curr = tmp;' },
  { stage: 6, text: '  }' },
  { stage: 0, text: '' },
  { stage: 8, text: '  let first = head;' },
  { stage: 8, text: '  let second = prev;' },
  { stage: 9, text: '  while (second.next) {' },
  { stage: 10, text: '    tmp = first.next;' },
  { stage: 10, text: '    first.next = second;' },
  { stage: 10, text: '    first = tmp;' },
  { stage: 0, text: '' },
  { stage: 11, text: '    tmp = second.next;' },
  { stage: 11, text: '    second.next = first;' },
  { stage: 11, text: '    second = tmp;' },
  { stage: 9, text: '  }' },
  { stage: 0, text: '}' },
  { stage: 0, text: '' },
];

export const data = {
  problemID: 69,
  problemName: 'Reorder a *LinkedList*.',
  problemText: `Given a \`head\` *Node*, reorder a linked list of length \`n\` so that a *LinkedList* in the pattern of:

  ( L<sub>1</sub> -> L<sub>2</sub> -> L<sub>3</sub> -> L<sub>4</sub> -> L<sub>5</sub> )

  becomes:

  ( L<sub>1</sub> -> L<sub>n</sub> -> L<sub>2</sub> -> L<sub>n-1</sub> -> L<sub>3</sub> )
  
  List must be re-ordered in place, using no additional data structures.
  `,
  testCases: [
    {
      id: 1,
      name: 'reorder empty list does not error',
      inherit: [],
      code: `reorderList(null);`,
      evaluate: `reorderList(null);`,
      expected: undefined,
    },
    {
      id: 2,
      name: 'case 1',
      inherit: [],
      code: `let head = new Node(1);
      head.next = new Node(2);
      head.next.next = new Node(3);
      head.next.next.next = new Node(4);
      head.next.next.next.next = new Node(5);
      reorderList(head);`,
      evaluate: `printList(head);`,
      expected: JSON.stringify([1, 5, 2, 4, 3]),
    },
  ],
  setupCode: `
  function Node(val) {
    this.val = val;
    this.next = null;
  }

  function printList(head) {
    const arr = [];
    while (head) {
      arr.push(head.val);
      head = head.next;
    }
    return arr;
  }`,
  category: LINKED_LIST,
  type: ALGORITHM,
  difficulty: ADVANCED,
  maxExecutionTime: 2,
  solution: {
    stages: [0, 30, 60, 90, 120, 150, 180, 210, 240, 270, 300, 360],
    solutionLines: solution,
  },
};
