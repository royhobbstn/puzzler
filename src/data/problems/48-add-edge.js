import { GRAPH, DATA_STRUCTURE, INTERMEDIATE } from '../constants.js';

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
  { stage: -1, text: '  // IMPLEMENTED: addVertex(key: string) void' },
  { stage: -1, text: '' },
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
  problemName: `Implement the **addEdge** method for a *Graph* class.`,
  problemText: `Implement an **addEdge** method that accepts a \`startingVertex\` key (string) and an \`endingVertex\` key (string) and an optional \`edgeWeight\` (int, defaults to 1), with no return value.`,
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
      name: 'creates vertices if they do not exist - start',
      inherit: [1],
      code: `graph.addEdge('A', 'B', 2);`,
      evaluate: `Boolean(graph.vertices['A']);`,
      expected: true,
    },
    {
      id: 3,
      name: 'creates vertices if they do not exist - end',
      inherit: [1, 2],
      code: ``,
      evaluate: `Boolean(graph.vertices['B']);`,
      expected: true,
    },
    {
      id: 4,
      name: 'sets the proper edge weight',
      inherit: [1, 2],
      code: ``,
      evaluate: `graph.adjList['A']['B'].weight;`,
      expected: 2,
    },
    {
      id: 5,
      name: 'defaults to 1 if edge weight is not given',
      inherit: [1],
      code: `graph.addEdge('A', 'B');`,
      evaluate: `graph.adjList['A']['B'].weight;`,
      expected: 1,
    },
    {
      id: 6,
      name: 'creates reverse path if not a directed network',
      inherit: [],
      code: `const graph=new Graph(false);graph.addEdge('A', 'B', 2);`,
      evaluate: `graph.adjList['B']['A'].weight;`,
      expected: 2,
    },
  ],
  setupCode: `
  Graph.prototype.addVertex = function (key) {
    const vertex = new Vertex(key);
    this.vertices[key] = vertex;
    if (!this.adjList[key]) {
      this.adjList[key] = {};
    }
  };
  `,
  tags: [INTERMEDIATE, GRAPH, DATA_STRUCTURE],
  solution,
};
