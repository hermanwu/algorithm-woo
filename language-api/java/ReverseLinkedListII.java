/**

 Reverse a linked list from position m to n. Do it in-place and in one-pass.

 For example:
 Given 1->2->3->4->5->NULL, m = 2 and n = 4,

 return 1->4->3->2->5->NULL.

 Note:
 Given m, n satisfy the following condition:
 1 ≤ m ≤ n ≤ length of list.

 */
public class ReverseLinkedListII {
    public ListNode reverseBetween(ListNode head, int m, int n) {

        // create a dummy node
        ListNode dummy = new ListNode(-1);
        // move to the node before the starting node
        dummy.next = head;
        ListNode pre = dummy;

        for (int i = 0; i < m - 1; i++) {
            pre = pre.next;
        }

        ListNode first = pre.next;
        ListNode second = pre.next.next;

        for (int i = 0; i < n - m; i++)  {
            first.next = second.next;
            second.next = pre.next;
            pre.next = second;
            second = first.next;
        }

        return dummy.next;
    }
}
