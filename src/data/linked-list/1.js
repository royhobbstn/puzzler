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
  { stage: 1, text: '  insertAtHead(value) {' },
  { stage: 2, text: '    const newNode = new LinkedListNode(value, this.head);' },
  { stage: 2, text: '    this.head = newNode;' },
  { stage: 2, text: '' },
  { stage: 3, text: '    if (!this.tail) {' },
  { stage: 3, text: '      this.tail = newNode;' },
  { stage: 3, text: '    }' },
  { stage: 2, text: '' },
  { stage: 2, text: '    return this;' },
  { stage: 1, text: '  }' },
  { stage: 0, text: '}' },
  { stage: 0, text: '' },
];

export const data = {
  problemID: 1,
  problemName: 'Implement insertAtHead in a Singly Linked List',
  problemText:
    'Write an **insertAtHead** method in a Singly-Linked-List Class.  The method should accept an arbitrary node value, and return the list.',
  testCases: [
    {
      id: 1,
      name: 'compiles',
      inherit: [],
      code: `const ll=new LinkedList();`,
      evaluate: `ll;`,
      expected: `{"head":null,"tail":null}`,
    },
    {
      id: 2,
      name: 'empty list, head value',
      inherit: [1],
      code: `ll.insertAtHead(5);`,
      evaluate: `ll.head.value;`,
      expected: 5,
    },
    {
      id: 3,
      name: 'empty list, tail value',
      inherit: [1],
      code: `ll.insertAtHead(6);`,
      evaluate: `ll.tail.value;`,
      expected: 6,
    },
    {
      id: 4,
      name: 'insert two nodes',
      inherit: [1, 2],
      code: `ll.insertAtHead(7);`,
      evaluate: `ll.tail.value === 5 && ll.head.value === 7;`,
      expected: true,
    },
  ],
  setupCode: '',
  category: 'linked-list',
  type: 'data-structure',
  difficulty: 2,
  maxExecutionTime: 2,
  estimatedTime: 1,
  solution: {
    stages: [0, 30, 60, 120],
    solutionLines: solution,
  },
};
