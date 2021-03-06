import { LINKED_LIST, DATA_STRUCTURE } from '../constants';
import { LINKED_LIST_PROTOTYPE_APPEND } from '../code-imports/import-index.js';
import { Problem } from '../interface';

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
  { stage: 1, text: '  find(value) {' },
  { stage: 2, text: '    let currentNode = this.head;' },
  { stage: 2, text: '' },
  { stage: 3, text: '    while (currentNode) {' },
  { stage: 4, text: '      if (currentNode.value === value) {' },
  { stage: 4, text: '        return currentNode;' },
  { stage: 4, text: '      }' },
  { stage: 4, text: '      currentNode = currentNode.next;' },
  { stage: 3, text: '    }' },
  { stage: 3, text: '' },
  { stage: 2, text: '    return null;' },
  { stage: 1, text: '  }' },
  { stage: 0, text: '' },
  { stage: 0, text: '}' },
  { stage: 0, text: '' },
];

export const data: Problem = {
  problemID: 4,
  problemName: 'Implement **find** in a *LinkedList* class.',
  problemText:
    'Write a **find** method in a *LinkedList* class that accepts an arbitrary `value` parameter and returns the first node that matches that value, or `null` if no matching value was found.',
  testCases: [
    {
      id: 1,
      name: 'compiles',
      inherit: [],
      code: `const ll=new LinkedList();`,
      evaluate: `Boolean(ll);`,
      expected: true,
    },
    {
      id: 2,
      name: 'find head value',
      inherit: [1],
      code: `ll.append(5);ll.append(4);ll.append(7);ll.append(8);`,
      evaluate: `ll.find(5).value;`,
      expected: 5,
    },
    {
      id: 3,
      name: 'find tail value',
      inherit: [1, 2],
      code: ``,
      evaluate: `ll.find(8).value;`,
      expected: 8,
    },
    {
      id: 4,
      name: 'find a middle value',
      inherit: [1, 2],
      code: ``,
      evaluate: `ll.find(7).value;`,
      expected: 7,
    },
    {
      id: 5,
      name: 'return null for non-existent value',
      inherit: [1, 2],
      code: ``,
      evaluate: `ll.find(17);`,
      expected: null,
    },
    {
      id: 6,
      name: 'return null when empty list',
      inherit: [1],
      code: ``,
      evaluate: `ll.find(27);`,
      expected: null,
    },
  ],
  setupCode: `${LINKED_LIST_PROTOTYPE_APPEND}`,
  source: [],
  tags: [LINKED_LIST, DATA_STRUCTURE],
  solution,
};
