export const hashTablePrototypeHash = `
HashTable.prototype.hash = function (key) {
  const hash = Array.from(key).reduce(
    (hashAccumulator, keySymbol) => hashAccumulator + keySymbol.charCodeAt(0),
    0,
  );
  return hash % this.buckets.length;
};`;

export const hashTablePrototypeGet = `
HashTable.prototype.get = function (key) {
  const bucketLinkedList = this.buckets[this.hash(key)];
  const node = bucketLinkedList.findKey(key);
  return node ? node.value : undefined;
};`;

export const hashTablePrototypeSet = `
HashTable.prototype.set = function (key, value) {
  const keyHash = this.hash(key);
  const bucketLinkedList = this.buckets[keyHash];
  const node = bucketLinkedList.findKey(key);
  if (!node) {
    bucketLinkedList.append(key, value);
  } else {
    node.value = value;
  }
};`;
