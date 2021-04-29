import { ALGORITHM, TOPOLOGICAL_SORT } from '../constants';

const solution = [
  { stage: 0, text: '' },
  { stage: 0, text: 'function topological_sort(vertices, edges) {' },
  { stage: 0, text: '' },
  { stage: 1, text: '  const sortedOrder = [];' },
  { stage: 2, text: '  if (vertices <= 0) {' },
  { stage: 2, text: '    return sortedOrder;' },
  { stage: 2, text: '  }' },
  { stage: 0, text: '' },
  { stage: 3, text: '  const inDegree = Array(vertices).fill(0);' },
  { stage: 4, text: '  const graph = Array(vertices)' },
  { stage: 4, text: '    .fill(0)' },
  { stage: 4, text: '    .map(() => Array());' },
  { stage: 0, text: '' },
  { stage: 5, text: '  edges.forEach(edge => {' },
  { stage: 6, text: '    let parent = edge[0];' },
  { stage: 6, text: '    let child = edge[1];' },
  { stage: 7, text: '    graph[parent].push(child);' },
  { stage: 7, text: '    inDegree[child]++;' },
  { stage: 5, text: '  });' },
  { stage: 0, text: '' },
  { stage: 8, text: '  const sources = [];' },
  { stage: 8, text: '  for (let i = 0; i < inDegree.length; i++) {' },
  { stage: 9, text: '    if (inDegree[i] === 0) {' },
  { stage: 10, text: '      sources.push(i);' },
  { stage: 9, text: '    }' },
  { stage: 8, text: '  }' },
  { stage: 0, text: '' },
  { stage: 11, text: '  while (sources.length > 0) {' },
  { stage: 12, text: '    const vertex = sources.shift();' },
  { stage: 12, text: '    sortedOrder.push(vertex);' },
  { stage: 13, text: '    graph[vertex].forEach(child => {' },
  { stage: 14, text: '      inDegree[child] -= 1;' },
  { stage: 15, text: '      if (inDegree[child] === 0) {' },
  { stage: 15, text: '        sources.push(child);' },
  { stage: 15, text: '      }' },
  { stage: 13, text: '    });' },
  { stage: 11, text: '  }' },
  { stage: 0, text: '' },
  { stage: 16, text: '  if (sortedOrder.length !== vertices) {' },
  { stage: 16, text: '    return [];' },
  { stage: 16, text: '  }' },
  { stage: 0, text: '' },
  { stage: 17, text: '  return sortedOrder;' },
  { stage: 0, text: '}' },
  { stage: 0, text: '' },
];

export const data = {
  problemID: 118,
  problemName: `Topological Sort`,
  problemText: `Given a directed graph, find the topological ordering of its vertices.
  
Example:

Input: Vertices=4, Edges=[3, 2], [3, 0], [2, 0], [2, 1]
`,
  testCases: [
    {
      id: 1,
      name: 'example 1',
      inherit: [],
      code: `const result = stringify(
        topological_sort(4, [
          [3, 2],
          [3, 0],
          [2, 0],
          [2, 1],
        ]),
      );`,
      evaluate: `['3,2,0,1', '3,2,1,0'].includes(result);`,
      expected: true,
    },
    {
      id: 2,
      name: 'example 2',
      inherit: [],
      code: `const result = stringify(
        topological_sort(5, [
          [4, 2],
          [4, 3],
          [2, 0],
          [2, 1],
          [3, 1],
        ]),
      );`,
      evaluate: `['4,2,3,0,1','4,3,2,0,1','4,3,2,1,0','4,2,3,1,0','4,2,0,3,1'].includes(result);`,
      expected: true,
    },
    {
      id: 3,
      name: 'example 3',
      inherit: [],
      code: `const result = stringify(
        topological_sort(7, [
          [6, 4],
          [6, 2],
          [5, 3],
          [5, 4],
          [3, 0],
          [3, 1],
          [3, 2],
          [4, 1],
        ]),
      );`,
      evaluate: `['5,6,3,4,0,1,2','6,5,3,4,0,1,2','5,6,4,3,0,2,1','6,5,4,3,0,1,2','5,6,3,4,0,2,1','5,6,3,4,1,2,0'].includes(result);`,
      expected: true,
    },
  ],
  setupCode: `
  function stringify(arr) {
    return arr.join(',');
  }
  `,
  source: ['https://www.educative.io/courses/grokking-the-coding-interview/m25rBmwLV00'],
  tags: [ALGORITHM, TOPOLOGICAL_SORT],
  solution,
};
