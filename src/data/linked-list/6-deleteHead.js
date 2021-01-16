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
  { stage: 1, text: '  deleteHead() {' },
  { stage: 2, text: '    if (!this.head) {' },
  { stage: 2, text: '      return null;' },
  { stage: 2, text: '    }' },
  { stage: 3, text: '' },
  { stage: 3, text: '    const deletedHead = this.head;' },
  { stage: 3, text: '' },
  { stage: 4, text: '    if (this.head.next) {' },
  { stage: 5, text: '      this.head = this.head.next;' },
  { stage: 4, text: '    } else {' },
  { stage: 6, text: '      this.head = null;' },
  { stage: 6, text: '      this.tail = null;' },
  { stage: 4, text: '    }' },
  { stage: 3, text: '' },
  { stage: 3, text: '    return deletedHead;' },
  { stage: 1, text: '  }' },
  { stage: 0, text: '' },
  { stage: 0, text: '}' },
  { stage: 0, text: '' },
];

export const data = {
  problemID: 6,
  problemName: 'Implement `deleteHead` in a Singly Linked List',
  problemText:
    'Write a **deleteHead** method in a Singly-Linked-List Class that will remove the first node (the head) of a list (if it exists, else null) and return it.',
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
      name: 'delete head and find return value',
      inherit: [1],
      code: `ll.append(5);ll.append(4);ll.append(7);ll.append(8);`,
      evaluate: `ll.deleteHead().value;`,
      expected: 5,
    },
    {
      id: 3,
      name: 'delete head, properly set next head, delete and find return value',
      inherit: [1, 2],
      code: ``,
      evaluate: `ll.deleteHead();ll.deleteHead().value;`,
      expected: 4,
    },
    {
      id: 4,
      name: 'delete head from empty list returns null',
      inherit: [1],
      code: ``,
      evaluate: `ll.deleteHead();`,
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
    stages: [0, 30, 60, 90, 120, 150, 210],
    solutionLines: solution,
  },
};
