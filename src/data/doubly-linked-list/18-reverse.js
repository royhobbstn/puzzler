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
  { stage: 1, text: '  reverse() {' },
  { stage: 2, text: '    let currNode = this.head;' },
  { stage: 2, text: '    let prevNode = null;' },
  { stage: 2, text: '    let nextNode = null;' },
  { stage: 3, text: '' },
  { stage: 3, text: '    while (currNode) {' },
  { stage: 4, text: '      nextNode = currNode.next;' },
  { stage: 4, text: '      prevNode = currNode.previous;' },
  { stage: 4, text: '' },
  { stage: 5, text: '      currNode.next = prevNode;' },
  { stage: 5, text: '      currNode.previous = nextNode;' },
  { stage: 5, text: '' },
  { stage: 6, text: '      prevNode = currNode;' },
  { stage: 6, text: '      currNode = nextNode;' },
  { stage: 3, text: '    }' },
  { stage: 3, text: '' },
  { stage: 7, text: '    this.tail = this.head;' },
  { stage: 7, text: '    this.head = prevNode;' },
  { stage: 7, text: '    return this;' },
  { stage: 1, text: '  }' },
  { stage: 0, text: '' },
  { stage: 0, text: '}' },
  { stage: 0, text: '' },
];

export const data = {
  problemID: 18,
  problemName: 'Reverse a *DoublyLinkedList* in-place.',
  problemText:
    'Provide a class method **reverse** that will reverse a *DoublyLinkedList* in place (not using a copy), and return the list.',
  testCases: [
    {
      id: 1,
      name: 'compiles',
      inherit: [],
      code: `const dll=new DoublyLinkedList();`,
      evaluate: `dll;`,
      expected: `{"head":null,"tail":null}`,
    },
    {
      id: 2,
      name: 'reversing an empty list - still empty',
      inherit: [1],
      code: ``,
      evaluate: `dll.reverse();`,
      expected: `{"head":null,"tail":null}`,
    },
    {
      id: 3,
      name: 'reversing a one item list - check head',
      inherit: [1],
      code: `dll.append(5);`,
      evaluate: `dll.reverse().head.value;`,
      expected: 5,
    },
    {
      id: 4,
      name: 'reversing a one item list - check head',
      inherit: [1, 3],
      code: ``,
      evaluate: `dll.reverse().tail.value;`,
      expected: 5,
    },
    {
      id: 5,
      name: 'reversing a three item list - check head',
      inherit: [1],
      code: `dll.append(6).append(7).append(8);`,
      evaluate: `dll.reverse().head.value;`,
      expected: 8,
    },
    {
      id: 6,
      name: 'reversing a three item list - check head',
      inherit: [1, 5],
      code: ``,
      evaluate: `dll.reverse().tail.value;`,
      expected: 6,
    },
    {
      id: 7,
      name: 'reversing a three item list - check head next',
      inherit: [1, 5],
      code: ``,
      evaluate: `dll.reverse().head.next.value;`,
      expected: 7,
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
  category: DOUBLY_LINKED_LIST,
  type: DATA_STRUCTURE,
  difficulty: BEGINNER,
  maxExecutionTime: 2,
  solution: {
    stages: [0, 30, 60, 90, 120, 150, 180, 240],
    solutionLines: solution,
  },
};
