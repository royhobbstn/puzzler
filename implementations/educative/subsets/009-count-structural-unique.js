// Count of Structurally Unique Binary Search Trees

// Given a number ‘n’, write a function to return the count of structurally unique Binary Search Trees (BST) that can store values 1 to ‘n’.

function count_trees(n) {
  if (n <= 1) {
    return 1;
  }
  let count = 0;
  for (let i = 1; i < n + 1; i++) {
    // making 'i' the root of the tree
    const countOfLeftSubtrees = count_trees(i - 1);
    const countOfRightSubtrees = count_trees(n - i);
    count += countOfLeftSubtrees * countOfRightSubtrees;
  }
  return count;
}

console.log(`Total trees: ${count_trees(2)}`);
// 2
console.log(`Total trees: ${count_trees(3)}`);
// 5

// Memoized

class TreeNode {
  constructor(val) {
    this.val = val;
    this.left = null;
    this.right = null;
  }
}

function count_trees_memo(n) {
  return count_trees_rec({}, n);
}

function count_trees_rec(map, n) {
  if (n in map) {
    return map[n];
  }

  if (n <= 1) {
    return 1;
  }
  let count = 0;
  for (let i = 1; i < n + 1; i++) {
    // making 'i' the root of the tree
    let countOfLeftSubtrees = count_trees_rec(map, i - 1);
    let countOfRightSubtrees = count_trees_rec(map, n - i);
    count += countOfLeftSubtrees * countOfRightSubtrees;
  }

  map[n] = count;
  return count;
}

console.log(`Total trees: ${count_trees_memo(2)}`);
// 2
console.log(`Total trees: ${count_trees_memo(3)}`);
// 5
