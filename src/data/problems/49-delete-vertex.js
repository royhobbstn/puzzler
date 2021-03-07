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
  { stage: 1, text: '  deleteVertex(vertexKey) {' },
  { stage: 2, text: '    delete this.vertices[vertexKey];' },
  { stage: 2, text: '    delete this.adjList[vertexKey];' },
  { stage: 3, text: '    for (let key of Object.keys(this.adjList)) {' },
  { stage: 4, text: '      for (let vk of Object.keys(this.adjList[key])) {' },
  { stage: 5, text: '        if (vk === vertexKey) {' },
  { stage: 5, text: '          delete this.adjList[key][vk];' },
  { stage: 5, text: '        }' },
  { stage: 4, text: '      }' },
  { stage: 3, text: '    }' },
  { stage: 1, text: '  }' },
  { stage: 0, text: '' },
  { stage: 0, text: '}' },
  { stage: 0, text: '' },
];

export const data = {
  problemID: 49,
  problemName: `Implement the **deleteVertex** method for a *Graph* class.`,
  problemText: `Implement a **deleteVertex** method that accepts a \`vertexKey\` (string), with no return value.  You must delete all items in the adjacency list which use that vertex.`,
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
      name: 'add, then delete vertex',
      inherit: [1],
      code: `graph.addVertex('A');graph.deleteVertex('A');`,
      evaluate: `Boolean(graph.vertices['A']);`,
      expected: false,
    },
    {
      id: 3,
      name: 'add edge, make sure vertex is deleted from AdjList',
      inherit: [1],
      code: `graph.addEdge('A','B');graph.deleteVertex('A');`,
      evaluate: `graph.adjList['A'] === undefined;`,
      expected: true,
    },
    {
      id: 4,
      name: 'removed from reverse side of AdjList',
      inherit: [],
      code: `const graph=new Graph(false);graph.addEdge('A','B');graph.deleteVertex('A');`,
      evaluate: `JSON.stringify(graph.adjList['B']);`,
      expected: JSON.stringify({}),
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
  tags: [GRAPH, DATA_STRUCTURE],
  difficulty: INTERMEDIATE,
  solution,
};
