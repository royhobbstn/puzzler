import { QUEUE, DATA_STRUCTURE, BEGINNER } from '../constants.js';

const solution = [
  { stage: 0, text: '//' },
  { stage: 0, text: '//  class LinkedList {' },
  { stage: 0, text: '//' },
  { stage: 0, text: '//    append(value: any) LinkedList' },
  { stage: 0, text: '//' },
  { stage: 0, text: '//    deleteHead() LinkedListNode' },
  { stage: 0, text: '//' },
  { stage: 0, text: '//  }' },
  { stage: 0, text: '//' },
  { stage: 0, text: '// All code above is implicitly included in your environment' },
  { stage: 0, text: '' },
  { stage: 0, text: '' },
  { stage: 1, text: 'class Queue {' },
  { stage: 2, text: '  constructor() {' },
  { stage: 2, text: '    this.linkedList = new LinkedList();' },
  { stage: 2, text: '  }' },
  { stage: 2, text: '' },
  { stage: 3, text: '  isEmpty() {' },
  { stage: 5, text: '    return !this.linkedList.head;' },
  { stage: 3, text: '  }' },
  { stage: 3, text: '' },
  { stage: 3, text: '  peek() {' },
  { stage: 6, text: '    if (!this.linkedList.head) {' },
  { stage: 6, text: '      return null;' },
  { stage: 6, text: '    }' },
  { stage: 6, text: '    return this.linkedList.head.value;' },
  { stage: 3, text: '  }' },
  { stage: 3, text: '' },
  { stage: 4, text: '  enqueue(value) {' },
  { stage: 5, text: '    this.linkedList.append(value);' },
  { stage: 4, text: '  }' },
  { stage: 4, text: '' },
  { stage: 4, text: '  dequeue() {' },
  { stage: 7, text: '    const removedHead = this.linkedList.deleteHead();' },
  { stage: 7, text: '    return removedHead ? removedHead.value : null;' },
  { stage: 4, text: '  }' },
  { stage: 4, text: '' },
  { stage: 1, text: '}' },
  { stage: 1, text: '' },
];

export const data = {
  problemID: 21,
  problemName: 'Implement a Queue using a Linked List',
  problemText:
    'Given a Queue Class, implement the following methods: **isEmpty** (which returns a Boolean value indicating if there are any items in the queue), **peek** (which returns a reference - but does not remove - the item at the head of the queue), **enqueue** (which adds an item to the end of the queue - does not return anything), and **dequeue** (which removes and returns the item at the head of the queue).  Base the implementation on the given LinkedList base data structure.  Return null for **peek** and **dequeue** if the queue is empty.',
  testCases: [
    {
      id: 1,
      name: 'compiles',
      inherit: [],
      code: `const queue=new Queue();`,
      evaluate: `queue;`,
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
    
    append(value) {
      const newNode = new LinkedListNode(value);
      if (!this.head) {
        this.head = newNode;
        this.tail = newNode;
        return this;
      }
      this.tail.next = newNode;
      this.tail = newNode;
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
  category: QUEUE,
  type: DATA_STRUCTURE,
  difficulty: BEGINNER,
  maxExecutionTime: 2,
  solution: {
    stages: [0, 30, 60, 90, 120, 150, 180, 240],
    solutionLines: solution,
  },
};
