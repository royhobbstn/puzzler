export const graphPrototypeAddEdge = `
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
`;

export const graphPrototypeAddVertex = `
Graph.prototype.addVertex = function (key) {
    const vertex = new Vertex(key);
    this.vertices[key] = vertex;
    if (!this.adjList[key]) {
      this.adjList[key] = {};
    }
  };
`;

export const graphPrototypeTempset = `
Graph.prototype.tempSet = [];
Graph.prototype.callback = function(key) {
  Graph.prototype.tempSet.push(key);
};
`;
