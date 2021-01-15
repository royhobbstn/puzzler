import { QUEUE, DATA_STRUCTURE, BEGINNER } from '../constants.js';

const solution = [
  { stage: 1, text: 'class Queue {' },
  { stage: 2, text: '  constructor() {' },
  { stage: 2, text: '    this.items = [];' },
  { stage: 2, text: '  }' },
  { stage: 2, text: '' },
  { stage: 3, text: '  isEmpty() {' },
  { stage: 5, text: '    return !this.items.length;' },
  { stage: 3, text: '  }' },
  { stage: 3, text: '' },
  { stage: 3, text: '  peek() {' },
  { stage: 5, text: '    if (this.isEmpty()) {' },
  { stage: 5, text: '      return null;' },
  { stage: 5, text: '    }' },
  { stage: 6, text: '    return this.items[0];' },
  { stage: 3, text: '  }' },
  { stage: 3, text: '' },
  { stage: 4, text: '  enqueue(value) {' },
  { stage: 6, text: '    this.items.push(value);' },
  { stage: 4, text: '  }' },
  { stage: 4, text: '' },
  { stage: 4, text: '  dequeue() {' },
  { stage: 7, text: '    if (this.isEmpty()) {' },
  { stage: 7, text: '      return null;' },
  { stage: 7, text: '    }' },
  { stage: 7, text: '    return this.items.shift();' },
  { stage: 4, text: '  }' },
  { stage: 4, text: '' },
  { stage: 1, text: '}' },
  { stage: 1, text: '' },
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
    stages: [0, 30, 60, 90, 120, 150, 180, 240],
    solutionLines: solution,
  },
};
