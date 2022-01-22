// https://leetcode.com/problems/valid-palindrome-iii/

function isValidPalindrome(s: string, k: number): boolean {
  const targetLength = s.length - k;

  // transform the question into if palindrome has target length of subsequence.

  const dp = new Array(s.length).fill(null);
  for (let i = 0; i < s.length; i++) {
    dp[i] = new Array(s.length).fill(0);
  }

  for (let i = s.length - 1; i >= 0; i--) {
    dp[i][i] = 1;

    if (s[i] === s[i + 1]) {
      dp[i][i + 1] = 2;
    }

    for (let j = i + 2; j < s.length; j++) {
      if (s.charAt(i) == s.charAt(j)) {
        dp[i][j] = dp[i + 1][j - 1] + 2;
      } else {
        dp[i][j] = Math.max(dp[i + 1][j], dp[i][j - 1]);
      }
    }

    return dp[0][s.length - 1] >= targetLength ? true : false;
  }
}
