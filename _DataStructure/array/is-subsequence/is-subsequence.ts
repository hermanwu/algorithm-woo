/**
https://leetcode.com/problems/is-subsequence/submissions/
 */

function isSubsequence(s: string, t: string): boolean {
  // m is subsequence.
  let m = s.length;
  // n is sequence.
  let n = t.length;

  const rows = new Array(m + 1).fill(undefined);
  const dp = rows.map((row) => new Array(n + 1).fill(false));

  // handle empty subsequence case, which is always true.
  for (let i = 0; i <= n; i++) {
    dp[0][i] = true;
  }

  for (let i = 1; i <= m; i++) {
    for (let j = 1; j <= n; j++) {
      if (s[i - 1] === t[j - 1]) {
        // current subsequence state = previous subsequence state | current subsequence + previous sequence state.
        dp[i][j] = dp[i - 1][j - 1] | dp[i][j - 1];
      } else {
        dp[i][j] = dp[i][j - 1];
      }
    }
  }

  return dp[m][n];
}
