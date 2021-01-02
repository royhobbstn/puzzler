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
  { stage: 0, text: '  delete(value) {' },
  { stage: 0, text: '    if (!this.head) {' },
  { stage: 0, text: '      return null;' },
  { stage: 0, text: '    }' },
  { stage: 0, text: '' },
  { stage: 0, text: '    let deletedNode = null;' },
  { stage: 0, text: '    let currentNode = this.head;' },
  { stage: 0, text: '' },
  { stage: 0, text: '    while (currentNode) {' },
  { stage: 0, text: '      if (currentNode.value === value) {' },
  { stage: 0, text: '        deletedNode = currentNode;' },
  { stage: 0, text: '' },
  { stage: 0, text: '        if (deletedNode === this.head) {' },
  { stage: 0, text: '          this.head = deletedNode.next;' },
  { stage: 0, text: '' },
  { stage: 0, text: '          if (this.head) {' },
  { stage: 0, text: '            this.head.previous = null;' },
  { stage: 0, text: '          }' },
  { stage: 0, text: '' },
  { stage: 0, text: '          if (deletedNode === this.tail) {' },
  { stage: 0, text: '            this.tail = null;' },
  { stage: 0, text: '          }' },
  { stage: 0, text: '        } else if (deletedNode === this.tail) {' },
  { stage: 0, text: '          this.tail = deletedNode.previous;' },
  { stage: 0, text: '          this.tail.next = null;' },
  { stage: 0, text: '        } else {' },
  { stage: 0, text: '          const previousNode = deletedNode.previous;' },
  { stage: 0, text: '          const nextNode = deletedNode.next;' },
  { stage: 0, text: '' },
  { stage: 0, text: '          previousNode.next = nextNode;' },
  { stage: 0, text: '          nextNode.previous = previousNode;' },
  { stage: 0, text: '        }' },
  { stage: 0, text: '      }' },
  { stage: 0, text: '' },
  { stage: 0, text: '      currentNode = currentNode.next;' },
  { stage: 0, text: '    }' },
  { stage: 0, text: '' },
  { stage: 0, text: '    return deletedNode;' },
  { stage: 0, text: '  }' },
  { stage: 0, text: '' },
  { stage: 0, text: '}' },
  { stage: 0, text: '' },
];

export const data = {
  problemID: 12,
  problemName: 'Implement `delete` in a Doubly Linked List',
  problemText:
    'Write a **delete** method in a Doubly-Linked-List Class that accepts an arbitrary value and deletes all nodes that have a matching value.  The method should return the last node deleted (or null if no match found).',
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