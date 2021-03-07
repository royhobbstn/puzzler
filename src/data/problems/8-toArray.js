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
  { stage: 1, text: '  toArray() {' },
  { stage: 2, text: '    const values = [];' },
  { stage: 2, text: '' },
  { stage: 3, text: '    let currentNode = this.head;' },
  { stage: 3, text: '    while (currentNode) {' },
  { stage: 4, text: '      values.push(currentNode.value);' },
  { stage: 4, text: '      currentNode = currentNode.next;' },
  { stage: 3, text: '    }' },
  { stage: 3, text: '' },
  { stage: 2, text: '    return values;' },
  { stage: 1, text: '  }' },
  { stage: 0, text: '' },
  { stage: 0, text: '}' },
  { stage: 0, text: '' },
];

export const data = {
  problemID: 8,
  problemName: 'Implement **toArray** in a *LinkedList* class.',
  problemText:
    'Provide a class method **toArray** that converts the value property of each *LinkedListNode* into a new array item, and returns that array.',
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
      name: 'converts empty linked list to empty array',
      inherit: [1],
      code: ``,
      evaluate: `ll.toArray();`,
      expected: JSON.stringify([]),
    },
    {
      id: 3,
      name: 'linked list of 4 items into array',
      inherit: [1],
      code: `ll.append(2).append(3).append(4).append(5);`,
      evaluate: `ll.toArray();`,
      expected: JSON.stringify([2, 3, 4, 5]),
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
  tags: [LINKED_LIST, DATA_STRUCTURE],
  difficulty: BEGINNER,
  solution,
};
