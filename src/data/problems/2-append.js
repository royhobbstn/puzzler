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
  { stage: 1, text: '  append(value) {' },
  { stage: 2, text: '    const newNode = new LinkedListNode(value);' },
  { stage: 2, text: '' },
  { stage: 3, text: '    if (!this.head) {' },
  { stage: 4, text: '      this.head = newNode;' },
  { stage: 4, text: '      this.tail = newNode;' },
  { stage: 4, text: '      return this;' },
  { stage: 3, text: '    }' },
  { stage: 3, text: '' },
  { stage: 5, text: '    this.tail.next = newNode;' },
  { stage: 5, text: '    this.tail = newNode;' },
  { stage: 5, text: '' },
  { stage: 2, text: '    return this;' },
  { stage: 1, text: '  }' },
  { stage: 0, text: '}' },
  { stage: 0, text: '' },
];

export const data = {
  problemID: 2,
  problemName: 'Implement **append** in a *LinkedList* class.',
  problemText:
    'Write an **append** method in a *LinkedList* class that accepts an arbitrary `value` parameter, creates a new Node, and inserts it at the end of the list.  The method should return the original list.',
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
      name: 'append one node, check head',
      inherit: [1],
      code: `ll.append(5);`,
      evaluate: `ll.head.value;`,
      expected: 5,
    },
    {
      id: 3,
      name: 'append one node, check tail',
      inherit: [1, 2],
      code: ``,
      evaluate: `ll.tail.value;`,
      expected: 5,
    },
    {
      id: 4,
      name: 'append two nodes, check head',
      inherit: [1, 2],
      code: `ll.append(7);`,
      evaluate: `ll.head.value;`,
      expected: 5,
    },
    {
      id: 5,
      name: 'append two nodes, check tail',
      inherit: [1, 2, 4],
      code: ``,
      evaluate: `ll.tail.value;`,
      expected: 7,
    },
    {
      id: 6,
      name: 'returns itself',
      inherit: [1, 2],
      code: ``,
      evaluate: `ll.append(10) === ll;`,
      expected: true,
    },
  ],
  setupCode: '',
  tags: [LINKED_LIST, DATA_STRUCTURE],
  difficulty: BEGINNER,
  solution,
};
