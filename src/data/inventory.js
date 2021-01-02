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
import { data as _dll_prepend } from './doubly-linked-list/10-prepend.js';
import { data as _dll_append } from './doubly-linked-list/11-append.js';
import { data as _dll_delete } from './doubly-linked-list/12-delete.js';
import { data as _dll_find } from './doubly-linked-list/13-find.js';
import { data as _dll_deleteTail } from './doubly-linked-list/14-deleteTail.js';
import { data as _dll_deleteHead } from './doubly-linked-list/15-deleteHead.js';
import { data as _dll_fromArray } from './doubly-linked-list/16-fromArray.js';
import { data as _dll_toArray } from './doubly-linked-list/17-toArray.js';
import { data as _dll_reverse } from './doubly-linked-list/18-reverse.js';
import { data as _alg_fibonnaci_recursive } from './algorithms/19-fibonacci-recursive.js';
import { data as _alg_fibonnaci_iterative } from './algorithms/20-fibonacci-iterative.js';
import { data as _queue_implement_ll } from './queue/21-implement-from-ll.js';
import { data as _queue_implement_array } from './queue/22-implement-from-array.js';
import { data as _stack_implement_ll } from './stack/23-implement-from-ll.js';
import { data as _stack_implement_array } from './stack/24-implement-from-array.js';

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
  11: _dll_append,
  12: _dll_delete,
  13: _dll_find,
  14: _dll_deleteTail,
  15: _dll_deleteHead,
  16: _dll_fromArray,
  17: _dll_toArray,
  18: _dll_reverse,
  19: _alg_fibonnaci_recursive,
  20: _alg_fibonnaci_iterative,
  21: _queue_implement_ll,
  22: _queue_implement_array,
  23: _stack_implement_ll,
  24: _stack_implement_array,
};

// todo this is crazy.  should be able to do the above dynamically

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

// todo shuttle this off to constants.js
export const MIN_EFFORT = 0;
export const MAX_EFFORT = maxEffort;

export const inventory = aggregate;

export const categories = Array.from(
  new Set(Object.keys(aggregate).map(key => aggregate[key].category)),
).sort();
