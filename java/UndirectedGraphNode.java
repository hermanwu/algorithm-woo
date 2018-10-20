import java.util.ArrayList;
import java.util.HashMap;
import java.util.List;

public class UndirectedGraphNode {
    int value;
    List<UndirectedGraphNode> neighbors;
    HashMap<Integer, UndirectedGraphNode> map;

    public UndirectedGraphNode(int newValue) {
        this.value = newValue;
        neighbors = new ArrayList<UndirectedGraphNode>();
    }

    /*
     * Input: a UndirectedGraphNode
     *
     * Assumptions:
     * Data Structure
     * 1. this is an undirected graph
     * 2. all nodes have unique labels
     * 3. hashTable
     *
     *
     *  a -- B --- c
     *       |     |
     *       d --- e
     *
     *
     * Algorithm:
     *  Depth First Search
     */

    public UndirectedGraphNode cloneGraph(UndirectedGraphNode node) {
        map = new HashMap<>();

        return cloneNode(node);
    }

    public UndirectedGraphNode cloneNode(UndirectedGraphNode node) {
        if (node == null) {
            return null;
        }

        if (map.containsKey(node.value)) {
            return map.get(node.value);
        }

        UndirectedGraphNode newNode = new UndirectedGraphNode(node.value);

        map.put(node.value, newNode);

        for (UndirectedGraphNode neighbor : node.neighbors) {
            newNode.neighbors.add(cloneNode(neighbor));
        }

        return newNode;
    }
}
