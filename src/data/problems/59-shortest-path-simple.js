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
  { stage: 0, text: '  shortestPath(source, destination) {' },
  { stage: 1, text: '    if (source == destination) {' },
  { stage: 1, text: '      return 0;' },
  { stage: 1, text: '    }' },
  { stage: 0, text: '' },
  { stage: 2, text: '    let visited = {};' },
  { stage: 2, text: '    let distance = {};' },
  { stage: 2, text: '    distance[source] = 0;' },
  { stage: 0, text: '' },
  { stage: 3, text: '    let queue = [];' },
  { stage: 3, text: '    queue.push(source);' },
  { stage: 0, text: '' },
  { stage: 4, text: '    while (queue.length) {' },
  { stage: 5, text: '      const currentKey = queue.shift();' },
  { stage: 0, text: '' },
  { stage: 5, text: '      for (let adjacentKey of Object.keys(this.adjList[currentKey])) {' },
  { stage: 6, text: '        if (!visited[adjacentKey]) {' },
  { stage: 8, text: '          queue.push(adjacentKey);' },
  { stage: 8, text: '          visited[currentKey] = true;' },
  { stage: 8, text: '          distance[adjacentKey] = distance[currentKey] + 1;' },
  { stage: 6, text: '        }' },
  { stage: 7, text: '        if (adjacentKey == destination) {' },
  { stage: 7, text: '          return distance[destination];' },
  { stage: 7, text: '        }' },
  { stage: 5, text: '      }' },
  { stage: 4, text: '    }' },
  { stage: 0, text: '' },
  { stage: 7, text: '    return -1;' },
  { stage: 0, text: '  }' },
  { stage: 0, text: '' },
  { stage: 0, text: '}' },
  { stage: 0, text: '' },
];

export const data = {
  problemID: 59,
  problemName: `Implement a **shortestPath** method for a *Graph* class.`,
  problemText: `Implement a **shortestPath** method that takes a \`source\` key and a \`destination\` key and returns the shortest possible distance (integer) from one to the other.  Assume all edge lengths are 1.  Return \`-1\` if no path exists.`,
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
      name: 'path to itself is 0',
      inherit: [1],
      code: `graph.addEdge('42', '41');graph.addEdge('42', '50');graph.addEdge('41', '10');graph.addEdge('41', '40');graph.addEdge('50', '45');graph.addEdge('50', '75');graph.addEdge('75', '100');`,
      evaluate: `graph.shortestPath('42', '42');`,
      expected: 0,
    },
    {
      id: 3,
      name: 'path query 1',
      inherit: [1, 2],
      code: ``,
      evaluate: `graph.shortestPath('42', '10');`,
      expected: 2,
    },
    {
      id: 4,
      name: 'path query 2',
      inherit: [1, 2],
      code: ``,
      evaluate: `graph.shortestPath('42', '40');`,
      expected: 2,
    },
    {
      id: 5,
      name: 'path query 3',
      inherit: [1, 2],
      code: ``,
      evaluate: `graph.shortestPath('42', '100');`,
      expected: 3,
    },
    {
      id: 6,
      name: 'no path returns -1',
      inherit: [1, 2],
      code: ``,
      evaluate: `graph.shortestPath('42', '1000');`,
      expected: -1,
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
  source: [],
  tags: [ADVANCED, GRAPH, DATA_STRUCTURE],
  solution,
};
