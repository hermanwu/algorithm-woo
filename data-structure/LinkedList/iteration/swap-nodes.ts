import { ListNode } from "../ListNode.class";

/**
https://leetcode.com/problems/swap-nodes-in-pairs/
24. Swap Nodes in Pairs


Given a linked list, swap every two adjacent nodes and return its head. You must solve the problem without modifying the values in the list's nodes (i.e., only nodes themselves may be changed.)


Example 1:
Input: head = [1,2,3,4]
Output: [2,1,4,3]

Example 2:
Input: head = []
Output: []

Example 3:
Input: head = [1]
Output: [1]
*/

/**
 * Key
 * - prev node
 * - dummy
 * - current node
 */
function swapPairs(head: ListNode | null): ListNode | null {
  const dummy = new ListNode(-1);

  dummy.next = head;

  // Get the previous node as reference.
  let prev = dummy;

  while (head !== null && head.next !== null) {
    const firstNode = head;
    const secondNode = head.next;

    // Switch;
    prev.next = secondNode;
    firstNode.next = secondNode.next;
    secondNode.next = firstNode;

    // Update prev;
    prev = firstNode;
    head = firstNode.next;
  }
  return dummy.next;
}
