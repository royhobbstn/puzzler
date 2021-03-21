// All Tasks Scheduling Orders

// There are ‘N’ tasks, labeled from ‘0’ to ‘N-1’. Each task can have some prerequisite tasks which need to be completed before it can be scheduled. Given the number of tasks and a list of prerequisite pairs, write a method to print all possible ordering of tasks meeting all prerequisites.

function print_orders(tasks, prerequisites) {
  const sortedOrder = [];
  if (tasks <= 0) {
    return sortedOrder;
  }

  // a. Initialize the graph
  const inDegree = Array(tasks).fill(0); // count of incoming edges
  const graph = Array(tasks)
    .fill(0)
    .map(() => Array()); // adjacency list graph

  // b. Build the graph
  prerequisites.forEach(prerequisite => {
    const parent = prerequisite[0];
    let child = prerequisite[1];
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

  const sorts = [];
  print_all_topological_sorts(graph, inDegree, sources, sortedOrder, sorts);
  return sorts;
}

function print_all_topological_sorts(graph, inDegree, sources, sortedOrder, sorts) {
  if (sources.length > 0) {
    for (let i = 0; i < sources.length; i++) {
      const vertex = sources[i];
      sortedOrder.push(vertex);
      const sourcesForNextCall = sources.slice(0); // clone current sources
      // only remove the current source, all other sources should remain in the queue for the next call
      sourcesForNextCall.splice(sourcesForNextCall.indexOf(vertex), 1);
      // get the node's children to decrement their in-degrees
      graph[vertex].forEach(child => {
        // get the node's children to decrement their in-degrees
        inDegree[child]--;
        if (inDegree[child] === 0) {
          sourcesForNextCall.push(child);
        }
      });

      // recursive call to print other orderings from the remaining (and new) sources
      print_all_topological_sorts(graph, inDegree, sourcesForNextCall, sortedOrder, sorts);

      // backtrack, remove the vertex from the sorted order and put all of its children back to consider
      // the next source instead of the current vertex
      sortedOrder.splice(sortedOrder.indexOf(vertex), 1);
      for (let p = 0; p < graph[vertex].length; p++) {
        inDegree[graph[vertex][p]] += 1;
      }
    }
  }

  // if sortedOrder doesn't contain all tasks, either we've a cyclic dependency between tasks, or
  // we have not processed all the tasks in this recursive call
  if (sortedOrder.length === inDegree.length) {
    sorts.push(sortedOrder.slice(0));
  }
}

console.log(
  print_orders(3, [
    [0, 1],
    [1, 2],
  ]),
);
// Task Orders:
// [[ 0, 1, 2 ]]

console.log(
  print_orders(4, [
    [3, 2],
    [3, 0],
    [2, 0],
    [2, 1],
  ]),
);
// Task Orders:
// [[ 3, 2, 0, 1 ],
// [ 3, 2, 1, 0 ]]

console.log(
  print_orders(6, [
    [2, 5],
    [0, 5],
    [0, 4],
    [1, 4],
    [3, 2],
    [1, 3],
  ]),
);
// Task Orders:
// [[ 0, 1, 4, 3, 2, 5 ],
// [ 0, 1, 3, 4, 2, 5 ],
// [ 0, 1, 3, 2, 4, 5 ],
// [ 0, 1, 3, 2, 5, 4 ],
// [ 1, 0, 3, 4, 2, 5 ],
// [ 1, 0, 3, 2, 4, 5 ],
// [ 1, 0, 3, 2, 5, 4 ],
// [ 1, 0, 4, 3, 2, 5 ],
// [ 1, 3, 0, 2, 4, 5 ],
// [ 1, 3, 0, 2, 5, 4 ],
// [ 1, 3, 0, 4, 2, 5 ],
// [ 1, 3, 2, 0, 5, 4 ],
// [ 1, 3, 2, 0, 4, 5 ]]
