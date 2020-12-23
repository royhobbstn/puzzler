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
  { stage: 0, text: '  insertAtHead(value) {' },
  { stage: 1, text: '    const newNode = new LinkedListNode(value, this.head);' },
  { stage: 2, text: '    this.head = newNode;' },
  { stage: 2, text: '' },
  { stage: 3, text: '    if (!this.tail) {' },
  { stage: 3, text: '      this.tail = newNode;' },
  { stage: 3, text: '    }' },
  { stage: 1, text: '' },
  { stage: 0, text: '    return this;' },
  { stage: 0, text: '  }' },
  { stage: 0, text: '}' },
  { stage: 0, text: '' },
];

export const data = {
  problemID: 1,
  problemText: 'Write an insertAtHead method in the Singly Linked List Class.',
  testCases: [],
  setupCode: '',
  category: 'Data Structures - Basic',
  difficulty: 2,
  maxExecutionTime: '5000',
  solution: {
    stages: [60, 60, 60],
    solutions: [{ solutionName: 'standard', solutionLines: [solution] }],
  },
};

// class LinkedListNode {
//   constructor(value, next = null) {
//     this.value = value;
//     this.next = next;
//   }
// }

// class LinkedList {
//   constructor() {
//     this.head = null;
//     this.tail = null;
//   }

//   insertAtHead(value) {
//     const newNode = new LinkedListNode(value, this.head);
//     this.head = newNode;

//     if (!this.tail) {
//       this.tail = newNode;
//     }

//     return this;
//   }
// }
