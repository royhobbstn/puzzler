import { QUEUE, DATA_STRUCTURE, BEGINNER } from '../constants.js';

const solution = [
  { stage: 0, text: 'class Queue {' },
  { stage: 1, text: '  constructor() {' },
  { stage: 2, text: '    this.items = [];' },
  { stage: 1, text: '  }' },
  { stage: 0, text: '' },
  { stage: 3, text: '  isEmpty() {' },
  { stage: 5, text: '    return !this.items.length;' },
  { stage: 3, text: '  }' },
  { stage: 0, text: '' },
  { stage: 3, text: '  peek() {' },
  { stage: 5, text: '    if (this.isEmpty()) {' },
  { stage: 5, text: '      return null;' },
  { stage: 5, text: '    }' },
  { stage: 6, text: '    return this.items[0];' },
  { stage: 3, text: '  }' },
  { stage: 0, text: '' },
  { stage: 4, text: '  enqueue(value) {' },
  { stage: 6, text: '    this.items.push(value);' },
  { stage: 4, text: '  }' },
  { stage: 0, text: '' },
  { stage: 4, text: '  dequeue() {' },
  { stage: 7, text: '    if (this.isEmpty()) {' },
  { stage: 7, text: '      return null;' },
  { stage: 7, text: '    }' },
  { stage: 7, text: '    return this.items.shift();' },
  { stage: 4, text: '  }' },
  { stage: 0, text: '' },
  { stage: 0, text: '}' },
  { stage: 0, text: '' },
];

export const data = {
  problemID: 22,
  problemName: 'Implement a *Queue* from scratch using an *Array*',
  problemText: `
Given a *Queue* class, implement the following methods: 
    
 - **isEmpty** which returns a Boolean value indicating if there are any items in the queue.
 - **peek** which returns - but does not remove - the \`value\` at the head of the queue.
 - **enqueue** which adds a \`value\` to the end of the queue - does not return anything.
 - **dequeue** which removes and returns the \`value\` at the head of the queue.  
    
Base the implementation on an *Array* base data structure.  Return \`null\` for **peek** and **dequeue** if the queue is empty.`,
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
  ],
  setupCode: '',
  tags: [QUEUE, DATA_STRUCTURE],
  difficulty: BEGINNER,
  solution: {
    stages: [0, 30, 60, 90, 120, 150, 180, 240],
    solutionLines: solution,
  },
};
