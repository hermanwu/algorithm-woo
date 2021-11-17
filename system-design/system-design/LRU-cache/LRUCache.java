import java.util.HashMap;

/**
 * implement following method for an LRU cache;
 *
 * Company Amazon
 */
public class LRUCache {
    private HashMap<Integer, Node> map;
    private int cap;
    private int count;
    private Node head;
    private Node tail;

    public static void main(String[] args) {
        LRUCache lru = new LRUCache(5);

        lru.put(1, 1);
        lru.put(2, 2);
        lru.put(3, 3);
        lru.put(4, 4);
        lru.put(5, 5);
        lru.put(6, 6);

        // expect 1 to be deleted
        System.out.println(lru.get(1));

        lru.put(3, 33);

        System.out.println(lru.head.next.val);
    }

    public LRUCache(int capacity) {
        map = new HashMap<>();

        cap = capacity;
        count = 0;

        head = new Node(-1, -1);
        tail = new Node(-1, -1);

        head.next = tail;
        tail.prev = head;
    }

    public int get(int key) {
        if (map.containsKey(key)) {
            Node node = map.get(key);

            delete(node);
            addToHead(node);

            return node.val;
        }
        return -1;
    }

    public void put(int key, int value) {
        // if key exists, we update value, move to the front
        if (map.containsKey(key)) {
            Node node = map.get(key);

            node.val = value;

            delete(node);
            addToHead(node);
        }

        // if key does not exist, create a node, add to map, add to the front, update capcity
        else {
            Node node = new Node(key, value);
            map.put(key, node);
            addToHead(node);

            if(count == cap) {
                map.remove(tail.prev.key);
                delete(tail.prev);
                count--;
            }
            count++;
        }
    }

    public void delete(Node node) {
        //System.out.println(node.val);
        node.prev.next = node.next;
        node.next.prev = node.prev;
    }

    public void addToHead(Node node) {
        node.next = head.next;
        head.next = node;
        node.prev = head;
        node.next.prev = node;
    }

    private class Node {
        int key;
        int val;
        Node next;
        Node prev;

        public Node(int key, int value) {
            this.key = key;
            val = value;
            next = null;
            prev = null;
        }
    }
}
