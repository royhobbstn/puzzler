class Vertex {
  constructor(key) {
    this.key = key;
  }
}

class Edge {
  constructor(weight) {
    this.weight = weight;
  }
}

class Graph {
  constructor(isDirected = true) {
    this.isDirected = isDirected === true;
    this.adjList = {};
    this.vertices = {};
    this.tempSet = [];
  }

  log(key) {
    this.tempSet.push(key);
  }

  clear() {
    this.tempSet = [];
  }

  addVertex(key) {
    const vertex = new Vertex(key);
    this.vertices[key] = vertex;
  }

  addEdge(startVertexKey, endVertexKey, edgeWeight = 1) {
    if (!this.vertices[startVertexKey]) {
      this.addVertex(startVertexKey);
    }
    if (!this.vertices[endVertexKey]) {
      this.addVertex(endVertexKey);
    }

    const edge = new Edge(edgeWeight);

    if (!this.adjList[startVertexKey]) {
      this.adjList[startVertexKey] = { [endVertexKey]: edge };
    } else {
      this.adjList[startVertexKey][endVertexKey] = edge;
    }

    if (!this.isDirected) {
      if (!this.adjList[endVertexKey]) {
        this.adjList[endVertexKey] = { [startVertexKey]: edge };
      } else {
        this.adjList[endVertexKey][startVertexKey] = edge;
      }
    }
  }

  deleteVertex(vertexKey) {
    delete this.vertices[vertexKey];
    delete this.adjList[vertexKey];
    for (let key of Object.keys(this.adjList)) {
      for (let vk of Object.keys(this.adjList[key])) {
        if (vk === vertexKey) {
          delete this.adjList[key][vk];
        }
      }
    }
  }

  deleteEdge(startVertexKey, endVertexKey) {
    delete this.adjList[startVertexKey][endVertexKey];
    if (!this.isDirected) {
      delete this.adjList[endVertexKey][startVertexKey];
    }
  }

  dfs(startVertexKey, fn = this.log.bind(this)) {
    const visited = {};

    const traverseDfs = vertex => {
      visited[vertex] = true;
      fn(vertex);
      for (let adjacent of Object.keys(this.adjList[vertex] || [])) {
        if (!visited[adjacent]) {
          traverseDfs(adjacent);
        }
      }
    };

    traverseDfs(startVertexKey);
  }

  bfs(startVertexKey, fn = this.log.bind(this)) {
    const queue = [];
    const visited = {};
    queue.push(startVertexKey);

    while (queue.length) {
      const vertex = queue.shift();
      if (!visited[vertex]) {
        fn(vertex);
        for (let adjacent of Object.keys(this.adjList[vertex] || [])) {
          queue.push(adjacent);
        }
      }
    }
  }
}

// bfs

const graph = new Graph();

graph.addEdge('42', '41');
graph.addEdge('42', '50');
graph.addEdge('41', '10');
graph.addEdge('41', '40');
graph.addEdge('50', '45');
graph.addEdge('50', '75');

graph.bfs('42');
console.log(
  JSON.stringify(graph.tempSet) === JSON.stringify(['42', '41', '50', '10', '40', '45', '75']),
);

graph.clear();

graph.dfs('42');
console.log(
  JSON.stringify(graph.tempSet) === JSON.stringify(['42', '41', '10', '40', '50', '45', '75']),
);

const g2 = new Graph();
g2.addEdge('A', 'B');
g2.addEdge('B', 'C');
g2.addEdge('B', 'E');
g2.addEdge('C', 'D');
g2.addEdge('D', 'G');
g2.addEdge('D', 'F');
g2.addEdge('G', 'H');
g2.addEdge('F', 'J');

g2.bfs('A');
console.log(
  JSON.stringify(g2.tempSet) === JSON.stringify(['A', 'B', 'C', 'E', 'D', 'G', 'F', 'H', 'J']),
);

g2.clear();

g2.dfs('A');
console.log(
  JSON.stringify(g2.tempSet) === JSON.stringify(['A', 'B', 'C', 'D', 'G', 'H', 'F', 'J', 'E']),
);

g2.clear();

const g3 = new Graph();
g3.addEdge('A', 'B');
g3.addEdge('B', 'C');
g3.addEdge('B', 'E');
g3.addEdge('C', 'D');
g3.addEdge('D', 'G');
g3.addEdge('D', 'F');
g3.addEdge('G', 'H');
g3.addEdge('F', 'J');

console.log(Boolean(g3.adjList['D']) === true);
console.log(g3.adjList['C']['D'].weight === 1);
g3.deleteVertex('D');
console.log(Boolean(g3.adjList['D']) === false);
console.log(g3.adjList['C']['D'] === undefined);

console.log(g3.adjList['F']['J'].weight === 1);
g3.deleteEdge('F', 'J');
console.log(g3.adjList['F']['J'] === undefined);