//

import { data as _prepend } from './linked-list/1-prepend.js';
import { data as _append } from './linked-list/2-append.js';
import { data as _delete } from './linked-list/3-delete.js';
import { data as _find } from './linked-list/4-find.js';
import { data as _deleteTail } from './linked-list/5-deleteTail.js';
import { data as _deleteHead } from './linked-list/6-deleteHead.js';
import { data as _fromArray } from './linked-list/7-fromArray.js';
import { data as _toArray } from './linked-list/8-toArray.js';
import { data as _reverse } from './linked-list/9-reverse.js';

const aggregate = {
  1: _prepend,
  2: _append,
  3: _delete,
  4: _find,
  5: _deleteTail,
  6: _deleteHead,
  7: _fromArray,
  8: _toArray,
  9: _reverse,
};

let maxEffort = 0;

// add a computed 'effort' property; estimated code lines to write
Object.keys(aggregate).forEach(key => {
  const item = aggregate[key];
  const solutionLines = item.solution.solutionLines;

  let effortCount = 0;
  solutionLines.forEach(line => {
    if (line.stage > 0) {
      effortCount++;
    }
  });

  if (effortCount > maxEffort) {
    maxEffort = effortCount;
  }

  aggregate[key].effort = effortCount;
});

export const MIN_EFFORT = 0;
export const MAX_EFFORT = maxEffort;

export const inventory = aggregate;

export const categories = Array.from(
  new Set(Object.keys(aggregate).map(key => aggregate[key].category)),
).sort();
