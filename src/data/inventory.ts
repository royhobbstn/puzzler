import { Problem } from './interface';

import { data as _ll_prepend } from './problems/1-prepend';
import { data as _ll_append } from './problems/2-append';
import { data as _ll_delete } from './problems/3-delete';
import { data as _ll_find } from './problems/4-find';
import { data as _ll_deleteTail } from './problems/5-deleteTail.js';
import { data as _ll_deleteHead } from './problems/6-deleteHead.js';
import { data as _ll_fromArray } from './problems/7-fromArray.js';
import { data as _ll_toArray } from './problems/8-toArray.js';
import { data as _ll_reverse } from './problems/9-reverse.js';
import { data as _dll_prepend } from './problems/10-prepend.js';
import { data as _dll_append } from './problems/11-append.js';
import { data as _dll_delete } from './problems/12-delete.js';
import { data as _dll_find } from './problems/13-find.js';
import { data as _dll_deleteTail } from './problems/14-deleteTail.js';
import { data as _dll_deleteHead } from './problems/15-deleteHead.js';
import { data as _dll_fromArray } from './problems/16-fromArray.js';
import { data as _dll_toArray } from './problems/17-toArray.js';
import { data as _dll_reverse } from './problems/18-reverse.js';
import { data as _alg_fibonnaci_recursive } from './problems/19-fibonacci-recursive.js';
import { data as _alg_fibonnaci_iterative } from './problems/20-fibonacci-iterative.js';
import { data as _queue_implement_ll } from './problems/21-implement-from-ll.js';
import { data as _queue_implement_array } from './problems/22-implement-from-array.js';
import { data as _stack_implement_ll } from './problems/23-implement-from-ll.js';
import { data as _stack_implement_array } from './problems/24-implement-from-array.js';
import { data as _ht_implement_set } from './problems/25-implement-set.js';
import { data as _ht_implement_get } from './problems/26-implement-get.js';
import { data as _ht_implement_delete } from './problems/27-implement-delete.js';
import { data as _heap_child_functions } from './problems/28-child-functions.js';
import { data as _heap_parent_functions } from './problems/29-parent-functions.js';
import { data as _heap_peek } from './problems/30-peek.js';
import { data as _heap_find } from './problems/31-find.js';
import { data as _heap_poll } from './problems/32-poll.js';
import { data as _heap_add } from './problems/33-add.js';
import { data as _heap_remove } from './problems/34-remove.js';
import { data as _heap_heapifyUp } from './problems/35-heapifyUp.js';
import { data as _heap_heapifyDown } from './problems/36-heapifyDown.js';
import { data as _bst_insert } from './problems/37-insert.js';
import { data as _bst_search } from './problems/38-search.js';
import { data as _bst_delete } from './problems/39-delete.js';
import { data as _bst_pre_order_iter } from './problems/40-pre-order-iterative.js';
import { data as _bst_pre_order_rec } from './problems/41-pre-order-recursive.js';
import { data as _bst_in_order_iter } from './problems/42-in-order-iterative.js';
import { data as _bst_in_order_rec } from './problems/43-in-order-recursive.js';
import { data as _bst_post_order_iter } from './problems/44-post-order-iterative.js';
import { data as _bst_post_order_rec } from './problems/45-post-order-recursive.js';
import { data as _bst_level_order_bfs } from './problems/46-level-order-bfs.js';
import { data as _graph_add_vertex } from './problems/47-add-vertex.js';
import { data as _graph_add_edge } from './problems/48-add-edge.js';
import { data as _graph_delete_vertex } from './problems/49-delete-vertex.js';
import { data as _graph_delete_edge } from './problems/50-delete-edge.js';
import { data as _graph_dfs_recursive } from './problems/51-dfs-recursive.js';
import { data as _graph_dfs_iterative } from './problems/56-dfs-iterative.js';
import { data as _graph_bfs } from './problems/52-bfs.js';
import { data as _graph_detect_cycle } from './problems/57-detect-cycle.js';
import { data as _graph_check_path } from './problems/58-check-path-exists.js';
import { data as _graph_shortest_path_simple } from './problems/59-shortest-path-simple.js';
import { data as _trie_insert } from './problems/53-insert.js';
import { data as _trie_search } from './problems/54-search.js';
import { data as _trie_delete } from './problems/55-delete.js';
import { data as _binary_search_recursive } from './problems/60-binary-search-recursive.js';
import { data as _binary_search_iterative } from './problems/61-binary-search-iterative.js';
import { data as _sort_quicksort } from './problems/62-quicksort.js';
import { data as _sort_mergesort } from './problems/63-mergesort.js';
import { data as _two_sum } from './problems/64-two-sum.js';
import { data as _minimum_rectangle } from './problems/65-minimum-rectangle.js';
import { data as _lru_cache } from './problems/66-lru-cache.js';
import { data as _basic_calc_parentheses } from './problems/67-basic-calc-parentheses.js';
import { data as _recursion_word_search } from './problems/68-word-search.js';
import { data as _reorder_list } from './problems/69-reorder-list.js';
import { data as _anagrams_in_string } from './problems/70-anagrams-in-string.js';
import { data as _randomized_set } from './problems/71-randomized-set.js';
import { data as _minimum_path_sum } from './problems/72-minimum_path_sum.js';
import { data as _number_of_islands } from './problems/73-number-of-islands.js';
import { data as _decode_ways_recursive } from './problems/74-decode-ways-recursive.js';
import { data as _add_two_numbers } from './problems/75-add-two-numbers.js';
import { data as _merge_intervals } from './problems/76-merge-intervals.js';
import { data as _best_time_stock } from './problems/77-best-time-stock.js';
import { data as _product_except_self } from './problems/78-product-except-self.js';
import { data as _shortest_path_binary_matrix } from './problems/79-shortest-path-binary-matrix.js';
import { data as _palindrome_linked_list } from './problems/80-palindrome-linked-list.js';
import { data as _verify_alien_dictionary } from './problems/81-verify-alien-dictionary.js';
import { data as _length_longest_substring } from './problems/82-length-longest-substring.js';
import { data as _meeting_rooms_2 } from './problems/83-meeting-rooms-2.js';
import { data as _design_metro_system } from './problems/84-design-metro-system.js';
import { data as _maximal_square } from './problems/85-maximal-square.js';
import { data as _find_avg_subarrays } from './problems/86-find-avg-of-subarrays.js';
import { data as _find_max_subarrays } from './problems/87-find-max-of-subarrays.js';
import { data as _smallest_subarray } from './problems/88-smallest-subarray-given-sum.js';
import { data as _longest_substr_k_distinct } from './problems/89-longest-substr-k-distinct.js';
import { data as _fruits_into_basket } from './problems/90-fruits-into-basket.js';
import { data as _no_repeat_substr } from './problems/91-no-repeat-substring.js';
import { data as _longest_substr_same_letter } from './problems/92-longest-substr-same-letter.js';
import { data as _longest_binary_subarray } from './problems/93-longest-binary-subarray-after-repl.js';
import { data as _permutation_in_a_str } from './problems/94-permutation-in-a-string.js';
import { data as _string_anagrams } from './problems/95-string-anagrams.js';
import { data as _smallest_window_count_substr } from './problems/96-smallest-window-count-substr.js';
import { data as _words_concat } from './problems/97-words-concatenation.js';
import { data as _bitwise_xor } from './problems/98-bitwise-xor.js';
import { data as _cyclic_sort } from './problems/99-cyclic-sort.js';
import { data as _find_missing_number } from './problems/100-find-missing-number.js';
import { data as _find_all_missing_numbers } from './problems/101-find-all-missing-numbers.js';
import { data as _find_duplicate_number } from './problems/102-find-duplicate-number.js';
import { data as _find_all_duplicate_numbers } from './problems/103-find-all-duplicate-numbers.js';
import { data as _knapsack } from './problems/104-knapsack.js';
import { data as _linked_list_cycle } from './problems/105-linked-list-cycle.js';
import { data as _middle_linked_list } from './problems/106-middle-of-linked-list.js';
import { data as _merge_k_sorted_lists } from './problems/107-merge-k-sorted-lists.js';
import { data as _insert_intervals } from './problems/108-insert-intervals.js';
import { data as _order_agnostic_binary_search } from './problems/109-order-agnostic-binary-search.js';
import { data as _bitonic_array_max } from './problems/110-bitonic-array-maximum.js';
import { data as _reverse_sub_list } from './problems/111-reverse-sub-list.js';
import { data as _subsets } from './problems/112-subsets.js';
import { data as _subsets_with_duplicates } from './problems/113-subsets-with-duplicates.js';
import { data as _top_k_numbers } from './problems/114-top-k-numbers.js';
import { data as _kth_smallest_number } from './problems/115-kth-smallest-number.js';
import { data as _k_closest_pts } from './problems/116-k-closest-pts.js';
import { data as _connect_ropes } from './problems/117-connect-ropes.js';
import { data as _topological_sort } from './problems/118-topological-sort.js';
import { data as _binary_tree_level_order } from './problems/119-binary-tree-level-order-traversal.js';
import { data as _reverse_level_order } from './problems/120-reverse-level-order-traversal.js';
import { data as _level_averages } from './problems/121-level-averages.js';
import { data as _min_depth_binary_tree } from './problems/122-minimum-depth-binary-tree.js';
import { data as _level_order_successor } from './problems/123-level-order-successor.js';
import { data as _binary_tree_path_sum } from './problems/124-binary-tree-path-sum.js';
import { data as _find_median_stream } from './problems/125-find-median-stream.js';
import { data as _pair_with_target_sum } from './problems/126-pair-with-target-sum.js';
import { data as _remove_duplicates } from './problems/127-remove-duplicates.js';
import { data as _squaring_sorted_array } from './problems/128-squaring-sorted-array.js';
import { data as _corrupt_pair } from './problems/129-corrupt-pair.js';
import { data as _smallest_missing_num } from './problems/130-smallest-missing-number.js';
import { data as _first_k_missing_pos } from './problems/131-first-k-missing-positive.js';
import { data as _start_ll_cycle } from './problems/132-start-ll-cycle.js';
import { data as _happy_number } from './problems/133-happy-number.js';
import { data as _palindrome_ll } from './problems/134-palindrome-ll.js';
import { data as _rearrange_ll } from './problems/135-rearrange-linked-list.js';
import { data as _cycle_circular_arr } from './problems/136-cycle-circular-arr.js';
import { data as _intervals_intersection } from './problems/137-intervals-intersection.js';
import { data as _conflicting_appts } from './problems/138-conflicting-appointments.js';
import { data as _minimum_mtg_rooms } from './problems/139-minimum-mtg-rooms.js';
import { data as _max_cpu_load } from './problems/140-max-cpu-load.js';
import { data as _employee_free_time } from './problems/141-employee-free-time.js';
import { data as _reverse_k_elem_sublist } from './problems/142-reverse-k-elem-sublist.js';
import { data as _reverse_alt_k_elem } from './problems/143-reverse-alt-k-elem.js';
import { data as _rotate_ll } from './problems/144-rotate-linked-list.js';
import { data as _zigzag_traversal } from './problems/145-zigzag-traversal.js';
import { data as _connect_lo_sib } from './problems/146-connect-lo-siblings.js';
import { data as _connect_all_lo_sib } from './problems/147-connect-all-lo-siblings.js';
import { data as _right_view_bin_tree } from './problems/148-right-view-binary-tree.js';
import { data as _all_paths_for_sum } from './problems/149-all-paths-for-sum.js';
import { data as _sum_of_path_numbers } from './problems/150-sum-of-path-numbers.js';
import { data as _path_with_given_seq } from './problems/151-path-with-given-seq.js';
import { data as _count_paths_for_sum } from './problems/152-count-paths-for-sum.js';
import { data as _tree_diameter } from './problems/153-tree-diameter.js';
import { data as _path_with_max_sum } from './problems/154-path-with-max-sum.js';
import { data as _two_heaps } from './problems/155-two-heaps.js';
import { data as _maximize_capital } from './problems/156-maximize-capital.js';
import { data as _next_interval } from './problems/157-next-interval.js';
import { data as _triplet_sum_to_zero } from './problems/158-triplet-sum-to-zero.js';
import { data as _triplet_sum_close_to_target } from './problems/159-triplet-sum-close-to-target.js';
import { data as _triplets_smaller_sum } from './problems/160-triplets-with-smaller-sum.js';
import { data as _subarrays_product_less_target } from './problems/161-subarrays-product-less-target.js';
import { data as _dutch_national_flag } from './problems/162-dutch-national-flag.js';
import { data as _quadruple_sum_to_target } from './problems/163-quadruple-sum-to-target.js';
import { data as _comparing_strings_backspaces } from './problems/164-comparing-strings-backspaces.js';
import { data as _minimum_window_sort } from './problems/165-minimum-window-sort.js';
import { data as _permutations_iter } from './problems/166-permutations-iterative.js';
import { data as _permutations_rec } from './problems/167-permutations-recursive.js';
import { data as _string_perm_chg_case } from './problems/168-string-perm-chg-case.js';
import { data as _balanced_paren_iter } from './problems/169-balanced-parentheses-iterative.js';
import { data as _balanced_paren_rec } from './problems/170-balanced-parentheses-recursive.js';
import { data as _unique_gen_abbrev_iter } from './problems/171-unique-gen-abbrev-iter.js';
import { data as _unique_gen_abbrev_rec } from './problems/172-unique-gen-abbrev-rec.js';
import { data as _eval_expression } from './problems/173-evaluate-expression.js';
import { data as _structural_unique } from './problems/174-structural-unique.js';
import { data as _count_structural_unique } from './problems/175-count-struct-unique.js';
import { data as _ceiling_of_numbers } from './problems/176-ceiling-of-number.js';
import { data as _next_letter } from './problems/177-next-letter.js';
import { data as _number_range } from './problems/178-number-range.js';
import { data as _search_sorted_infinity } from './problems/179-search-sorted-infinity.js';
import { data as _min_difference_elem } from './problems/180-min-difference-elem.js';
import { data as _search_bitonic_arr } from './problems/181-search-bitonic-arr.js';
import { data as _search_rotated_arr } from './problems/182-search-rotated-arr.js';
import { data as _rotation_count } from './problems/183-rotation-count.js';
import { data as _kth_smlst_m_sorted } from './problems/184-kth-smallest-m-srtd.js';
import { data as _kth_smlst_srted_mtrx } from './problems/185-kth-smallest-sorted-matrix.js';
import { data as _smallest_num_range } from './problems/186-smallest-num-range.js';
import { data as _k_prs_lrgst_sum } from './problems/187-k-pairs-largest-sum.js';
import { data as _tasks_scheduling } from './problems/188-tasks-scheduling.js';
import { data as _tasks_sched_orders } from './problems/189-tasks-scheduling-order.js';
import { data as _all_tasks_sched_orders } from './problems/190-all-tasks-sched-orders.js';
import { data as _alien_dictionary } from './problems/191-alien-dictionary.js';
import { data as _reconstructing_seq } from './problems/192-reconstructing-seq.js';
import { data as _min_height_tree } from './problems/193-minimum-height-trees.js';
import { data as _range_sum_query } from './problems/194-range-sum-query.js';
import { data as _minesweeper } from './problems/195-minesweeper.js';
import { data as _max_area_island } from './problems/196-max-area-island.js';
import { data as _time_key_value } from './problems/197-time-key-value.js';
import { data as _interval_intersections } from './problems/198-interval-intersections.js';
import { data as _valid_sudoku } from './problems/199-valid-sudoku.js';
import { data as _max_subarray } from './problems/200-maximum_subarray.js';

