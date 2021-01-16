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
  { stage: 1, text: '  find(value) {' },
  { stage: 2, text: '    if (!this.head) {' },
  { stage: 2, text: '      return null;' },
  { stage: 2, text: '    }' },
  { stage: 3, text: '' },
  { stage: 3, text: '    let currentNode = this.head;' },
  { stage: 3, text: '' },
  { stage: 4, text: '    while (currentNode) {' },
  { stage: 5, text: '      if (currentNode.value === value) {' },
  { stage: 5, text: '        return currentNode;' },
  { stage: 5, text: '      }' },
  { stage: 5, text: '      currentNode = currentNode.next;' },
  { stage: 4, text: '    }' },
  { stage: 4, text: '' },
  { stage: 3, text: '    return null;' },
  { stage: 1, text: '  }' },
  { stage: 0, text: '' },
  { stage: 0, text: '}' },
  { stage: 0, text: '' },
];

export const data = {
  problemID: 4,
  problemName: 'Implement `find` in a Singly Linked List',
  problemText:
    'Write a **find** method in a Singly-Linked-List Class that accepts an arbitrary value and returns the first node that matches that value, or null if no matching value was found.',
  testCases: [
    {
      id: 1,
      name: 'compiles',
      inherit: [],
      code: `const ll=new LinkedList();`,
      evaluate: `ll;`,
      expected: `{"head":null,"tail":null}`,
    },
    {
      id: 2,
      name: 'find head value',
      inherit: [1],
      code: `ll.append(5);ll.append(4);ll.append(7);ll.append(8);`,
      evaluate: `ll.find(5).value;`,
      expected: 5,
    },
    {
      id: 3,
      name: 'find tail value',
      inherit: [1, 2],
      code: ``,
      evaluate: `ll.find(8).value;`,
      expected: 8,
    },
    {
      id: 4,
      name: 'find a middle value',
      inherit: [1, 2],
      code: ``,
      evaluate: `ll.find(7).value;`,
      expected: 7,
    },
    {
      id: 5,
      name: 'return null for non-existent value',
      inherit: [1, 2],
      code: ``,
      evaluate: `ll.find(17);`,
      expected: null,
    },
    {
      id: 6,
      name: 'return null when empty list',
      inherit: [1],
      code: ``,
      evaluate: `ll.find(27);`,
      expected: null,
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
  };`,
  category: LINKED_LIST,
  type: DATA_STRUCTURE,
  difficulty: BEGINNER,
  maxExecutionTime: 2,
  solution: {
    stages: [0, 30, 60, 90, 120, 180],
    solutionLines: solution,
  },
};
