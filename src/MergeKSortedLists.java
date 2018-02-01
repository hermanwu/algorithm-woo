import java.util.Comparator;
import java.util.PriorityQueue;

/**
 Merge k sorted linked lists and return it as one sorted list. Analyze and describe its complexity.
 */
public class MergeKSortedLists {
    public static void main(String[] args) {
        MergeKSortedLists m = new MergeKSortedLists();

        ListNode node1 = new ListNode(2);

        ListNode node2 = null;

        ListNode node3 = new ListNode(-1);

        ListNode[] lists = new ListNode[]{
                node1,
                node2,
                node3
        };

        ListNode result = m.mergeKLists(lists);

        Printer.printListNode(result);
    }

    public ListNode mergeKLists(ListNode[] lists) {
        ListNode dummy = new ListNode(-1);
        ListNode tail = dummy;
        
        PriorityQueue<ListNode> queue = new PriorityQueue<>((a, b) -> a.val - b.val);

        for (ListNode l : lists) {
            if (l != null) {
                queue.offer(l);
            }
        }

        while (!queue.isEmpty()) {
            // poll the node with minimum value.
            ListNode temp = queue.poll();
            // add to result list.
            tail.next = temp;
            tail = tail.next;

            // add temp's next node back to queue.
            if (temp.next != null) {
                queue.offer(temp.next);
            }
        }

        return dummy.next;
    }

    public ListNode mergeKListsUsingMergeSort(ListNode[] lists) {
        if (lists == null || lists.length == 0) {
            return null;
        }

        int n = lists.length;

        return helper(lists, 0, n - 1);
    }

    private ListNode mergeTwoNodeLists(ListNode a, ListNode b) {
        ListNode dummy = new ListNode(-1);
        ListNode cur = dummy;

        while (a != null && b != null) {
            if (a.val < b.val) {
                cur.next = a;
                a = a.next;
            } else {
                cur.next = b;
                b = b.next;
            }
            cur = cur.next;
        }
        cur.next = a == null ? b : a;

        return dummy.next;
    }

    private ListNode helper(ListNode[] list, int start, int end) {
        if (start > end) {
            return null;
        }

        if (start == end) {
            return list[start];
        }

        int mid = (start + end) / 2;

        return mergeTwoNodeLists(helper(list, start, mid), helper(list, mid + 1, end));
    }
}
