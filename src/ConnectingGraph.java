/**
 * Description
 * Given n nodes in a graph labeled from 1 to n. There is no edges in the graph at beginning.
 *
 * You need to support the following method:
 *
 * 1. connect(a, b), add an edge to connect node a and node b.
 * 2. query(a, b), check if two nodes are connected
 *
 *
 * Example
 * 5 // n = 5
 * query(1, 2) return false
 *
 * connect(1, 2)
 * query(1, 3) return false
 *
 * connect(2, 4)
 * query(1, 4) return true
 */

public class ConnectingGraph {

  int[] fathers;
  /*
  * @param n: An integer
  */public ConnectingGraph(int n) {
    fathers = new int[n + 1];

    for (int i = 0; i <= n; i++) {
      fathers[i] = i;
    }
  }

  /*
   * @param a: An integer
   * @param b: An integer
   * @return: nothing
   */
  public void connect(int a, int b) {
    // write your code here
    int fatherA = find(a);
    int fatherB = find(b);

    if (fatherA != fatherB) {
      fathers[fatherA] = fatherB;
    }
  }

  private int find(int x) {
    if (fathers[x] == x) {
      return x;
    }

    return find(fathers[x]);
  }

  /*
   * @param a: An integer
   * @param b: An integer
   * @return: A boolean
   */
  public boolean query(int a, int b) {
    // write your code here
    return find(fathers[a]) == find(fathers[b]);

  }
}