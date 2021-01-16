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
  { stage: 0, text: '    this.tempSet = [];' },
  { stage: 0, text: '  }' },
  { stage: 0, text: '' },
  { stage: 0, text: '  bfs(startVertexKey, callback = this.callback) {' },
  { stage: 1, text: '    const queue = [];' },
  { stage: 1, text: '    const visited = {};' },
  { stage: 1, text: '    queue.push(startVertexKey);' },
  { stage: 1, text: '' },
  { stage: 2, text: '    while (queue.length) {' },
  { stage: 3, text: '      const vertex = queue.shift();' },
  { stage: 3, text: '      if (!visited[vertex]) {' },
  { stage: 4, text: '        callback(vertex);' },
  { stage: 5, text: '        for (let adjacent of Object.keys(this.adjList[vertex] || [])) {' },
  { stage: 5, text: '          queue.push(adjacent);' },
  { stage: 5, text: '        }' },
  { stage: 3, text: '      }' },
  { stage: 2, text: '    }' },
  { stage: 0, text: '  }' },
  { stage: 0, text: '' },
  { stage: 0, text: '}' },
  { stage: 0, text: '' },
];

export const data = {
  problemID: 52,
  problemName: `Implement the bfs (breadth first search) method for a Graph class.`,
  problemText: `Implement a bfs method that accepts a startingVertex key and a callback function (supplied) to be run on each graph node.`,
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
    stages: [0, 30, 60, 90, 120, 180],
    solutionLines: solution,
  },
};
