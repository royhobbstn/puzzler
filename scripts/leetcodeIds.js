import { inventory } from '../src/data/inventory.ts';

const arr = [];

Object.keys(inventory).forEach(key => {
  const lcid = inventory[key].lcid;
  if (lcid) {
    arr.push(lcid);
  }
});

console.log(arr.sort((a, b) => a - b));
