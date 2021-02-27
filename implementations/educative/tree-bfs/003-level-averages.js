// Given a binary tree, populate an array to represent the averages of all of its levels.

class TreeNode {
  constructor(val) {
    this.val = val;
    this.left = null;
    this.right = null;
  }
}

function find_level_averages(root) {
  result = [];
  if (root === null) {
    return result;
  }

  const queue = [];
  queue.push(root);
  while (queue.length > 0) {
    let levelSize = queue.length,
      levelSum = 0.0;
    for (i = 0; i < levelSize; i++) {
      currentNode = queue.shift();
      // add the node's value to the running sum
      levelSum += currentNode.val;
      // insert the children of current node to the queue
      if (currentNode.left !== null) {
        queue.push(currentNode.left);
      }
      if (currentNode.right !== null) {
        queue.push(currentNode.right);
      }
    }
    // append the current level's average to the result array
    result.push(levelSum / levelSize);
  }

  return result;
}

const root = new TreeNode(12);
root.left = new TreeNode(7);
root.right = new TreeNode(1);
root.left.left = new TreeNode(9);
root.left.right = new TreeNode(2);
root.right.left = new TreeNode(10);
root.right.right = new TreeNode(5);
console.log(`Level averages are: ${find_level_averages(root)}`);
