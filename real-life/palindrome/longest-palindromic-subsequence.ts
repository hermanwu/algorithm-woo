// https://leetcode.com/problems/longest-palindromic-subsequence/

function longestPalindromeSubseq(s: string): number {
  const dp = new Array(s.length).fill(null);
  for (let i = 0; i < dp.length; i++) {
    dp[i] = new Array(s.length).fill(0);
  }

  for (let i = s.length - 1; i >= 0; i--) {
    dp[i][i] = 1;
    for (let j = i + 1; j < s.length; j++) {
      if (s.charAt(i) == s.charAt(j)) {
        dp[i][j] = dp[i + 1][j - 1] + 2;
      } else {
        dp[i][j] = Math.max(dp[i + 1][j], dp[i][j - 1]);
      }
    }
  }

  return dp[0][s.length - 1];
}
