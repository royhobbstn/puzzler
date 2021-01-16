import { HASH_TABLE, DATA_STRUCTURE, BEGINNER } from '../constants.js';

const solution = [
  { stage: 0, text: '// class LinkedList {' },
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
  problemName: 'Implement **get** in a Hash Table.',
  problemText: `Given a \`HashTable\` class and an associated \`LinkedList\` class, implement a **get** method in the \`HashTable\` class that will retrieve a value in the hash table for a given key.`,
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
    stages: [0, 30, 60, 120],
    solutionLines: solution,
  },
};
