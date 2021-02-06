import { LINKED_LIST, DATA_STRUCTURE, INTERMEDIATE } from '../constants.js';

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
  { stage: 1, text: '  deleteTail() {' },
  { stage: 2, text: '    const deletedTail = this.tail;' },
  { stage: 3, text: '' },
  { stage: 3, text: '    if (this.head === this.tail) {' },
  { stage: 4, text: '      this.head = null;' },
  { stage: 4, text: '      this.tail = null;' },
  { stage: 4, text: '      return deletedTail;' },
  { stage: 3, text: '    }' },
  { stage: 3, text: '' },
  { stage: 5, text: '    let currentNode = this.head;' },
  { stage: 5, text: '    while (currentNode.next) {' },
  { stage: 6, text: '      if (!currentNode.next.next) {' },
  { stage: 7, text: '        currentNode.next = null;' },
  { stage: 6, text: '      } else {' },
  { stage: 7, text: '        currentNode = currentNode.next;' },
  { stage: 6, text: '      }' },
  { stage: 5, text: '    }' },
  { stage: 6, text: '' },
  { stage: 6, text: '    this.tail = currentNode;' },
  { stage: 6, text: '' },
  { stage: 2, text: '    return deletedTail;' },
  { stage: 1, text: '  }' },
  { stage: 0, text: '' },
  { stage: 0, text: '}' },
  { stage: 0, text: '' },
];

export const data = {
  problemID: 5,
  problemName: 'Implement **deleteTail** in a *LinkedList* class.',
  problemText:
    'Write a **deleteTail** method in a *LinkedList* class that will remove the last node (the tail) of a list (if it exists, else null) and return it.',
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
      name: 'delete tail and find return value',
      inherit: [1],
      code: `ll.append(5);ll.append(4);ll.append(7);ll.append(8);`,
      evaluate: `ll.deleteTail().value;`,
      expected: 8,
    },
    {
      id: 3,
      name: 'properly resets so following tail element can be deleted',
      inherit: [1, 2],
      code: ``,
      evaluate: `ll.deleteTail();ll.deleteTail().value;`,
      expected: 7,
    },
    {
      id: 4,
      name: 'deleting tail of an empty list returns null',
      inherit: [1],
      code: ``,
      evaluate: `ll.deleteTail();`,
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
  difficulty: INTERMEDIATE,
  maxExecutionTime: 2,
  solution: {
    stages: [0, 30, 60, 90, 120, 150, 180, 240],
    solutionLines: solution,
  },
};
