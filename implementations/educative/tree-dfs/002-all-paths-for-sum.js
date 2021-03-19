// All Paths for a Sum

// Given a binary tree and a number ‘S’, find all paths from root-to-leaf such that the sum of all the node values of each path equals ‘S’.

class TreeNode {
  constructor(val, left = null, right = null) {
    this.val = val;
    this.left = left;
    this.right = right;
  }
}

function find_paths(root, sum) {
  const allPaths = [];
  find_paths_recursive(root, sum, [], allPaths);
  return allPaths;
}

function find_paths_recursive(currentNode, sum, currentPath, allPaths) {
  if (currentNode === null) {
    return;
  }

  // add the current node to the path
  currentPath.push(currentNode.val);

  // if the current node is a leaf and its value is equal to sum, save the current path
  if (currentNode.val === sum && currentNode.left === null && currentNode.right === null) {
    allPaths.push(JSON.parse(JSON.stringify(currentPath)));
  } else {
    // traverse the left sub-tree
    find_paths_recursive(currentNode.left, sum - currentNode.val, currentPath, allPaths);
    // traverse the right sub-tree
    find_paths_recursive(currentNode.right, sum - currentNode.val, currentPath, allPaths);
  }
  // remove the current node from the path to backtrack,
  // we need to remove the current node while we are going up the recursive call stack.
  currentPath.pop();
}

const root = new TreeNode(12);
root.left = new TreeNode(7);
root.right = new TreeNode(1);
root.left.left = new TreeNode(4);
root.right.left = new TreeNode(10);
root.right.right = new TreeNode(5);
const result = find_paths(root, 23);

console.log(printPaths(result));

function printPaths(result) {
  const arr = [];
  for (let i = 0; i < result.length; i++) {
    arr.push(result[i]);
  }
  return arr;
}

// [ [ 12, 7, 4 ], [ 12, 1, 10 ] ]
