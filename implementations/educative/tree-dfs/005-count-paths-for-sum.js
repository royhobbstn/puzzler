// Count Paths for a Sum

// Given a binary tree and a number ‘S’, find all paths in the tree such that the sum of all the node values of each path equals ‘S’. Please note that the paths can start or end at any node but all paths must follow direction from parent to child (top to bottom).

class TreeNode {
  constructor(val, left = null, right = null) {
    this.val = val;
    this.left = left;
    this.right = right;
  }
}

function count_paths(root, S) {
  return count_paths_recursive(root, S, []);
}

function count_paths_recursive(currentNode, S, currentPath) {
  if (currentNode === null) {
    return 0;
  }

  // add the current node to the path
  currentPath.push(currentNode.val);
  let pathCount = 0,
    pathSum = 0;
  // find the sums of all sub-paths in the current path list
  for (let i = currentPath.length - 1; i >= 0; i--) {
    pathSum += currentPath[i];
    // if the sum of any sub-path is equal to 'S' we increment our path count.
    if (pathSum === S) {
      pathCount += 1;
    }
  }
  // traverse the left sub-tree
  pathCount += count_paths_recursive(currentNode.left, S, currentPath);
  // traverse the right sub-tree
  pathCount += count_paths_recursive(currentNode.right, S, currentPath);

  // remove the current node from the path to backtrack
  // we need to remove the current node while we are going up the recursive call stack
  currentPath.pop();
  return pathCount;
}

const root = new TreeNode(12);
root.left = new TreeNode(7);
root.right = new TreeNode(1);
root.left.left = new TreeNode(4);
root.right.left = new TreeNode(10);
root.right.right = new TreeNode(5);
console.log(`Tree has paths: ${count_paths(root, 11)}`);
// 2
