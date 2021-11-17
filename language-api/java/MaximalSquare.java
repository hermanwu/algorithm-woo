/**
 * Given a 2D binary matrix filled with 0's and 1's,
 * find the largest square containing only 1's and return its area.
 * <p>
 * For example, given the following matrix:
 * <p>
 * 1 0 1 0 0
 * 1 0 1 1 1
 * 1 1 1 1 1
 * 1 0 0 1 0
 * Return 4.
 */

public class MaximalSquare {
    public int maximalSquare(char[][] matrix) {
        if (matrix.length == 0) {
            return 0;
        }

        int m = matrix.length;
        int n = matrix[0].length;

        int[][] result = new int[m + 1][n + 1];
        int maxResult = 0;

        for (int i = 1; i <= m; i++) {
            for (int j = 1; j <= n; j++) {
                if (matrix[i - 1][j - 1] == '1') {
                    // result[i][j] represents square with
                    // right bottom corner is matrix[i - 1][j - 1];
                    result[i][j] = Math.min(
                            Math.min(result[i - 1][j], result[i][j - 1]),
                            result[i - 1][j - 1]
                        ) + 1;
                    maxResult = Math.max(maxResult, result[i][j]);
                }
            }
        }
        return maxResult * maxResult;
    }
}
