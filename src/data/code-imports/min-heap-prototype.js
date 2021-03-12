export const minChildFns = `
MinHeap.prototype.getLeftChildIndex = function (parentIndex) {
  return 2 * parentIndex + 1;
};
MinHeap.prototype.getRightChildIndex = function (parentIndex) {
  return 2 * parentIndex + 2;
};
MinHeap.prototype.hasLeftChild = function (parentIndex) {
  return this.getLeftChildIndex(parentIndex) < this.heapContainer.length;
};
MinHeap.prototype.hasRightChild = function (parentIndex) {
  return this.getRightChildIndex(parentIndex) < this.heapContainer.length;
};
MinHeap.prototype.leftChild = function (parentIndex) {
  return this.heapContainer[this.getLeftChildIndex(parentIndex)];
};
MinHeap.prototype.rightChild = function (parentIndex) {
  return this.heapContainer[this.getRightChildIndex(parentIndex)];
};`;

export const minParentFns = `
MinHeap.prototype.getParentIndex = function (childIndex) {
    return Math.floor((childIndex - 1) / 2);
  };
  MinHeap.prototype.hasParent = function (childIndex) {
    return this.getParentIndex(childIndex) >= 0;
  };
  MinHeap.prototype.parent = function (childIndex) {
    return this.heapContainer[this.getParentIndex(childIndex)];
  };
`;

export const minHeapifyDown = `
MinHeap.prototype.heapifyDown = function (customStartIndex = 0) {
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
};
`;

export const minHeapifyUp = `
MinHeap.prototype.heapifyUp = function (customStartIndex) {
  let currentIndex = customStartIndex || this.heapContainer.length - 1;
  while (
    this.hasParent(currentIndex) &&
    this.parent(currentIndex) > this.heapContainer[currentIndex]
  ) {
    this.swap(currentIndex, this.getParentIndex(currentIndex));
    currentIndex = this.getParentIndex(currentIndex);
  }
};`;

export const minHeapFind = `
MinHeap.prototype.find = function (item) {
  const foundItemIndices = [];
  for (let itemIndex = 0; itemIndex < this.heapContainer.length; itemIndex += 1) {
    if (item === this.heapContainer[itemIndex]) {
      foundItemIndices.push(itemIndex);
    }
  }
  return foundItemIndices;
};
`;

export const minSwap = `
MinHeap.prototype.swap = function (indexOne, indexTwo) {
  const tmp = this.heapContainer[indexTwo];
  this.heapContainer[indexTwo] = this.heapContainer[indexOne];
  this.heapContainer[indexOne] = tmp;
};
`;
