class RandomizedSet {
  constructor() {
    this.dict = {};
    this.list = [];
  }

  insert(val) {
    if (this.dict[val] != null) {
      return false;
    }
    this.dict[val] = this.list.length;
    this.list.push(val);
    return true;
  }

  remove(val) {
    if (this.dict[val] == null) {
      return false;
    }

    // swap element to delete with element at last index
    const lastElement = this.list[this.list.length - 1];
    const idx = this.dict[val];
    this.list[idx] = lastElement;
    this.dict[lastElement] = idx;

    // delete the last element
    this.list.pop();
    delete this.dict[val];
    return true;
  }

  getRandom() {
    if (!this.list.length) {
      return null;
    }
    return this.list[Math.floor(Math.random(1) * this.list.length)];
  }
}

console.log('---');
const randomizedSet = new RandomizedSet();
console.log(randomizedSet.getRandom()); // null
console.log(randomizedSet.insert(1)); // true
console.log(randomizedSet.remove(2)); // false
console.log(randomizedSet.insert(2)); // true
console.log(randomizedSet.getRandom()); // 1 or 2 randomly.
console.log(randomizedSet.remove(1)); // true
console.log(randomizedSet.insert(2)); // false
console.log(randomizedSet.getRandom()); // 2.
