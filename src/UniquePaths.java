/**
 * Created by hermanwu on 11/11/17.
 */
public class UniquePaths {
    public int uniquePath(int m, int n) {
        int[][] f = new int[m][n];
        int i, j;


        for (i = 0; i < m; i++) {
            for (j = 0; j < n; j++) {
                if (i == 0 || j == 0) {
                    f[i][j] = 1;
                }
                continue;
            }

            f[i][j] = f[i - 1][j] + f[i][j - 1];
        }
        return f[m - 1][n - 1];
    }
}
