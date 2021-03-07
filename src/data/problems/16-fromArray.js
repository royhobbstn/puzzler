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
  { stage: -1, text: '  // IMPLEMENTED: append(value: any) DoublyLinkedList' },
  { stage: -1, text: '' },
  { stage: 1, text: '  fromArray(values) {' },
  { stage: 3, text: '    values.forEach(value => this.append(value));' },
  { stage: 2, text: '    return this;' },
  { stage: 1, text: '  }' },
  { stage: 0, text: '' },
  { stage: 0, text: '}' },
  { stage: 0, text: '' },
];

export const data = {
  problemID: 16,
  problemName: 'Implement **fromArray** in a *DoublyLinkedList* class.',
  problemText:
    "Given a *DoublyLinkedList* class with an **append** method, create a **fromArray** method that will take in an array of `values` as a parameter, populate corresponding `DoublyLinkedListNode`'s and return the list.",
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
      name: 'empty array creates empty list - check head',
      inherit: [1],
      code: `dll.fromArray([]);`,
      evaluate: `dll.head;`,
      expected: null,
    },
    {
      id: 3,
      name: 'empty array creates empty list - check tail',
      inherit: [1, 2],
      code: ``,
      evaluate: `dll.tail;`,
      expected: null,
    },
    {
      id: 4,
      name: 'creates one-item list - check head',
      inherit: [1],
      code: `dll.fromArray([5]);`,
      evaluate: `dll.head.value;`,
      expected: 5,
    },
    {
      id: 5,
      name: 'creates one-item list - check tail',
      inherit: [1, 4],
      code: ``,
      evaluate: `dll.tail.value;`,
      expected: 5,
    },
    {
      id: 6,
      name: 'creates three-item list - check head',
      inherit: [1],
      code: `dll.fromArray([6,7,8]);`,
      evaluate: `dll.head.value;`,
      expected: 6,
    },
    {
      id: 7,
      name: 'creates three-item list - check tail',
      inherit: [1, 6],
      code: ``,
      evaluate: `dll.tail.value;`,
      expected: 8,
    },
    {
      id: 8,
      name: 'creates three-item list - check head next',
      inherit: [1, 6],
      code: ``,
      evaluate: `dll.head.next.value;`,
      expected: 7,
    },
  ],
  setupCode: `
  DoublyLinkedList.prototype.append = function (value) {
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
  difficulty: BEGINNER,
  solution,
};
