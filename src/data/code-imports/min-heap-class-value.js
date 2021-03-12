export const minHeapClassValue = `
class MinHeap {
    constructor() {
      this.heapContainer = [];
    }
  
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
  
    getParentIndex(childIndex) {
      return Math.floor((childIndex - 1) / 2);
    }
  
    hasParent(childIndex) {
      return this.getParentIndex(childIndex) >= 0;
    }
  
    parent(childIndex) {
      return this.heapContainer[this.getParentIndex(childIndex)];
    }
  
    poll() {
      if (this.heapContainer.length === 0) {
        return null;
      }
      if (this.heapContainer.length === 1) {
        return this.heapContainer.pop();
      }
      const item = this.heapContainer[0];
      this.heapContainer[0] = this.heapContainer.pop();
      this.heapifyDown();
      return item;
    }
  
    add(item) {
      this.heapContainer.push(item);
      this.heapifyUp();
      return this;
    }
  
    heapifyUp(customStartIndex) {
      let currentIndex = customStartIndex || this.heapContainer.length - 1;
  
      while (
        this.hasParent(currentIndex) &&
        !(this.parent(currentIndex).value <= this.heapContainer[currentIndex].value)
      ) {
        this.swap(currentIndex, this.getParentIndex(currentIndex));
        currentIndex = this.getParentIndex(currentIndex);
      }
    }
  
    heapifyDown(customStartIndex = 0) {
      let currentIndex = customStartIndex;
      let nextIndex = null;
  
      while (this.hasLeftChild(currentIndex)) {
        if (
          this.hasRightChild(currentIndex) &&
          this.rightChild(currentIndex).value <= this.leftChild(currentIndex).value
        ) {
          nextIndex = this.getRightChildIndex(currentIndex);
        } else {
          nextIndex = this.getLeftChildIndex(currentIndex);
        }
  
        if (this.heapContainer[currentIndex].value <= this.heapContainer[nextIndex].value) {
          break;
        }
  
        this.swap(currentIndex, nextIndex);
        currentIndex = nextIndex;
      }
    }
  
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
