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
  { stage: 1, text: '  deleteEdge(startVertexKey, endVertexKey) {' },
  { stage: 2, text: '    if (this.adjList[startVertexKey]) {' },
  { stage: 2, text: '      delete this.adjList[startVertexKey][endVertexKey];' },
  { stage: 2, text: '    }' },
  { stage: 2, text: '' },
  { stage: 3, text: '    if (!this.isDirected && this.adjList[endVertexKey]) {' },
  { stage: 3, text: '      delete this.adjList[endVertexKey][startVertexKey];' },
  { stage: 3, text: '    }' },
  { stage: 1, text: '  }' },
  { stage: 0, text: '' },
  { stage: 0, text: '}' },
  { stage: 0, text: '' },
];

export const data = {
  problemID: 50,
  problemName: `Implement the **deleteEdge** method for a *Graph* class.`,
  problemText: `Implement a **deleteEdge** method that accepts a \`startingVertex\` key (string) and an \`endingVertex\` key (string), with no return value.  Account for directed and undirected graphs.`,
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
      name: 'add edge, then delete. Check edge.',
      inherit: [1],
      code: `graph.addEdge('A', 'B');graph.deleteEdge('A', 'B');`,
      evaluate: `Boolean(graph.adjList['A'] && graph.adjList['A']['B']);`,
      expected: false,
    },
    {
      id: 3,
      name: 'add edge, then delete. Check reverse edge on undirected graph.',
      inherit: [],
      code: `const graph=new Graph(false);graph.addEdge('A', 'B');graph.deleteEdge('A', 'B');`,
      evaluate: `Boolean(graph.adjList['B'] && graph.adjList['B']['A']);`,
      expected: false,
    },
    {
      id: 4,
      name: 'trying to delete edge that does not exist should not throw error.',
      inherit: [],
      code: `const graph=new Graph();`,
      evaluate: `graph.deleteEdge('A', 'B');`,
      expected: undefined,
    },
    {
      id: 5,
      name: 'trying to delete reverse edge that does not exist should not throw error.',
      inherit: [],
      code: `const graph=new Graph(false);`,
      evaluate: `graph.deleteEdge('A', 'B');`,
      expected: undefined,
    },
  ],
  setupCode: `
  Graph.prototype.addVertex = function(key) {
    const vertex = new Vertex(key);
    this.vertices[key] = vertex;
    if (!this.adjList[key]) {
      this.adjList[key] = {};
    }
  };
  Graph.prototype.addEdge = function(startVertexKey, endVertexKey, edgeWeight = 1) {
    if (!this.vertices[startVertexKey]) {
      this.addVertex(startVertexKey);
    }
    if (!this.vertices[endVertexKey]) {
      this.addVertex(endVertexKey);
    }
    const edge = new Edge(edgeWeight);
    this.adjList[startVertexKey][endVertexKey] = edge;
    if (!this.isDirected) {
      this.adjList[endVertexKey][startVertexKey] = edge;
    }
  };
  `,
  source: [],
  tags: [BEGINNER, GRAPH, DATA_STRUCTURE],
  solution,
};
