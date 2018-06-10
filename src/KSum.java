/*

Question: given an list contains n non-equal positive integers. Find k number, which sum is target


Example:

Given [1,2,3,4], k = 2, target = 5.

There are 2 solutions: [1,4] and [2,3].

Return 2.

 */


public class KSum {
  public int kSum(int A[], int k, int target) {
    int n = A.length;

    int[][][] f = new int[n + 1][k + 1][target + 1];

    for (int i = 0; i < n + 1; i++) {
      f[i][0][0] = 1;
    }

    // first n number in A
    for (int i = 1; i <= n; i++) {
      // first k number
      for (int j = 1; j <= k && j <= i; j++) {
        // sum is t
        for (int t = 1; t <= target; i++) {
          f[i][j][t] += f[i - 1][j][t];

          if (A[i - 1] <= t) {
            f[i][j][t] += f[i - 1][j - 1][t - A[i - 1]];
          }
        }
      }

    }

    return f[n][k][target];
  }
}
