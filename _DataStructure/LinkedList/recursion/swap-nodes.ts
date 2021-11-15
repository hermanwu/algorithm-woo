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
export function swapPairs(head: ListNode | null): ListNode | null {
  if (head === null || head.next === null) {
    return head;
  }

  // First node
  const firstNode = head;

  // Last node
  const secondNode = head.next;

  // first node to last node.next
  firstNode.next = swapPairs(secondNode.next);
  // Last node to first node.
  secondNode.next = firstNode;

  return secondNode;
}
