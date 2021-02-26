import { ALGORITHM, SLIDING_WINDOW, INTERMEDIATE } from '../constants.js';

const solution = [
  { stage: 0, text: '' },
  { stage: 0, text: 'function fruits_into_baskets(fruits) {' },
  { stage: 1, text: '  let windowStart = 0;' },
  { stage: 1, text: '  let maxLength = 0;' },
  { stage: 2, text: '  let fruitFrequency = {};' },
  { stage: 0, text: '' },
  { stage: 3, text: '  for (let windowEnd = 0; windowEnd < fruits.length; windowEnd++) {' },
  { stage: 4, text: '    const rightFruit = fruits[windowEnd];' },
  { stage: 5, text: '    if (!(rightFruit in fruitFrequency)) {' },
  { stage: 5, text: '      fruitFrequency[rightFruit] = 0;' },
  { stage: 5, text: '    }' },
  { stage: 6, text: '    fruitFrequency[rightFruit] += 1;' },
  { stage: 0, text: '' },
  { stage: 7, text: '    while (Object.keys(fruitFrequency).length > 2) {' },
  { stage: 8, text: '      const leftFruit = fruits[windowStart];' },
  { stage: 8, text: '      fruitFrequency[leftFruit] -= 1;' },
  { stage: 9, text: '      if (fruitFrequency[leftFruit] === 0) {' },
  { stage: 9, text: '        delete fruitFrequency[leftFruit];' },
  { stage: 9, text: '      }' },
  { stage: 10, text: '      windowStart += 1;' },
  { stage: 7, text: '    }' },
  { stage: 11, text: '    maxLength = Math.max(maxLength, windowEnd - windowStart + 1);' },
  { stage: 3, text: '  }' },
  { stage: 0, text: '' },
  { stage: 12, text: '  return maxLength;' },
  { stage: 0, text: '}' },
  { stage: 0, text: '' },
];

export const data = {
  problemID: 90,
  problemName: `Fruits into Basket`,
  problemText: `Given an array of characters where each character represents a fruit tree, you are given two baskets, and your goal is to put maximum number of fruits in each basket. The only restriction is that each basket can have only one type of fruit.

  You can start with any tree, but you can’t skip a tree once you have started. You will pick one fruit from each tree until you cannot, i.e., you will stop when you have to pick from a third fruit type.
  
  Write a function to return the maximum number of fruits in both baskets.`,
  testCases: [
    {
      id: 1,
      name: 'example 1',
      inherit: [],
      code: ``,
      evaluate: `fruits_into_baskets(['A', 'B', 'C', 'A', 'C']);`,
      expected: 3,
    },
    {
      id: 2,
      name: 'example 2',
      inherit: [],
      code: ``,
      evaluate: `fruits_into_baskets(['A', 'B', 'C', 'B', 'B', 'C']);`,
      expected: 5,
    },
  ],
  setupCode: ``,
  category: SLIDING_WINDOW,
  type: ALGORITHM,
  difficulty: INTERMEDIATE,
  maxExecutionTime: 2,
  solution: {
    stages: [0, 30, 60, 90, 120, 150, 180, 210, 240, 270, 300, 330, 390],
    solutionLines: solution,
  },
};
