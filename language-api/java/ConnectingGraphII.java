/**

 Description
 Given n nodes in a graph labeled from 1 to n. There is no edges in the graph at beginning.

 You need to support the following method:

 connect(a, b), an edge to connect node a and node b
 query(a), Returns the number of connected component nodes which include node a.

 */
public class ConnectingGraphII {
  private int[] father;
  private int[] size;

  public ConnectingGraph2(int n) {
    father = new int[n + 1];
    size = new int[n + 1];

    for (int i = 1; i <= n; i++) {
      father[i] = i;
      size[i] = 1;
    }
  }

  public void connect(int a, int b) {
    // Write your code here
    int root_a = find(a);
    int root_b = find(b);
    if(root_a != root_b) {
      father[root_a] = root_b;
      size[root_b] += size[root_a];
    }
  }

  public int query(int a) {
    int root_a = find(a);
    return size[root_a];
  }

  private int find(int i) {
    if (father[i] == i) {
      return i;
    }
    father[i] = find(father[i]);
    return father[i];
  }
}