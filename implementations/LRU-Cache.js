class DoublyLinkedList {
  constructor() {
    // sentinal head/tail nodes to make operations easier
    this.head = new Node('head', 0);
    this.tail = new Node('tail', 0);
    this.head.next = this.tail;
    this.tail.prev = this.head;
  }

  detach(node) {
    const prev = node.prev;
    const next = node.next;
    prev.next = next;
    next.prev = prev;
  }

  addToFront(node) {
    const head = this.ll.head;
    const hnext = head.next;
    head.next = node;
    node.next = hnext;
    node.prev = head;
    hnext.prev = node;
  }

  removeLRU() {
    const del = this.ll.tail.prev;
    const prev = del.prev;
    prev.next = this.ll.tail;
    this.ll.tail.prev = prev;
    return del;
  }
}

class Node {
  constructor(key, data) {
    this.data = data;
    this.key = key;
    this.prev = null;
    this.next = null;
  }
}

class LRUCache {
  constructor(capacity) {
    this.capacity = capacity;
    this.count = 0;
    this.hash = {};
    this.ll = new DoublyLinkedList();
  }

  get(key) {
    const node = this.hash[key];

    if (node === undefined) {
      return -1;
    }

    this.ll.detach(node);
    this.ll.addToFront(node);

    return node.data;
  }

  put(key, value) {
    let node = this.hash[key];

    if (!node) {
      node = new Node(key, value);
      this.hash[key] = node;
      this.count++;
    } else {
      node.data = value;
      this.ll.detach(node);
    }
    this.ll.addToFront(node);

    if (this.count > this.capacity) {
      const del = this.ll.removeLRU();
      this.hash[del.key] = undefined;
      this.count--;
    }
  }

  printll() {
    let node = this.ll.head;

    while (node) {
      console.log(node.data);
      node = node.next;
    }
  }
}
