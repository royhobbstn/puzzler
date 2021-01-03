class MaxHeap {
  constructor() {
    this.heapContainer = [];
  }

  // child utils
  getLeftChildIndex(parentIndex) {
    return 2 * parentIndex + 1;
  }

  getRightChildIndex(parentIndex) {
    return 2 * parentIndex + 2;
  }

  hasLeftChild(parentIndex) {
    return this.getLeftChildIndex(parentIndex) < this.heapContainer.length;
  }

  hasRightChild(parentIndex) {
    return this.getRightChildIndex(parentIndex) < this.heapContainer.length;
  }

  leftChild(parentIndex) {
    return this.heapContainer[this.getLeftChildIndex(parentIndex)];
  }

  rightChild(parentIndex) {
    return this.heapContainer[this.getRightChildIndex(parentIndex)];
  }

  // parent utils
  getParentIndex(childIndex) {
    return Math.floor((childIndex - 1) / 2);
  }

  hasParent(childIndex) {
    return this.getParentIndex(childIndex) >= 0;
  }

  parent(childIndex) {
    return this.heapContainer[this.getParentIndex(childIndex)];
  }

  // peek
  peek() {
    if (this.heapContainer.length === 0) {
      return null;
    }

    return this.heapContainer[0];
  }

  // find
  find(item) {
    const foundItemIndices = [];

    for (let itemIndex = 0; itemIndex < this.heapContainer.length; itemIndex += 1) {
      if (item === this.heapContainer[itemIndex]) {
        foundItemIndices.push(itemIndex);
      }
    }

    return foundItemIndices;
  }

  // poll
  poll() {
    if (this.heapContainer.length === 0) {
      return null;
    }

    if (this.heapContainer.length === 1) {
      return this.heapContainer.pop();
    }

    const item = this.heapContainer[0];

    // Move the last element from the end to the head.
    this.heapContainer[0] = this.heapContainer.pop();
    this.heapifyDown();

    return item;
  }

  // add
  add(item) {
    this.heapContainer.push(item);
    this.heapifyUp();
    return this;
  }

  // remove for min heap or max heap
  remove(item) {
    // Find number of items to remove.
    const numberOfItemsToRemove = this.find(item).length;

    for (let iteration = 0; iteration < numberOfItemsToRemove; iteration += 1) {
      // We need to find item index to remove each time after removal since
      // indices are being changed after each heapify process.
      const indexToRemove = this.find(item).pop();

      // If we need to remove last child in the heap then just remove it.
      // There is no need to heapify the heap afterwards.
      if (indexToRemove === this.heapContainer.length - 1) {
        this.heapContainer.pop();
      } else {
        // Move last element in heap to the vacant (removed) position.
        this.heapContainer[indexToRemove] = this.heapContainer.pop();

        // Get parent.
        const parentItem = this.parent(indexToRemove);

        // If there is no parent or parent is in correct order with the node
        // we're going to delete then heapify down. Otherwise heapify up.
        if (
          this.hasLeftChild(indexToRemove) &&
          (!parentItem || parentItem >= this.heapContainer[indexToRemove])
        ) {
          this.heapifyDown(indexToRemove);
        } else {
          this.heapifyUp(indexToRemove);
        }
      }
    }

    return this;
  }

  // heapify up for min heap and max heap
  heapifyUp(customStartIndex) {
    // Take the last element (last in array or the bottom left in a tree)
    // in the heap container and lift it up until it is in the correct
    // order with respect to its parent element.
    let currentIndex = customStartIndex || this.heapContainer.length - 1;

    while (
      this.hasParent(currentIndex) &&
      !(this.parent(currentIndex) >= this.heapContainer[currentIndex])
    ) {
      this.swap(currentIndex, this.getParentIndex(currentIndex));
      currentIndex = this.getParentIndex(currentIndex);
    }
  }

  // heapify down for min heap or max heap
  heapifyDown(customStartIndex = 0) {
    // Compare the parent element to its children and swap parent with the appropriate
    // child (smallest child for MinHeap, largest child for MaxHeap).
    // Do the same for next children after swap.
    let currentIndex = customStartIndex;
    let nextIndex = null;

    while (this.hasLeftChild(currentIndex)) {
      if (
        this.hasRightChild(currentIndex) &&
        this.rightChild(currentIndex) >= this.leftChild(currentIndex)
      ) {
        nextIndex = this.getRightChildIndex(currentIndex);
      } else {
        nextIndex = this.getLeftChildIndex(currentIndex);
      }

      if (this.heapContainer[currentIndex] >= this.heapContainer[nextIndex]) {
        break;
      }

      this.swap(currentIndex, nextIndex);
      currentIndex = nextIndex;
    }
  }

  // no, but added as utility
  swap(indexOne, indexTwo) {
    const tmp = this.heapContainer[indexTwo];
    this.heapContainer[indexTwo] = this.heapContainer[indexOne];
    this.heapContainer[indexOne] = tmp;
  }

  // no, but useful for tests
  isEmpty() {
    return !this.heapContainer.length;
  }

  // no, but useful for tests
  toString() {
    return this.heapContainer.toString();
  }
}

