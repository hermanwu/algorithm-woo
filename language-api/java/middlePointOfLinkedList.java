/**
 * Created by hermanwu on 3/25/18.
 */

public class middlePointOfLinkedList {

    // i.e. a - b - c - d    return b
    // i.e. a - b - c    return b
    public ListNode findMiddlePointOfLinkedListTowardLeft(ListNode root) {
        ListNode slow = root;
        ListNode fast = root.next;

        while (fast != null && fast.next != null) {
            slow = slow.next;
            fast = fast.next.next;
        }

        return slow;
    }

    // i.e. a - b - c - d    return c
    // i.e. a - b - c    return b
    public ListNode findMiddlePointOfLinkedListTowardRight(ListNode root) {
        ListNode slow = root;
        ListNode fast = root;

        while (fast != null && fast.next != null) {
            slow = slow.next;
            fast = fast.next.next;
        }

        return slow;
    }
}
