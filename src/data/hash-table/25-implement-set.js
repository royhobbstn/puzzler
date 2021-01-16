import { HASH_TABLE, DATA_STRUCTURE, BEGINNER } from '../constants.js';

const solution = [
  { stage: 0, text: '// class LinkedList {' },
  { stage: 0, text: '//' },
  { stage: 0, text: '//   append(key: string, value: any) LinkedList' },
  { stage: 0, text: '//' },
  { stage: 0, text: '//   findKey(key: string) LinkedListNode' },
  { stage: 0, text: '// ' },
  { stage: 0, text: '// }' },
  { stage: 0, text: '//' },
  { stage: 0, text: '// All code above is implicitly included in your environment' },
  { stage: 0, text: '' },
  { stage: 0, text: 'class HashTable {' },
  { stage: 0, text: '  constructor(hashTableSize = 32) {' },
  { stage: 0, text: '    this.buckets = Array(hashTableSize)' },
  { stage: 0, text: '      .fill(null)' },
  { stage: 0, text: '      .map(() => new LinkedList());' },
  { stage: 0, text: '  }' },
  { stage: 0, text: '' },
  { stage: 0, text: '  hash(key) {' },
  { stage: 0, text: '    const hash = Array.from(key).reduce(' },
  {
    stage: 0,
    text: '      (hashAccumulator, keySymbol) => hashAccumulator + keySymbol.charCodeAt(0), 0);',
  },
  { stage: 0, text: '    return hash % this.buckets.length;' },
  { stage: 0, text: '  }' },
  { stage: 0, text: '' },
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
  problemName: 'Implement **set** in a Hash Table.',
  problemText: `Given a \`HashTable\` class and an associated \`LinkedList\` class, implement a **set** method in the \`HashTable\` class that will add or modify a value in the hash table for a given key.`,
  testCases: [
    {
      id: 1,
      name: 'compiles',
      inherit: [],
      code: `const ht=new Hash Table();`,
      evaluate: `ht;`,
      expected: `{"head":null,"tail":null}`,
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
  `,
  category: HASH_TABLE,
  type: DATA_STRUCTURE,
  difficulty: BEGINNER,
  maxExecutionTime: 2,
  solution: {
    stages: [0, 30, 60, 90, 120, 180],
    solutionLines: solution,
  },
};
