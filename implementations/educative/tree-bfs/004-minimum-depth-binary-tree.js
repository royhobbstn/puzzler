// Find the minimum depth of a binary tree. The minimum depth is the number of nodes along the shortest path from the root node to the nearest leaf node.

class TreeNode {
  constructor(val) {
    this.val = val;
    this.left = null;
    this.right = null;
  }
}

function find_minimum_depth(root) {
  if (root === null) {
    return 0;
  }

  const queue = [];
  queue.push(root);
  let minimumTreeDepth = 0;
  while (queue.length > 0) {
    minimumTreeDepth += 1;
    let levelSize = queue.length;
    for (let i = 0; i < levelSize; i++) {
      let currentNode = queue.shift();

      // check if this is a leaf node
      if (currentNode.left === null && currentNode.right === null) {
        return minimumTreeDepth;
      }
      // insert the children of current node in the queue
      if (currentNode.left !== null) {
        queue.push(currentNode.left);
      }
      if (currentNode.right !== null) {
        queue.push(currentNode.right);
      }
    }
  }

  return 0;
}

const root = new TreeNode(12);
root.left = new TreeNode(7);
root.right = new TreeNode(1);
root.right.left = new TreeNode(10);
root.right.right = new TreeNode(5);
console.log(find_minimum_depth(root));

root.left.left = new TreeNode(9);
root.right.left.left = new TreeNode(11);
console.log(find_minimum_depth(root));
