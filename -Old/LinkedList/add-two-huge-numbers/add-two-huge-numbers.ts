// Singly-linked lists are already defined with this interface:
// function ListNode(x) {
//   this.value = x;
//   this.next = null;
// }
//

// handle overflow.
function addTwoHugeNumbers(a, b) {
  // convert list to number;

  let reverseA = reverseNode(a);
  let reverseB = reverseNode(b);

  let sumNode = new ListNode(-1);
  let sumNodePointer = sumNode;

  let remain = 0;

  while (reverseA !== null || reverseB !== null || remain) {
    const sum =
      (reverseA ? reverseA.value : 0) +
      (reverseB ? reverseB.value : 0) +
      remain;

    sumNodePointer.next = new ListNode(sum % 10000);
    sumNodePointer = sumNodePointer.next;

    remain = Math.floor(sum / 10000);

    if (reverseA) reverseA = reverseA.next;
    if (reverseB) reverseB = reverseB.next;
  }

  return reverseNode(sumNode.next);
}

function reverseNode(node) {
  let pointer = null;
  let dummy = node;
  while (dummy !== null) {
    const newNode = new ListNode(dummy.value);
    newNode.next = pointer;
    pointer = newNode;

    dummy = dummy.next;
  }
  return pointer;
}
