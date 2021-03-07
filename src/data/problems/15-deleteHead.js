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
  { stage: 1, text: '  deleteHead() {' },
  { stage: 2, text: '    if (!this.head) {' },
  { stage: 2, text: '      return null;' },
  { stage: 2, text: '    }' },
  { stage: 3, text: '' },
  { stage: 3, text: '    const deletedHead = this.head;' },
  { stage: 3, text: '' },
  { stage: 4, text: '    if (this.head.next) {' },
  { stage: 5, text: '      this.head = this.head.next;' },
  { stage: 5, text: '      this.head.previous = null;' },
  { stage: 4, text: '    } else {' },
  { stage: 6, text: '      this.head = null;' },
  { stage: 6, text: '      this.tail = null;' },
  { stage: 4, text: '    }' },
  { stage: 4, text: '' },
  { stage: 4, text: '    return deletedHead;' },
  { stage: 1, text: '  }' },
  { stage: 0, text: '' },
  { stage: 0, text: '}' },
  { stage: 0, text: '' },
];

export const data = {
  problemID: 15,
  problemName: 'Implement **deleteHead** in a *DoublyLinkedList* class.',
  problemText:
    'Write a **deleteHead** method in a *DoublyLinkedList* class that will remove and return the first `DoublyLinkedListNode` in the list (or `null` if the list is empty).',
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
      name: 'deleteHead from an empty list returns null',
      inherit: [1],
      code: ``,
      evaluate: `dll.deleteHead();`,
      expected: null,
    },
    {
      id: 3,
      name: 'add item and delete item',
      inherit: [1],
      code: `dll.append(8);`,
      evaluate: `dll.deleteHead().value;`,
      expected: 8,
    },
    {
      id: 4,
      name: 'add item and delete item - check head;',
      inherit: [1],
      code: `dll.append(8);dll.deleteHead();`,
      evaluate: `dll.head;`,
      expected: null,
    },
    {
      id: 5,
      name: 'add item and delete item',
      inherit: [1, 4],
      code: ``,
      evaluate: `dll.tail;`,
      expected: null,
    },
    {
      id: 6,
      name: 'add 3 items and delete one',
      inherit: [1],
      code: `dll.append(6).append(7).append(8);`,
      evaluate: `dll.deleteHead().value;`,
      expected: 6,
    },
    {
      id: 7,
      name: 'add 3 items and delete one - check head',
      inherit: [1, 6],
      code: `dll.deleteHead();`,
      evaluate: `dll.head.value;`,
      expected: 7,
    },
    {
      id: 8,
      name: 'add 3 items and delete one - check tail',
      inherit: [1, 6, 7],
      code: ``,
      evaluate: `dll.tail.value;`,
      expected: 8,
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
