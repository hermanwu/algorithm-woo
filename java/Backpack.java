/*
Given n items with size Ai, an integer m denotes the size of a backpack. How full you can fill this backpack?

 Notice

You can not divide any item into small pieces.

Have you met this question in a real interview? Yes
Example
If we have 4 items with size [2, 3, 5, 7], the backpack size is 11, we can select [2, 3, 5], so that the max size we can fill this backpack is 10. If the backpack size is 12. we can select [2, 3, 7] so that we can fulfill the backpack.

You function should return the max size we can fill in the given backpack.

 */

public class Backpack {
    /**
     * @param m: An integer m denotes the size of a backpack
     * @param A: Given n items with size A[i]
     * @return: The maximum size
     */
    public int backPack(int m, int[] A) {
        // write your code here
        boolean[][] dp = new boolean[A.length + 1][m + 1];

        for (int i = 0; i <= A.length; i++) {
            dp[i][0] = true;
        }

        for (int i = 1; i <= A.length; i++) {
            for (int j = 1; j <= m; j++) {
                dp[i][j] = dp[i - 1][j];

                if (j - A[i - 1] >= 0 && dp[i - 1][j - A[i - 1]]) {
                    dp[i][j] = true;
                }
            }
        }

        for (int j = m; j >= 0; j--) {
            if (dp[A.length][j]) {
                return j;
            }
        }
        return 0;
    }
}