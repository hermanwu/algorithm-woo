/**
 * Created by hermanwu on 12/31/17.
 */
public class LongestPalindromicSubsequence {
    public static void main(String[] args) {
        LongestPalindromicSubsequence l = new LongestPalindromicSubsequence();
    }

    public int longestPalindromeSubseq(String s) {
        char[] arr = s.toCharArray();
        int n = arr.length, i, j;
        int[][] dp = new int[n][n];

        for (i = n - 1; i >= 0; i--) {
            dp[i][i] = 1;

            for (j = i + 1; j < n; j++) {
                if (arr[i] == arr[j]) {
                    dp[i][j] = dp[i + 1][j - 1] + 2;
                } else {
                    dp[i][j] = Math.max(dp[i + 1][j], dp[i][j - 1]);
                }
            }
        }
        return dp[0][n - 1];
    }
}
