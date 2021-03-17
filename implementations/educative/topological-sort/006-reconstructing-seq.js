// Reconstructing a Sequence

// Given a sequence originalSeq and an array of sequences, write a method to find if originalSeq can be uniquely reconstructed from the array of sequences.

// Unique reconstruction means that we need to find if originalSeq is the only sequence such that all sequences in the array are subsequences of it.

function can_construct(originalSeq, sequences) {
  const sortedOrder = [];
  if (originalSeq.length <= 0) {
    return false;
  }

  // a. Initialize the graph
  const inDegree = {}; // count of incoming edges
  const graph = {}; // adjacency list graph

  sequences.forEach(sequence => {
    for (let i = 0; i < sequence.length; i++) {
      inDegree[sequence[i]] = 0;
      graph[sequence[i]] = [];
    }
  });

  // b. Build the graph
  sequences.forEach(sequence => {
    for (let i = 1; i < sequence.length; i++) {
      const parent = sequence[i - 1];
      let child = sequence[i];
      graph[parent].push(child);
      inDegree[child] += 1;
    }
  });

  // if we don't have ordering rules for all the numbers we'll not able to uniquely construct the sequence
  const vertices = Object.keys(inDegree);
  if (vertices.length !== originalSeq.length) {
    return false;
  }

  // c. Find all sources i.e., all vertices with 0 in-degrees
  const sources = [];
  vertices.forEach(key => {
    if (inDegree[key] === 0) {
      sources.push(key);
    }
  });

  // d. For each source, add it to the sortedOrder and subtract one from all of its children's in-degrees
  // if a child's in-degree becomes zero, add it to the sources queue
  while (sources.length > 0) {
    if (sources.length > 1) {
      return false; // more than one sources mean, there is more than one way to reconstruct the sequence
    }
    if (originalSeq[sortedOrder.length] != sources[sources.length - 1]) {
      // the next source(or number) is different from the original sequence
      return false;
    }

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

  // if sortedOrder's size is not equal to original sequence's size, there is no unique way to construct
  return sortedOrder.length === originalSeq.length;
}

console.log(
  `Can construct: ${can_construct(
    [1, 2, 3, 4],
    [
      [1, 2],
      [2, 3],
      [3, 4],
    ],
  )}`,
);
// true

console.log(
  `Can construct: ${can_construct(
    [1, 2, 3, 4],
    [
      [1, 2],
      [2, 3],
      [2, 4],
    ],
  )}`,
);
// false

console.log(
  `Can construct: ${can_construct(
    [3, 1, 4, 2, 5],
    [
      [3, 1, 5],
      [1, 4, 2, 5],
    ],
  )}`,
);
// true
