/**
https://leetcode.com/problems/reverse-nodes-in-k-group/

25. Reverse Nodes in k-Group

Given the head of a linked list, reverse the nodes of the list k at a time, and return the modified list.

k is a positive integer and is less than or equal to the length of the linked list. If the number of nodes is not a multiple of k then left-out nodes, in the end, should remain as it is.

You may not alter the values in the list's nodes, only nodes themselves may be changed.

 */

export class ListNode {
  val: number;
  next: ListNode | null;
  constructor(val?: number, next?: ListNode | null) {
    this.val = val === undefined ? 0 : val;
    this.next = next === undefined ? null : next;
  }
}

function reverseKGroup(head: ListNode | null, k: number): ListNode | null {
  let dummy = new ListNode(-1);

  dummy.next = head;
  let previousGroupEndNode = dummy;

  while (head !== null) {
    let count = 1;
    let reversedCurrentGroupHead = null;
    let reversedCurrentEnd = head;
    while (head !== null && count < k) {
      let temp = head;
      head = head.next;
      temp.next = reversedCurrentGroupHead;
      reversedCurrentGroupHead = temp;
    }
    previousGroupEndNode.next = reversedCurrentGroupHead;
    previousGroupEndNode = reversedCurrentEnd;
    reversedCurrentEnd.next = head;
  }

  return dummy.next;
}

// const node = new ListNode(
//   1,
//   new ListNode(2, new ListNode(3, new ListNode(4, new ListNode(5))))
// );

// reverseKGroup(node, 3) // 3 -> 2 -> 1 -> 4 -> 5