let maxHeap = new MaxHeap();

console.log(Boolean(maxHeap));
console.log(maxHeap.peek() === null);
console.log(maxHeap.isEmpty() === true);

maxHeap = new MaxHeap();

maxHeap.add(5);
console.log(maxHeap.isEmpty() === false);
console.log(maxHeap.peek() === 5);
console.log(maxHeap.toString() === '5');

maxHeap.add(3);
console.log(maxHeap.peek() === 5);
console.log(maxHeap.toString() === '5,3');

maxHeap.add(10);
console.log(maxHeap.peek() === 10);
console.log(maxHeap.toString() === '10,3,5');

maxHeap.add(1);
console.log(maxHeap.peek() === 10);
console.log(maxHeap.toString() === '10,3,5,1');

maxHeap.add(1);
console.log(maxHeap.peek() === 10);
console.log(maxHeap.toString() === '10,3,5,1,1');

console.log(maxHeap.poll() === 10);
console.log(maxHeap.toString() === '5,3,1,1');

console.log(maxHeap.poll() === 5);
console.log(maxHeap.toString() === '3,1,1');

console.log(maxHeap.poll() === 3);
console.log(maxHeap.toString() === '1,1');

maxHeap = new MaxHeap();

maxHeap.add(5);
maxHeap.add(3);
maxHeap.add(10);
maxHeap.add(11);
maxHeap.add(1);

console.log(maxHeap.toString() === '11,10,5,3,1');

console.log(maxHeap.poll() === 11);
console.log(maxHeap.toString() === '10,3,5,1');

console.log(maxHeap.poll() === 10);
console.log(maxHeap.toString() === '5,3,1');

console.log(maxHeap.poll() === 5);
console.log(maxHeap.toString() === '3,1');

console.log(maxHeap.poll() === 3);
console.log(maxHeap.toString() === '1');

console.log(maxHeap.poll() === 1);
console.log(maxHeap.toString() === '');

console.log(maxHeap.poll() === null);
console.log(maxHeap.toString() === '');

maxHeap = new MaxHeap();

maxHeap.add(3);
maxHeap.add(12);
maxHeap.add(10);

console.log(maxHeap.toString() === '12,3,10');

maxHeap.add(11);
console.log(maxHeap.toString() === '12,11,10,3');

console.log(maxHeap.poll() === 12);
console.log(maxHeap.toString() === '11,3,10');

maxHeap = new MaxHeap();

maxHeap.add(3);
maxHeap.add(12);
maxHeap.add(10);
maxHeap.add(11);
maxHeap.add(11);

console.log(maxHeap.toString() === '12,11,10,3,11');

console.log(JSON.stringify(maxHeap.find(5)) === JSON.stringify([]));
console.log(JSON.stringify(maxHeap.find(12)) === JSON.stringify([0]));
console.log(JSON.stringify(maxHeap.find(11)) === JSON.stringify([1, 4]));

maxHeap = new MaxHeap();

maxHeap.add(3);
maxHeap.add(12);
maxHeap.add(10);
maxHeap.add(11);
maxHeap.add(11);

console.log(maxHeap.toString() === '12,11,10,3,11');

console.log(maxHeap.remove(12).toString() === '11,11,10,3');
console.log(maxHeap.remove(12).peek() === 11);
console.log(maxHeap.remove(11).toString() === '10,3');
console.log(maxHeap.remove(10).peek() === 3);

maxHeap = new MaxHeap();

maxHeap.add(3);
maxHeap.add(10);
maxHeap.add(5);
maxHeap.add(6);
maxHeap.add(7);
maxHeap.add(4);
maxHeap.add(6);
maxHeap.add(8);
maxHeap.add(2);
maxHeap.add(1);

console.log(maxHeap.toString() === '10,8,6,7,6,4,5,3,2,1');
console.log(maxHeap.remove(4).toString() === '10,8,6,7,6,1,5,3,2');
console.log(maxHeap.remove(3).toString() === '10,8,6,7,6,1,5,2');
console.log(maxHeap.remove(5).toString() === '10,8,6,7,6,1,2');
console.log(maxHeap.remove(10).toString() === '8,7,6,2,6,1');
console.log(maxHeap.remove(6).toString() === '8,7,1,2');
console.log(maxHeap.remove(2).toString() === '8,7,1');
console.log(maxHeap.remove(1).toString() === '8,7');
console.log(maxHeap.remove(7).toString() === '8');
console.log(maxHeap.remove(8).toString() === '');
