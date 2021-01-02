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
  { stage: 0, text: '  append(value) {' },
  { stage: 0, text: '    const newNode = new LinkedListNode(value);' },
  { stage: 0, text: '' },
  { stage: 0, text: '    if (!this.head) {' },
  { stage: 0, text: '      this.head = newNode;' },
  { stage: 0, text: '      this.tail = newNode;' },
  { stage: 0, text: '      return this;' },
  { stage: 0, text: '    }' },
  { stage: 0, text: '' },
  { stage: 0, text: '    this.tail.next = newNode;' },
  { stage: 0, text: '    this.tail = newNode;' },
  { stage: 0, text: '' },
  { stage: 0, text: '    return this;' },
  { stage: 0, text: '  }' },
  { stage: 0, text: '}' },
  { stage: 0, text: '' },
];

export const data = {
  problemID: 2,
  problemName: 'Implement `append` in a Singly Linked List',
  problemText:
    'Write an **append** method in a Singly-Linked-List Class that accepts an arbitrary value and inserts it at the **end** of the list.  The method should return the original list.',
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