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
  { stage: 0, text: '    this.vertices = {};  // { "vertexKey": Vertex }' },
  { stage: 0, text: '  }' },
  { stage: 0, text: '' },
  { stage: 1, text: '  addVertex(vertexKey) {' },
  { stage: 2, text: '    const vertex = new Vertex(vertexKey);' },
  { stage: 2, text: '    this.vertices[vertexKey] = vertex;' },
  { stage: 2, text: '' },
  { stage: 3, text: '    if (!this.adjList[vertexKey]) {' },
  { stage: 3, text: '      this.adjList[vertexKey] = {};' },
  { stage: 3, text: '    }' },
  { stage: 1, text: '  }' },
  { stage: 0, text: '' },
  { stage: 0, text: '}' },
  { stage: 0, text: '' },
];

export const data = {
  problemID: 47,
  problemName: `Implement the **addVertex** method for a *Graph* class.`,
  problemText: `Implement an **addVertex** method that accepts a string \`vertexKey\` key, with no return value.  
  Implementation involves:
   - Create a Vertex node, and add it to the \`vertices\` lookup.
   - Create a blank object entry in the adjacencyList \`adjList\` if there is not an existing entry for that node.`,
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
      name: 'add single vertex, check vertices inventory',
      inherit: [1],
      code: `graph.addVertex('A');`,
      evaluate: `graph.vertices['A'].key;`,
      expected: 'A',
    },
    {
      id: 3,
      name: 'adds single vertex, check adjacency list',
      inherit: [1, 2],
      code: ``,
      evaluate: `JSON.stringify(graph.adjList['A']);`,
      expected: JSON.stringify({}),
    },
    {
      id: 4,
      name: 'if already exists, do not clear place in adjacency list',
      inherit: [1, 2],
      code: `graph.addVertex('B');graph.addEdge('A','B');graph.addVertex('A');`,
      evaluate: `JSON.stringify(graph.adjList['A']) !== JSON.stringify({});`,
      expected: true,
    },
  ],
  setupCode: `
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
  tags: [GRAPH, DATA_STRUCTURE],
  difficulty: BEGINNER,
  solution: {
    stages: [0, 30, 60, 120],
    solutionLines: solution,
  },
};
