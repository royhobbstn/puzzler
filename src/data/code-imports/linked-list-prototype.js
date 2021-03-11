export const linkedListPrototypeAppend = `
LinkedList.prototype.append = function (value) {
  const newNode = new LinkedListNode(value);
  if (!this.head) {
    this.head = newNode;
    this.tail = newNode;
    return this;
  }
  this.tail.next = newNode;
  this.tail = newNode;
  return this;
};`;

export const linkedListPrototypeToArray = `
LinkedList.prototype.toArray = function () {
    const values = [];
    let currentNode = this.head;
    while (currentNode) {
      values.push(currentNode.value);
      currentNode = currentNode.next;
    }
    return values;
  };`;
