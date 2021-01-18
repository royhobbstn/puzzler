import { HASH_TABLE, DATA_STRUCTURE, BEGINNER } from '../constants.js';

const solution = [
  { stage: -1, text: '// class LinkedList {' },
  { stage: -1, text: '//' },
  { stage: -1, text: '//   findKey(key: string) LinkedListNode' },
  { stage: -1, text: '// ' },
  { stage: -1, text: '// }' },
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
  { stage: 1, text: '  get(key) {' },
  { stage: 2, text: '    const bucketLinkedList = this.buckets[this.hash(key)];' },
  { stage: 3, text: '    const node = bucketLinkedList.findKey(key);' },
  { stage: 3, text: '    return node ? node.value : undefined;' },
  { stage: 1, text: '  }' },
  { stage: 0, text: '' },
  { stage: 0, text: '}' },
  { stage: 0, text: '' },
];

export const data = {
  problemID: 26,
  problemName: 'Implement **get** in a *HashTable* class.',
  problemText:
    'Given a *HashTable* class and an associated *LinkedList* class, implement a **get** method in the *HashTable* class that will retrieve a `value` from the hash table for a given `key`, or `undefined` if the `key` does not exist.',
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
      name: 'get a key that doesnt exist',
      inherit: [1],
      code: ``,
      evaluate: `ht.get('key1');`,
      expected: undefined,
    },
    {
      id: 3,
      name: 'get a key',
      inherit: [1],
      code: `ht.set('key1', 99);`,
      evaluate: `ht.get('key1');`,
      expected: 99,
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
  HashTable.prototype.set = function(key, value) {
    const keyHash = this.hash(key);
    const bucketLinkedList = this.buckets[keyHash];
    const node = bucketLinkedList.findKey(key);
    if (!node) {
      bucketLinkedList.append(key, value);
    } else {
      node.value = value;
    }
  };
  `,
  category: HASH_TABLE,
  type: DATA_STRUCTURE,
  difficulty: BEGINNER,
  maxExecutionTime: 2,
  solution: {
    stages: [0, 30, 60, 120],
    solutionLines: solution,
  },
};
