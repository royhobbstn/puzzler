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
  { stage: 1, text: '  append(value) {' },
  { stage: 2, text: '    const newNode = new DoublyLinkedListNode(value);' },
  { stage: 2, text: '' },
  { stage: 3, text: '    if (!this.head) {' },
  { stage: 4, text: '      this.head = newNode;' },
  { stage: 4, text: '      this.tail = newNode;' },
  { stage: 4, text: '      return this;' },
  { stage: 3, text: '    }' },
  { stage: 3, text: '' },
  { stage: 5, text: '    this.tail.next = newNode;' },
  { stage: 5, text: '    newNode.previous = this.tail;' },
  { stage: 5, text: '    this.tail = newNode;' },
  { stage: 2, text: '    return this;' },
  { stage: 1, text: '  }' },
  { stage: 0, text: '' },
  { stage: 0, text: '}' },
  { stage: 0, text: '' },
];

export const data = {
  problemID: 11,
  problemName: 'Implement `append` in a Doubly Linked List',
  problemText:
    'Write an **append** method in a Doubly-Linked-List Class that accepts an arbitrary value and adds it to the end of the list.  The method should return the original list.',
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
    stages: [0, 30, 60, 90, 120, 180],
    solutionLines: solution,
  },
};
