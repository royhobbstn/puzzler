import { inventory } from '../src/data/inventory.ts';

let hasErrors = false;

Object.keys(inventory).forEach(key => {
  const numKey = Number(key);
  const problemID = inventory[key].problemID;
  if (numKey !== problemID) {
    hasErrors = true;
    console.log(`key ${numKey} has problemId ${problemID}`);
  }
});

if (hasErrors) {
  throw new Error('There were key integrity errors.');
}
