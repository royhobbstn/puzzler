import { ALGORITHM, GENERAL } from '../constants.js';

const solution = [
  { stage: 0, text: '' },
  { stage: 0, text: 'class RandomizedSet {' },
  { stage: 0, text: '  constructor() {' },
  { stage: 0, text: '    this.dict = {};' },
  { stage: 0, text: '    this.list = [];' },
  { stage: 0, text: '  }' },
  { stage: 0, text: '' },
  { stage: 0, text: '  insert(val) {' },
  { stage: 1, text: '    if (this.dict[val] != null) {' },
  { stage: 1, text: '      return false;' },
  { stage: 1, text: '    }' },
  { stage: 2, text: '    this.dict[val] = this.list.length;' },
  { stage: 2, text: '    this.list.push(val);' },
  { stage: 2, text: '    return true;' },
  { stage: 0, text: '  }' },
  { stage: 0, text: '' },
  { stage: 0, text: '  remove(val) {' },
  { stage: 3, text: '    if (this.dict[val] == null) {' },
  { stage: 3, text: '      return false;' },
  { stage: 3, text: '    }' },
  { stage: 0, text: '' },
  { stage: 4, text: '    const lastElement = this.list[this.list.length - 1];' },
  { stage: 4, text: '    const idx = this.dict[val];' },
  { stage: 5, text: '    this.list[idx] = lastElement;' },
  { stage: 5, text: '    this.dict[lastElement] = idx;' },
  { stage: 0, text: '' },
  { stage: 6, text: '    this.list.pop();' },
  { stage: 6, text: '    delete this.dict[val];' },
  { stage: 6, text: '    return true;' },
  { stage: 0, text: '  }' },
  { stage: 0, text: '' },
  { stage: 0, text: '  getRandom() {' },
  { stage: 7, text: '    if (!this.list.length) {' },
  { stage: 7, text: '      return null;' },
  { stage: 7, text: '    }' },
  { stage: 8, text: '    return this.list[Math.floor(Math.random(1) * this.list.length)];' },
  { stage: 0, text: '  }' },
  { stage: 0, text: '}' },
  { stage: 0, text: '' },
];

export const data = {
  problemID: 71,
  problemName: `Implement a *RandomizedSet* class.`,
  problemText: `Implement a *RandomizedSet* class with **insert**, **remove** and **getRandom** methods.
  
   - **insert**: Inserts an item \`val\` into the set if not present. Returns \`true\` if the item was not present, false otherwise.
   - **remove**: Removes an item \`val\` from the set if present. Returns \`true\` if the item was present, \`false\` otherwise.
   - **getRandom**:  Returns a random element from the current set of elements, or \`null\` if there are no items in the set. Each element must have the same probability of being returned.

   All operations should perform in O(1) time.
   `,
  testCases: [
    {
      id: 1,
      name: 'compiles',
      inherit: [],
      code: `const randomizedSet = new RandomizedSet();`,
      evaluate: `Boolean(randomizedSet);`,
      expected: true,
    },
    {
      id: 2,
      name: 'getRandom on empty returns null',
      inherit: [1],
      code: ``,
      evaluate: `randomizedSet.getRandom();`,
      expected: null,
    },
    {
      id: 3,
      name: 'insert returns true the first time a value is added',
      inherit: [1],
      code: ``,
      evaluate: `randomizedSet.insert(1);`,
      expected: true,
    },
    {
      id: 4,
      name: 'remove returns false if item is not in set',
      inherit: [1],
      code: ``,
      evaluate: `randomizedSet.remove(2);`,
      expected: false,
    },
    {
      id: 5,
      name: 'getRandom returns a valid value',
      inherit: [1],
      code: `randomizedSet.insert(1);randomizedSet.insert(2);`,
      evaluate: `const a = randomizedSet.getRandom(); a === 1 || a === 2;`,
      expected: true,
    },
    {
      id: 6,
      name: 'remove returns true when removing a valid value',
      inherit: [1, 5],
      code: ``,
      evaluate: `randomizedSet.remove(1);`,
      expected: true,
    },
    {
      id: 7,
      name: 'insert returns false if item is already in set',
      inherit: [1, 5],
      code: ``,
      evaluate: `randomizedSet.insert(2);`,
      expected: false,
    },
    {
      id: 8,
      name: 'getRandom returns only possible value',
      inherit: [1, 5],
      code: `randomizedSet.remove(1);`,
      evaluate: `randomizedSet.getRandom();`,
      expected: 2,
    },
  ],
  setupCode: ``,
  source: ['https://leetcode.com/problems/insert-delete-getrandom-o1'],
  tags: [GENERAL, ALGORITHM],
  solution,
};
