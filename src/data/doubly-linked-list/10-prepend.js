import { DOUBLY_LINKED_LIST, DATA_STRUCTURE, BEGINNER } from '../constants.js';

const solution = [
  { stage: 0, text: 'class DoublyLinkedListNode {' },
  { stage: 0, text: '  constructor(value, next = null, previous = null) {' },
  { stage: 0, text: '    this.value = value;' },
  { stage: 0, text: '    this.next = next;' },
  { stage: 0, text: '    this.previous = previous;' },
  { stage: 0, text: '  }' },
  { stage: 0, text: '}' },
  { stage: 0, text: '' },
  { stage: 0, text: 'class DoublyLinkedList {' },
  { stage: 0, text: '  constructor() {' },
  { stage: 0, text: '    this.head = null;' },
  { stage: 0, text: '    this.tail = null;' },
  { stage: 0, text: '  }' },
  { stage: 0, text: '' },
  { stage: 1, text: '  prepend(value) {' },
  { stage: 2, text: '    const newNode = new DoublyLinkedListNode(value, this.head);' },
  { stage: 2, text: '' },
  { stage: 3, text: '    if (this.head) {' },
  { stage: 4, text: '      this.head.previous = newNode;' },
  { stage: 3, text: '    }' },
  { stage: 4, text: '    this.head = newNode;' },
  { stage: 3, text: '' },
  { stage: 5, text: '    if (!this.tail) {' },
  { stage: 5, text: '      this.tail = newNode;' },
  { stage: 5, text: '    }' },
  { stage: 4, text: '' },
  { stage: 2, text: '    return this;' },
  { stage: 1, text: '  }' },
  { stage: 0, text: '' },
  { stage: 0, text: '}' },
  { stage: 0, text: '' },
];

export const data = {
  problemID: 10,
  problemName: 'Implement **prepend** in a *DoublyLinkedList* class.',
  problemText:
    'Write a **prepend** method in a *DoublyLinkedList* class that accepts an arbitrary `value` parameter, creates a *DoublyLinkedListNode*, and inserts it at the front of the list.  The method should return the original list.',
  testCases: [
    {
      id: 1,
      name: 'compiles',
      inherit: [],
      code: `const dll=new DoublyLinkedList();`,
      evaluate: `Boolean(dll);`,
      expected: true,
    },
    {
      id: 2,
      name: 'prepend element onto empty list',
      inherit: [1],
      code: `dll.prepend(5);`,
      evaluate: `dll.head.value;`,
      expected: 5,
    },
    {
      id: 3,
      name: 'prepend element onto empty list, tail correct',
      inherit: [1, 2],
      code: ``,
      evaluate: `dll.tail.value;`,
      expected: 5,
    },
    {
      id: 4,
      name: 'prepend 2nd element onto list, head correct',
      inherit: [1],
      code: `dll.prepend(7);`,
      evaluate: `dll.head.value;`,
      expected: 7,
    },
    {
      id: 5,
      name: 'prepend 2nd element onto list, tail correct',
      inherit: [1, 2, 4],
      code: ``,
      evaluate: `dll.tail.value;`,
      expected: 5,
    },
    {
      id: 6,
      name: 'prepend 2nd element onto list, head next correct',
      inherit: [1, 2, 4],
      code: ``,
      evaluate: `dll.head.next.value;`,
      expected: 5,
    },
  ],
  setupCode: '',
  category: DOUBLY_LINKED_LIST,
  type: DATA_STRUCTURE,
  difficulty: BEGINNER,
  maxExecutionTime: 2,
  solution: {
    stages: [0, 30, 60, 90, 120, 180],
    solutionLines: solution,
  },
};
