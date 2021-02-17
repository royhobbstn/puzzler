class Node {
  constructor(key, data) {
    this.data = data;
    this.key = key;
    this.prev = null;
    this.next = null;
  }
}

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
    const head = this.head;
    const hnext = head.next;
    head.next = node;
    node.next = hnext;
    node.prev = head;
    hnext.prev = node;
  }

  removeLast() {
    const del = this.tail.prev;
    const prev = del.prev;
    prev.next = this.tail;
    this.tail.prev = prev;
  }
}

class LRUCache {
  constructor(capacity) {
    if (!capacity) {
      throw new Error('Declare LRUCache with an integer capacity > 0.');
    }
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
      this.count++;
      if (this.count > this.capacity) {
        this.ll.removeLast();
        this.count--;
      }
      node = new Node(key, value);
      this.hash[key] = node;
    } else {
      node.data = value;
      this.ll.detach(node);
    }
    this.ll.addToFront(node);
  }
}

LRUCache.prototype.list = function () {
  let arr = [];
  let node = this.ll.head.next;
  while (node && node.next) {
    arr.push({ key: node.key, data: node.data });
    node = node.next;
  }
  return arr;
};

const cache = new LRUCache(3);
cache.put('a', 1);
cache.put('b', 2);
cache.put('c', 3);
cache.put('d', 4);
console.log(cache.list()); // [ { key: 'd', data: 4 }, { key: 'c', data: 3 }, { key: 'b', data: 2 } ]
console.log(cache.get('c')); // 3
console.log(cache.list()); // [ { key: 'c', data: 3 }, { key: 'd', data: 4 }, { key: 'b', data: 2 } ]

const cache2 = new LRUCache(1);
cache2.put('a', 1);
console.log(cache2.list()); // [ { key: 'a', data: 1 } ]
console.log(cache2.get('c')); // -1
