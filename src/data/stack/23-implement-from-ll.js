import { STACK, DATA_STRUCTURE, BEGINNER } from '../constants.js';

const solution = [
  { stage: 0, text: '//' },
  { stage: 0, text: '//  class LinkedList {' },
  { stage: 0, text: '//' },
  { stage: 0, text: '//    prepend(value: any) LinkedList' },
  { stage: 0, text: '//' },
  { stage: 0, text: '//    deleteHead() LinkedListNode' },
  { stage: 0, text: '//' },
  { stage: 0, text: '//  }' },
  { stage: 0, text: '//' },
  { stage: 0, text: '// All code above is implicitly included in your environment' },
  { stage: 0, text: '' },
  { stage: 1, text: 'class Stack {' },
  { stage: 2, text: '  constructor() {' },
  { stage: 2, text: '    this.linkedList = new LinkedList();' },
  { stage: 2, text: '  }' },
  { stage: 2, text: '' },
  { stage: 3, text: '  isEmpty() {' },
  { stage: 5, text: '    return !this.linkedList.head;' },
  { stage: 3, text: '  }' },
  { stage: 3, text: '' },
  { stage: 3, text: '  peek() {' },
  { stage: 5, text: '    if (this.isEmpty()) {' },
  { stage: 5, text: '      return null;' },
  { stage: 5, text: '    }' },
  { stage: 6, text: '    return this.linkedList.head.value;' },
  { stage: 3, text: '  }' },
  { stage: 4, text: '' },
  { stage: 4, text: '  push(value) {' },
  { stage: 6, text: '    this.linkedList.prepend(value);' },
  { stage: 4, text: '  }' },
  { stage: 4, text: '' },
  { stage: 4, text: '  pop() {' },
  { stage: 7, text: '    const removedHead = this.linkedList.deleteHead();' },
  { stage: 7, text: '    return removedHead ? removedHead.value : null;' },
  { stage: 4, text: '  }' },
  { stage: 1, text: '' },
  { stage: 1, text: '}' },
  { stage: 1, text: '' },
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
  setupCode: `
  class LinkedListNode {
    constructor(value, next = null) {
      this.value = value;
      this.next = next;
    }
  }
  
  class LinkedList {
    constructor() {
      this.head = null;
      this.tail = null;
    }
    
    prepend(value) {
      const newNode = new LinkedListNode(value, this.head);
      this.head = newNode;
      if (!this.tail) {
        this.tail = newNode;
      }
      return this;
    }
    
    deleteHead() {
      if (!this.head) {
        return null;
      }
      const deletedHead = this.head;
      if (this.head.next) {
        this.head = this.head.next;
      } else {
        this.head = null;
        this.tail = null;
      }
      return deletedHead;
    }
  }
  `,
  category: STACK,
  type: DATA_STRUCTURE,
  difficulty: BEGINNER,
  maxExecutionTime: 2,
  solution: {
    stages: [0, 30, 60, 90, 120, 150, 180, 240],
    solutionLines: solution,
  },
};
