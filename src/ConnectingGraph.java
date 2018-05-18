/**
 * Created by hermanwu on 5/4/18.
 */
public class ConnectingGraph {
    int[] arr;

    public ConnectingGraph(int n) {
        arr = new int[n + 1];

        for (int i = 0; i <= n; i++) {
            arr[i] = i;
        }
    }

    public boolean query(int a, int b) {
        int root_a = find(a);
        int root_b = find(b);

        return root_a == root_b;
    }

    public void connect(int a, int b) {
        int root_a = find(a);
        int root_b = find(b);

        if (root_a != root_b) {
            father[root_a] = root_b;
        }

    }

    private int find(int num) {
        if (arr[num] == num) {
            return num;
        }

        return find(arr[num]);
    }
}
