import { HASH_TABLE, DATA_STRUCTURE, INTERMEDIATE } from '../constants.js';

const solution = [
  { stage: -1, text: '// class LinkedList {' },
  { stage: -1, text: '//   deleteKey(key: string) LinkedListNode' },
  { stage: -1, text: '// }' },
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
  problemName: 'Implement **delete** in a *HashTable* class.',
  problemText: `Given a *HashTable* class and an associated *LinkedList* class, implement a **delete** method in the *HashTable* class that will delete the entry for a given \`key\`.
  
  The method must return the value of the deleted item, or \`null\` if an item matching the \`key\` was not found.`,
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
      name: 'deleting a key that does not exist returns null',
      inherit: [1],
      code: ``,
      evaluate: `ht.delete('key1');`,
      expected: null,
    },
    {
      id: 3,
      name: 'deleting a key that does exist',
      inherit: [1],
      code: `ht.set('key1', 77);`,
      evaluate: `ht.delete('key1');`,
      expected: 77,
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
  HashTable.prototype.get = function(key) {
    const bucketLinkedList = this.buckets[this.hash(key)];
    const node = bucketLinkedList.findKey(key);
    return node ? node.value : undefined;
  };
  `,
  category: HASH_TABLE,
  type: DATA_STRUCTURE,
  difficulty: INTERMEDIATE,
  maxExecutionTime: 2,
  solution: {
    stages: [0, 30, 60, 90, 150],
    solutionLines: solution,
  },
};
