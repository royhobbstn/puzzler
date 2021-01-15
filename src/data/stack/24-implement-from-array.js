import { STACK, DATA_STRUCTURE, BEGINNER } from '../constants.js';

const solution = [
  { stage: 1, text: 'class Stack {' },
  { stage: 2, text: '  constructor() {' },
  { stage: 2, text: '    this.items = [];' },
  { stage: 2, text: '  }' },
  { stage: 2, text: '' },
  { stage: 3, text: '  isEmpty() {' },
  { stage: 0, text: '    return !this.items.length;' },
  { stage: 3, text: '  }' },
  { stage: 3, text: '' },
  { stage: 3, text: '  peek() {' },
  { stage: 5, text: '    if (this.isEmpty()) {' },
  { stage: 5, text: '      return null;' },
  { stage: 5, text: '    }' },
  { stage: 6, text: '    return this.items[0];' },
  { stage: 3, text: '  }' },
  { stage: 3, text: '' },
  { stage: 4, text: '  push(value) {' },
  { stage: 6, text: '    this.items.push(value);' },
  { stage: 4, text: '  }' },
  { stage: 4, text: '' },
  { stage: 4, text: '  pop() {' },
  { stage: 7, text: '    if (this.isEmpty()) {' },
  { stage: 7, text: '      return null;' },
  { stage: 7, text: '    }' },
  { stage: 7, text: '    return this.items.pop();' },
  { stage: 4, text: '  }' },
  { stage: 4, text: '' },
  { stage: 1, text: '}' },
  { stage: 1, text: '' },
];

export const data = {
  problemID: 24,
  problemName: 'Implement a Stack using an Array',
  problemText:
    'Given a Stack Class, implement the following methods: **isEmpty** (which returns a Boolean value indicating if there are any items in the stack), **peek** (which returns a reference - but does not remove - the item at the top of the stack), **push** (which adds an item to the top of the stack - does not return anything), and **pop** (which removes and returns the item at the top of the stack).  Base the implementation on an array based data structure.  Return null for **peek** and **pop** if the stack is empty.',
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
    stages: [0, 30, 60, 90, 120, 150, 180, 240],
    solutionLines: solution,
  },
};
