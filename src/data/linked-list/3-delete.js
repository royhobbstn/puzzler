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
  { stage: 0, text: '  delete(value) {' },
  { stage: 0, text: '    if (!this.head) {' },
  { stage: 0, text: '      return null;' },
  { stage: 0, text: '    }' },
  { stage: 0, text: '' },
  { stage: 0, text: '    let deletedNode = null;' },
  { stage: 0, text: '' },
  { stage: 0, text: '    while (this.head && this.head.value === value) {' },
  { stage: 0, text: '      deletedNode = this.head;' },
  { stage: 0, text: '      this.head = this.head.next;' },
  { stage: 0, text: '    }' },
  { stage: 0, text: '' },
  { stage: 0, text: '    let currentNode = this.head;' },
  { stage: 0, text: '' },
  { stage: 0, text: '    if (currentNode !== null) {' },
  { stage: 0, text: '      while (currentNode.next) {' },
  { stage: 0, text: '        if (currentNode.next.value === value) {' },
  { stage: 0, text: '          deletedNode = currentNode.next;' },
  { stage: 0, text: '          currentNode.next = currentNode.next.next;' },
  { stage: 0, text: '        } else {' },
  { stage: 0, text: '          currentNode = currentNode.next;' },
  { stage: 0, text: '        }' },
  { stage: 0, text: '      }' },
  { stage: 0, text: '    }' },
  { stage: 0, text: '' },
  { stage: 0, text: '    if (this.tail.value === value) {' },
  { stage: 0, text: '      this.tail = currentNode;' },
  { stage: 0, text: '    }' },
  { stage: 0, text: '' },
  { stage: 0, text: '    return deletedNode;' },
  { stage: 0, text: '  }' },
  { stage: 0, text: '' },
  { stage: 0, text: '}' },
  { stage: 0, text: '' },
];

export const data = {
  problemID: 3,
  problemName: 'Implement `delete` in a Singly Linked List',
  problemText:
    'Write a **delete** method in a Singly-Linked-List Class that accepts an arbitrary value and removes all nodes that match that value.  The method should return a deleted node or null.',
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
