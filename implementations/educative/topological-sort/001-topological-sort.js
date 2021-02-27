// Given a directed graph, find the topological ordering of its vertices.

// Example 1:

// Input: Vertices=4, Edges=[3, 2], [3, 0], [2, 0], [2, 1]
// Output: Following are the two valid topological sorts for the given graph:
// 1) 3, 2, 0, 1
// 2) 3, 2, 1, 0
//     3
//     2
//     0
//     1
// Example 2:

// Input: Vertices=5, Edges=[4, 2], [4, 3], [2, 0], [2, 1], [3, 1]
// Output: Following are all valid topological sorts for the given graph:
// 1) 4, 2, 3, 0, 1
// 2) 4, 3, 2, 0, 1
// 3) 4, 3, 2, 1, 0
// 4) 4, 2, 3, 1, 0
// 5) 4, 2, 0, 3, 1
//     4
//     2
//     3
//     0
//     1
// Example 3:

// Input: Vertices=7, Edges=[6, 4], [6, 2], [5, 3], [5, 4], [3, 0], [3, 1], [3, 2], [4, 1]
// Output: Following are all valid topological sorts for the given graph:
// 1) 5, 6, 3, 4, 0, 1, 2
// 2) 6, 5, 3, 4, 0, 1, 2
// 3) 5, 6, 4, 3, 0, 2, 1
// 4) 6, 5, 4, 3, 0, 1, 2
// 5) 5, 6, 3, 4, 0, 2, 1
// 6) 5, 6, 3, 4, 1, 2, 0

// There are other valid topological ordering of the graph too.

function topological_sort(vertices, edges) {
  const sortedOrder = [];
  if (vertices <= 0) {
    return sortedOrder;
  }

  // a. Initialize the graph
  const inDegree = Array(vertices).fill(0); // count of incoming edges
  const graph = Array(vertices)
    .fill(0)
    .map(() => Array()); // adjacency list graph

  // b. Build the graph
  edges.forEach(edge => {
    let parent = edge[0];
    let child = edge[1];
    graph[parent].push(child); // put the child into it's parent's list
    inDegree[child]++; // increment child's inDegree
  });

  // c. Find all sources i.e., all vertices with 0 in-degrees
  const sources = [];
  for (let i = 0; i < inDegree.length; i++) {
    if (inDegree[i] === 0) {
      sources.push(i);
    }
  }

  // d. For each source, add it to the sortedOrder and subtract one from all of its children's in-degrees
  // if a child's in-degree becomes zero, add it to the sources queue
  while (sources.length > 0) {
    const vertex = sources.shift();
    sortedOrder.push(vertex);
    graph[vertex].forEach(child => {
      // get the node's children to decrement their in-degrees
      inDegree[child] -= 1;
      if (inDegree[child] === 0) {
        sources.push(child);
      }
    });
  }

  // topological sort is not possible as the graph has a cycle
  if (sortedOrder.length !== vertices) {
    return [];
  }

  return sortedOrder;
}

function stringify(arr) {
  return arr.join(',');
}

console.log(
  `Topological sort: ${topological_sort(4, [
    [3, 2],
    [3, 0],
    [2, 0],
    [2, 1],
  ])}`,
);
console.log(
  stringify(
    topological_sort(4, [
      [3, 2],
      [3, 0],
      [2, 0],
      [2, 1],
    ]),
  ),
);

console.log(
  `Topological sort: ${topological_sort(5, [
    [4, 2],
    [4, 3],
    [2, 0],
    [2, 1],
    [3, 1],
  ])}`,
);
console.log(
  `Topological sort: ${topological_sort(7, [
    [6, 4],
    [6, 2],
    [5, 3],
    [5, 4],
    [3, 0],
    [3, 1],
    [3, 2],
    [4, 1],
  ])}`,
);
