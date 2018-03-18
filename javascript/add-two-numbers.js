/**
 You are given two non-empty linked lists representing two non-negative integers. The digits are stored in reverse order and each of their nodes contain a single digit. Add the two numbers and return it as a linked list.

 You may assume the two numbers do not contain any leading zero, except the number 0 itself.

 Example

 Input: (2 -> 4 -> 3) + (5 -> 6 -> 4)
 Output: 7 -> 0 -> 8
 Explanation: 342 + 465 = 807.

 */

var addTwoNumbers = function(l1, l2) {
    let dummy = new ListNode(-1);
    let temp = dummy;
    let carry = 0;

    while (l1 !== null || l2 !== null) {
        if (l1 !== null) {
            carry += l1.val;
            l1 = l1.next;
        }

        if (l2 !== null) {
            carry += l2.val;
            l2 = l2.next;
        }

        temp.next = new ListNode(carry % 10);
        temp = temp.next;

        carry = Math.floor(carry / 10);
    }

    if (carry === 1) {
        temp.next = new ListNode(1);
    }

    return dummy.next;
};