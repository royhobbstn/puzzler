import { DOUBLY_LINKED_LIST, DATA_STRUCTURE } from '../constants';
import { DOUBLY_LINKED_LIST_PROTOTYPE_APPEND } from '../code-imports/import-index.js';

const solution = [
  { stage: 0, text: 'class DoublyLinkedListNode {' },
  { stage: 0, text: '  constructor(value, next = null, previous = null) {' },
  { stage: 0, text: '    this.value = value;' },
  { stage: 0, text: '    this.next = next;' },
  { stage: 0, text: '    this.previous = previous;' },
  { stage: 0, text: '  }' },
  { stage: 0, text: '}' },
  { stage: 0, text: '' },
  { stage: 0, text: 'class DoublyLinkedList {' },
  { stage: 0, text: '  constructor() {' },
  { stage: 0, text: '    this.head = null;' },
  { stage: 0, text: '    this.tail = null;' },
  { stage: 0, text: '  }' },
  { stage: 0, text: '' },
  { stage: 1, text: '  delete(value) {' },
  { stage: 2, text: '    if (!this.head) {' },
  { stage: 2, text: '      return null;' },
  { stage: 2, text: '    }' },
  { stage: 2, text: '' },
  { stage: 3, text: '    let deletedNode = null;' },
  { stage: 3, text: '    let currentNode = this.head;' },
  { stage: 3, text: '' },
  { stage: 4, text: '    while (currentNode) {' },
  { stage: 5, text: '      if (currentNode.value === value) {' },
  { stage: 6, text: '        deletedNode = currentNode;' },
  { stage: 6, text: '' },
  { stage: 6, text: '        if (deletedNode === this.head) {' },
  { stage: 7, text: '          this.head = deletedNode.next;' },
  { stage: 7, text: '' },
  { stage: 8, text: '          if (this.head) {' },
  { stage: 8, text: '            this.head.previous = null;' },
  { stage: 8, text: '          }' },
  { stage: 8, text: '' },
  { stage: 9, text: '          if (deletedNode === this.tail) {' },
  { stage: 9, text: '            this.tail = null;' },
  { stage: 9, text: '          }' },
  { stage: 6, text: '        } else if (deletedNode === this.tail) {' },
  { stage: 10, text: '          this.tail = deletedNode.previous;' },
  { stage: 10, text: '          this.tail.next = null;' },
  { stage: 6, text: '        } else {' },
  { stage: 11, text: '          const previousNode = deletedNode.previous;' },
  { stage: 11, text: '          const nextNode = deletedNode.next;' },
  { stage: 11, text: '' },
  { stage: 12, text: '          previousNode.next = nextNode;' },
  { stage: 12, text: '          nextNode.previous = previousNode;' },
  { stage: 6, text: '        }' },
  { stage: 5, text: '      }' },
  { stage: 5, text: '' },
  { stage: 13, text: '      currentNode = currentNode.next;' },
  { stage: 4, text: '    }' },
  { stage: 7, text: '' },
  { stage: 7, text: '    return deletedNode;' },
  { stage: 1, text: '  }' },
  { stage: 0, text: '' },
  { stage: 0, text: '}' },
  { stage: 0, text: '' },
];

export const data = {
  problemID: 12,
  problemName: 'Implement **delete** in a *DoublyLinkedList* class.',
  problemText:
    'Write a **delete** method in a *DoublyLinkedList* class that accepts an arbitrary `value` parameter and deletes all `DoublyLinkedListNode` nodes that have a matching value.  The method should return the last node deleted (or `null` if no match found).',
  testCases: [
    {
      id: 1,
      name: 'compiles',
      inherit: [],
      code: `const dll=new DoublyLinkedList();`,
      evaluate: `Boolean(dll);`,
      expected: true,
    },
    {
      id: 2,
      name: 'return null on empty list',
      inherit: [1],
      code: ``,
      evaluate: `dll.delete(5);`,
      expected: null,
    },
    {
      id: 3,
      name: 'add and cleanly remove node from list (check head)',
      inherit: [1],
      code: `dll.append(5);dll.delete(5);`,
      evaluate: `dll.head`,
      expected: null,
    },
    {
      id: 4,
      name: 'add and cleanly remove node from list (check tail)',
      inherit: [1, 3],
      code: ``,
      evaluate: `dll.tail`,
      expected: null,
    },
    {
      id: 5,
      name: 'add 3 nodes and delete the first',
      inherit: [1],
      code: `dll.append(1).append(2).append(3);`,
      evaluate: `dll.delete(1);dll.head.value;`,
      expected: 2,
    },
    {
      id: 6,
      name: 'add 3 nodes and delete the first (check tail)',
      inherit: [1, 5],
      code: ``,
      evaluate: `dll.delete(1);dll.tail.value;`,
      expected: 3,
    },
    {
      id: 7,
      name: 'add 3 nodes and delete the second (check head connector)',
      inherit: [1, 5],
      code: ``,
      evaluate: `dll.delete(2);dll.head.next.value;`,
      expected: 3,
    },
    {
      id: 8,
      name: 'add 3 nodes and delete the last (check tail)',
      inherit: [1, 5],
      code: ``,
      evaluate: `dll.delete(3);dll.tail.value;`,
      expected: 2,
    },
    {
      id: 9,
      name: 'add 3 nodes and delete them all (check head)',
      inherit: [1, 5],
      code: ``,
      evaluate: `dll.delete(3);dll.delete(2);dll.delete(1);dll.head;`,
      expected: null,
    },
    {
      id: 10,
      name: 'add 3 nodes and delete them all (check tail)',
      inherit: [1, 5],
      code: ``,
      evaluate: `dll.delete(3);dll.delete(2);dll.delete(1);dll.tail;`,
      expected: null,
    },
  ],
  setupCode: `${DOUBLY_LINKED_LIST_PROTOTYPE_APPEND}`,
  source: [],
  tags: [DOUBLY_LINKED_LIST, DATA_STRUCTURE],
  solution,
};
