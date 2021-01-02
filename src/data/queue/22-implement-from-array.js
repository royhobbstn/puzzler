import { QUEUE, DATA_STRUCTURE, BEGINNER } from '../constants.js';

const solution = [
  { stage: 0, text: 'class Queue {' },
  { stage: 0, text: '  constructor() {' },
  { stage: 0, text: '    this.items = [];' },
  { stage: 0, text: '  }' },
  { stage: 0, text: '' },
  { stage: 0, text: '  isEmpty() {' },
  { stage: 0, text: '    return !this.items.length;' },
  { stage: 0, text: '  }' },
  { stage: 0, text: '' },
  { stage: 0, text: '  peek() {' },
  { stage: 0, text: '    if (this.isEmpty()) {' },
  { stage: 0, text: '      return null;' },
  { stage: 0, text: '    }' },
  { stage: 0, text: '    return this.items[0];' },
  { stage: 0, text: '  }' },
  { stage: 0, text: '' },
  { stage: 0, text: '  enqueue(value) {' },
  { stage: 0, text: '    this.items.push(value);' },
  { stage: 0, text: '  }' },
  { stage: 0, text: '' },
  { stage: 0, text: '  dequeue() {' },
  { stage: 0, text: '    if (this.isEmpty()) {' },
  { stage: 0, text: '      return null;' },
  { stage: 0, text: '    }' },
  { stage: 0, text: '    return this.items.shift();' },
  { stage: 0, text: '  }' },
  { stage: 0, text: '' },
  { stage: 0, text: '}' },
  { stage: 0, text: '' },
];

export const data = {
  problemID: 22,
  problemName: 'Implement a Queue from scratch using an Array',
  problemText:
    'Given a Queue Class, implement the following methods: **isEmpty** (which returns a Boolean value indicating if there are any items in the queue), **peek** (which returns a reference - but does not remove - the item at the head of the queue), **enqueue** (which adds an item to the end of the queue - does not return anything), and **dequeue** (which removes and returns the item at the head of the queue).  Use an array as the base data structure.  Return null for **peek** and **dequeue** if the queue is empty.',
  testCases: [
    {
      id: 1,
      name: 'compiles',
      inherit: [],
      code: `const queue=new Queue();`,
      evaluate: `queue;`,
      expected: `{"items":[]}`,
    },
  ],
  setupCode: '',
  category: QUEUE,
  type: DATA_STRUCTURE,
  difficulty: BEGINNER,
  maxExecutionTime: 2,
  solution: {
    stages: [0, 30, 60, 120],
    solutionLines: solution,
  },
};
