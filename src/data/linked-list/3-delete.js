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
  { stage: 1, text: '  delete(value) {' },
  { stage: 2, text: '    if (!this.head) {' },
  { stage: 2, text: '      return null;' },
  { stage: 2, text: '    }' },
  { stage: 2, text: '' },
  { stage: 3, text: '    let deletedNode = null;' },
  { stage: 3, text: '' },
  { stage: 4, text: '    while (this.head && this.head.value === value) {' },
  { stage: 4, text: '      deletedNode = this.head;' },
  { stage: 4, text: '      this.head = this.head.next;' },
  { stage: 4, text: '    }' },
  { stage: 4, text: '' },
  { stage: 5, text: '    let currentNode = this.head;' },
  { stage: 5, text: '' },
  { stage: 5, text: '    if (currentNode !== null) {' },
  { stage: 6, text: '      while (currentNode.next) {' },
  { stage: 6, text: '        if (currentNode.next.value === value) {' },
  { stage: 7, text: '          deletedNode = currentNode.next;' },
  { stage: 7, text: '          currentNode.next = currentNode.next.next;' },
  { stage: 7, text: '        } else {' },
  { stage: 7, text: '          currentNode = currentNode.next;' },
  { stage: 6, text: '        }' },
  { stage: 6, text: '      }' },
  { stage: 5, text: '    }' },
  { stage: 5, text: '' },
  { stage: 8, text: '    if (this.tail.value === value) {' },
  { stage: 8, text: '      this.tail = currentNode;' },
  { stage: 8, text: '    }' },
  { stage: 3, text: '' },
  { stage: 2, text: '    return deletedNode;' },
  { stage: 1, text: '  }' },
  { stage: 0, text: '' },
  { stage: 0, text: '}' },
  { stage: 0, text: '' },
];

export const data = {
  problemID: 3,
  problemName: 'Implement **delete** in a *Singly Linked List* Class.',
  problemText:
    'Write a **delete** method in a *Singly Linked List* Class that accepts an arbitrary `value` parameter and removes all nodes that match that value.  The method should return the last node deleted (or `null` if no match found).',
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
      name: 'delete head return value',
      inherit: [1],
      code: `ll.append(5);ll.append(4);ll.append(7);ll.append(8);`,
      evaluate: `ll.delete(5).value === 5;`,
      expected: true,
    },
    {
      id: 3,
      name: 'delete tail return value',
      inherit: [1, 2],
      code: ``,
      evaluate: `ll.delete(8).value === 8;`,
      expected: true,
    },
    {
      id: 4,
      name: 'delete head resets head',
      inherit: [1, 2],
      code: ``,
      evaluate: `ll.delete(5);ll.head.value;`,
      expected: 4,
    },
    {
      id: 5,
      name: 'delete tail resets tail',
      inherit: [1, 2],
      code: ``,
      evaluate: `ll.delete(8);ll.tail.value;`,
      expected: 7,
    },
    {
      id: 6,
      name: 'delete second item, head points to correct next',
      inherit: [1, 2],
      code: ``,
      evaluate: `ll.delete(4);ll.head.next.value;`,
      expected: 7,
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
    stages: [0, 30, 60, 90, 120, 150, 180, 210, 270],
    solutionLines: solution,
  },
};
