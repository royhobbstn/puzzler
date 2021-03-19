// Connect All Level Order Siblings

// Given a binary tree, connect each node with its level order successor. The last node of each level should point to the first node of the next level.

class TreeNode {
  constructor(val) {
    this.val = val;
    this.left = null;
    this.right = null;
    this.next = null;
  }
}

function printTree(root) {
  const arr = [];
  let current = root;
  while (current !== null) {
    arr.push(current.val);
    current = current.next;
  }
  return arr;
}

function connect_all_siblings(root) {
  if (root === null) {
    return;
  }

  const queue = [];
  queue.push(root);
  let currentNode = null;
  let previousNode = null;
  while (queue.length > 0) {
    currentNode = queue.shift();
    if (previousNode !== null) {
      previousNode.next = currentNode;
    }
    previousNode = currentNode;
    // insert the children of current node in the queue
    if (currentNode.left !== null) {
      queue.push(currentNode.left);
    }
    if (currentNode.right !== null) {
      queue.push(currentNode.right);
    }
  }
}

const root = new TreeNode(12);
root.left = new TreeNode(7);
root.right = new TreeNode(1);
root.left.left = new TreeNode(9);
root.right.left = new TreeNode(10);
root.right.right = new TreeNode(5);
connect_all_siblings(root);
console.log(printTree(root));
// [ 12, 7, 1, 9, 10, 5 ]
