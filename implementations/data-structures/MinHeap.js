class MinHeap {
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
          (!parentItem || parentItem <= this.heapContainer[indexToRemove])
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
      !(this.parent(currentIndex) <= this.heapContainer[currentIndex])
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
        this.rightChild(currentIndex) <= this.leftChild(currentIndex)
      ) {
        nextIndex = this.getRightChildIndex(currentIndex);
      } else {
        nextIndex = this.getLeftChildIndex(currentIndex);
      }

      if (this.heapContainer[currentIndex] <= this.heapContainer[nextIndex]) {
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

let minHeap = new MinHeap();

console.log(Boolean(minHeap) === true);
console.log(minHeap.peek() === null);
console.log(minHeap.isEmpty() === true);

minHeap = new MinHeap();

minHeap.add(5);
console.log(minHeap.isEmpty() === false);
console.log(minHeap.peek() === 5);
console.log(minHeap.toString() === '5');

minHeap.add(3);
console.log(minHeap.peek() === 3);
console.log(minHeap.toString() === '3,5');

minHeap.add(10);
console.log(minHeap.peek() === 3);
console.log(minHeap.toString() === '3,5,10');

minHeap.add(1);
console.log(minHeap.peek() === 1);
console.log(minHeap.toString() === '1,3,10,5');

minHeap.add(1);
console.log(minHeap.peek() === 1);
console.log(minHeap.toString() === '1,1,10,5,3');

console.log(minHeap.poll() === 1);
console.log(minHeap.toString() === '1,3,10,5');

console.log(minHeap.poll() === 1);
console.log(minHeap.toString() === '3,5,10');

console.log(minHeap.poll() === 3);
console.log(minHeap.toString() === '5,10');

minHeap = new MinHeap();

minHeap.add(5);
minHeap.add(3);
minHeap.add(10);
minHeap.add(11);
minHeap.add(1);

console.log(minHeap.toString() === '1,3,10,11,5');

console.log(minHeap.poll() === 1);
console.log(minHeap.toString() === '3,5,10,11');

console.log(minHeap.poll() === 3);
console.log(minHeap.toString() === '5,11,10');

console.log(minHeap.poll() === 5);
console.log(minHeap.toString() === '10,11');

console.log(minHeap.poll() === 10);
console.log(minHeap.toString() === '11');

console.log(minHeap.poll() === 11);
console.log(minHeap.toString() === '');

console.log(minHeap.poll() === null);
console.log(minHeap.toString() === '');

minHeap = new MinHeap();

minHeap.add(3);
minHeap.add(12);
minHeap.add(10);

console.log(minHeap.toString() === '3,12,10');

minHeap.add(11);
console.log(minHeap.toString() === '3,11,10,12');

console.log(minHeap.poll() === 3);
console.log(minHeap.toString() === '10,11,12');

minHeap = new MinHeap();

minHeap.add(3);
minHeap.add(12);
minHeap.add(10);
minHeap.add(11);
minHeap.add(11);

console.log(minHeap.toString() === '3,11,10,12,11');

console.log(JSON.stringify(minHeap.find(5)) === JSON.stringify([]));
console.log(JSON.stringify(minHeap.find(3)) === JSON.stringify([0]));
console.log(JSON.stringify(minHeap.find(11)) === JSON.stringify([1, 4]));

minHeap = new MinHeap();

minHeap.add(3);
minHeap.add(12);
minHeap.add(10);
minHeap.add(11);
minHeap.add(11);

console.log(minHeap.toString() === '3,11,10,12,11');

console.log(minHeap.remove(3).toString() === '10,11,11,12');
console.log(minHeap.remove(3).peek() === 10);
console.log(minHeap.remove(11).toString() === '10,12');
console.log(minHeap.remove(3).peek() === 10);

minHeap = new MinHeap();

minHeap.add(3);
minHeap.add(10);
minHeap.add(5);
minHeap.add(6);
minHeap.add(7);
minHeap.add(4);
minHeap.add(6);
minHeap.add(8);
minHeap.add(2);
minHeap.add(1);

console.log(minHeap.toString() === '1,2,4,6,3,5,6,10,8,7');
console.log(minHeap.remove(8).toString() === '1,2,4,6,3,5,6,10,7');
console.log(minHeap.remove(7).toString() === '1,2,4,6,3,5,6,10');
console.log(minHeap.remove(1).toString() === '2,3,4,6,10,5,6');
console.log(minHeap.remove(2).toString() === '3,6,4,6,10,5');
console.log(minHeap.remove(6).toString() === '3,5,4,10');
console.log(minHeap.remove(10).toString() === '3,5,4');
console.log(minHeap.remove(5).toString() === '3,4');
console.log(minHeap.remove(3).toString() === '4');
console.log(minHeap.remove(4).toString() === '');

minHeap = new MinHeap();

minHeap.add(1);
minHeap.add(2);
minHeap.add(3);
minHeap.add(4);
minHeap.add(5);
minHeap.add(6);
minHeap.add(7);
minHeap.add(8);
minHeap.add(9);

console.log(minHeap.toString() === '1,2,3,4,5,6,7,8,9');

minHeap.remove(2);
console.log(minHeap.toString() === '1,4,3,8,5,6,7,9');

minHeap.remove(4);
console.log(minHeap.toString() === '1,5,3,8,9,6,7');
