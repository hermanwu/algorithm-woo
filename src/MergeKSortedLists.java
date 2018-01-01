import java.util.Comparator;
import java.util.PriorityQueue;

/**
 Merge k sorted linked lists and return it as one sorted list. Analyze and describe its complexity.
 */
public class MergeKSortedLists {
    public static void main(String[] args) {
        MergeKSortedLists m = new MergeKSortedLists();

        ListNode node1 = new ListNode(1);
        node1.next = new ListNode(3);
        node1.next.next = new ListNode(5);

        ListNode node2 = new ListNode(2);
        node2.next = new ListNode(4);
        node2.next.next = new ListNode(6);

        ListNode[] lists = new ListNode[] {
            node1,
            node2
        };

        ListNode result = m.mergeKLists(lists);

        Printer.printListNode(result);
    }


    public ListNode mergeKLists(ListNode[] lists) {

        int n = lists.length;

        // Priority Queue does not take size anymore;
        //PriorityQueue<ListNode> q = new PriorityQueue<>(Comparator.comparingInt(p -> p.val));
        PriorityQueue<ListNode> q = new PriorityQueue<>((a, b) -> a.val - b.val);
        /*
        PriorityQueue<ListNode> q = new PriorityQueue<>(new Comparator<ListNode>() {
            @Override
            public int compare(ListNode o1, ListNode o2) {
                return o1.val - o2.val;
            }
        });
        */

        for (ListNode node : lists) {
            if (node != null) {
                q.add(node);
            }
        }

        ListNode dummy = new ListNode(-1);
        ListNode cur = dummy;

        while (!q.isEmpty()) {
            ListNode head = q.poll();
            cur.next = head;
            cur = cur.next;

            if (head.next != null) {
                q.add(head.next);
            }
        }

        return dummy.next;
    }

}
