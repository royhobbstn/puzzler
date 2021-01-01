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
  { stage: 0, text: '  find(value) {' },
  { stage: 0, text: '    if (!this.head) {' },
  { stage: 0, text: '      return null;' },
  { stage: 0, text: '    }' },
  { stage: 0, text: '' },
  { stage: 0, text: '    let currentNode = this.head;' },
  { stage: 0, text: '' },
  { stage: 0, text: '    while (currentNode) {' },
  { stage: 0, text: '      if (currentNode.value === value) {' },
  { stage: 0, text: '        return currentNode;' },
  { stage: 0, text: '      }' },
  { stage: 0, text: '      currentNode = currentNode.next;' },
  { stage: 0, text: '    }' },
  { stage: 0, text: '' },
  { stage: 0, text: '    return null;' },
  { stage: 0, text: '  }' },
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
  ],
  setupCode: '',
  category: LINKED_LIST,
  type: DATA_STRUCTURE,
  difficulty: BEGINNER,
  maxExecutionTime: 2,
  solution: {
    stages: [0, 30, 60, 120],
    solutionLines: solution,
  },
};
