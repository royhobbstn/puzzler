import { STACK, DATA_STRUCTURE, BEGINNER } from '../constants.js';

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
  { stage: 0, text: '  prepend(value) {' },
  { stage: 0, text: '    const newNode = new LinkedListNode(value, this.head);' },
  { stage: 0, text: '    this.head = newNode;' },
  { stage: 0, text: '' },
  { stage: 0, text: '    if (!this.tail) {' },
  { stage: 0, text: '      this.tail = newNode;' },
  { stage: 0, text: '    }' },
  { stage: 0, text: '' },
  { stage: 0, text: '    return this;' },
  { stage: 0, text: '  }' },
  { stage: 0, text: '' },
  { stage: 0, text: '  deleteHead() {' },
  { stage: 0, text: '    if (!this.head) {' },
  { stage: 0, text: '      return null;' },
  { stage: 0, text: '    }' },
  { stage: 0, text: '    const deletedHead = this.head;' },
  { stage: 0, text: '    if (this.head.next) {' },
  { stage: 0, text: '      this.head = this.head.next;' },
  { stage: 0, text: '    } else {' },
  { stage: 0, text: '      this.head = null;' },
  { stage: 0, text: '      this.tail = null;' },
  { stage: 0, text: '    }' },
  { stage: 0, text: '    return deletedHead;' },
  { stage: 0, text: '  }' },
  { stage: 0, text: '}' },
  { stage: 0, text: '' },
  { stage: 0, text: '/* All code above is implicitly included in your environment */' },
  { stage: 0, text: '' },
  { stage: 0, text: 'class Stack {' },
  { stage: 0, text: '  constructor() {' },
  { stage: 0, text: '    this.linkedList = new LinkedList();' },
  { stage: 0, text: '  }' },
  { stage: 0, text: '' },
  { stage: 0, text: '  isEmpty() {' },
  { stage: 0, text: '    return !this.linkedList.head;' },
  { stage: 0, text: '  }' },
  { stage: 0, text: '' },
  { stage: 0, text: '  peek() {' },
  { stage: 0, text: '    if (this.isEmpty()) {' },
  { stage: 0, text: '      return null;' },
  { stage: 0, text: '    }' },
  { stage: 0, text: '    return this.linkedList.head.value;' },
  { stage: 0, text: '  }' },
  { stage: 0, text: '' },
  { stage: 0, text: '  push(value) {' },
  { stage: 0, text: '    this.linkedList.prepend(value);' },
  { stage: 0, text: '  }' },
  { stage: 0, text: '' },
  { stage: 0, text: '  pop() {' },
  { stage: 0, text: '    const removedHead = this.linkedList.deleteHead();' },
  { stage: 0, text: '    return removedHead ? removedHead.value : null;' },
  { stage: 0, text: '  }' },
  { stage: 0, text: '' },
  { stage: 0, text: '}' },
  { stage: 0, text: '' },
];

export const data = {
  problemID: 23,
  problemName: 'Implement a Stack using a Linked List',
  problemText:
    'Given a Stack Class, implement the following methods: **isEmpty** (which returns a Boolean value indicating if there are any items in the stack), **peek** (which returns a reference - but does not remove - the item at the top of the stack), **push** (which adds an item to the top of the stack - does not return anything), and **pop** (which removes and returns the item at the top of the stack).  Base the implementation on the given LinkedList base data structure.  Return null for **peek** and **pop** if the stack is empty.',
  testCases: [
    {
      id: 1,
      name: 'compiles',
      inherit: [],
      code: `const stack=new Stack();`,
      evaluate: `stack;`,
      expected: `{"head":null,"tail":null}`,
    },
  ],
  setupCode: '',
  category: STACK,
  type: DATA_STRUCTURE,
  difficulty: BEGINNER,
  maxExecutionTime: 2,
  solution: {
    stages: [0, 30, 60, 120],
    solutionLines: solution,
  },
};