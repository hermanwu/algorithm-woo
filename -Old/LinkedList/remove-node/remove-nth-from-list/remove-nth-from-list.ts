/**
 * Leet Code implementation of singly-linked list
 */
export class ListNode {
  val: number;
  next: ListNode;

  /**
   * Initialize a ListNode object
   *
   * @param val Value to set the node to
   * @param next Node to link the node to
   */
  constructor(val?: number, next?: ListNode) {
    this.val = val === undefined ? 0 : val;
    this.next = next === undefined ? null : next;
  }
}

/**
 * Remove the node n spots from the end of the list and return the head node.
 * We consider the first node in a three-node list two spots from the end,
 * with the end being the third node.
 *
 * @param head Head node in a singly-linked list
 * @param n How many nodes from the end of the list the node we remove should be
 *
 * @returns Head node of the list
 */
// find the end of linkedlist
// from head. have a count -> get count of linkedlist
// count - n
// n = 4 / list length = 3

export function removeNthFromEndImplementation(
  head: ListNode,
  n: number
): ListNode {
  let dummyNode = new ListNode(-1);

  dummyNode.next = head;

  let slow = dummyNode;
  let fast = dummyNode;

  let stepToMove = n + 1;

  for (let i = 0; i <= stepToMove; i++) {
    if (fast === null) {
      throw new Error("invalid n");
    }
    fast = fast.next;
  }

  while (fast !== null) {
    fast = fast.next;
    slow = slow.next;
  }
  slow.next = slow.next.next;

  return dummyNode.next;
}

let test = new ListNode(1, new ListNode(2, new ListNode(3)));

const result = removeNthFromEndImplementation(test, 3);
console.log(result);
