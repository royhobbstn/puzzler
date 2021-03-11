import { linkedListPrototypeAppend, linkedListPrototypeToArray } from './linked-list-prototype.js';
import { linkedListClass, linkedListClassExt } from './linked-list.js';
import { doublyLinkedListPrototypeAppend } from './doubly-linked-list-prototype.js';
import {
  hashTablePrototypeHash,
  hashTablePrototypeGet,
  hashTablePrototypeSet,
} from './hash-table-prototype.js';

export const LINKED_LIST_CLASS = linkedListClass;
export const LINKED_LIST_CLASS_EXT = linkedListClassExt;
export const LINKED_LIST_PROTOTYPE_APPEND = linkedListPrototypeAppend;
export const LINKED_LIST_PROTOTYPE_TOARRAY = linkedListPrototypeToArray;

export const DOUBLY_LINKED_LIST_PROTOTYPE_APPEND = doublyLinkedListPrototypeAppend;

export const HASH_TABLE_PROTOTYPE_HASH = hashTablePrototypeHash;
export const HASH_TABLE_PROTOTYPE_GET = hashTablePrototypeGet;
export const HASH_TABLE_PROTOTYPE_SET = hashTablePrototypeSet;
