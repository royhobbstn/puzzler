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
import { data as _ht_implement_set } from './hash-table/25-implement-set.js';
import { data as _ht_implement_get } from './hash-table/26-implement-get.js';
import { data as _ht_implement_delete } from './hash-table/27-implement-delete.js';
import { data as _heap_child_functions } from './heap/28-child-functions.js';
import { data as _heap_parent_functions } from './heap/29-parent-functions.js';
import { data as _heap_peek } from './heap/30-peek.js';
import { data as _heap_find } from './heap/31-find.js';
import { data as _heap_poll } from './heap/32-poll.js';
import { data as _heap_add } from './heap/33-add.js';
import { data as _heap_remove } from './heap/34-remove.js';
import { data as _heap_heapifyUp } from './heap/35-heapifyUp.js';
import { data as _heap_heapifyDown } from './heap/36-heapifyDown.js';
import { data as _bst_insert } from './binary-search-tree/37-insert.js';
import { data as _bst_search } from './binary-search-tree/38-search.js';
import { data as _bst_delete } from './binary-search-tree/39-delete.js';
import { data as _bst_pre_order_iter } from './binary-search-tree/40-pre-order-iterative.js';
import { data as _bst_pre_order_rec } from './binary-search-tree/41-pre-order-recursive.js';
import { data as _bst_in_order_iter } from './binary-search-tree/42-in-order-iterative.js';
import { data as _bst_in_order_rec } from './binary-search-tree/43-in-order-recursive.js';
import { data as _bst_post_order_iter } from './binary-search-tree/44-post-order-iterative.js';
import { data as _bst_post_order_rec } from './binary-search-tree/45-post-order-recursive.js';
import { data as _bst_level_order_bfs } from './binary-search-tree/46-level-order-bfs.js';
import { data as _graph_add_vertex } from './graph/47-add-vertex.js';
import { data as _graph_add_edge } from './graph/48-add-edge.js';
import { data as _graph_delete_vertex } from './graph/49-delete-vertex.js';
import { data as _graph_delete_edge } from './graph/50-delete-edge.js';
import { data as _graph_dfs } from './graph/51-dfs.js';
import { data as _graph_bfs } from './graph/52-bfs.js';
import { data as _trie_insert } from './trie/53-insert.js';
import { data as _trie_search } from './trie/54-search.js';
import { data as _trie_delete } from './trie/55-delete.js';

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
  25: _ht_implement_set,
  26: _ht_implement_get,
  27: _ht_implement_delete,
  28: _heap_child_functions,
  29: _heap_parent_functions,
  30: _heap_peek,
  31: _heap_find,
  32: _heap_poll,
  33: _heap_add,
  34: _heap_remove,
  35: _heap_heapifyUp,
  36: _heap_heapifyDown,
  37: _bst_insert,
  38: _bst_search,
  39: _bst_delete,
  40: _bst_pre_order_iter,
  41: _bst_pre_order_rec,
  42: _bst_in_order_iter,
  43: _bst_in_order_rec,
  44: _bst_post_order_iter,
  45: _bst_post_order_rec,
  46: _bst_level_order_bfs,
  47: _graph_add_vertex,
  48: _graph_add_edge,
  49: _graph_delete_vertex,
  50: _graph_delete_edge,
  51: _graph_dfs,
  52: _graph_bfs,
  53: _trie_insert,
  54: _trie_search,
  55: _trie_delete,
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

// todo shuttle this off to constants.js
export const MIN_EFFORT = 0;
export const MAX_EFFORT = maxEffort;

export const inventory = aggregate;

export const categories = Array.from(
  new Set(Object.keys(aggregate).map(key => aggregate[key].category)),
).sort();
