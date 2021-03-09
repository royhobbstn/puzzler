import { LINKED_LIST, DATA_STRUCTURE, ADVANCED } from '../constants.js';

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
  { stage: 0, text: '  reverse() {' },
  { stage: 1, text: '    let currNode = this.head;' },
  { stage: 2, text: '    let prevNode = null;' },
  { stage: 2, text: '    let nextNode = null;' },
  { stage: 3, text: '' },
  { stage: 4, text: '    while (currNode) {' },
  { stage: 5, text: '      nextNode = currNode.next;' },
  { stage: 5, text: '      currNode.next = prevNode;' },
  { stage: 6, text: '      prevNode = currNode;' },
  { stage: 6, text: '      currNode = nextNode;' },
  { stage: 4, text: '    }' },
  { stage: 4, text: '' },
  { stage: 7, text: '    this.tail = this.head;' },
  { stage: 7, text: '    this.head = prevNode;' },
  { stage: 3, text: '' },
  { stage: 2, text: '    return this;' },
  { stage: 0, text: '  }' },
  { stage: 0, text: '' },
  { stage: 0, text: '}' },
  { stage: 0, text: '' },
];

export const data = {
  problemID: 9,
  problemName: 'Reverse a *Linked List*.',
  problemText:
    'Write a **reverse** method to reverse a Linked List in-place (not using a copy) which then returns itself.',
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
      name: 'reverse a list',
      inherit: [1],
      code: `ll.append(1).append(2).append(3).append(4);`,
      evaluate: `ll.reverse().toArray();`,
      expected: JSON.stringify([4, 3, 2, 1]),
    },
    {
      id: 3,
      name: 'reverse an empty list',
      inherit: [1],
      code: ``,
      evaluate: `ll.reverse().toArray();`,
      expected: JSON.stringify([]),
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
  tags: [ADVANCED, LINKED_LIST, DATA_STRUCTURE],
  solution,
};
