export const doublyLinkedListPrototypeAppend = `
DoublyLinkedList.prototype.append = function(value) {
  const newNode = new DoublyLinkedListNode(value);
  if (!this.head) {
    this.head = newNode;
    this.tail = newNode;
    return this;
  }
  this.tail.next = newNode;
  newNode.previous = this.tail;
  this.tail = newNode;
  return this;
}
`;
