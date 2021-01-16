import { GRAPH, DATA_STRUCTURE, BEGINNER } from '../constants.js';

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
  { stage: 0, text: '  dfs(startVertexKey, callback = this.callback) {' },
  { stage: 1, text: '    const visited = {};' },
  { stage: 1, text: '' },
  { stage: 2, text: '    const traverseDfs = vertex => {' },
  { stage: 3, text: '      visited[vertex] = true;' },
  { stage: 3, text: '      callback(vertex);' },
  { stage: 4, text: '      for (let adjacent of Object.keys(this.adjList[vertex] || [])) {' },
  { stage: 5, text: '        if (!visited[adjacent]) {' },
  { stage: 5, text: '          traverseDfs(adjacent);' },
  { stage: 5, text: '        }' },
  { stage: 4, text: '      }' },
  { stage: 2, text: '    };' },
  { stage: 6, text: '' },
  { stage: 6, text: '    traverseDfs(startVertexKey);' },
  { stage: 0, text: '  }' },
  { stage: 0, text: '' },
  { stage: 0, text: '}' },
  { stage: 0, text: '' },
];

export const data = {
  problemID: 51,
  problemName: `Implement the dfs (depth first search) method for a Graph class.`,
  problemText: `Implement a dfs method that accepts a startingVertex key and a callback function (supplied) to be run on each graph node.`,
  testCases: [
    {
      id: 1,
      name: 'compiles',
      inherit: [],
      code: `const graph=new Graph();`,
      evaluate: `graph;`,
      expected: `{"head":null,"tail":null}`,
    },
  ],
  setupCode: `
  Graph.prototype.tempSet = [];
  Graph.prototype.callback(key) {
    Graph.prototype.tempSet.push(key);
  }
  Graph.prototype.clear() {
    Graph.prototype.tempSet = [];
  }
  `,
  category: GRAPH,
  type: DATA_STRUCTURE,
  difficulty: BEGINNER,
  maxExecutionTime: 2,
  solution: {
    stages: [0, 30, 60, 90, 120, 150, 210],
    solutionLines: solution,
  },
};
