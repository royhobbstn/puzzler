import {
  GRAPH_PROTOTYPE_ADD_VERTEX,
  GRAPH_PROTOTYPE_TEMPSET,
  GRAPH_PROTOTYPE_ADD_EDGE,
} from '../code-imports/import-index.js';
import { GRAPH, DATA_STRUCTURE } from '../constants';

const solution = [
  { stage: 0, text: 'class Vertex {' },
  { stage: 0, text: '  constructor(key) {' },
  { stage: 0, text: '    this.key = key;' },
  { stage: 0, text: '  }' },
  { stage: 0, text: '}' },
  { stage: 0, text: '' },
  { stage: 0, text: 'class Edge {' },
  { stage: 0, text: '  constructor(weight) {' },
  { stage: 0, text: '    this.weight = weight;' },
  { stage: 0, text: '  }' },
  { stage: 0, text: '}' },
  { stage: 0, text: '' },
  { stage: 0, text: 'class Graph {' },
  { stage: 0, text: '  constructor(isDirected = true) {' },
  { stage: 0, text: '    this.isDirected = isDirected === true;' },
  { stage: 0, text: '    this.adjList = {};' },
  { stage: 0, text: '    this.vertices = {};' },
  { stage: 0, text: '  }' },
  { stage: 0, text: '' },
  { stage: 0, text: '  checkPath(source, destination) {' },
  { stage: 1, text: '    if (source === destination) {' },
  { stage: 1, text: '      return true;' },
  { stage: 1, text: '    }' },
  { stage: 0, text: '' },
  { stage: 2, text: '    const visited = {};' },
  { stage: 2, text: '    const stack = [];' },
  { stage: 3, text: '    stack.push(source);' },
  { stage: 3, text: '    visited[source] = true;' },
  { stage: 0, text: '' },
  { stage: 4, text: '    while (stack.length) {' },
  { stage: 5, text: '      let currentKey = stack.pop();' },
  { stage: 0, text: '' },
  { stage: 5, text: '      for (let adjacentKey of Object.keys(this.adjList[currentKey])) {' },
  { stage: 6, text: '        if (!visited[adjacentKey]) {' },
  { stage: 7, text: '          if (adjacentKey === destination) {' },
  { stage: 7, text: '            return true;' },
  { stage: 7, text: '          }' },
  { stage: 8, text: '          stack.push(adjacentKey);' },
  { stage: 8, text: '          visited[adjacentKey] = true;' },
  { stage: 6, text: '        }' },
  { stage: 5, text: '      }' },
  { stage: 4, text: '    }' },
  { stage: 0, text: '' },
  { stage: 9, text: '    return false;' },
  { stage: 0, text: '  }' },
  { stage: 0, text: '' },
  { stage: 0, text: '}' },
  { stage: 0, text: '' },
];

export const data = {
  problemID: 58,
  problemName: `Implement a **checkPath** method for a *Graph* class.`,
  problemText: `Implement a **checkPath** method that takes a \`source\` key and a \`destination\` key and returns either \`true\` or \`false\` depending upon whether or not the graph contains a path from one to the other.`,
  testCases: [
    {
      id: 1,
      name: 'compiles',
      inherit: [],
      code: `const graph=new Graph();`,
      evaluate: `Boolean(graph);`,
      expected: true,
    },
    {
      id: 2,
      name: 'path to itself always true',
      inherit: [1],
      code: `graph.addEdge('42', '41');graph.addEdge('42', '50');graph.addEdge('41', '10');graph.addEdge('41', '40');graph.addEdge('50', '45');graph.addEdge('50', '75');`,
      evaluate: `graph.checkPath('42', '42');`,
      expected: true,
    },
    {
      id: 3,
      name: 'path q1 - true',
      inherit: [1, 2],
      code: ``,
      evaluate: `graph.checkPath('42', '10');`,
      expected: true,
    },
    {
      id: 4,
      name: 'path q2 - true',
      inherit: [1, 2],
      code: ``,
      evaluate: `graph.checkPath('42', '40');`,
      expected: true,
    },
    {
      id: 5,
      name: 'path q3 - true',
      inherit: [1, 2],
      code: ``,
      evaluate: `graph.checkPath('42', '75');`,
      expected: true,
    },
    {
      id: 6,
      name: 'path q4 - false',
      inherit: [1, 2],
      code: ``,
      evaluate: `graph.checkPath('42', '88');`,
      expected: false,
    },
    {
      id: 7,
      name: 'path q5 - false',
      inherit: [1, 2],
      code: ``,
      evaluate: `graph.checkPath('50', '41');`,
      expected: false,
    },
  ],
  setupCode: `${GRAPH_PROTOTYPE_TEMPSET} ${GRAPH_PROTOTYPE_ADD_VERTEX} ${GRAPH_PROTOTYPE_ADD_EDGE}`,
  source: [],
  tags: [GRAPH, DATA_STRUCTURE],
  solution,
};
