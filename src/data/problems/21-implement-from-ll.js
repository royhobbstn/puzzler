import { QUEUE, DATA_STRUCTURE, INTERMEDIATE } from '../constants.js';
import { LINKED_LIST_CLASS } from '../code-imports/import-index.js';

const solution = [
  { stage: -1, text: '//  class LinkedListNode {' },
  { stage: -1, text: '//    constructor(value, next = null) {' },
  { stage: -1, text: '//      this.value = value;' },
  { stage: -1, text: '//      this.next = next;' },
  { stage: -1, text: '//    }' },
  { stage: -1, text: '//  }' },
  { stage: -1, text: '//' },
  { stage: -1, text: '//  class LinkedList {' },
  { stage: -1, text: '//    constructor() {' },
  { stage: -1, text: '//      this.head = null;' },
  { stage: -1, text: '//      this.tail = null;' },
  { stage: -1, text: '//    }' },
  { stage: -1, text: '//' },
  { stage: -1, text: '//    append(value: any) LinkedList' },
  { stage: -1, text: '//    deleteHead() LinkedListNode' },
  { stage: -1, text: '//' },
  { stage: -1, text: '//  }' },
  { stage: -1, text: '//' },
  { stage: -1, text: '// All code above is implicitly included in your environment' },
  { stage: 0, text: '' },
  { stage: 0, text: '' },
  { stage: 0, text: 'class Queue {' },
  { stage: 1, text: '  constructor() {' },
  { stage: 2, text: '    this.linkedList = new LinkedList();' },
  { stage: 1, text: '  }' },
  { stage: 0, text: '' },
  { stage: 3, text: '  isEmpty() {' },
  { stage: 5, text: '    return !this.linkedList.head;' },
  { stage: 3, text: '  }' },
  { stage: 0, text: '' },
  { stage: 3, text: '  peek() {' },
  { stage: 6, text: '    if (this.isEmpty()) {' },
  { stage: 6, text: '      return null;' },
  { stage: 6, text: '    }' },
  { stage: 6, text: '    return this.linkedList.head.value;' },
  { stage: 3, text: '  }' },
  { stage: 0, text: '' },
  { stage: 4, text: '  enqueue(value) {' },
  { stage: 5, text: '    this.linkedList.append(value);' },
  { stage: 4, text: '  }' },
  { stage: 0, text: '' },
  { stage: 4, text: '  dequeue() {' },
  { stage: 7, text: '    if (this.isEmpty()) {' },
  { stage: 7, text: '      return null;' },
  { stage: 7, text: '    }' },
  { stage: 7, text: '    return this.linkedList.deleteHead().value;' },
  { stage: 4, text: '  }' },
  { stage: 0, text: '' },
  { stage: 0, text: '}' },
  { stage: 0, text: '' },
];

export const data = {
  problemID: 21,
  problemName: 'Implement a *Queue* using a *Linked List*',
  problemText: `
Given a *Queue* class, implement the following methods: 
    
 - **isEmpty** (which returns a Boolean value indicating if there are any items in the queue)
 - **peek** (which returns - but does not remove - the value at the head of the queue)
 - **enqueue** (which adds a value to the end of the queue - does not return anything)
 - **dequeue** (which removes and returns the value at the head of the queue).  
    
Base the implementation on the given *LinkedList* base data structure.  Return \`null\` for **peek** and **dequeue** if the queue is empty.`,
  testCases: [
    {
      id: 1,
      name: 'compiles',
      inherit: [],
      code: `const queue=new Queue();`,
      evaluate: `Boolean(queue);`,
      expected: true,
    },
    {
      id: 2,
      name: 'peek on an empty queue returns null',
      inherit: [1],
      code: ``,
      evaluate: `queue.peek();`,
      expected: null,
    },
    {
      id: 3,
      name: 'dequeue on an empty queue returns null',
      inherit: [1],
      code: ``,
      evaluate: `queue.dequeue();`,
      expected: null,
    },
    {
      id: 4,
      name: 'peek returns enqueued item',
      inherit: [1],
      code: `queue.enqueue(5);`,
      evaluate: `queue.peek();`,
      expected: 5,
    },
    {
      id: 5,
      name: 'peek, queue, dequeue work together properly',
      inherit: [1],
      code: `queue.enqueue(5);queue.enqueue(7);queue.dequeue();`,
      evaluate: `queue.peek();`,
      expected: 7,
    },
    {
      id: 6,
      name: 'peek returns enqueued item (3)',
      inherit: [1],
      code: `queue.enqueue(5);queue.enqueue(6);queue.enqueue(7);`,
      evaluate: `queue.peek();`,
      expected: 5,
    },
    {
      id: 7,
      name: 'dequeue multiple enqueued items',
      inherit: [1],
      code: `queue.enqueue(5);queue.enqueue(6);queue.enqueue(7);queue.dequeue();queue.dequeue();`,
      evaluate: `queue.peek();`,
      expected: 7,
    },
    {
      id: 8,
      name: 'isEmpty returns true for empty queue',
      inherit: [1],
      code: ``,
      evaluate: `queue.isEmpty();`,
      expected: true,
    },
    {
      id: 9,
      name: 'isEmpty returns false for queue with an item',
      inherit: [1],
      code: `queue.enqueue(5);`,
      evaluate: `queue.isEmpty();`,
      expected: false,
    },
    {
      id: 10,
      name: 'dequeue returns value, not node',
      inherit: [1],
      code: `queue.enqueue(5);`,
      evaluate: `queue.dequeue();`,
      expected: 5,
    },
  ],
  setupCode: `${LINKED_LIST_CLASS}`,
  source: [],
  tags: [INTERMEDIATE, QUEUE, DATA_STRUCTURE],
  solution,
};