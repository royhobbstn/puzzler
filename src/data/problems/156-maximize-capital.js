import { ALGORITHM, HEAP, INTERMEDIATE } from '../constants.js';
import { HEAP_GENERIC } from '../code-imports/import-index.js';

const solution = [
  { stage: 0, text: '' },
  { stage: -1, text: '' },
  { stage: -1, text: '// Heap Class Provided' },
  { stage: -1, text: '' },
  { stage: -1, text: '// add(item: number) :void' },
  { stage: -1, text: '// peek() :number' },
  { stage: -1, text: '// poll() :number' },
  { stage: -1, text: '// remove(item: number) :void' },
  { stage: -1, text: '// length() :number' },
  { stage: 0, text: '' },
  {
    stage: 0,
    text: 'function find_maximum_capital(capital, profits, numberOfProjects, initialCapital) {',
  },
  { stage: 1, text: '  const minCapitalHeap = new Heap((a, b) => a[0] <= b[0]);' },
  { stage: 2, text: '  const maxProfitHeap = new Heap((a, b) => a[0] >= b[0]);' },
  { stage: 0, text: '' },
  { stage: 3, text: '  for (let i = 0; i < profits.length; i++) {' },
  { stage: 4, text: '    minCapitalHeap.add([capital[i], i]);' },
  { stage: 3, text: '  }' },
  { stage: 0, text: '' },
  { stage: 5, text: '  let availableCapital = initialCapital;' },
  { stage: 6, text: '  for (let i = 0; i < numberOfProjects; i++) {' },
  {
    stage: 7,
    text:
      '    while (minCapitalHeap.length() > 0 && minCapitalHeap.peek()[0] <= availableCapital) {',
  },
  { stage: 8, text: '      const [capital, index] = minCapitalHeap.poll();' },
  { stage: 9, text: '      maxProfitHeap.add([profits[index], index]);' },
  { stage: 7, text: '    }' },
  { stage: 0, text: '' },
  { stage: 10, text: '    if (maxProfitHeap.length() === 0) {' },
  { stage: 11, text: '      break;' },
  { stage: 10, text: '    }' },
  { stage: 0, text: '' },
  { stage: 12, text: '    availableCapital += maxProfitHeap.poll()[0];' },
  { stage: 6, text: '  }' },
  { stage: 0, text: '' },
  { stage: 13, text: '  return availableCapital;' },
  { stage: 0, text: '}' },
  { stage: 0, text: '' },
];

export const data = {
  problemID: 156,
  problemName: `Maximize Capital`,
  problemText: `Given a set of investment projects with their respective profits, we need to find the most profitable projects. We are given an initial capital and are allowed to invest only in a fixed number of projects. Our goal is to choose projects that give us the maximum profit. Write a function that returns the maximum total capital after selecting the most profitable projects.

  We can start an investment project only when we have the required capital. Once a project is selected, we can assume that its profit has become our capital.`,
  testCases: [
    {
      id: 1,
      name: 'example 1',
      inherit: [],
      code: ``,
      evaluate: `find_maximum_capital([0, 1, 2], [1, 2, 3], 2, 1);`,
      expected: 6,
    },
    {
      id: 2,
      name: 'example 2',
      inherit: [],
      code: ``,
      evaluate: `find_maximum_capital([0, 1, 2, 3], [1, 2, 3, 5], 3, 0);`,
      expected: 8,
    },
  ],
  setupCode: `${HEAP_GENERIC}`,
  source: [],
  tags: [INTERMEDIATE, HEAP, ALGORITHM],
  solution,
};
