import com.sun.xml.internal.bind.v2.schemagen.xmlschema.Union;

public class UnionFind {
  private int[] fathers = null;

  public UnionFind (int[] fathers) {
    this.fathers = fathers;
  }

  public int find(int x) {
    if (fathers[x] == x) {
      return x;
    }

    return find(fathers[x]);
  }

  public int findWithCompression(int x) {
    if (fathers[x] == x) {
      return x;
    }

    fathers[x] = find(fathers[x]);
    return find(fathers[x]);
  }

  public void union(int x, int y) {
    int fatherX = find(x);
    int fatherY = find(y);

    if (fatherX != fatherY) {
      // Union nodes and their fathers.
      fathers[fatherX] = fatherY;
    }
  }

}
