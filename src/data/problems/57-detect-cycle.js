import { GRAPH, DATA_STRUCTURE, ADVANCED } from '../constants.js';

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
  { stage: 0, text: '  detectCycle() {' },
  { stage: 1, text: '    let visited = {};' },
  { stage: 1, text: '    let recNodes = {};' },
  { stage: 0, text: '' },
  { stage: 3, text: '    for (let key of Object.keys(this.adjList)) {' },
  { stage: 4, text: '      if (this.detectCycleRec(key, visited, recNodes)) {' },
  { stage: 5, text: '        return true;' },
  { stage: 4, text: '      }' },
  { stage: 3, text: '    }' },
  { stage: 5, text: '    return false;' },
  { stage: 0, text: '  }' },
  { stage: 0, text: '' },
  { stage: 2, text: '  detectCycleRec(key, visited, recNodes) {' },
  { stage: 3, text: '    if (!visited[key]) {' },
  { stage: 4, text: '      visited[key] = true;' },
  { stage: 4, text: '      recNodes[key] = true;' },
  { stage: 0, text: '' },
  { stage: 7, text: '      for (let adjacentKey of Object.keys(this.adjList[key])) {' },
  {
    stage: 8,
    text:
      '        if (!visited[adjacentKey] && this.detectCycleRec(adjacentKey, visited, recNodes)) {',
  },
  { stage: 9, text: '          return true;' },
  { stage: 8, text: '        } else if (recNodes[adjacentKey]) {' },
  { stage: 9, text: '          return true;' },
  { stage: 8, text: '        }' },
  { stage: 7, text: '      }' },
  { stage: 3, text: '    }' },
  { stage: 0, text: '' },
  { stage: 6, text: '    recNodes[key] = false;' },
  { stage: 6, text: '    return false;' },
  { stage: 2, text: '  }' },
  { stage: 0, text: '' },
  { stage: 0, text: '}' },
  { stage: 0, text: '' },
];

export const data = {
  problemID: 57,
  problemName: `Implement a **detectCycle** method for a *Graph* class.`,
  problemText: `Implement a **detectCycle** method that returns either \`true\` or \`false\` depending upon whether or not the graph contains a cycle.`,
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
      name: 'detectCycle 1 - false',
      inherit: [1],
      code: `graph.addEdge('42', '41');graph.addEdge('42', '50');graph.addEdge('41', '10');graph.addEdge('41', '40');graph.addEdge('50', '45');graph.addEdge('50', '75');`,
      evaluate: `graph.detectCycle();`,
      expected: false,
    },
    {
      id: 3,
      name: 'detectCycle 2 - false',
      inherit: [1],
      code: `graph.addEdge('A', 'B');graph.addEdge('B', 'C');graph.addEdge('B', 'E');graph.addEdge('C', 'D');graph.addEdge('D', 'G');graph.addEdge('D', 'F');graph.addEdge('G', 'H');graph.addEdge('F', 'J');`,
      evaluate: `graph.detectCycle();`,
      expected: false,
    },
    {
      id: 4,
      name: 'detectCycle 3 - true',
      inherit: [1],
      code: `graph.addEdge('A', 'B');graph.addEdge('B', 'C');graph.addEdge('C', 'A');`,
      evaluate: `graph.detectCycle();`,
      expected: true,
    },
  ],
  setupCode: `
  Graph.prototype.tempSet = [];
  Graph.prototype.callback = function(key) {
    Graph.prototype.tempSet.push(key);
  };
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
  tags: [ADVANCED, GRAPH, DATA_STRUCTURE],
  solution,
};
