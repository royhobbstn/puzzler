class BinarySearchTreeNode {
  constructor(value) {
    this.value = value;
    this.left = null;
    this.right = null;
  }
}

class BinarySearchTree {
  constructor() {
    this.root = null;
  }

  callback(value) {
    console.log(value);
  }

  traversePreOrderRecursive(node = this.root) {
    if (!node) {
      return;
    }
    this.callback(node.value);
    this.traversePreOrderRecursive(node.left);
    this.traversePreOrderRecursive(node.right);
  }

  traversePreOrderIterative(node = this.root) {
    const nodeStack = [];
    nodeStack.push(node);

    while (nodeStack.length) {
      let next = nodeStack.pop();
      this.callback(next.value);
      if (next.right) {
        nodeStack.push(next.right);
      }
      if (next.left) {
        nodeStack.push(next.left);
      }
    }
  }

  traverseInOrderRecursive(node = this.root) {
    if (!node) {
      return;
    }
    this.traverseInOrderRecursive(node.left);
    this.callback(node.value);
    this.traverseInOrderRecursive(node.right);
  }

  traverseInOrderIterative(node = this.root) {
    let stack = [];
    let done = false;

    while (!done) {
      if (node != null) {
        stack.push(node);
        node = node.left;
      } else {
        if (stack.length) {
          node = stack.pop();
          this.callback(node.value);
          node = node.right;
        } else {
          done = true;
        }
      }
    }
  }

  traversePostOrderRecursive(node = this.root) {
    if (node.left) {
      this.traversePostOrderRecursive(node.left);
    }
    if (node.right) {
      this.traversePostOrderRecursive(node.right);
    }
    this.callback(node.value);
  }

  traversePostOrderIterative(node = this.root) {
    const s1 = [];
    const s2 = [];
    s1.push(node);

    while (s1.length) {
      const next = s1.pop();
      s2.push(next);

      if (next.left) {
        s1.push(next.left);
      }
      if (next.right) {
        s1.push(next.right);
      }
    }
    while (s2.length) {
      const next = s2.pop();
      this.callback(next.value);
    }
  }

  traverseLevelOrderBfs(node = this.root) {
    const queue = [];
    if (!node) {
      return;
    }
    queue.push(node);
    while (queue.length) {
      const temp = queue.shift();
      this.callback(temp.value);
      if (temp.left) {
        queue.push(temp.left);
      }
      if (temp.right) {
        queue.push(temp.right);
      }
    }
  }

  insert(value) {
    const thisNode = new BinarySearchTreeNode(value);
    if (!this.root) {
      this.root = thisNode;
    } else {
      let currentRoot = this.root;
      while (true) {
        if (currentRoot.value > value) {
          if (currentRoot.left != null) {
            currentRoot = currentRoot.left;
          } else {
            currentRoot.left = thisNode;
            break;
          }
        } else if (currentRoot.value < value) {
          if (currentRoot.right != null) {
            currentRoot = currentRoot.right;
          } else {
            currentRoot.right = thisNode;
            break;
          }
        } else {
          break;
        }
      }
    }
  }

  delete(value) {
    return deleteRecursively(this.root, value);

    function deleteRecursively(root, value) {
      if (!root) {
        return null;
      } else if (value < root.value) {
        root.left = deleteRecursively(root.left, value);
      } else if (value > root.value) {
        root.right = deleteRecursively(root.right, value);
      } else {
        if (!root.left && !root.right) {
          return null;
        } else if (!root.left) {
          root = root.right;
          return root;
        } else if (!root.right) {
          root = root.left;
          return root;
        } else {
          const temp = findMin(root.right);
          root.value = temp.value;
          root.right = deleteRecursively(root.right, temp.value);
          return root;
        }
      }
      return root;
    }

    function findMin(root) {
      while (root.left) {
        root = root.left;
      }
      return root;
    }
  }

  search(value) {
    let currentRoot = this.root;
    let found = false;
    while (currentRoot) {
      if (currentRoot.value > value) {
        currentRoot = currentRoot.left;
      } else if (currentRoot.value < value) {
        currentRoot = currentRoot.right;
      } else {
        found = true;
        break;
      }
    }
    return found;
  }

  //
}

const tree = new BinarySearchTree();

tree.insert(5);
tree.insert(3);
tree.insert(11);
tree.insert(0);
tree.insert(7);
tree.insert(2);

console.log(tree.search(5));
console.log(tree.search(3));
console.log(tree.search(11));
console.log(tree.search(0));
console.log(tree.search(7));
console.log(tree.search(2));

console.log(tree.search(-1));
console.log(tree.search(1));
console.log(tree.search(4));
console.log(tree.search(6));
console.log(tree.search(8));
console.log(tree.search(59));

tree.traversePreOrderIterative();
console.log('-');
tree.traversePreOrderRecursive();
console.log('--');
tree.traverseInOrderIterative();
console.log('-');
tree.traverseInOrderRecursive();
console.log('--');
tree.traversePostOrderIterative();
console.log('-');
tree.traversePostOrderRecursive();
console.log('--');
tree.traverseLevelOrderBfs();

tree.delete(5);
tree.delete(3);
tree.delete(11);

console.log(tree.search(5));
console.log(tree.search(3));
console.log(tree.search(11));
console.log(tree.search(0));
console.log(tree.search(7));
console.log(tree.search(2));
