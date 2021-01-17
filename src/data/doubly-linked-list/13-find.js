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
  { stage: 6, text: '' },
  { stage: 6, text: '      currentNode = currentNode.next;' },
  { stage: 4, text: '    }' },
  { stage: 4, text: '' },
  { stage: 4, text: '    return null;' },
  { stage: 1, text: '  }' },
  { stage: 0, text: '' },
  { stage: 0, text: '}' },
  { stage: 0, text: '' },
];

export const data = {
  problemID: 13,
  problemName: 'Implement **find** in a *DoublyLinkedList* class.',
  problemText:
    'Write a **find** method in a *DoublyLinkedList* class that accepts an arbitrary `value` parameter and finds (returns) the first `DoublyLinkedListNode` that has a matching value (or null if no match found).',
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
      name: 'find on an empty list',
      inherit: [1],
      code: ``,
      evaluate: `dll.find(5);`,
      expected: null,
    },
    {
      id: 3,
      name: 'add one item, find that item',
      inherit: [1],
      code: `dll.append(4);`,
      evaluate: `dll.find(4).value;`,
      expected: 4,
    },
    {
      id: 4,
      name: 'add one item, find an item that does not exist',
      inherit: [1],
      code: `dll.append(4);`,
      evaluate: `dll.find(6);`,
      expected: null,
    },
    {
      id: 5,
      name: 'add three items, find an item',
      inherit: [1],
      code: `dll.append(1).append(2).append(3);`,
      evaluate: `dll.find(2).value;`,
      expected: 2,
    },
    {
      id: 6,
      name: 'add three items -two dupicates, return the first',
      inherit: [1],
      code: `dll.append(1).append(2).append(2);`,
      evaluate: `dll.find(2) === dll.head.next;`,
      expected: true,
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
    stages: [0, 30, 60, 90, 120, 150, 210],
    solutionLines: solution,
  },
};
