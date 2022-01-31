/**
https://leetcode.com/problems/reverse-nodes-in-k-group/

25. Reverse Nodes in k-Group

Given the head of a linked list, reverse the nodes of the list k at a time, and return the modified list.

k is a positive integer and is less than or equal to the length of the linked list. If the number of nodes is not a multiple of k then left-out nodes, in the end, should remain as it is.

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

function reverseKGroup(head: ListNode | null, k: number): ListNode | null {
  // console.log(head);
  let dummy = new ListNode(-1);

  dummy.next = head;
  let previousGroupEndNode = dummy;
  let count = 0;

  while (head !== null) {
    let currentGroupStartNode = head;
    while (head !== null && count < k) {
      if (count === k - 1) {
        let temp = head;
        head = head.next;
        temp.next = null;
      } else {
        head = head.next;
      }
      count += 1;
    }

    if (count === k) {
      // console.log(currentGroupStartNode);
      const currentGroupNewStart = reverseLinkedList(currentGroupStartNode);
      previousGroupEndNode.next = currentGroupNewStart;
      currentGroupStartNode.next = head;
      previousGroupEndNode = currentGroupStartNode;
      count = 0;
    }
  }

  return dummy.next;
}

const mockNode = new ListNode(1, new ListNode(2, new ListNode(3)));
const mockSingleNode = new ListNode(1);
const mockNull = null;
console.log(mockNode);

console.log(reverseKGroup(mockNode, 2));

// console.log(reverse(mockSingleNode));
// console.log(reverse(mockNull));
