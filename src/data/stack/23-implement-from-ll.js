import { STACK, DATA_STRUCTURE, INTERMEDIATE } from '../constants.js';

const solution = [
  { stage: -1, text: '//  class LinkedList {' },
  { stage: -1, text: '//    prepend(value: any) LinkedList' },
  { stage: -1, text: '//    deleteHead() LinkedListNode' },
  { stage: -1, text: '//  }' },
  { stage: -1, text: '//  class LinkedListNode {' },
  { stage: -1, text: '//    constructor(value, next = null) {' },
  { stage: -1, text: '//      this.value = value;' },
  { stage: -1, text: '//      this.next = next;' },
  { stage: -1, text: '//    }' },
  { stage: -1, text: '//  }' },
  { stage: -1, text: '//' },
  { stage: -1, text: '// All code above is implicitly included in your environment' },
  { stage: 0, text: '' },
  { stage: 0, text: 'class Stack {' },
  { stage: 2, text: '  constructor() {' },
  { stage: 2, text: '    this.linkedList = new LinkedList();' },
  { stage: 2, text: '  }' },
  { stage: 0, text: '' },
  { stage: 3, text: '  isEmpty() {' },
  { stage: 5, text: '    return !this.linkedList.head;' },
  { stage: 3, text: '  }' },
  { stage: 0, text: '' },
  { stage: 3, text: '  peek() {' },
  { stage: 5, text: '    if (this.isEmpty()) {' },
  { stage: 5, text: '      return null;' },
  { stage: 5, text: '    }' },
  { stage: 6, text: '    return this.linkedList.head.value;' },
  { stage: 3, text: '  }' },
  { stage: 0, text: '' },
  { stage: 4, text: '  push(value) {' },
  { stage: 6, text: '    this.linkedList.prepend(value);' },
  { stage: 4, text: '  }' },
  { stage: 0, text: '' },
  { stage: 4, text: '  pop() {' },
  { stage: 7, text: '    const removedHead = this.linkedList.deleteHead();' },
  { stage: 7, text: '    return removedHead ? removedHead.value : null;' },
  { stage: 4, text: '  }' },
  { stage: 1, text: '' },
  { stage: 0, text: '}' },
  { stage: 0, text: '' },
];

export const data = {
  problemID: 23,
  problemName: 'Implement a *Stack* using a *Linked List*',
  problemText: `Given a *Stack* class, implement the following methods: 

   - **isEmpty**: returns a boolean value indicating if there are any values in the stack.
   - **peek**: returns - but does not remove - the value at the top of the stack.
   - **push**: adds a value to the top of the stack - does not return anything.
   - **pop**: removes and returns the value at the top of the stack.
   
Base the implementation on the given *LinkedList* base data structure.  Return \`null\` for **peek** and **pop** if the stack is empty.`,
  testCases: [
    {
      id: 1,
      name: 'compiles',
      inherit: [],
      code: `const stack=new Stack();`,
      evaluate: `Boolean(stack);`,
      expected: true,
    },
    {
      id: 2,
      name: 'peek on empty stack is null',
      inherit: [1],
      code: ``,
      evaluate: `stack.peek();`,
      expected: null,
    },
    {
      id: 3,
      name: 'pop on empty stack is null',
      inherit: [1],
      code: ``,
      evaluate: `stack.pop();`,
      expected: null,
    },
    {
      id: 4,
      name: 'isEmpty on empty stack is true',
      inherit: [1],
      code: ``,
      evaluate: `stack.isEmpty();`,
      expected: true,
    },
    {
      id: 5,
      name: 'isEmpty on stack with an item is false',
      inherit: [1],
      code: `stack.push(5);`,
      evaluate: `stack.isEmpty();`,
      expected: false,
    },
    {
      id: 6,
      name: 'peek on stack with an item returns that value',
      inherit: [1, 5],
      code: ``,
      evaluate: `stack.peek();`,
      expected: 5,
    },
    {
      id: 7,
      name: 'peek on stack with two items returns correct value',
      inherit: [1, 5],
      code: `stack.push(9);`,
      evaluate: `stack.peek();`,
      expected: 9,
    },
    {
      id: 8,
      name: 'peek does not remove items',
      inherit: [1, 5, 7],
      code: ``,
      evaluate: `stack.peek();stack.peek();`,
      expected: 9,
    },
    {
      id: 9,
      name: 'pop removes and returns correct item in stack (1)',
      inherit: [1, 5, 7],
      code: ``,
      evaluate: `stack.pop();`,
      expected: 9,
    },
    {
      id: 10,
      name: 'pop removes and returns correct item in stack (2)',
      inherit: [1, 5, 7],
      code: ``,
      evaluate: `stack.pop();stack.pop();`,
      expected: 5,
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
  difficulty: INTERMEDIATE,
  maxExecutionTime: 2,
  solution: {
    stages: [0, 30, 60, 90, 120, 150, 180, 240],
    solutionLines: solution,
  },
};
