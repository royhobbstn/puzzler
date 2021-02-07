import { LINKED_LIST, DATA_STRUCTURE, BEGINNER } from '../constants.js';

const solution = [
  { stage: 0, text: 'class LinkedListNode {' },
  { stage: 0, text: '  constructor(value, next = null) {' },
  { stage: 0, text: '    this.value = value;' },
  { stage: 0, text: '    this.next = next;' },
  { stage: 0, text: '  }' },
  { stage: 0, text: '}' },
  { stage: 0, text: '' },
  { stage: 0, text: 'class LinkedList {' },
  { stage: 0, text: '  constructor() {' },
  { stage: 0, text: '    this.head = null;' },
  { stage: 0, text: '    this.tail = null;' },
  { stage: 0, text: '  }' },
  { stage: 0, text: '' },
  { stage: -1, text: '  // IMPLEMENTED: append(value: any) LinkedList' },
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
  problemID: 7,
  problemName: 'Implement **fromArray** in a *LinkedList* class.',
  problemText:
    'Given a *LinkedList* class with an **append** method, create a **fromArray** method that will take in an array of `values` as a parameter and return a *LinkedList*.',
  testCases: [
    {
      id: 1,
      name: 'compiles',
      inherit: [],
      code: `const ll=new LinkedList();`,
      evaluate: `Boolean(ll);`,
      expected: true,
    },
    {
      id: 2,
      name: 'converts array to linked list (and back)',
      inherit: [1],
      code: `ll.fromArray([1,2,3,4,5]);`,
      evaluate: `ll.toArray()`,
      expected: JSON.stringify([1, 2, 3, 4, 5]),
    },
    {
      id: 3,
      name: 'double check values by stepping through (head)',
      inherit: [1, 2],
      code: ``,
      evaluate: `ll.head.value`,
      expected: 1,
    },
    {
      id: 4,
      name: 'double check values by stepping through (tail)',
      inherit: [1, 2],
      code: ``,
      evaluate: `ll.tail.value`,
      expected: 5,
    },
    {
      id: 5,
      name: 'empty fromArray results in empty list',
      inherit: [1],
      code: `ll.fromArray([]);`,
      evaluate: `ll.head == null;`,
      expected: true,
    },
    {
      id: 6,
      name: 'empty fromArray results in empty list',
      inherit: [1, 5],
      code: ``,
      evaluate: `ll.toArray();`,
      expected: JSON.stringify([]),
    },
    {
      id: 7,
      name: 'double check values by stepping through (head next)',
      inherit: [1, 2],
      code: ``,
      evaluate: `ll.head.next.value`,
      expected: 2,
    },
  ],
  setupCode: `
  LinkedList.prototype.append = function (value) {
    const newNode = new LinkedListNode(value);
    if (!this.head) {
      this.head = newNode;
      this.tail = newNode;
      return this;
    }
    this.tail.next = newNode;
    this.tail = newNode;
    return this;
  };
  LinkedList.prototype.toArray = function () {
    const values = [];
    let currentNode = this.head;
    while (currentNode) {
      values.push(currentNode.value);
      currentNode = currentNode.next;
    }
    return values;
  };
  `,
  category: LINKED_LIST,
  type: DATA_STRUCTURE,
  difficulty: BEGINNER,
  maxExecutionTime: 2,
  solution: {
    stages: [0, 30, 60, 120],
    solutionLines: solution,
  },
};
