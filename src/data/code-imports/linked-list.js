// linked list standard
export const linkedListClass = `
class LinkedListNode {
  constructor(value, next = null) {
    this.value = value;
    this.next = next;
  }
}

class LinkedList {
  constructor() {
    this.head = null;
    this.tail = null;
  }
  
  prepend(value) {
    const newNode = new LinkedListNode(value, this.head);
    this.head = newNode;
    if (!this.tail) {
      this.tail = newNode;
    }
    return this;
  }

  append(value) {
    const newNode = new LinkedListNode(value);
    if (!this.head) {
      this.head = newNode;
      this.tail = newNode;
      return this;
    }
    this.tail.next = newNode;
    this.tail = newNode;
    return this;
  }
  
  deleteHead() {
    if (!this.head) {
      return null;
    }
    const deletedHead = this.head;
    if (this.head.next) {
      this.head = this.head.next;
    } else {
      this.head = null;
      this.tail = null;
    }
    return deletedHead;
  }
}
`;

// linked list for hash map
export const linkedListClassExt = `
class LinkedListNode {
  constructor(key, value, next = null) {
    this.key = key;
    this.value = value;
    this.next = next;
  }
}

class LinkedList {
  constructor() {
    this.head = null;
    this.tail = null;
  }
  
  append(key, value) {
    const newNode = new LinkedListNode(key, value);
    if (!this.head) {
      this.head = newNode;
      this.tail = newNode;
      return this;
    }
    this.tail.next = newNode;
    this.tail = newNode;
    return this;
  }
  
  findKey(key) {
    if (!this.head) {
      return null;
    }
    let current = this.head;
    while (current) {
      if (current.key === key) {
        return current;
      }
      current = current.next;
    }
    return null;
  }

  prepend(value) {
    const newNode = new LinkedListNode(value, this.head);
    this.head = newNode;
    if (!this.tail) {
      this.tail = newNode;
    }
    return this;
  }
  
  deleteHead() {
    if (!this.head) {
      return null;
    }
    const deletedHead = this.head;
    if (this.head.next) {
      this.head = this.head.next;
    } else {
      this.head = null;
      this.tail = null;
    }
    return deletedHead;
  }

  deleteKey(key) {
    if (!this.head) {
      return null;
    }
    if (key === this.head.key) {
      const deletedHead = this.head;
      if (this.head.next) {
        this.head = this.head.next;
      } else {
        this.head = null;
        this.tail = null;
      }
      return deletedHead;
    } else if (key === this.tail.key) {
      const deletedTail = this.tail;
      let currentNode = this.head;
      while (currentNode.next) {
        if (!currentNode.next.next) {
          currentNode.next = null;
        } else {
          currentNode = currentNode.next;
        }
      }
      this.tail = currentNode;
      return deletedTail;
    } else {
      let currentNode = this.head;
      while (currentNode.next) {
        if (currentNode.next.key === key) {
          const deletedNode = currentNode.next;
          currentNode.next = deletedNode.next;
          return deletedNode;
        }
        currentNode = currentNode.next;
      }
      return null;
    }
  }
}
`;
