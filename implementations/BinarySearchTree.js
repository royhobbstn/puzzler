class BinarySearchTree {
  constructor() {
    this.root = null;
  }
}

class BinarySearchTreeNode {
  constructor(value) {
    this.value = value;
    this.left = null;
    this.right = null;
  }

  traversePreOrderRecursive() {
    //
  }

  traversePreOrderIterative() {
    //
  }

  traversePostOrderRecursive() {
    //
  }

  traversePostOrderIterative() {
    //
  }

  traverseLevelOrderRecursive() {
    //
  }

  traverseLevelOrderIterative() {
    //
  }

  insert(value) {
    //
  }

  delete(value) {
    //
  }

  search(value) {
    //
  }

  leftHeight() {
    if (!this.left) {
      return 0;
    }

    return this.left.height + 1;
  }

  rightHeight() {
    if (!this.right) {
      return 0;
    }

    return this.right.height + 1;
  }

  height() {
    return Math.max(this.leftHeight, this.rightHeight);
  }
}
