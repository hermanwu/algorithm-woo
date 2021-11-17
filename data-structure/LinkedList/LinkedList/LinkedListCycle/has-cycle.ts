/**
 * Leet Code implementation of singly-linked list
 */
class ListNode<T> {
  val: T | 0;
  next: ListNode<T>;

  /**
   * Initialize a ListNode object
   *
   * @param val Value to set the node to
   * @param next Node to link the node to
   */
  constructor(val?: T, next?: ListNode<T>) {
    this.val = val === undefined ? 0 : val;
    this.next = next === undefined ? null : next;
  }
}

/**
 * Determine whether there is a cycle in the list.
 * A cycle occurs when the next property value of a node points to the memory
 * reference of a node already seen.
 *
 * @param headNode First node in the list
 * @returns Whether a cycle exists
 */
export function hasCycle(headNode: ListNode<number>): boolean {
  if (headNode === undefined) {
    return false;
  }

  let slow = headNode;
  let fast = headNode;

  while (slow !== null && fast !== null && fast.next !== null) {
    slow = slow.next;
    fast = fast.next.next;

    if (slow === fast) {
      return true;
    }
  }

  return false;
}

// Test Case
// input = undefined
// 2. input = new Node(1);
// 3. A -> B -> null
// 4. A -> B -> C -> A

const headNode = new ListNode(1);
headNode.next = new ListNode(2);
headNode.next.next = new ListNode(3);
// headNode.next.next.next = headNode;

// Expect to be true
// console.log(hasCycle(headNode))

// Expect to be false
// console.log(hasCycle(undefined))

// Expect to be true
console.log(hasCycle(headNode));
