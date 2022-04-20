/**
https://leetcode.com/problems/reverse-nodes-in-k-group/

25. Reverse Nodes in k-Group

Given the head of a linked list, reverse the nodes of the list k at a time, and return the modified list.

k is a positive integer and is less than or equal to the length of the linked list. 

If the number of nodes is not a multiple of k then left-out nodes, in the end, should remain as it is.

You may not alter the values in the list's nodes, only nodes themselves may be changed.

 */

import { reverseLinkedList } from './reverse-linked-list';

export class ListNode {
  val: number;
  next: ListNode | null;
  constructor(val?: number, next?: ListNode | null) {
    this.val = val === undefined ? 0 : val;
    this.next = next === undefined ? null : next;
  }
}

/**
 * dummy          ->       1 2 3      ->      4 5 6     ->   7 8
 * previousGroup        currentGroup        nextGroup
 *
 */

function reverseKGroup(head: ListNode | null, k: number): ListNode | null {
  let dummy = new ListNode(-1);
  dummy.next = head;

  let previousGroupEndNode = dummy;
  // current group needs to be reveresd when count === k.
  let count = 0;

  // head will keep moving since we have dummy node to the track the beginning.
  while (head !== null) {
    let currentGroupStartNode = head;

    // Find the end node (tail) of the current group
    while (head !== null && count < k - 1) {
      head = head.next;
      count += 1;
    }

    if (head) {
      const currentGroupEndNode = head;
      // Head move to the next group.
      head = head.next;
      // Cut the connection between current group and next group.
      currentGroupEndNode.next = null;
      count += 1;
    }

    if (count === k) {
      // Reverse the group.
      const reversedCurrentGroup = reverseLinkedList(currentGroupStartNode);

      // Connect the current group to previous group
      previousGroupEndNode.next = reversedCurrentGroup;

      // To Connect the current group to next group:
      // First, currentGroupStartNode becomes the previousGroupEndNode after reversal.
      previousGroupEndNode = currentGroupStartNode;
      // Second, connect it to next group's head.
      previousGroupEndNode.next = head;
      // Lastly, reset count.
      count = 0;
    }
  }

  return dummy.next;
}
// const mockNode = new ListNode(1, new ListNode(2, new ListNode(3)));
// const mockSingleNode = new ListNode(1);
// const mockNull = null;
// console.log(mockNode);

<<<<<<< Updated upstream
// console.log(reverseKGroup(mockNode, 2));

// console.log(reverse(mockSingleNode));
// console.log(reverse(mockNull));
=======
// const node = new ListNode(
//   1,
//   new ListNode(2, new ListNode(3, new ListNode(4, new ListNode(5))))
// );
// reverseKGroup(node, 3) // 3 -> 2 -> 1 -> 4 -> 5
>>>>>>> Stashed changes
