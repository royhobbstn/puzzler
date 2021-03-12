export const maxHeapDistance = `
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
  
    // heapify up for min heap and max heap
    heapifyUp(customStartIndex) {
      // Take the last element (last in array or the bottom left in a tree)
      // in the heap container and lift it up until it is in the correct
      // order with respect to its parent element.
      let currentIndex = customStartIndex || this.heapContainer.length - 1;
  
      while (
        this.hasParent(currentIndex) &&
        !(this.parent(currentIndex).distance() >= this.heapContainer[currentIndex].distance())
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
          this.rightChild(currentIndex).distance() >= this.leftChild(currentIndex).distance()
        ) {
          nextIndex = this.getRightChildIndex(currentIndex);
        } else {
          nextIndex = this.getLeftChildIndex(currentIndex);
        }
  
        if (this.heapContainer[currentIndex].distance() >= this.heapContainer[nextIndex].distance()) {
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
  
    length() {
      return this.heapContainer.length;
    }
  }
`;
