import { linkedListPrototypeAppend, linkedListPrototypeToArray } from './linked-list-prototype.js';
import { linkedListClass, linkedListClassExt } from './linked-list.js';
import { doublyLinkedListPrototypeAppend } from './doubly-linked-list-prototype.js';
import {
  hashTablePrototypeHash,
  hashTablePrototypeGet,
  hashTablePrototypeSet,
} from './hash-table-prototype.js';
import {
  minChildFns,
  minHeapifyDown,
  minHeapifyUp,
  minSwap,
  minParentFns,
  minHeapFind,
} from './min-heap-prototype.js';
import { bstInsert, bstSearch, bstTempNodeList } from './binary-search-tree-prototype.js';
import {
  graphPrototypeAddEdge,
  graphPrototypeAddVertex,
  graphPrototypeTempset,
} from './graph-prototype.js';
import { triePrototypeSearch, triePrototypeInsert } from './trie-prototype.js';
import { minHeapClassValue } from './min-heap-class-value.js';
import { minHeapClassPlain } from './min-heap-class-plain.js';
import { maxHeapClassPlain } from './max-heap-class-plain.js';
import { maxHeapDistance } from './max-heap-distance.js';
import { binaryTreeNode } from './binary-tree-node.js';

import { heapGeneric } from './heap-generic.js';

export const LINKED_LIST_CLASS = linkedListClass;
export const LINKED_LIST_CLASS_EXT = linkedListClassExt;
export const LINKED_LIST_PROTOTYPE_APPEND = linkedListPrototypeAppend;
export const LINKED_LIST_PROTOTYPE_TOARRAY = linkedListPrototypeToArray;

export const DOUBLY_LINKED_LIST_PROTOTYPE_APPEND = doublyLinkedListPrototypeAppend;

export const HASH_TABLE_PROTOTYPE_HASH = hashTablePrototypeHash;
export const HASH_TABLE_PROTOTYPE_GET = hashTablePrototypeGet;
export const HASH_TABLE_PROTOTYPE_SET = hashTablePrototypeSet;

export const MIN_HEAP_CHILD_FNS = minChildFns;
export const MIN_HEAP_HEAPIFY_DOWN = minHeapifyDown;
export const MIN_HEAP_HEAPIFY_UP = minHeapifyUp;
export const MIN_HEAP_SWAP = minSwap;
export const MIN_HEAP_PARENT_FNS = minParentFns;
export const MIN_HEAP_FIND = minHeapFind;
export const MIN_HEAP_CLASS_VALUE = minHeapClassValue;
export const MIN_HEAP_CLASS_PLAIN = minHeapClassPlain;

export const MAX_HEAP_CLASS_PLAIN = maxHeapClassPlain;
export const MAX_HEAP_CLASS_DISTANCE = maxHeapDistance;

export const HEAP_GENERIC = heapGeneric;

export const BST_PROTOTYPE_INSERT = bstInsert;
export const BST_PROTOTYPE_SEARCH = bstSearch;
export const BST_TEMP_NODELIST = bstTempNodeList;

export const BINARY_TREE_NODE = binaryTreeNode;

export const GRAPH_PROTOTYPE_ADD_EDGE = graphPrototypeAddEdge;
export const GRAPH_PROTOTYPE_ADD_VERTEX = graphPrototypeAddVertex;
export const GRAPH_PROTOTYPE_TEMPSET = graphPrototypeTempset;

export const TRIE_PROTOTYPE_SEARCH = triePrototypeSearch;
export const TRIE_PROTOTYPE_INSERT = triePrototypeInsert;
