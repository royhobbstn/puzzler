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
  { stage: -1, text: '  // IMPLEMENTED: callback(vertex: Vertex) void' },
  { stage: -1, text: '' },
  { stage: 0, text: '  bfs(startVertexKey, callback = this.callback) {' },
  { stage: 1, text: '    const queue = [];' },
  { stage: 1, text: '    const visited = {};' },
  { stage: 1, text: '    queue.push(startVertexKey);' },
  { stage: 1, text: '' },
  { stage: 2, text: '    while (queue.length) {' },
  { stage: 3, text: '      const vertexKey = queue.shift();' },
  { stage: 3, text: '      if (!visited[vertexKey]) {' },
  { stage: 4, text: '        callback(vertexKey);' },
  { stage: 4, text: '        visited[vertexKey] = true;' },
  { stage: 5, text: '        for (let adjacent of Object.keys(this.adjList[vertexKey] || {})) {' },
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
  problemName: `Implement a **bfs** (breadth first search) method for a *Graph* class.`,
  problemText: `Implement a **bfs** method that accepts a \`startingVertex\` key (string) and a \`callback\` function (supplied) to be run on each graph node.`,
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
      name: 'bfs network 1',
      inherit: [1],
      code: `graph.addEdge('42', '41');graph.addEdge('42', '50');graph.addEdge('41', '10');graph.addEdge('41', '40');graph.addEdge('50', '45');graph.addEdge('50', '75');graph.bfs('42');`,
      evaluate: `JSON.stringify(graph.tempSet);`,
      expected: JSON.stringify(['42', '41', '50', '10', '40', '45', '75']),
    },
    {
      id: 3,
      name: 'bfs network 2',
      inherit: [1],
      code: `graph.addEdge('A', 'B');graph.addEdge('B', 'C');graph.addEdge('B', 'E');graph.addEdge('C', 'D');graph.addEdge('D', 'G');graph.addEdge('D', 'F');graph.addEdge('G', 'H');graph.addEdge('F', 'J');graph.bfs('A');`,
      evaluate: `JSON.stringify(graph.tempSet);`,
      expected: JSON.stringify(['A', 'B', 'C', 'E', 'D', 'G', 'F', 'H', 'J']),
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
  tags: [GRAPH, DATA_STRUCTURE],
  difficulty: ADVANCED,
  solution: {
    stages: [0, 30, 60, 90, 120, 180],
    solutionLines: solution,
  },
};
