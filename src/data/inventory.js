//

import { data as _ll_prepend } from './linked-list/1-prepend.js';
import { data as _ll_append } from './linked-list/2-append.js';
import { data as _ll_delete } from './linked-list/3-delete.js';
import { data as _ll_find } from './linked-list/4-find.js';
import { data as _ll_deleteTail } from './linked-list/5-deleteTail.js';
import { data as _ll_deleteHead } from './linked-list/6-deleteHead.js';
import { data as _ll_fromArray } from './linked-list/7-fromArray.js';
import { data as _ll_toArray } from './linked-list/8-toArray.js';
import { data as _ll_reverse } from './linked-list/9-reverse.js';
import { data as _ll_reverse } from './linked-list/9-reverse.js';
import { data as _dll_prepend } from './doubly-linked-list/10-prepend.js';

const aggregate = {
  1: _ll_prepend,
  2: _ll_append,
  3: _ll_delete,
  4: _ll_find,
  5: _ll_deleteTail,
  6: _ll_deleteHead,
  7: _ll_fromArray,
  8: _ll_toArray,
  9: _ll_reverse,
  10: _dll_prepend,
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
