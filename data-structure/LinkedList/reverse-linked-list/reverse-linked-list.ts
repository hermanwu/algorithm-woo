class ListNode {
  val: number;
  next: ListNode | null;
  constructor(val?: number, next?: ListNode | null) {
    this.val = val === undefined ? 0 : val;
    this.next = next === undefined ? null : next;
  }
}

export function reverseLinkedList(head: ListNode | null): ListNode | null {
  let tail = null;

  while (head) {
    const temp = head;
    head = head.next;
    temp.next = tail;
    tail = temp;
  }
  return tail;
}

const mockNode = new ListNode(1, new ListNode(2, new ListNode(3)));
const mockSingleNode = new ListNode(1);
const mockNull = null;
console.log(mockNode);

console.log(reverseLinkedList(mockNode));
console.log(reverseLinkedList(mockSingleNode));
console.log(reverseLinkedList(mockNull));
