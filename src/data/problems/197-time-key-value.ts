import { ALGORITHM, DESIGN } from '../constants';

const solution = [
  { stage: 0, text: '' },
  { stage: 0, text: 'function TimeMap() {' },
  { stage: 1, text: '  this.hash = {};' },
  { stage: 0, text: '}' },
  { stage: 0, text: '' },
  { stage: 0, text: 'TimeMap.prototype.set = function (key, value, timestamp) {' },
  { stage: 2, text: '  if (!this.hash[key]) {' },
  { stage: 3, text: '    this.hash[key] = [];' },
  { stage: 2, text: '  }' },
  { stage: -4, text: '  // push value into created array.  Timestamps are sequential, so these' },
  { stage: -4, text: '  // are automatially inserted in order from low to high' },
  { stage: 4, text: '  this.hash[key].push({ value, timestamp });' },
  { stage: 0, text: '};' },
  { stage: 0, text: '' },
  { stage: 0, text: 'TimeMap.prototype.get = function (key, timestamp) {' },
  { stage: 5, text: '  const arr = this.hash[key];' },
  { stage: 6, text: '  if (!arr) {' },
  { stage: 7, text: "    return '';" },
  { stage: 6, text: '  }' },
  { stage: 0, text: '' },
  { stage: -8, text: '  // conduct a binary search on the array at hash[key]' },
  { stage: 8, text: '  let start = 0;' },
  { stage: 8, text: '  let end = arr.length - 1;' },
  { stage: 9, text: '  let mid;' },
  { stage: 0, text: '' },
  {
    stage: -10,
    text: "  // typical binary search, though we keep track of 'mid' outside of while loop",
  },
  { stage: 10, text: '  while (start <= end) {' },
  { stage: 11, text: '    mid = Math.floor((start + end) / 2);' },
  { stage: 12, text: '    let item = arr[mid];' },
  { stage: 0, text: '' },
  { stage: 13, text: '    if (item.timestamp === timestamp) {' },
  { stage: 14, text: '      return item.value;' },
  { stage: 13, text: '    } else if (item.timestamp > timestamp) {' },
  { stage: 15, text: '      end = mid - 1;' },
  { stage: 13, text: '    } else if (item.timestamp < timestamp) {' },
  { stage: 16, text: '      start = mid + 1;' },
  { stage: 13, text: '    }' },
  { stage: 10, text: '  }' },
  { stage: 0, text: '' },
  { stage: -17, text: "  // we're here if there was no exact match" },
  {
    stage: -17,
    text: '  // check the value at the last middle index, if it is less than timestamp',
  },
  { stage: -17, text: '  // then return it' },
  { stage: -17, text: '  // else check value at middle - 1 index, if it exists, return it' },
  { stage: -17, text: '  // if not (probably due to out of index error) return blank string' },
  {
    stage: 17,
    text:
      "  return arr[mid].timestamp < timestamp ? arr[mid].value : arr[mid - 1] ? arr[mid - 1].value : '';",
  },
  { stage: 0, text: '};' },
  { stage: 0, text: '' },
];

export const data = {
  problemID: 197,
  problemName: `Time Based Key-Value Store`,
  problemText: `Create a timebased key-value store class TimeMap, that supports two operations.

  1. set(string key, string value, int timestamp)
  
    Stores the key and value, along with the given timestamp.

  2. get(string key, int timestamp)
  
    Returns a value such that set(key, value, timestamp_prev) was called previously, with timestamp_prev <= timestamp.
    If there are multiple such values, it returns the one with the largest timestamp_prev.
    If there are no values, it returns the empty string ("").
  
The timestamps for all TimeMap.set operations are strictly increasing.
  `,
  testCases: [
    {
      id: 1,
      name: 'compiles',
      inherit: [],
      code: `const kv = new TimeMap();`,
      evaluate: `Boolean(kv);`,
      expected: true,
    },
    {
      id: 2,
      name: 'read 1',
      inherit: [1],
      code: `kv.set("foo", "bar", 1);`,
      evaluate: `kv.get("foo", 1);`,
      expected: 'bar',
    },
    {
      id: 3,
      name: 'read 2',
      inherit: [1, 2],
      code: ``,
      evaluate: `kv.get("foo", 3);`,
      expected: 'bar',
    },
    {
      id: 4,
      name: 'read 3',
      inherit: [1, 2, 3],
      code: `kv.set("foo", "bar2", 4);`,
      evaluate: `kv.get("foo", 4);`,
      expected: 'bar2',
    },
    {
      id: 5,
      name: 'read 4',
      inherit: [1, 2, 3, 4],
      code: ``,
      evaluate: `kv.get("foo", 5);`,
      expected: 'bar2',
    },
  ],
  setupCode: ``,
  lcid: 981,
  source: ['https://leetcode.com/problems/time-based-key-value-store/'],
  tags: [DESIGN, ALGORITHM],
  solution,
};
