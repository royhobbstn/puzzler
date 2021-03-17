// Alien Dictionary

// There is a dictionary containing words from an alien language for which we don’t know the ordering of the alphabets. Write a method to find the correct order of the alphabets in the alien language. It is given that the input is a valid dictionary and there exists an ordering among its alphabets.

function find_order(words) {
  if (words.length === 0) {
    return '';
  }

  // a. Initialize the graph
  const inDegree = {}; // count of incoming edges
  const graph = {}; // adjacency list graph

  words.forEach(word => {
    for (let i = 0; i < word.length; i++) {
      inDegree[word[i]] = 0;
      graph[word[i]] = [];
    }
  });

  // b. Build the graph
  for (let i = 0; i < words.length - 1; i++) {
    // find ordering of characters from adjacent words
    let w1 = words[i],
      w2 = words[i + 1];
    for (let j = 0; j < Math.min(w1.length, w2.length); j++) {
      let parent = w1[j],
        child = w2[j];
      if (parent !== child) {
        // if the two characters are different
        // put the child into it's parent's list
        graph[parent].push(child);
        inDegree[child] += 1; // increment child's inDegree
        break; // only the first different character between the two words will help us find the order
      }
    }
  }

  // c. Find all sources i.e., all vertices with 0 in-degrees
  const sources = [];
  const chars = Object.keys(inDegree);
  chars.forEach(key => {
    if (inDegree[key] === 0) {
      sources.push(key);
    }
  });

  // d. For each source, add it to the sortedOrder and subtract one from all of its children's in-degrees
  // if a child's in-degree becomes zero, add it to the sources queue
  const sortedOrder = [];
  while (sources.length > 0) {
    let vertex = sources.shift();
    sortedOrder.push(vertex);
    graph[vertex].forEach(child => {
      // get the node's children to decrement their in-degrees
      inDegree[child] -= 1;
      if (inDegree[child] === 0) {
        sources.push(child);
      }
    });
  }

  // if sortedOrder doesn't contain all characters, there is a cyclic dependency between characters, therefore, we
  // will not be able to find the correct ordering of the characters
  if (sortedOrder.length !== chars.length) {
    return '';
  }

  return sortedOrder.join('');
}

console.log(`Character order: ${find_order(['ba', 'bc', 'ac', 'cab'])}`);
console.log(`Character order: ${find_order(['cab', 'aaa', 'aab'])}`);
console.log(`Character order: ${find_order(['ywx', 'wz', 'xww', 'xz', 'zyy', 'zwz'])}`);

// Character order: bac
// Character order: cab
// Character order: ywxz
