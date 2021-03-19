// Connect Level Order Siblings

// Given a binary tree, connect each node with its level order successor. The last node of each level should point to a null node.

class TreeNode {
  constructor(val) {
    this.val = val;
    this.left = null;
    this.right = null;
    this.next = null;
  }
}

function printLevelOrder(root) {
  const arr = [];
  let nextLevelRoot = root;
  while (nextLevelRoot !== null) {
    let temp = [];
    let current = nextLevelRoot;
    nextLevelRoot = null;
    while (current != null) {
      temp.push(current.val);
      if (nextLevelRoot === null) {
        if (current.left !== null) {
          nextLevelRoot = current.left;
        } else if (current.right !== null) {
          nextLevelRoot = current.right;
        }
      }
      current = current.next;
    }
    arr.push(temp);
  }
  return arr;
}

function connect_level_order_siblings(root) {
  if (root === null) {
    return;
  }

  const queue = [];
  queue.push(root);
  while (queue.length > 0) {
    let previousNode = null;
    let levelSize = queue.length;
    // connect all nodes of this level
    for (let i = 0; i < levelSize; i++) {
      let currentNode = queue.shift();
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
}

const root = new TreeNode(12);
root.left = new TreeNode(7);
root.right = new TreeNode(1);
root.left.left = new TreeNode(9);
root.right.left = new TreeNode(10);
root.right.right = new TreeNode(5);
connect_level_order_siblings(root);

console.log(printLevelOrder(root));
// [ [ 12 ], [ 7, 1 ], [ 9, 10, 5 ] ]
