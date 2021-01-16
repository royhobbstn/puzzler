import { HASH_TABLE, DATA_STRUCTURE, BEGINNER } from '../constants.js';

const solution = [
  { stage: 0, text: '// class LinkedList {' },
  { stage: 0, text: '//' },
  { stage: 0, text: '//   append(key: string, value: any) LinkedList' },
  { stage: 0, text: '//' },
  { stage: 0, text: '//   findKey(key: string) LinkedListNode' },
  { stage: 0, text: '// ' },
  { stage: 0, text: '//   deleteKey(key: string) LinkedListNode' },
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
  { stage: 1, text: '  delete(key) {' },
  { stage: 2, text: '    const keyHash = this.hash(key);' },
  { stage: 2, text: '    const bucketLinkedList = this.buckets[keyHash];' },
  { stage: 3, text: '    const deletedNode = bucketLinkedList.deleteKey(key);' },
  { stage: 4, text: '    if (deletedNode) {' },
  { stage: 4, text: '      return deletedNode.value;' },
  { stage: 4, text: '    }' },
  { stage: 3, text: '    return null;' },
  { stage: 1, text: '  }' },
  { stage: 0, text: '}' },
  { stage: 0, text: '' },
];

export const data = {
  problemID: 27,
  problemName: 'Implement **delete** in a Hash Table.',
  problemText: `Given a \`HashTable\` class and an associated \`LinkedList\` class, implement a **delete** method in the \`HashTable\` class that will delete the entry for a given key.
  
  The method must return the value of the deleted item, or \`null\` if an item matching the key was not found.`,
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
    deleteKey(key) {
      if (!this.head) {
        return null;
      }
      if (key === this.head.key) {
        const deletedHead = this.head;
        if (this.head.next) {
          this.head = this.head.next;
        } else {
          this.head = null;
          this.tail = null;
        }
        return deletedHead;
      } else if (key === this.tail.key) {
        const deletedTail = this.tail;
        let currentNode = this.head;
        while (currentNode.next) {
          if (!currentNode.next.next) {
            currentNode.next = null;
          } else {
            currentNode = currentNode.next;
          }
        }
        this.tail = currentNode;
        return deletedTail;
      } else {
        let currentNode = this.head;
        while (currentNode.next) {
          if (currentNode.next.key === key) {
            const deletedNode = currentNode.next;
            currentNode.next = deletedNode.next;
            return deletedNode;
          }
          currentNode = currentNode.next;
        }
        return null;
      }
    }
  }
  `,
  category: HASH_TABLE,
  type: DATA_STRUCTURE,
  difficulty: BEGINNER,
  maxExecutionTime: 2,
  solution: {
    stages: [0, 30, 60, 90, 150],
    solutionLines: solution,
  },
};
