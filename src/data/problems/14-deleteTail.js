import { DOUBLY_LINKED_LIST, DATA_STRUCTURE, INTERMEDIATE } from '../constants.js';

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
  { stage: 1, text: '  deleteTail() {' },
  { stage: 2, text: '    if (!this.tail) {' },
  { stage: 2, text: '      return null;' },
  { stage: 2, text: '    }' },
  { stage: 3, text: '' },
  { stage: 3, text: '    if (this.head === this.tail) {' },
  { stage: 4, text: '      const deletedTail = this.tail;' },
  { stage: 4, text: '      this.head = null;' },
  { stage: 4, text: '      this.tail = null;' },
  { stage: 4, text: '      return deletedTail;' },
  { stage: 3, text: '    }' },
  { stage: 5, text: '' },
  { stage: 6, text: '    const deletedTail = this.tail;' },
  { stage: 6, text: '    this.tail = this.tail.previous;' },
  { stage: 6, text: '    this.tail.next = null;' },
  { stage: 5, text: '' },
  { stage: 5, text: '    return deletedTail;' },
  { stage: 1, text: '  }' },
  { stage: 0, text: '' },
  { stage: 0, text: '}' },
  { stage: 0, text: '' },
];

export const data = {
  problemID: 14,
  problemName: 'Implement **deleteTail** in a *DoublyLinkedList* class.',
  problemText:
    'Write a **deleteTail** method in a *DoublyLinkedList* class that will remove and return the last `DoublyLinkedListNode` in the list, or `null` if the list is empty.',
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
      name: 'return null if list is empty',
      inherit: [1],
      code: ``,
      evaluate: `dll.deleteTail();`,
      expected: null,
    },
    {
      id: 3,
      name: 'return item from 1 item list.',
      inherit: [1],
      code: `dll.append(5);`,
      evaluate: `dll.deleteTail().value;`,
      expected: 5,
    },
    {
      id: 4,
      name: 'return item from 1 item list - head set correctly.',
      inherit: [1, 3],
      code: `dll.deleteTail();`,
      evaluate: `dll.head;`,
      expected: null,
    },
    {
      id: 5,
      name: 'return item from 1 item list - tail set correctly.',
      inherit: [1, 3],
      code: `dll.deleteTail();`,
      evaluate: `dll.tail;`,
      expected: null,
    },
    {
      id: 6,
      name: 'add 3 items, deleteTail twice.',
      inherit: [1],
      code: `dll.append(5).append(4).append(3);dll.deleteTail();dll.deleteTail();`,
      evaluate: `dll.head.value`,
      expected: 5,
    },
    {
      id: 7,
      name: 'add 3 items, deleteTail twice.',
      inherit: [1, 6],
      code: ``,
      evaluate: `dll.tail.value`,
      expected: 5,
    },
  ],
  setupCode: `
  DoublyLinkedList.prototype.append = function(value) {
    const newNode = new DoublyLinkedListNode(value);
    if (!this.head) {
      this.head = newNode;
      this.tail = newNode;
      return this;
    }
    this.tail.next = newNode;
    newNode.previous = this.tail;
    this.tail = newNode;
    return this;
  }
  `,
  tags: [DOUBLY_LINKED_LIST, DATA_STRUCTURE],
  difficulty: INTERMEDIATE,
  solution,
};
