class ListNode {
  val: number;
  next: ListNode | null;
  constructor(val?: number, next?: ListNode | null) {
    this.val = val === undefined ? 0 : val;
    this.next = next === undefined ? null : next;
  }
}

function reverse(head: ListNode | null): ListNode | null {}

// console.log(new ListNode(1, new ListNode(2, new ListNode(3))));
