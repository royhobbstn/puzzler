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
  { stage: 0, text: '  toArray() {' },
  { stage: 0, text: '    const nodes = [];' },
  { stage: 0, text: '' },
  { stage: 0, text: '    let currentNode = this.head;' },
  { stage: 0, text: '    while (currentNode) {' },
  { stage: 0, text: '      nodes.push(currentNode);' },
  { stage: 0, text: '      currentNode = currentNode.next;' },
  { stage: 0, text: '    }' },
  { stage: 0, text: '' },
  { stage: 0, text: '    return nodes;' },
  { stage: 0, text: '  }' },
  { stage: 0, text: '' },
  { stage: 0, text: '}' },
  { stage: 0, text: '' },
];

export const data = {
  problemID: 17,
  problemName: 'Implement `toArray` in a Doubly Linked List',
  problemText:
    'Provide a class method **toArray** that converts DoublyLinkedListNode(s) (not values) into array items.',
  testCases: [
    {
      id: 1,
      name: 'compiles',
      inherit: [],
      code: `const dll=new DoublyLinkedList();`,
      evaluate: `dll;`,
      expected: `{"head":null,"tail":null}`,
    },
  ],
  setupCode: '',
  category: DOUBLY_LINKED_LIST,
  type: DATA_STRUCTURE,
  difficulty: BEGINNER,
  maxExecutionTime: 2,
  solution: {
    stages: [0, 30, 60, 120],
    solutionLines: solution,
  },
};