import { ADVANCED, EXPERT, INTERMEDIATE, BEGINNER } from './constants';

const aggregate: Record<string, Problem> = {
  '1': _ll_prepend,
  '2': _ll_append,
  '3': _ll_delete,
  '4': _ll_find,
  '5': _ll_deleteTail,
  '6': _ll_deleteHead,
  '7': _ll_fromArray,
  '8': _ll_toArray,
  '9': _ll_reverse,
  '10': _dll_prepend,
  '11': _dll_append,
  '12': _dll_delete,
  '13': _dll_find,
  '14': _dll_deleteTail,
  '15': _dll_deleteHead,
  '16': _dll_fromArray,
  '17': _dll_toArray,
  '18': _dll_reverse,
  '19': _alg_fibonnaci_recursive,
  '20': _alg_fibonnaci_iterative,
  '21': _queue_implement_ll,
  '22': _queue_implement_array,
  '23': _stack_implement_ll,
  '24': _stack_implement_array,
  '25': _ht_implement_set,
  '26': _ht_implement_get,
  '27': _ht_implement_delete,
  '28': _heap_child_functions,
  '29': _heap_parent_functions,
  '30': _heap_peek,
  '31': _heap_find,
  '32': _heap_poll,
  '33': _heap_add,
  '34': _heap_remove,
  '35': _heap_heapifyUp,
  '36': _heap_heapifyDown,
  '37': _bst_insert,
  '38': _bst_search,
  '39': _bst_delete,
  '40': _bst_pre_order_iter,
  '41': _bst_pre_order_rec,
  '42': _bst_in_order_iter,
  '43': _bst_in_order_rec,
  '44': _bst_post_order_iter,
  '45': _bst_post_order_rec,
  '46': _bst_level_order_bfs,
  '47': _graph_add_vertex,
  '48': _graph_add_edge,
  '49': _graph_delete_vertex,
  '50': _graph_delete_edge,
  '51': _graph_dfs_recursive,
  '52': _graph_bfs,
  '53': _trie_insert,
  '54': _trie_search,
  '55': _trie_delete,
  '56': _graph_dfs_iterative,
  '57': _graph_detect_cycle,
  '58': _graph_check_path,
  '59': _graph_shortest_path_simple,
  '60': _binary_search_recursive,
  '61': _binary_search_iterative,
  '62': _sort_quicksort,
  '63': _sort_mergesort,
  '64': _two_sum,
  '65': _minimum_rectangle,
  '66': _lru_cache,
  '67': _basic_calc_parentheses,
  '68': _recursion_word_search,
  '69': _reorder_list,
  '70': _anagrams_in_string,
  '71': _randomized_set,
  '72': _minimum_path_sum,
  '73': _number_of_islands,
  '74': _decode_ways_recursive,
  '75': _add_two_numbers,
  '76': _merge_intervals,
  '77': _best_time_stock,
  '78': _product_except_self,
  '79': _shortest_path_binary_matrix,
  '80': _palindrome_linked_list,
  '81': _verify_alien_dictionary,
  '82': _length_longest_substring,
  '83': _meeting_rooms_2,
  '84': _design_metro_system,
  '85': _maximal_square,
  '86': _find_avg_subarrays,
  '87': _find_max_subarrays,
  '88': _smallest_subarray,
  '89': _longest_substr_k_distinct,
  '90': _fruits_into_basket,
  '91': _no_repeat_substr,
  '92': _longest_substr_same_letter,
  '93': _longest_binary_subarray,
  '94': _permutation_in_a_str,
  '95': _string_anagrams,
  '96': _smallest_window_count_substr,
  '97': _words_concat,
  '98': _bitwise_xor,
  '99': _cyclic_sort,
  '100': _find_missing_number,
  '101': _find_all_missing_numbers,
  '102': _find_duplicate_number,
  '103': _find_all_duplicate_numbers,
  '104': _knapsack,
  '105': _linked_list_cycle,
  '106': _middle_linked_list,
  '107': _merge_k_sorted_lists,
  '108': _insert_intervals,
  '109': _order_agnostic_binary_search,
  '110': _bitonic_array_max,
  '111': _reverse_sub_list,
  '112': _subsets,
  '113': _subsets_with_duplicates,
  '114': _top_k_numbers,
  '115': _kth_smallest_number,
  '116': _k_closest_pts,
  '117': _connect_ropes,
  '118': _topological_sort,
  '119': _binary_tree_level_order,
  '120': _reverse_level_order,
  '121': _level_averages,
  '122': _min_depth_binary_tree,
  '123': _level_order_successor,
  '124': _binary_tree_path_sum,
  '125': _find_median_stream,
  '126': _pair_with_target_sum,
  '127': _remove_duplicates,
  '128': _squaring_sorted_array,
  '129': _corrupt_pair,
  '130': _smallest_missing_num,
  '131': _first_k_missing_pos,
  '132': _start_ll_cycle,
  '133': _happy_number,
  '134': _palindrome_ll,
  '135': _rearrange_ll,
  '136': _cycle_circular_arr,
  '137': _intervals_intersection,
  '138': _conflicting_appts,
  '139': _minimum_mtg_rooms,
  '140': _max_cpu_load,
  '141': _employee_free_time,
  '142': _reverse_k_elem_sublist,
  '143': _reverse_alt_k_elem,
  '144': _rotate_ll,
  '145': _zigzag_traversal,
  '146': _connect_lo_sib,
  '147': _connect_all_lo_sib,
  '148': _right_view_bin_tree,
  '149': _all_paths_for_sum,
  '150': _sum_of_path_numbers,
  '151': _path_with_given_seq,
  '152': _count_paths_for_sum,
  '153': _tree_diameter,
  '154': _path_with_max_sum,
  '155': _two_heaps,
  '156': _maximize_capital,
  '157': _next_interval,
  '158': _triplet_sum_to_zero,
  '159': _triplet_sum_close_to_target,
  '160': _triplets_smaller_sum,
  '161': _subarrays_product_less_target,
  '162': _dutch_national_flag,
  '163': _quadruple_sum_to_target,
  '164': _comparing_strings_backspaces,
  '165': _minimum_window_sort,
  '166': _permutations_iter,
  '167': _permutations_rec,
  '168': _string_perm_chg_case,
  '169': _balanced_paren_iter,
  '170': _balanced_paren_rec,
  '171': _unique_gen_abbrev_iter,
  '172': _unique_gen_abbrev_rec,
  '173': _eval_expression,
  '174': _structural_unique,
  '175': _count_structural_unique,
  '176': _ceiling_of_numbers,
  '177': _next_letter,
  '178': _number_range,
  '179': _search_sorted_infinity,
  '180': _min_difference_elem,
  '181': _search_bitonic_arr,
  '182': _search_rotated_arr,
  '183': _rotation_count,
  '184': _kth_smlst_m_sorted,
  '185': _kth_smlst_srted_mtrx,
  '186': _smallest_num_range,
  '187': _k_prs_lrgst_sum,
  '188': _tasks_scheduling,
  '189': _tasks_sched_orders,
  '190': _all_tasks_sched_orders,
  '191': _alien_dictionary,
  '192': _reconstructing_seq,
  '193': _min_height_tree,
  '194': _range_sum_query,
  '195': _minesweeper,
  '196': _max_area_island,
  '197': _time_key_value,
  '198': _interval_intersections,
  '199': _valid_sudoku,
  '200': _max_subarray,
};

// add a computed 'effort' property; estimated code lines to write
Object.keys(aggregate).forEach(key => {
  const item = aggregate[key];

  let effortCount = 0;
  item.solution.forEach(line => {
    if (line.stage > 0) {
      effortCount++;
    }
  });

  aggregate[key].effort = effortCount;

  if (effortCount > 30) {
    aggregate[key].tags.push(EXPERT);
  } else if (effortCount > 22) {
    aggregate[key].tags.push(ADVANCED);
  } else if (effortCount > 14) {
    aggregate[key].tags.push(INTERMEDIATE);
  } else {
    aggregate[key].tags.push(BEGINNER);
  }
});

export const inventory = aggregate;

const taglist: string[] = [];
Object.keys(aggregate).forEach(key => {
  const list = aggregate[key].tags;
  list.forEach(tag => {
    taglist.push(tag);
  });
});

export const tags = Array.from(new Set(taglist)).sort();
