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
  { stage: 1, text: '  toArray() {' },
  { stage: 2, text: '    const nodes = [];' },
  { stage: 2, text: '' },
  { stage: 3, text: '    let currentNode = this.head;' },
  { stage: 3, text: '    while (currentNode) {' },
  { stage: 4, text: '      nodes.push(currentNode.value);' },
  { stage: 4, text: '      currentNode = currentNode.next;' },
  { stage: 3, text: '    }' },
  { stage: 3, text: '' },
  { stage: 2, text: '    return nodes;' },
  { stage: 1, text: '  }' },
  { stage: 0, text: '' },
  { stage: 0, text: '}' },
  { stage: 0, text: '' },
];

export const data = {
  problemID: 17,
  problemName: 'Implement **toArray** in a *DoublyLinkedList* class.',
  problemText:
    "Provide a class method **toArray** that converts *DoublyLinkedListNode* `value`'s in a *DoublyLinkedList* into array elements in matching order.",
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
      name: 'empty list makes empty array',
      inherit: [1],
      code: ``,
      evaluate: `dll.toArray();`,
      expected: JSON.stringify([]),
    },
    {
      id: 3,
      name: 'one item list',
      inherit: [1],
      code: `dll.append(4);`,
      evaluate: `dll.toArray();`,
      expected: JSON.stringify([4]),
    },
    {
      id: 4,
      name: 'three item list',
      inherit: [1],
      code: `dll.append(4).append(5).append(6);`,
      evaluate: `dll.toArray();`,
      expected: JSON.stringify([4, 5, 6]),
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
  category: DOUBLY_LINKED_LIST,
  type: DATA_STRUCTURE,
  difficulty: BEGINNER,
  maxExecutionTime: 2,
  solution: {
    stages: [0, 30, 60, 90, 150],
    solutionLines: solution,
  },
};
