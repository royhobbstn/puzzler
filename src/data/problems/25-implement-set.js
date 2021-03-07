import { HASH_TABLE, DATA_STRUCTURE, INTERMEDIATE } from '../constants.js';

const solution = [
  { stage: -1, text: '// class LinkedList {' },
  { stage: -1, text: '//   append(key: string, value: any) LinkedList' },
  { stage: -1, text: '//   findKey(key: string) LinkedListNode' },
  { stage: -1, text: '// }' },
  { stage: -1, text: '//' },
  { stage: -1, text: '//  class LinkedListNode {' },
  { stage: -1, text: '//    constructor(value, next = null) {' },
  { stage: -1, text: '//      this.value = value;' },
  { stage: -1, text: '//      this.next = next;' },
  { stage: -1, text: '//    }' },
  { stage: -1, text: '//  }' },
  { stage: -1, text: '//' },
  { stage: -1, text: '// All code above is implicitly included in your environment' },
  { stage: 0, text: '' },
  { stage: 0, text: 'class HashTable {' },
  { stage: 0, text: '  constructor(hashTableSize = 32) {' },
  { stage: 0, text: '    this.buckets = Array(hashTableSize)' },
  { stage: 0, text: '      .fill(null)' },
  { stage: 0, text: '      .map(() => new LinkedList());' },
  { stage: 0, text: '  }' },
  { stage: 0, text: '' },
  { stage: -1, text: '  // IMPLEMENTED:  hash(key: string) int' },
  { stage: -1, text: '' },
  { stage: 1, text: '  set(key, value) {' },
  { stage: 2, text: '    const keyHash = this.hash(key);' },
  { stage: 2, text: '    const bucketLinkedList = this.buckets[keyHash];' },
  { stage: 3, text: '    const node = bucketLinkedList.findKey(key);' },
  { stage: 3, text: '' },
  { stage: 4, text: '    if (!node) {' },
  { stage: 5, text: '      bucketLinkedList.append(key, value);' },
  { stage: 4, text: '    } else {' },
  { stage: 5, text: '      node.value = value;' },
  { stage: 4, text: '    }' },
  { stage: 1, text: '  }' },
  { stage: 0, text: '' },
  { stage: 0, text: '}' },
  { stage: 0, text: '' },
];

export const data = {
  problemID: 25,
  problemName: 'Implement **set** in a *HashTable* class.',
  problemText:
    'Given a *HashTable* class and a *LinkedList* class, implement a **set(key, value)** method in the *HashTable* class that will add or modify a `value` in the hash table for a given `key`.',
  testCases: [
    {
      id: 1,
      name: 'compiles',
      inherit: [],
      code: `const ht=new HashTable();`,
      evaluate: `Boolean(ht);`,
      expected: true,
    },
    {
      id: 2,
      name: 'adds a new value',
      inherit: [1],
      code: `ht.set('key1', 5);`,
      evaluate: `ht.get('key1');`,
      expected: 5,
    },
    {
      id: 3,
      name: 'updates an existing value',
      inherit: [1, 2],
      code: `ht.set('key1', 7);`,
      evaluate: `ht.get('key1');`,
      expected: 7,
    },
  ],
  setupCode: `
  class LinkedListNode {
    constructor(key, value, next = null) {
      this.key = key;
      this.value = value;
      this.next = next;
    }
  }
  class LinkedList {
    constructor() {
      this.head = null;
      this.tail = null;
    }
    append(key, value) {
      const newNode = new LinkedListNode(key, value);
      if (!this.head) {
        this.head = newNode;
        this.tail = newNode;
        return this;
      }
      this.tail.next = newNode;
      this.tail = newNode;
      return this;
    }
    findKey(key) {
      if (!this.head) {
        return null;
      }
      let current = this.head;
      while (current) {
        if (current.key === key) {
          return current;
        }
        current = current.next;
      }
      return null;
    }
  }
  HashTable.prototype.hash = function(key) {
    const hash = Array.from(key).reduce(
      (hashAccumulator, keySymbol) => hashAccumulator + keySymbol.charCodeAt(0), 0);
      return hash % this.buckets.length;
  };
  HashTable.prototype.get = function(key) {
    const bucketLinkedList = this.buckets[this.hash(key)];
    const node = bucketLinkedList.findKey(key);
    return node ? node.value : undefined;
  };
  `,
  tags: [HASH_TABLE, DATA_STRUCTURE],
  difficulty: INTERMEDIATE,
  solution: {
    stages: [0, 30, 60, 90, 120, 180],
    solutionLines: solution,
  },
};
