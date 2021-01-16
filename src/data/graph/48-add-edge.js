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
  { stage: 0, text: '  // IMPLEMENTED: addVertex(key: string) void' },
  { stage: 0, text: '' },
  { stage: 1, text: '  addEdge(startVertexKey, endVertexKey, edgeWeight = 1) {' },
  { stage: 2, text: '    if (!this.vertices[startVertexKey]) {' },
  { stage: 2, text: '      this.addVertex(startVertexKey);' },
  { stage: 2, text: '    }' },
  { stage: 2, text: '' },
  { stage: 3, text: '    if (!this.vertices[endVertexKey]) {' },
  { stage: 3, text: '      this.addVertex(endVertexKey);' },
  { stage: 3, text: '    }' },
  { stage: 3, text: '' },
  { stage: 4, text: '    const edge = new Edge(edgeWeight);' },
  { stage: 4, text: '' },
  { stage: 4, text: '    this.adjList[startVertexKey][endVertexKey] = edge;' },
  { stage: 4, text: '' },
  { stage: 5, text: '    if (!this.isDirected) {' },
  { stage: 5, text: '      this.adjList[endVertexKey][startVertexKey] = edge;' },
  { stage: 5, text: '    }' },
  { stage: 1, text: '  }' },
  { stage: 0, text: '' },
  { stage: 0, text: '}' },
  { stage: 0, text: '' },
];

export const data = {
  problemID: 48,
  problemName: `Implement the addEdge method for a Graph class.`,
  problemText: `Implement an addEdge method that accepts a startingVertex key and an endingVertex key and an optional edgeWeight (defaults to 1), with no return value.`,
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
  Graph.prototype.addVertex = function(key) {
    const vertex = new Vertex(key);
    Graph.prototype.vertices[key] = vertex;
    if (!Graph.prototype.adjList[key]) {
      Graph.prototype.adjList[key] = {};
    }
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
